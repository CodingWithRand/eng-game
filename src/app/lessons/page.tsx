'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { question, MembershipStatus, MemberData } from '@/server/cookies';


export default function LessonMain() {
  const page: JSX.Element = <></>;
  const router = useRouter()
  if(MembershipStatus.Guest.get("login") === undefined && question.get("question") === undefined){
    page = <div>Loading...</div>
  }else if(MemberData.lessons.get("lessons") === undefined) {
    router.push('/lessons/select-lesson')
  }
  return( {page} );
}
