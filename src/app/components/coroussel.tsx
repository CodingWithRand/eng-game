import Image from "next/image";
import { useState, useEffect, CSSProperties } from "react";

function CorousselImgs(props: { totalImgs: number, imgsSrc: string, imgsStyle: CSSProperties }) {
    let imgs: JSX.Element[] = [];
    for (let i = 0; i < props.totalImgs; i++) imgs.push(<img src={props.imgsSrc + `/wallpaper-${i + 1}.jpg`} style={props.imgsStyle}></img>);
    return imgs;
}

function CorousselPage(props: { maxPages: number, btnFunc: (p: number) => void, tabsOpacity: number[] }) {
    let tabs: JSX.Element[] = [];
    for (let i = 0; i < props.maxPages; i++) tabs.push(<div className='tab' id={`p-${i + 1}`} onClick={() => props.btnFunc(i + 1)} style={{ opacity: props.tabsOpacity[i] }}></div>);
    return tabs;
};

function CorousselElements({ total, bgImgsSrc, autoScroll, elems, wrappersStyle }: { total: number, bgImgsSrc: string, autoScroll: CSSProperties, elems: JSX.Element[], wrappersStyle: CSSProperties[] }) {
    let imgs = [];
    for (let i = 0; i < total; i++) imgs.push(
        <div className="c-elem w-screen h-screen" style={{ ...autoScroll, ...wrappersStyle[i], backgroundImage: `url(${bgImgsSrc + `/wallpaper-${i + 1}.jpg`})`, backgroundPositionX: "center", backgroundPositionY: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            {elems[i]}
        </div>
    );
    return imgs;
}

export default function Coroussel({ totalPages, corousselElements, corousselWrappersStyle }: { totalPages: number, corousselElements: JSX.Element[], corousselWrappersStyle: CSSProperties[] }) {
    
    const maxPages: number = 3;
    const [inUsed, setInUsed] = useState({
        rightArrow: false,
        leftArrow: false
    });
    const [page, setPage] = useState(1);
    const [tabsOpaque, setTabsOpaque] = useState((() => {
        let initial_opacity: number[] = [];
        for (let i = 0; i < maxPages; i++) initial_opacity.push(0.5);
        return initial_opacity;
    })());
    const rs = () => setPage((prevState) => prevState + 1);
    const ls = () => setPage((prevState) => prevState - 1);

    useEffect(() => {
        const autoScroll = setInterval(() => {
            if (!(page === maxPages)) rs();
            else for (let currentPage = page; currentPage > 1; currentPage--) ls();
        }, 5000);
        return () => clearInterval(autoScroll);
    }, [page])

    useEffect(() => {
        if (page <= 1) {
            setInUsed({
                rightArrow: false,
                leftArrow: true
            });
        } else if (page === maxPages) {
            setInUsed({
                rightArrow: true,
                leftArrow: false
            });
        } else {
            setInUsed({
                rightArrow: false,
                leftArrow: false
            });
        };
    }, [page]);

    useEffect(() => {
        setTabsOpaque(tabsOpaque.map((value: number, index: number, array: number[]) => {
            if (index === page - 1) return 1;
            else return 0.5;
        }))
    }, [page]);

    return (
        <div className='coroussel'>
            <div className='_elems'>
                <CorousselElements 
                    total={totalPages}
                    bgImgsSrc='/imgs/coroussel'
                    autoScroll={{ transform: `translateX(${(page - 1) * -100}%)` }} 
                    elems={corousselElements}
                    wrappersStyle={corousselWrappersStyle}
                />
            </div>
            <div className='ctrl-btn'>
                <div className='arrows'>
                    <button id='lft' onClick={ls} disabled={inUsed.leftArrow} style={{ opacity: inUsed.leftArrow ? 0.5 : 1 }}>
                        <Image src="/imgs/icons/left-arrow.png" alt='Left next arrow' height='50' width='50'></Image>
                    </button>
                    <button id='rght' onClick={rs} disabled={inUsed.rightArrow} style={{ opacity: inUsed.rightArrow ? 0.5 : 1 }}>
                        <Image src="/imgs/icons/right-arrow.png" alt='Right next arrow' height='50' width='50'></Image>
                    </button>
                </div>
                <div className='page-selector'>
                    <CorousselPage maxPages={maxPages} btnFunc={setPage} tabsOpacity={tabsOpaque} />
                </div>
            </div>
            {/* <div className='imgs'>
                <CorousselImgs totalImgs={3} imgsSrc='/imgs/coroussel' imgsStyle={{ transform: `translateX(${(page - 1) * -100}%)` }} />
            </div> */}
        </div>
    );
}