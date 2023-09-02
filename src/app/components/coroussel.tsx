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

export default function Coroussel() {
    
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
            <div className='ctrl-btn'>
                <div className='arrows'>
                    <button id='lft' onClick={ls} disabled={inUsed.leftArrow}>
                        <Image src="/imgs/icons/left-arrow.png" alt='Left next arrow' height='50' width='50'></Image>
                    </button>
                    <button id='rght' onClick={rs} disabled={inUsed.rightArrow}>
                        <Image src="/imgs/icons/right-arrow.png" alt='Right next arrow' height='50' width='50'></Image>
                    </button>
                </div>
                <div className='page-selector'>
                    <CorousselPage maxPages={maxPages} btnFunc={setPage} tabsOpacity={tabsOpaque} />
                </div>
            </div>
            <div className='imgs'>
                <CorousselImgs totalImgs={3} imgsSrc='/imgs/coroussel' imgsStyle={{ transform: `translateX(${(page - 1) * -100}%)` }} />
            </div>
        </div>
    );
}