import '@/css/lesson-structure/explanations.css'

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
  return(
    <div>
      <ExplanationParagraphs explanations={explanations} />
      <ExamplesTable init={initExampleWord} examples={examples} note={note} />
    </div>
  )
}

export function Introduction({ intros, topics }: { intros: string[], topics: string[] }){
  let allIntros: JSX.Element[] = []
  let allTopics: JSX.Element[] = []
  intros.forEach(intr => allIntros.push(<p>{intr}</p>))
  topics.forEach(topc => allTopics.push(<li><p>{topc}</p></li>))
  return(
    <div>
      {allIntros}
      <strong>Here&apos;s what you will learn from this stage</strong>
      <hr></hr>
      <ul>
        {allTopics}
      </ul>
    </div>
  )
}