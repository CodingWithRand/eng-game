import { useEffect } from "react";
import { MemberData } from "./server/cookies";
import { useRouter } from "next/navigation";

export function CheckSession(){
    const router = useRouter()
    useEffect(() => {
        function checkPeriodically() {
            if(MemberData.get('user') === undefined){
                alert("Your session has expired")
                router.push('/')
            }
            const timeoutId_2 = setTimeout(checkPeriodically, 5000);
            return () => {
                clearTimeout(timeoutId_2);
            };
        }
        checkPeriodically();
    }, []);
    return <></>
}