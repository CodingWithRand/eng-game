import { useRegistry } from "@/components/client-caches";
import { useEffect } from "react";

const PremilinaryTopic = (
    <>
    <div className="lesson-info" id="premilinary">
        <h3 className="opening">ในหัวข้อ Preliminary นี้ คุณจะได้เรียนรู้สิ่งเหล่านี้</h3>
        <hr></hr>
        <ul className="units">
            <li className="unit">
                <p><span>•</span> ความหมายของ Suffix และ Prefix</p>
                <p><span>•</span> ประเภทของ Suffix</p>
                <p><span>•</span> ความหมาย และการใช้งาน Suffix แต่ละตัวในแต่ละประเภท</p>
                <p><span>•</span> แยกความเหมือนและแตกต่างของ Suffix ที่มีความหมายใกล้เคียงกันได้</p>
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
        
        // Note: Retrieving lessons array data from the user cookie, and then checking each lesson name to output lesson info.
        //       There can be more than one lesson info showing on the screen. 
        /* Addition example statement

        else if(lesson === "Vocabularies"){}
        else if(lesson === "Grammar"){}

        Will convert it to the switch case as soon as there are more lessons.
        */
    })
    return lessonPreview
}

export default function LessonsInfo() {
    const [ { userState }, {}, {}, { setStageXp }, { setProgressedLevel } ] = useRegistry()
    useEffect(() => {
        let progressedLevel: { [stage: string]: number } = {}
        let stageXp: { [stage: string]: number } = {}
        userState.lessons?.forEach((lesson) => {
            progressedLevel[lesson] = 1
            stageXp[lesson] = 0
        })
        setProgressedLevel(progressedLevel)
        setStageXp(stageXp)
    }, [])
    return(
        <LessonsPreview selectedLesson={userState.lessons}/>
    )
}