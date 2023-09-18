import { Explanations, ExplanationWithExamples } from '@/components/templates/lesson-structure/explanations';
import Choices from '@/components/templates/lesson-structure/choices';
import LessonEnd from '@/components/templates/lesson-structure/ending';

const lessonStructure = {
    Introduction: [
      <ExplanationWithExamples
        key="expn-exp1"
        explanations={["Prefix กลุ่มของตัวอักษรที่เพิ่มไว้หน้าคำเพื่อเปลี่ยนความหมายหรือสร้างคำใหม่"]}
        initExampleWord='ยกตัวอย่าง เช่น'
        examples={[
          ["un-", "ใน", "undo"],
          ["re-", "ใน", "rewrite"]
        ]}
        note={undefined}
      />,
      <ExplanationWithExamples
        key="expn-exp2"
        explanations={["กลุ่มของตัวอักษรที่เพิ่มต่อท้ายคำเพื่อแก้ไขความหมายหรือสร้างคำใหม่ซึ่งเปลี่ยน Part of speech ของคำด้วย"]}
        initExampleWord='ยกตัวอย่าง เช่น'
        examples={[
          ["-ing", "ใน", "running"],
          ["-ed", "ใน", "jumped"]
        ]}
        note={undefined}
      />,
      <Choices
        key="c-1"
        question='"Prefix" คืออะไร'
        choices={["กลุ่มของคำที่ต่อด้านหน้าคำศัพท์ แล้วทำให้ความหมายของคำเปลี่ยนไป", "คำอุปสรรค เช่น milli-, centi- ใช้เพื่อลดจำนวนเลขศูนย์ที่แสดงในจำนวนที่เป็นตัวเลข"]}
        answers={["กลุ่มของคำที่ต่อด้านหน้าคำศัพท์ แล้วทำให้ความหมายของคำเปลี่ยนไป"]}
        mode="radio"
        xpGain={5}
      />,
      <Choices
        key="c-2"
        question='"Suffix" คืออะไร'
        choices={["กลุ่มคำที่มาต่อท้ายคำศัพท์", "กลุ่มคำที่สามารถเปลี่ยน part of speech ของคำนั้นได้", "ทั้งหมดที่กล่าวมา"]}
        answers={["ทั้งหมดที่กล่าวมา"]}
        mode="radio"
        xpGain={5}
      />,
      <LessonEnd 
        key="end"
        descriptiveText='นี่เป็นเพียงจุดเริ่มต้นการเดินทางที่น่าจดจำ (จริงเหรอ?) ในหัวข้อนี้ ชู่... พอละ ฉันจะไม่สปอยเพิ่มอีก:)'
      />
    ],
    NounSuffix: [
      <Explanations 
        key='exp1'
        explanations={["หลังจากที่เรารู้ว่า Prefix และ Suffix คร่าวๆแล้วว่าคืออะไร ก็ถึงเวลาที่เราจะเจาะลึกเข้าไปในแต่ละหัวข้อว่า มีอะไรในหัวข้อเหล่านั้นบ้าง", "ขอบอกก่อนนะว่า เราจะพูดถึงเพียงแค่ Suffix เท่านั้นในบทเรียน Preliminary นี้"]}
      />,
      <Explanations 
        key='exp2'
        explanations={["Suffixมีทั้งหมด 7 ประเภท ได้แก่ Noun -> Noun Suffix, Verb -> Noun Suffix, Adjective -> Noun Suffix, Verb -> Adjective Suffix, Noun -> Adjective Suffix, Adjective -> Adverb Suffix และ Noun/Adjective -> Adverb Suffix", 'ในหัวข้อนี้ เราจะพูดถึง Noun -> Noun Suffix กัน']}
      />,
      <Choices
        key='c-1'
        question='เลือกทุกอย่างที่เป็นประเภทของ Suffix'
        choices={["Front suffixes", "Adjoint suffixes", "Noun -> Noun Suffix", "Verb -> Adjective Suffix", "Adjective -> Adverb Suffix"]}
        answers={["Noun -> Noun Suffix", "Verb -> Adjective Suffix", "Adjective -> Adverb Suffix"]}
        mode='check-box'
        xpGain={15}
      />,
      <LessonEnd 
        key="end"
        descriptiveText={'ยากใช่ไหมละ ไม่ต้องห่วง ด่านต่อไปจะยากกว่านี้อีก 55'}
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