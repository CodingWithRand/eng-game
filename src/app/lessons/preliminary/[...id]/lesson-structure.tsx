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
    IntroductionToSuffix: [
      <Explanations 
        key='exp1'
        explanations={["หลังจากที่เรารู้ว่า Prefix และ Suffix คร่าวๆแล้วว่าคืออะไร ก็ถึงเวลาที่เราจะเจาะลึกเข้าไปในแต่ละหัวข้อว่า มีอะไรในหัวข้อเหล่านั้นบ้าง", "ขอบอกก่อนนะว่า เราจะพูดถึงเพียงแค่ Suffix เท่านั้นในบทเรียน Preliminary นี้"]}
      />,
      <Explanations 
        key='exp2'
        explanations={["Suffix มีทั้งหมด 7 ประเภท ได้แก่ Noun -> Noun Suffix, Verb -> Noun Suffix, Adjective -> Noun Suffix, Verb -> Adjective Suffix, Noun -> Adjective Suffix, Adjective -> Adverb Suffix และ Noun/Adjective -> Adverb Suffix", 'ในหัวข้อนี้ เราจะพูดถึง Noun -> Noun Suffix กัน']}
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
        descriptiveText={'คราวนี้คุณก็รู้จักประเภทของ Suffix แล้ว ต่อไปเราจะเริ่มเรียนเรื่อง Noun -> Noun Suffix กัน'}
      />
    ],
    VerbNounSuffix: [
      <Explanations
        key='exp1'
        explanations={["โอเค ทุกคน!! ตอนนี้เราจะไปเรียนเรื่อง Verb -> Noun Suffix แล้วนะ พร้อมกันยังงง", "พร้อมไม่พร้อมไม่รู้ละ ไปเลยละกัน"]}
      />,
      <ExplanationWithExamples
        key='expn-exp1'
        explanations={["Verb -> Noun Suffix จะเป็น Suffix ที่เปลี่ยนจากคำกริยา (Verb) ไปเป็นคำนาม (Noun) โดยเราสามารถจัดหมวดหมู่ Suffix ชนิดนี้ได้เป็น 5 หมวดหมู่"]}
        initExampleWord="ได้แก่"
        examples={[
          ["Suffixes ที่บ่งบอกถึงความเกี่ยวข้องกับบุคคล", "เช่น", "-er, -ee"],
          ["Suffixes ที่บ่งบอกถึงการกระทำของบุคคลหรือบางสิ่งบางอย่างที่ถูกกระทำ", "เช่น", "-ant, -ent"],
          ["Suffixes ที่เปลี่ยน part of speech ของคำ", "เช่น", "-ation, -ition, -ion"],
          ["Suffixes ที่อธิบายถึงคุณลักษณะของคำเพิ่มเติมในความหมายที่ใกล้เคียงกัน", "เช่น", "-al"],
          ["Suffixes ที่แสดงการกระทำ สถานะ หรือกระบวนการของสิ่งต่างๆ", "เช่น", "-age"]
        ]}
        note={undefined}
      />,
      <ExplanationWithExamples
        key='expn-exp2'
        explanations={['เราสามารถใช้ suffix "-er", "-ee", และ "-or" ในภาษาอังกฤษเพื่อสร้างคำใหม่จากคำต้นฉบับ และคำใหม่ที่สร้างขึ้นมักจะมีความหมายที่แตกต่างจากคำต้นฉบับ', 'โดย "-er" มักจะใช้สร้างคำนามที่หมายถึงบุคคลหรือสิ่งที่ทำบางอย่าง "-ee" ใช้สร้างคำนามที่หมายถึงบุคคลที่ได้รับการกระทำ และ "-or" ใช้สร้างคำนามที่หมายถึงบุคคลที่ทำบางอย่าง']}
        initExampleWord="ยกตัวอย่าง เช่น"
        examples={[
          ["\"-er\"", "-->", "driver (ผู้ขับขี่), writer (ผู้เขียน)"],
          ["\"-ee\"", "-->", "employee (ผู้ถูกจ้าง), payee (ผู้รับเงิน)"],
          ["\"-or\"", "-->", "director"],
        ]}
        note={undefined}
      />,
      <ExplanationWithExamples
        key='expn-exp3'
        explanations={['ในภาษาอังกฤษ, ทั้ง “-ant” และ “-ent” นั้นเป็น suffixes ที่ใช้ในการสร้างคำคุณภาพหรือคำนาม. ทั้งสอง suffixes นี้มาจากภาษาละตินและภาษาฝรั่งเศส, และมีความหมายว่า “ผู้ที่กำลังทำ” หรือ “สิ่งที่กำลังถูกทำ”. ']}
        initExampleWord="ยกตัวอย่าง เช่น"
        examples={[
          ["Assistant (ผู้ช่วย)", "มาจาก", "assist (ช่วย) + \"-ant\" (ผู้ที่กำลังทำ)"],
          ["Different (ต่าง)", "มาจาก", "differ (ต่าง) + \"-ent\" (สิ่งที่กำลังถูกทำ)"],
        ]}
        note={undefined}
      />,
      <ExplanationWithExamples
        key='expn-exp4'
        explanations={["คำส่วนท้าย “-ation”, “-ition”, “-tion”, “-sion”, และ “-ion” ในภาษาอังกฤษเป็นส่วนที่เรียกว่า “suffix” หรือ “คำเสมือน” ที่ใช้ในการสร้างคำใหม่โดยการเพิ่มความหมายของคำที่มีอยู่แล้ว", "โดย “-ation” มักจะใช้กับคำกริยาเพื่อสร้างคำนามที่แสดงถึงการกระทำหรือผลลัพธ์ และ “-ition”, “-tion”, “-sion”, “-ion” เป็นคำเสมือนที่ใช้ในการสร้างคำนามจากคำกริยา"]}
        initExampleWord="ยกตัวอย่าง เช่น"
        examples={[
          ["Information (ข้อมูล)", "มาจาก", "inform (แจ้งข้อมูล) + \"-ation\""],
          ["Definition (ความหมาย)", "มาจาก", "define (นิยาม) + \"-ition\""],
          ["Action (การกระทำ)", "มาจาก", "act (กระทำ) + \"-tion\""],
          ["Decision (การตัดสินใจ)", "มาจาก", "decide (ตัดสินใจ) + \"-sion\""],
          ["Opinion (ความคิดเห็น)", "มาจาก", "opine (แสดงความคิดเห็น) + \"-ion\""]
        ]}
        note={undefined}
      />,
      <ExplanationWithExamples
        key='expn-exp5'
        explanations={["คำเติมเข้าไปในภาษาอังกฤษที่มีลำดับ “-al” มีหลายความหมาย ขึ้นอยู่กับบริบทที่ใช้"]}
        initExampleWord="ยกตัวอย่าง เช่น"
        examples={[
          ["มีลักษณะของ", "เช่น", "remedial, denial"],
          ["สภาพ, คุณภาพ", "-", "-"],
        ]}
        note={undefined}
      />,
      <ExplanationWithExamples
        key='expn-exp6'
        explanations={["Suffix “-age” ในภาษาอังกฤษหมายถึงการกระทำ, สถานะ, หรือกระบวนการ"]}
        initExampleWord="ยกตัวอย่าง เช่น"
        examples={[
          ["postage", "มีความหมายคือ", "ค่าไปรษณีย์"],
          ["package", "มีความหมายคือ", "การห่อหุ้ม"],
          ["baggage", "มีความหมายคือ", "กระบวนการจัดกระเป๋า"],
          ["marriage", "มีความหมายคือ", "การสมรส"],
          ["breakage", "มีความหมายคือ", "การแตก"],
          ["passage", "มีความหมายคือ", "การผ่านไป (นอกจากนี้อาจหมายถึง บทความหรือทางได้เช่นกัน)"]
        ]}
        note={undefined}
      />,
      <Explanations
        key='exp2'
        explanations={["ในภาษาอังกฤษ, คำเสริม “-ing” ที่ต่อท้ายคำมักใช้แสดงถึงการกระทำที่กำลังเกิดขึ้นในปัจจุบัน³ หรือใช้แสดงถึงการกระทำ, สถานะ, หรือกระบวนการ. ตัวอย่างเช่น “landing”, “writing”, “ending”, “seating”, “blessing”, “feeding”"]}
      />,
      <LessonEnd 
        key="end"
        descriptiveText={'เนื้อหาในด่านนี้เยอะหน่อยน้าา เดี๋ยวด่านหน้าก็จะได้พักละ น่าจะยังเหลืออีกสัก 1-2 ด่านที่เนื้อหาเยอะเท่านี้'}
      />
    ],
  VerbAdjective: [
    <ExplanationWithExamples
      key="expn-exp1"
      explanations={[
      "-able และ -ible มักใช้ในการสร้างคำศัพท์ที่แสดงถึงความสามารถหรือความเป็นไปได้ของสิ่งหรือการกระทำบางอย่าง ซึ่งถือว่ามีความคล้ายคลึงกันมาก อย่างไรก็ตาม, มีข้อสังเกตบางอย่างระหว่างสอง Suffix นี้", "โดย\"-able\" จะใช้กับคำที่ไม่ได้มาจากภาษาละติน แต่ \"-ible\" จะใช้กับคำที่มาจากภาษาละติน"
      ]}
      initExampleWord="ยกตัวอย่าง เช่น"
      examples={[
        ["Readable", "แปลว่า", "สามารถอ่านได้"],
        ["Teachable", "แปลว่า", "สามารถถูกสอนได้"],
        ["Visible", "แปลว่า", "สามารถมองเห็นได้"],
        ["Edible", "แปลว่า", "สามารถกินได้"],
      ]}
      note={undefined}
    />,
        <ExplanationWithExamples
          key="expn-exp2"
          explanations={[
          "-ary และ -ory มักใช้ในการสร้างคำศัพท์ที่เกี่ยวข้องกับสิ่งหรือการกระทำบางอย่าง แต่มีความแตกต่างบางอย่างในการใช้งานและความหมายของ Suffix เหล่านี้", "โดย -ary จะใช้กับสิ่งที่เกิดเป็นครั้งคราว และเกี่ยวกับอาชีพหรือความเชี่ยวชาญ แต่ -ory จะใช้กับสิ่งที่มีลักษณะเกิดขึ้นเป็นประจำ หรือเป็นส่วนๆหนึ่งของบางสิ่ง"
          ]}
          initExampleWord="ยกตัวอย่าง เช่น"
          examples={[
            ["Revolutionary (นักปฏิวัติ)", "หมายความว่า", "เป็นคนที่มีส่วนร่วมในการปฏิวัติ ซึ่งเป็นเหตุการณ์ที่เกิดขึ้นเป็นครั้งคราว"],
            ["Dictionary (พจนานุกรม)", "หมายความว่า", "หนังสือที่รวบรวมคำศัพท์"],
            ["Factory (โรงงาน)", "หมายความว่า", "สถานที่ที่ผลิตสิ่งของเป็นประจำ"],
            ["History (ประวัติศาสตร์)", "หมายความว่า", "เรื่องราวหรือเหตุการณ์ที่เป็นอยู่เป็นประจำ"],
          ]}
          note={undefined}
        />,
        <ExplanationWithExamples
          key="expn-exp3"
          explanations={[
          "-ent ใช้ในคำกริยาที่อธิบายคุณลักษณะหรือสภาพภายในองค์ประกอบของสิ่งนั้น หรือลักษณะเฉพาะเจาะจงของบุคคลหรือสิ่งนั้น",
          "-ant จะมีความใกล้เคียงกับ -ent และนอกจากนั้นแล้ว จะใช้ในคำกริยาที่มักใช้ในบทเวลาหรือสถานการณ์ที่เป็นประจำ"
          ]}
          initExampleWord="ยกตัวอย่าง เช่น"
          examples={[
            ["Constant", "แปลว่า", "คงที่หรือสิ่งที่เกิดขึ้นอยู่เสมอ"],
            ["Important", "แปลว่า", "สำคัญ"],
            ["Efficient", "แปลว่า", "ความมีประสิทธิภาพในตัวสิ่งนั้น"],
            ["Confident", "แปลว่า", "มีความมั่นใจในตนเอง"],
          ]}
          note={undefined}
        />,
        <ExplanationWithExamples
          key="expn-exp4"
          explanations={[
"เมื่อคำลงท้ายด้วย -ive, มักจะหมายถึง สิ่งที่เกี่ยวข้องกับการทำ หรือ สิ่งที่มีลักษณะการกระทำ",
"ในขณะที่คำลงท้ายด้วย -ative, มักหมายถึง สิ่งที่เกี่ยวกับ หรือ สิ่งที่มีลักษณะที่เกี่ยวข้องกับ"
          ]}
          initExampleWord="ยกตัวอย่าง เช่น"
          examples={[
          ["Active (คล่องแคล่ว)", "มีความเกี่ยวข้องกับ", "การทำงานหรือการเคลื่อนไหว"],
            ["Informative (เพื่อการแจ้งข้อมูล)", "มีความเกี่ยวข้องกับ", "การให้ข้อมูลหรือข้อมูลที่เป็นประโยชน์"]
                  ]}
                  note={undefined}
                />,
                 <ExplanationWithExamples
                          key="expn-exp3"
                          explanations={[
                          "-ent ใช้ในคำกริยาที่อธิบายคุณลักษณะหรือสภาพภายในองค์ประกอบของสิ่งนั้น หรือลักษณะเฉพาะเจาะจงของบุคคลหรือสิ่งนั้น",
                          "-ant จะมีความใกล้เคียงกับ -ent และนอกจากนั้นแล้ว จะใช้ในคำกริยาที่มักใช้ในบทเวลาหรือสถานการณ์ที่เป็นประจำ"
                          ]}
                          initExampleWord="ยกตัวอย่าง เช่น"
                          examples={[
                            ["Constant", "แปลว่า", "คงที่หรือสิ่งที่เกิดขึ้นอยู่เสมอ"],
                            ["Important", "แปลว่า", "สำคัญ"],
                            ["Efficient", "แปลว่า", "ความมีประสิทธิภาพในตัวสิ่งนั้น"],
                            ["Confident", "แปลว่า", "มีความมั่นใจในตนเอง"],
                          ]}
                          note={undefined}
                        />,
                 <ExplanationWithExamples
                          key="expn-exp5"
                          explanations={['-ed, -d มักใช้เพื่อแสดงกริยาที่ผ่านการกำหนดหรือเกิดขึ้นในอดีต หรือแสดงความสมบูรณ์ของกริยา ซึ่ง Suffix -d จะเติมต่อหลัง "e"', "นอกจากนั้น Suffix เหล่านี้ยังบ่งบอกถึงการที่คำเหล่านั้นแสดงการถูกกระทำของสิ่งๆหนึ่ง (Passive Voice) และแสดงถึงการที่คำนั้นเป็น Past Participle มีความหมายว่า \"รู้สึก...\""]}
                          initExampleWord="ยกตัวอย่าง เช่น"
                          examples={[
                          ["Walked", "แปลว่า", "เดิน (ในอดีต)"],
                            ["Fried", "แปลว่า", "ผัด (ในอดีต) หรือ ถูกผัด"],
                            ["Moved", "แปลว่า", "สะเทือนใจ"]
                                  ]}
                                  note={undefined}
                                />,
                                <ExplanationWithExamples
          key="expn-exp4"
          explanations={[
"เมื่อคำลงท้ายด้วย -ive, มักจะหมายถึง สิ่งที่เกี่ยวข้องกับการทำ หรือ สิ่งที่มีลักษณะการกระทำ",
"ในขณะที่คำลงท้ายด้วย -ative, มักหมายถึง สิ่งที่เกี่ยวกับ หรือ สิ่งที่มีลักษณะที่เกี่ยวข้องกับ"
          ]}
          initExampleWord="ยกตัวอย่าง เช่น"
          examples={[
          ["Active (คล่องแคล่ว)", "มีความเกี่ยวข้องกับ", "การทำงานหรือการเคลื่อนไหว"],
            ["Informative (เพื่อการแจ้งข้อมูล)", "มีความเกี่ยวข้องกับ", "การให้ข้อมูลหรือข้อมูลที่เป็นประโยชน์"]
                  ]}
                  note={undefined}
                />,
                 <ExplanationWithExamples
                          key="expn-exp3"
                          explanations={[
                          "-ent ใช้ในคำกริยาที่อธิบายคุณลักษณะหรือสภาพภายในองค์ประกอบของสิ่งนั้น หรือลักษณะเฉพาะเจาะจงของบุคคลหรือสิ่งนั้น",
                          "-ant จะมีความใกล้เคียงกับ -ent และนอกจากนั้นแล้ว จะใช้ในคำกริยาที่มักใช้ในบทเวลาหรือสถานการณ์ที่เป็นประจำ"
                          ]}
                          initExampleWord="ยกตัวอย่าง เช่น"
                          examples={[
                            ["Constant", "แปลว่า", "คงที่หรือสิ่งที่เกิดขึ้นอยู่เสมอ"],
                            ["Important", "แปลว่า", "สำคัญ"],
                            ["Efficient", "แปลว่า", "ความมีประสิทธิภาพในตัวสิ่งนั้น"],
                            ["Confident", "แปลว่า", "มีความมั่นใจในตนเอง"],
                          ]}
                          note={undefined}
                        />,
                 <ExplanationWithExamples
                          key="expn-exp6"
                          explanations={['-ed, -d มักใช้เพื่อแสดงกริยาที่ผ่านการกำหนดหรือเกิดขึ้นในอดีต หรือแสดงความสมบูรณ์ของกริยา ซึ่ง Suffix -d จะเติมต่อหลัง "e"', "นอกจากนั้น Suffix เหล่านี้ยังบ่งบอกถึงการที่คำเหล่านั้นแสดงการถูกกระทำของสิ่งๆหนึ่ง (Passive Voice) และแสดงถึงการที่คำนั้นเป็น Past Participle มีความหมายว่า \"รู้สึก...\""]}
                          initExampleWord="ยกตัวอย่าง เช่น"
                          examples={[
                          ["Walked", "แปลว่า", "เดิน (ในอดีต)"],
                            ["Fried", "แปลว่า", "ผัด (ในอดีต) หรือ ถูกผัด"],
                            ["Moved", "แปลว่า", "สะเทือนใจ"]
                                  ]}
                                  note={undefined}
                                />,
  ]
}

export default lessonStructure