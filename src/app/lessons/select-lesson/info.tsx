import { useRegistry } from "@/components/client-caches";
import { generateStateArray } from "@/components/utils";
import { useEffect, useState } from 'react'

const PremilinaryTopic = (
    <>
    <div className="lesson-info" id="premilinary">
        <h3 className="opening">In this Premilinary topic, You&apos;ll learn...</h3>
        <hr></hr>
        <ul className="units">
            <li className="unit">
                <p><span>•</span> Meaning of Suffix & Prefix</p>
            </li>
        </ul>
    </div>
    <div className="lesson-info" id="premilinary">
        <h3 className="opening">In this Premilinary topic, You&apos;ll learn...</h3>
        <hr></hr>
        <ul className="units">
            <li className="unit">
                <p><span>•</span> Meaning of Suffix & Prefix</p>
            </li>
        </ul>
    </div>
    <div className="lesson-info" id="premilinary">
        <h3 className="opening">In this Premilinary topic, You&apos;ll learn...</h3>
        <hr></hr>
        <ul className="units">
            <li className="unit">
                <p><span>•</span> Meaning of Suffix & Prefix</p>
            </li>
        </ul>
    </div>
    <div className="lesson-info" id="premilinary">
        <h3 className="opening">In this Premilinary topic, You&apos;ll learn...</h3>
        <hr></hr>
        <ul className="units">
            <li className="unit">
                <p><span>•</span> Meaning of Suffix & Prefix</p>
            </li>
        </ul>
    </div>
    <div className="lesson-info" id="premilinary">
        <h3 className="opening">In this Premilinary topic, You&apos;ll learn...</h3>
        <hr></hr>
        <ul className="units">
            <li className="unit">
                <p><span>•</span> Meaning of Suffix & Prefix</p>
            </li>
        </ul>
    </div>
    <div className="lesson-info" id="premilinary">
        <h3 className="opening">In this Premilinary topic, You&apos;ll learn...</h3>
        <hr></hr>
        <ul className="units">
            <li className="unit">
                <p><span>•</span> Meaning of Suffix & Prefix</p>
            </li>
        </ul>
    </div>
    <div className="lesson-info" id="premilinary">
        <h3 className="opening">In this Premilinary topic, You&apos;ll learn...</h3>
        <hr></hr>
        <ul className="units">
            <li className="unit">
                <p><span>•</span> Meaning of Suffix & Prefix</p>
            </li>
        </ul>
    </div>
    <div className="lesson-info" id="premilinary">
        <h3 className="opening">In this Premilinary topic, You&apos;ll learn...</h3>
        <hr></hr>
        <ul className="units">
            <li className="unit">
                <p><span>•</span> Meaning of Suffix & Prefix</p>
            </li>
        </ul>
    </div>
    <div className="lesson-info" id="premilinary">
        <h3 className="opening">In this Premilinary topic, You&apos;ll learn...</h3>
        <hr></hr>
        <ul className="units">
            <li className="unit">
                <p><span>•</span> Meaning of Suffix & Prefix</p>
            </li>
        </ul>
    </div>
    <div className="lesson-info" id="premilinary">
        <h3 className="opening">In this Premilinary topic, You&apos;ll learn...</h3>
        <hr></hr>
        <ul className="units">
            <li className="unit">
                <p><span>•</span> Meaning of Suffix & Prefix</p>
            </li>
        </ul>
    </div>
    <div className="lesson-info" id="premilinary">
        <h3 className="opening">In this Premilinary topic, You&apos;ll learn...</h3>
        <hr></hr>
        <ul className="units">
            <li className="unit">
                <p><span>•</span> Meaning of Suffix & Prefix</p>
            </li>
        </ul>
    </div>
    </>
)

function LessonsPreview({ selectedLesson }: { selectedLesson: string[] | null }){
    if(selectedLesson === null) return 
    let lessonPreview: JSX.Element[] = [];
    selectedLesson.forEach((lesson) => {
        if(lesson === "Preliminary"){
            lessonPreview.push(PremilinaryTopic)
        }
    })
    // useEffect(() => {
    //     setlP((prevElem) => {
    //         return prevElem.map((elem, i) => {
    //             console.log(selectedLesson.findIndex(lesson => lesson === "Preliminary") === i)
    //             if(selectedLesson.findIndex(lesson => lesson === "Premilinary") === i){
    //                 console.log('s'); return PremilinaryTopic}
    //             else return elem
    //         })
    //     })
    // }, [])

    
    console.log(lessonPreview)
    return lessonPreview
}

export default function LessonsInfo() {
    const [ { userState } ] = useRegistry()
    console.log('as')
    return(
        <LessonsPreview selectedLesson={userState.lessons}/>
    )
}