function ExplanationParagraphs({ explanations }: { explanations: string [] }){
  let holderJSX: JSX.Element[] = []
explanation.forEach((t) => holderJSX.push(<p>{t}</p>))
  return <>{holderJSX}</>
}

function ExamplesTable({ examples }: { examples: string[][] }){
  let tableRows: JSX.Element[] = []
  examples.forEach((example) => {
    if(example.length !== 2) return
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
    <div className="tableLike">
      {tableRows}
    </div>
  )
}

export function Explanations({ explanations }: { explanations: string[] }){
  return(
    <div className="exp">
      <ExplanationParagraphs explanations={explanations} />
    </div>
  )
}

export function ExplanationWithExamples({ explanations, examples, note }: { explanations: string[], examples: string[][], note: string[] | undefined }){
  let content: JSX.Element[] = []
  return(
    <div>
      <ExplanationParagraphs explanations={explanations} />
      <ExamplesTable examples={examples} />
    </div>
  )
}