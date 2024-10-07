'use client'

import InputBox from '@/components/Common/InputBox'
import Button from '@/components/Common/Button'
import Header from '@/components/Common/Header'
import Footer from '@/components/Common/Footer'
import Carousel from '@/components/Common/Carousel'
import Divider from '@/components/Common/Divider'
import { useState } from 'react'

export default function RecordPage({
  params: { id },
}: {
  params: { id: string }
}) {
  const [ data, setData ] = useState({
    time: "",
    place: "",
    tag: [],
    record: {
      title: "",
      content: "",
    },
    calculate: [
      { payer: "", sender: [], content: "", total: "", currency: "", }
    ],

    test1: "",
    test2: "",
    test3: "",
  })
  // console.log(id)
  function handleData(value: string, name: string) {
    setData({
      ...data,
      [name]: value,
    })
  }

  function sendData() {
    console.log("입력된 데이터? ", data);
  }

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
        <InputBox title="" icon="MdAccessTime" handleChange={(value) => handleData(value, "time")} disabled value="123" />
        <div className="w-full">
          <Divider />
        </div>
        <InputBox title="" icon="FaMap" handleChange={(value) => handleData(value, "place")} readonly value="수완나품 국제공항" />
        <InputBox title="" icon="IoMdPricetag" handleChange={(value) => handleData(value, "test1")} />
        <InputBox title="" icon="MdOutlineEdit" handleChange={(value) => handleData(value, "test2")} />
        <InputBox title="" icon="GrMoney" handleChange={(value) => handleData(value, "test3")} />
      </div>

      <footer
        id="footer"
        className="container fixed bottom-0 bg-inherit px-6 py-3"
      >
        <Footer>
          <Button title="삭제" btnType="cancel" />
          <Button
            title="수정"
            handleClick={() => {
              sendData()
            }}
          />
        </Footer>
      </footer>
    </main>
  )
}
