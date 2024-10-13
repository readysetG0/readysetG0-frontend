'use client'

import InputBox from '@/components/Common/InputBox'
import Button from '@/components/Common/Button'
import Header from '@/components/Common/Header'
import Footer from '@/components/Common/Footer'
import Carousel from '@/components/Common/Carousel'
import Divider from '@/components/Common/Divider'
import { useState } from 'react'
import ImagePicker from '@/components/Common/ImagePicker'
import TagBox from '@/components/Common/TagBox'
import TextBox from '@/components/Common/TextBox'

export default function RecordPage({
  params: { id },
}: {
  params: { id: string }
}) {
  const [ data, setData ] = useState({
    time: "2024-10-09 오후 10:09",
    place: "수완나품 국제공항",
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
    console.log("입력된 데이터? ", data)
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
        <Carousel>
          <img src="https://i.pinimg.com/736x/89/c6/05/89c605589cc891c32f2682839adec2a3.jpg"/>
          <img src="https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg"/>
          <ImagePicker />
        </Carousel>
        <TextBox icon="MdAccessTime" disabled value={data.time} handleChange={(value) => handleData(value, "time")} />
        <div className="w-full">
          <Divider />
        </div>
        <TextBox icon="FaMap" readonly value={data.place} handleChange={(value) => handleData(value, "place")}/>
        <TagBox tagList={data.tag} icon="IoMdPricetag" />
        <TextBox icon="MdOutlineEdit" value={data.test2} handleChange={(value) => handleData(value, "test2")} />
        <TextBox icon="GrMoney" value={data.test3} handleChange={(value) => handleData(value, "test3")} />
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
