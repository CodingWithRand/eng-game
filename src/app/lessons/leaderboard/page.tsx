import { ref, set, onValue } from "firebase/database";
import db from "@/firebase";
export default function Leaderboard(){
  const rootDB = ref(db)

  let leaderboardTuple: string[][] = [];
  let leaderboard: JSX.Element[] = [];
  let maxXP: number = 0;
  let minXP: number = 0;
  onValue(rootDB, (snapshot) => {
    if(snapshot.val() === null) return
    let ci: number = 0
    Object.keys(snapshot.val()).forEach((username) => {
      const userXP = snapshot.val().username.xp
      const userStage = snapshot.val().username.stage
      let currentUserLeaderstat = leaderboardTuple[ci]
      if(userXP > maxXP){
        maxXP = userXP
        currentUserLeaderstat[0] = username
        currentUserLeaderstat[1] = userXP
        currentUserLeaderstat[2] = userStage
        ci++
      }else if(userXP < maxXP && userXP > minXP){
        minXP = userXP
        currentUserLeaderstat[0] = username
        currentUserLeaderstat[1] = userXP
        currentUserLeaderstat[2] = userStage
        ci++
      }else{
        currentUserLeaderstat[0] = username
        currentUserLeaderstat[1] = userXP
        currentUserLeaderstat[2] = userStage
        ci++
      }
    })
  })
  
  useEffect(() => {
    leaderboardTuple.forEach((lt) => {
      leaderboard.push(<label>{`${lt[0]}, ${lt[1]}, ${lt[2]}`}</label>)
    })
  }, [leaderboardTuple])
  
  return <>{leaderboard}</>
}