import { useRegistry } from "@/components/client-caches";

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
    })
    return lessonPreview
}

export default function LessonsInfo() {
    const [ { userState } ] = useRegistry()
    return(
        <LessonsPreview selectedLesson={userState.lessons}/>
    )
}