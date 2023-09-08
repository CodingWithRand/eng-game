'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { question, MembershipStatus, MemberData } from '@/server/cookies';

const EmptyPage: React.FC = () => {
  const router = useRouter()
  if(MembershipStatus.Guest.get("login") === undefined && question.get("question") === undefined){
    return <div>Loading...</div>
  }else if(MemberData.lessons.get("lessons") === undefined) {
    router.push('/lessons/select-lesson')
  }
  return (
    <div>
      This is an empty page.
    </div>
  );
};

export default EmptyPage;
