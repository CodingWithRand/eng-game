import '@/css/lesson-structure/explanation.css'

function ExplanationParagraphs({ explanations }: { explanations: string [] }){
  let holderJSX: JSX.Element[] = []
explanations.forEach((t) => holderJSX.push(<p>{t}</p>))
  return <>{holderJSX}</>
}

function ExamplesTable({ init, examples, note }: { init: string, examples: string[][], note: string[] | undefined }){
  let tableRows: JSX.Element[] = []
  examples.forEach((example) => {
    if(example.length !== 3) return
    else{
      tableRows.push(
        <div className="row">
          <p>{example[0]}</p>
          <p>{example[1]}</p>
          <p>{example[2]}</p>
        </div>
      )
    }
  })
  return(
    <>
      <strong>{init}</strong>
      <hr></hr>
      <div className="tableLike">
        {tableRows}
      </div>
    </>
  )
}

export function Explanations({ explanations }: { explanations: string[] }){
  return(
    <div className="exp">
      <ExplanationParagraphs explanations={explanations} />
    </div>
  )
}

export function ExplanationWithExamples({ explanations, examples, initExampleWord, note }: { 
  explanations: string[], 
  initExampleWord: string,
  examples: string[][], 
  note: string[] | undefined 
}){
  let content: JSX.Element[] = []
  return(
    <div>
      <ExplanationParagraphs explanations={explanations} />
      <ExamplesTable init={initExampleWord} examples={examples} note={note} />
    </div>
  )
}