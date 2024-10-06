'use client'

import InputBox from '@/components/Common/InputBox'
import Button from '@/components/Common/Button'
import Header from '@/components/Common/Header'
import Footer from '@/components/Common/Footer'
import Carousel from '@/components/Common/Carousel'
import Divider from '@/components/Common/Divider'

export default function RecordPage({
  params: { id },
}: {
  params: { id: string }
}) {
  // console.log(id)
  return (
    <main className="container bg-white flex min-h-screen flex-col items-center p-6 overflow-hidden">
      <header id="header" className="container fixed top-0 bg-inherit p-3">
        <Header />
      </header>
      <div
        id="content"
        className="container mx-auto mt-[4rem] mb-[4rem] flex flex-col justify-center items-center gap-3"
      >
        <Carousel></Carousel>
        <InputBox title="" icon="MdAccessTime" />
        <div className="px-[-1.5rem] w-full">
          <Divider />
        </div>
        <InputBox title="" icon="FaMap" />
        <InputBox title="" icon="IoMdPricetag" />
        <InputBox title="" icon="MdOutlineEdit" />
        <InputBox title="" icon="GrMoney" />
      </div>
      <footer
        id="footer"
        className="container fixed bottom-0 bg-inherit px-6 py-3"
      >
        <Footer>
          <Button title="삭제" btnType="cancel" />
          <Button
            title="수정"
            onClick={() => {
              console.log('클릭')
            }}
          />
        </Footer>
      </footer>
    </main>
  )
}
