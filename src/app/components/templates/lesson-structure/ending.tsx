import { useStage, useLevel } from "@/components/client-caches";
import '@/css/lesson-structure/ending.css'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ref, set, onValue } from "firebase/database";
import { MemberData } from '@/server/cookies'
import db from "@/firebase";

export default function LessonEnd({ descriptiveText }: { descriptiveText: string }) {
    const [{ nextS }, {}, {}, { setFooterStyle }] = useStage();
    const [{ xp }] = useLevel()
    const router = useRouter()

    setFooterStyle('')

    function directBack(){ 
        nextS(prevS => prevS + 1);
        if (MemberData.get('user').name === null || MemberData.get('user').name === "") return
        const userXP = ref(db, `${MemberData.get('user').name}/xp`)
        let storingXP: number = 0;
        onValue(userXP, (snapshot) => { storingXP = snapshot.val(); });
        const saveXP = async () => await set(userXP, storingXP + xp)
        saveXP()
        router.push('/lessons'); 
    }

    return(<div className="lesson-end">
        <label className="d-t">{descriptiveText}</label>
        <div className="conc">
            <div className="text-frame">
                <label>คุณได้รับ</label>
                {xp} XP
            </div>
            <button className="exit" onClick={directBack}>ออกจากด่านนี้</button>
        </div>
        <Image src={`/imgs/andy/andy-cheer-${Math.floor(Math.random() * 2) + 1}.png`} width={250} height={350} alt="andy-cheer"/>
    </div>)
}