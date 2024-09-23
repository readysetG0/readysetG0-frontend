import type { Metadata } from 'next'
import InputBox from '@/components/Common/InputBox'
import Button from '@/components/Common/Button'

export const metadata: Metadata = {
  title: '기록생성',
}

export function callAlert() {
  alert(true);
};

export default function RecordPage({
  params: { id },
}: {
  params: { id: string }
}) {
  console.log(id)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div className="flex flex-col items-center pt-3">
          <InputBox title='인풋박스 title'></InputBox>
          <Button
            title='안녕'
            // handleClick={() => callAlert()}
          />
        </div>
      </div>
    </main>
  )
}
