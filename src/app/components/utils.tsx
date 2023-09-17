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

export const generateArrsRandint = (arr: any[]) => Math.floor(Math.random() * arr.length)

export const generateStateArray = (datatype: string, n?: number, detArr?: any[]) => {
    const counter = detArr?.length || n || 1
    switch(datatype){
        case "boolean":
            let tempBools: boolean[] = []
            for (let i = 0; i < counter; i++) tempBools.push(false)
            return tempBools
            break;
        case "JSX.Element":
            let tempArray: JSX.Element[] = []
            for(let i = 0; i < counter; i++) tempArray.push(<></>)
            return tempArray;
            break;
        default:
            return []
    }
}