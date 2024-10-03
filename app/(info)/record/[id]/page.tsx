import type { Metadata } from 'next'
import InputBox from '@/components/Common/InputBox'
import Button from '@/components/Common/Button'
import RecordHeader from '@/components/Common/RecordHeader'
import RecordFooter from '@/components/Common/RecordFooter'

export const metadata: Metadata = {
  title: '마커 상세보기',
}

// export function callAlert() {
//   alert(true);
// };

export default function RecordPage({
  params: { id },
}: {
  params: { id: string }
}) {
  // console.log(id)
  return (
    <main className="container bg-white flex min-h-screen flex-col items-center p-3 overflow-hidden">
      <header id="header" className="container fixed top-0 bg-inherit p-3">
        <RecordHeader />
      </header>
      <div id="content" className="container mx-auto mt-[3.5rem] mb-[3.5rem]">
        내용<br/>내용<br/>내용<br/>내용<br/>내용<br/>내용<br/>내용<br/>내용<br/>내용<br/>내용<br/>내용<br/>내용<br/>내용<br/>내용<br/>내용<br/>내용<br/>
        내용<br/>내용<br/>내용<br/>내용<br/>내용<br/>내용<br/>내용<br/>내용<br/>내용<br/>내용<br/>내용<br/>내용<br/>내용<br/>내용<br/>내용<br/>내용<br/>
        내용<br/>내용<br/>내용<br/>내용<br/>내용<br/>내용<br/>내용<br/>내용<br/>내용<br/>내용<br/>내용<br/>내용<br/>내용<br/>내용<br/>내용<br/>내용<br/>
      </div>
      <footer id="footer" className="container fixed bottom-0 bg-inherit px-6 py-3">
        <RecordFooter/>
      </footer>
      {/* <div>
        <div className="flex flex-col items-center pt-3">
          <InputBox title='인풋박스 title'></InputBox>
          <Button
            title='안녕'
            // handleClick={() => callAlert()}
          />
        </div>
      </div> */}
    </main>
  )
}
