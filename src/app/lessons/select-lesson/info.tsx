import { useRegistry } from "@/components/client-caches";
import { renderToStaticMarkup } from 'react-dom/server'

const PremilinaryTopic = (
    <div className="lesson" id="premilinary">
        <h3 className="opening">In this Premilinary topic, You{"\'"}ll learn...</h3>
        <hr></hr>
        <ul className="units">
            <li className="unit">
                <p><span>•</span> Meaning of Suffix & Prefix</p>
            </li>
        </ul>
    </div>
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
    const info = renderToStaticMarkup(
        <html>
            <head>
                <script async src="https://cdn.tailwindcss.com"></script>
            </head>
            <style>
                {`
                    .lesson{
                        margin: 1rem 0;
                    }
                    .opening{
                        font-size: 1.5rem;
                        margin: 0.5rem 0;
                    }
                    .units{
                        margin: 0.5rem 0;
                    }
                    .unit{
                        
                    }
                    .unit p span{
                        margin: 0 1rem
                    }
                `}
            </style>
            <body>
                <LessonsPreview selectedLesson={userState.lessons}/>
            </body>
        </html>
    )

    return(
        <iframe srcDoc={info} title="Lessons Info" className="lessons-preview" style={{
            overflow: 'auto', width: '100%', height: '100%',
            scrollbarWidth: 'thin'
        }}>
            {info}
        </iframe>
    )
}