"use client"
import { Solver } from '@/components/solver';
import { decrypt } from '@/lib/crypto';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Home() {
  const parm = useSearchParams()
  const code = parm.get("code")
  const data = decrypt(code??"")

  return (
    <main className='h-screen w-screen justify-center flex ' id="keyboard">
      <div className='w-1/3 min-w-min flex flex-col items-center p-16' id="keyboard">
        {data === "" ? <h1>エラー</h1> : <Solver code={data}></Solver>}
      </div>
    </main>
  )
}
