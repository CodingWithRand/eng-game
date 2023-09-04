'use client';

import { useRouter } from 'next/navigation';
import '@/css/select-lesson.css'

export default function InitialPage() {
  const router = useRouter();

  return (
    <main>
      <div className='head-text'>
        Select the lesson you'd like to learn
      </div>
      <div className='lessons-list'>
        <div className='lesson-choice'>
          <button className='check-box'></button>
          <label className='lesson-name'>
            Premilary
          </label>
        </div>
      </div>
    </main>
  );
};
