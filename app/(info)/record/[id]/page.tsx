import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '기록생성',
}

export default function RecordPage({
  params: { id },
}: {
  params: { id: string }
}) {
  console.log(id)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>여기는 정보입력 페이지-- 여기다가 컴포넌트 만들고 붙이기 시작</h1>
        <h1>id값은 {id}</h1>
      </div>
    </main>
  )
}
