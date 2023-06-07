"use client"

import { Editor } from '@/components/editor';
import { GlobalTextProvider } from '@/components/providers/GlobalText';

export default function Home() {
  return (
    <main className='h-screen w-screen justify-center flex ' id="keyboard">
      <div className='w-1/3 min-w-min flex flex-col items-center p-16' id="keyboard">
        <GlobalTextProvider>
          <Editor></Editor>
        </GlobalTextProvider>
      </div>
    </main>
  )
}
