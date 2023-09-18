import { useStage, useLevel } from "@/components/client-caches";
import '@/css/lesson-structure/ending.css'
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LessonEnd({ descriptiveText }: { descriptiveText: string }) {
    const [{ nextS }, {}, {}, { setFooterStyle }] = useStage();
    const [{ xp, generateXP }] = useLevel()
    const router = useRouter()

    setFooterStyle('')

    function directBack(){ 
        nextS(prevS => prevS + 1); generateXP(0)
        router.push('/lessons'); 
    }

    return(<div className="lesson-end">
        <label className="d-t">{descriptiveText}</label>
        <div className="conc">
            <div className="text-frame">
                <label>You gained</label>
                {xp} XP
            </div>
            <button className="exit" onClick={directBack}>Exit</button>
        </div>
        <Image src={`/imgs/andy/andy-cheer-${Math.floor(Math.random() * 2) + 1}.png`} width={250} height={350} alt="andy-cheer"/>
    </div>)
}