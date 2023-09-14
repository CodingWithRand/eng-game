// 'use client'

// import { ref, set, onValue } from "firebase/database";
// import db from "@/firebase";
// import { useState } from "react";

// export default function Test(){
//     const [ n, increament ] = useState(0)
//     const test = ref(db, 'test')
//     onValue(test, (snapshot) => {
//         const data = snapshot.val();
//         console.log('Data at path:', data);
//       });
//     const addItem = async () => {
//         increament(prevVal => prevVal + 1)
//         await set(test, n).then(() => console.log('pass')).catch((error) => console.log("it's error :(", error))
//     }
//     return(
//         <button onClick={addItem}>test</button>
//     )
// }

export default function Test(){
    return<div>currently close</div>
}
