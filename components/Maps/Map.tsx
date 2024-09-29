"use client"
import { LatLngExpression, marker } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import NowLocation from "./NowLocation";
import {defaultmarkerIcon}  from "./Icon";
import { FaLocationArrow } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import dummyPathdata from "./dummyPathdata";
import TrackingLine from "./TrackingLine";
import { MapLocation } from "./types";




export default function Map(){
    const showNowLocation=useRef<{changeMarker:()=>void}>();//버튼을 누르므로써 자식컴포넌트 mainMapService의 마커를 현재위치로 띄워주게 함
   
    // const [currentPosition,setCurrentPosition]=useState<LatLngExpression[]>([])//현재 위치에 대한 상태를 가짐 -실제 소스용
    const [currentPosition,setCurrentPosition]=useState<LatLngExpression[]>(dummyPathdata)//테스트용
    const [getpositionState,setGetPositionState]=useState<boolean>(false)//현 위치정보를 제대로 가져왔는지에 대한 여부
    const position2:LatLngExpression=[33.3, 126.5]; //테스트 제주도 좌표값

    const[markeridx,setMarkeridx]=useState<number>(0)//더미데이터셋의 이동 흐름 인덱스
    const markeridxRef=useRef<number>(markeridx)//마커 인덱스의 setinterval 클로저 문제 해결위한 최신값 저장

    const changeMakerToCurrentPosition=()=>{//현 위치로 이동 버튼시 호출
        if(showNowLocation.current){
            showNowLocation.current.changeMarker()
        }
    }


    //현재 위치 실시간 추적용 소스
    // useEffect(()=>{
    //     if(navigator.geolocation){
            // const watchid=navigator.geolocation.watchPosition(
            //     (pos)=>{
            //         const{latitude,longitude}:MapLocation=pos.coords
            //         setCurrentPosition([...currentPosition,[latitude,longitude]])
            //         setGetPositionState(true)
            //     },
            //     (err)=>{
            //         switch(err.code){
            //             case err.PERMISSION_DENIED:
            //                 console.error("위치정보 권한을 얻어오지 못하였습니다")
            //             case err.POSITION_UNAVAILABLE:
            //                 console.error("현재 위치정보를 가져오기 실패")
            //             case err.TIMEOUT:
            //                 console.error("위치정보를 가져오기 위한 허용시간 초과")
            //         }
            //         setGetPositionState(false)
            //     },
            //     {enableHighAccuracy:false,timeout:10000}//위치 정확도를 높일려면 true로 바꿔주자
            // )
            // return()=>navigator.geolocation.clearWatch(watchid)//언마운트시 위치 추적 중지
            
    //     }else{
    //         console.error("geolocation 위치정보를 지원하지 않는 브라우저")
    //         setGetPositionState(false)
    //     }

    // },[])

    useEffect(()=>{
        markeridxRef.current=markeridx
    },[markeridx])

    useEffect(()=>{
        if(currentPosition.length>0){
            const intervalTimer=setInterval(():void=>{
                console.log("현재: ",markeridxRef.current)
                console.log("다음: ",markeridxRef.current+1)
                if((markeridxRef.current+1)<currentPosition.length){
                    setMarkeridx((prev)=>(prev+1))
                }
                else{
                    clearInterval(intervalTimer)
                }
            },1000)
    
            return()=>clearInterval(intervalTimer)
        }
        // let angle=calculateAngle(currentPosition[markeridx] as [number,number],currentPosition[markeridx+1] as [number,number])
        // console.log(angle)
        // setradian(angle)
    },[])

    return(
        <>
        {currentPosition.length>0?
            (<>
            <MapContainer center={currentPosition[0]} zoom={20} style={{ height: '100vh', width: '100%' }}>
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {/* <UpdateMapCenter currentPosition={currentPosition[markeridx]}/> */}
                <Marker position={position2} icon={defaultmarkerIcon}>
                    <Popup>🌎정상이네 집🌍</Popup>
                </Marker>
                {dummyPathdata.map((marker,idx)=>(
                    idx%5==0 &&
                        <Marker key={idx} position={marker} icon={defaultmarkerIcon}>
                        <Popup className="font-semibold">🚩테스트마커 {idx}🚩</Popup>
                    </Marker>
                ))}
                <NowLocation position={currentPosition[markeridx] as [number,number]}  ref={showNowLocation} />
                <TrackingLine positionList={currentPosition}/>
            </MapContainer>
            <button onClick={changeMakerToCurrentPosition} className="bg-blue absolute bottom-10 right-4 z-[1000] blured-layer text-rsgYellow-primary px-4 py-4 rounded-full shadow-lg active:bg-rsgGreen-primary focus:outline-none flex items-center">
                <FaLocationArrow />
            </button>
            </>):
            <>
                <h2 className="z-[1000] text-red-500 font-bold">현 위치 불러오는중...</h2>
            </>
        }
        </>
    )
}