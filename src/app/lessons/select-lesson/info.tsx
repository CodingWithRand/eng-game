import { useRegistry } from "@/components/client-caches";
import { renderToStaticMarkup } from 'react-dom/server'

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
    const lesson_preview: JSX.Element[] = []
    if(selectedLesson === null) return 
    selectedLesson.forEach((lesson) => {
        if(lesson === "Premilinary"){
            lesson_preview.push(PremilinaryTopic)
        }
    })
    return lesson_preview
}

export default function LessonsInfo() {
    const [ { userState } ] = useRegistry()

    return(
        <LessonsPreview selectedLesson={userState.lessons}/>
    )
}