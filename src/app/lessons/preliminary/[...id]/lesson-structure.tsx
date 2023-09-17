import { Explanations, ExplanationWithExamples } from '@/components/templates/lesson-structure/explanations';
import Choices from '@/components/templates/lesson-structure/choices';
import LessonEnd from '@/components/templates/lesson-structure/ending';

const lessonStructure = {
    Introduction: [
      <ExplanationWithExamples
        key="expn-exp1"
        explanations={["Prefix is a group of letters added to the beginning of a word to change its meaning or create a new word."]}
        initExampleWord='For example'
        examples={[
          ["un-", "in", "undo"],
          ["re-", "in", "rewrite"]
        ]}
        note={undefined}
      />,
      <ExplanationWithExamples
        key="expn-exp2"
        explanations={["Suffix is a group of letters added to the end of a word to modify its meaning or create a new word, which also changes its part of speech", "Suffix is a group of letters added to the end of a word to modify its meaning or create a new word, which also changes its part of speech", "Suffix is a group of letters added to the end of a word to modify its meaning or create a new word, which also changes its part of speech", "Suffix is a group of letters added to the end of a word to modify its meaning or create a new word, which also changes its part of speech", "Suffix is a group of letters added to the end of a word to modify its meaning or create a new word, which also changes its part of speech"]}
        initExampleWord='For instance'
        examples={[
          ["-ing", "in", "running"],
          ["-ed", "in", "jumped"]
        ]}
        note={undefined}
      />,
      <Choices
        key="c-1"
        question='What is the meaning of "Prefix"?'
        choices={["Something", "IDK"]}
        answers={["Something"]}
        mode="radio"
        xpGain={5}
      />,
      <Choices
        key="c-2"
        question='What is the meaning of "Suffix"?'
        choices={["A group of word that come at the end", "A group of word that could change word's part of speech", "All of the above"]}
        answers={["All of the above"]}
        mode="radio"
        xpGain={5}
      />,
      <LessonEnd 
        key="end"
        descriptiveText='This is only a beginning to this memorable (Really?) journey on this topic. Shh... not gonna spoil more :)'
      />
    ],
    NounSuffix: [
      <Explanations 
        key='exp1'
        explanations={["Alright. After we know what are prefix and suffix, it's time to go deeper in each topic.", "Please note that, we'll only focus on the suffixes in this lesson"]}
      />,
      <Explanations 
        key='exp2'
        explanations={["There are total 7 types of suffixes, Noun Suffix, Verb Suffix, ...", 'In this topic, we\'ll talk about Noun Suffix']}
      />,
      <LessonEnd 
        key="end"
        descriptiveText={'Quite tough right? Don\'t worry, the next topic will be even more tougher'}
      />
    ],
    VerbSuffix: [
      <Explanations
        key='exp1'
        explanations={["Guys, it's time for the Verb Suffixes! Even though you're not so ready, you're gonna do it right?", "Anyway, I hope you'll enjoy with my class"]}
      />,
      <ExplanationWithExamples
        key='exp-expn1'
        explanations={["In the Verb Suffix, we can classify it into these groups"]}
        initExampleWord="Which are..."
        examples={[
          ["Suffixes that indicate relevant of people being", "such as", "-er, -ee"],
          ["Suffixes that indicate of action of a person or something being acted", "such as", "-ant, -ent"],
          ["Suffixes that change word's part of speech", "such as", "-ation, -ition, -ion"],
          ["Suffixes that indicate charecteristic or appearance of things", "such as", "-al"],
          ["Suffixes that indicate action, status or process of things", "such as", "-age"]
        ]}
        note={undefined}
      />,
      <Explanations 
        key='exp4'
        explanations={["**Due to the disadvantage of our project, we may not be able to provide all English contents in the webpage**", 
        'เราสามารถใช้ suffix "-er", "-ee", และ "-or" ในภาษาอังกฤษเพื่อสร้างคำใหม่จากคำต้นฉบับ และคำใหม่ที่สร้างขึ้นมักจะมีความหมายที่แตกต่างจากคำต้นฉบับ'
      ]}
      />,
      <LessonEnd 
        key="end"
        descriptiveText={'Quite tough right? Don\'t worry, the next topic will be even more tougher'}
      />
    ]
}

export default lessonStructure