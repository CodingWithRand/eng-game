import '@/css/lesson-structure/explanations.css'

function ExplanationParagraphs({ explanations }: { explanations: string [] }){
  let holderJSX: JSX.Element[] = []
explanations.forEach((t) => holderJSX.push(<p className='exp-p'>{t}</p>))
  return <>{holderJSX}</>
}

function ExamplesTable({ init, examples }: { init: string, examples: string[][] }){
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
    <div className="exp real-lesson-content">
      <ExplanationParagraphs explanations={explanations} />
    </div>
  )
}

export function ExplanationWithExamples({ explanations, examples, initExampleWord, notes }: { 
  explanations: string[], 
  initExampleWord: string,
  examples: string[][], 
  notes?: string[]
}){

  let totalNote: JSX.Element[] = []

  notes?.forEach((note, ni) => {
    totalNote.push(<p className='note'>{`${(() => {
      let tempAsterisk: string[] = []
      for(let i = 0; i<notes.length; i++) tempAsterisk.push("*")
      return tempAsterisk.join(" ")
    })()} ${note}`}</p>)
  })

  return(
    <div className='real-lesson-content'>
      <ExplanationParagraphs explanations={explanations} />
      <ExamplesTable init={initExampleWord} examples={examples} />
      <div>
        {totalNote}
      </div>
    </div>
  )
}

export function Introduction({ intros, topics }: { intros: string[], topics: string[] }){
  let allIntros: JSX.Element[] = []
  let allTopics: JSX.Element[] = []
  intros.forEach(intr => allIntros.push(<p>{intr}</p>))
  topics.forEach(topc => allTopics.push(<li><p>{topc}</p></li>))
  return(
    <div className='real-lesson-content'>
      {allIntros}
      <strong>Here&apos;s what you will learn from this stage</strong>
      <hr></hr>
      <ul>
        {allTopics}
      </ul>
    </div>
  )
}