'use client'
import { ref, onValue } from "firebase/database";
import db from "@/firebase";
import { useEffect, useState } from "react";
import "./l.css"

export default function Leaderboard() {
  const rootDB = ref(db);
  const [leaderboardTuple, setLeaderboardTuple] = useState<string[][]>([]);
  const [leaderboard, setLeaderboard] = useState<JSX.Element[]>([]);

  useEffect(() => {
    if (document !== undefined) {
      const bodyElem = document?.querySelector("body");
      const htmlElem = document?.querySelector("html");
      const className = "leaderboard";

      if (!bodyElem?.classList.contains(className) || !htmlElem?.classList.contains(className)) {
        bodyElem?.classList.add(className);
        htmlElem?.classList.add(className);
      }
    }
  }, [])

  useEffect(() => {
    onValue(rootDB, (snapshot) => {
      if (snapshot.val() === null) return;

      const newLeaderboardTuple: string[][] = [];

      const rank: any[] = Object.values(snapshot.val()).sort((a: any,b: any) => b.xp - a.xp)
      const user = Object.keys(snapshot.val())
      console.log(rank, user)

      if(rank.length === user.length)
      {
        for(let i = 0; i<user.length; i++)
        {
          newLeaderboardTuple.push([user[i], rank[i].xp, rank[i].stage])
        }
      }

      console.log(newLeaderboardTuple)
      setLeaderboardTuple(newLeaderboardTuple);

    })
  }, [rootDB]);

  useEffect(() => {
    const newLeaderboard: JSX.Element[] = leaderboardTuple.map((lt, index) => (
      <div className="user-rank" key={index}>
        <label>{lt[0]}</label>
        <label>{lt[1]}</label>
        <label>{lt[2]}</label>
      </div>
      
    ));

    setLeaderboard(newLeaderboard);
  }, [leaderboardTuple]);

  return (
    <div className="leaderboard-content">
      <div className="attrb">
        <label>Username</label>
        <label>Experience</label>
        <label>Stage</label>
      </div>
      {leaderboard}
    </div>
  );
}