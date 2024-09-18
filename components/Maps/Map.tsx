"use client"
import { LatLngExpression } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import MainMapService from "./MainMapService";
import { markerIcon } from "./Icon";
import { FaLocationArrow } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import UpdateMapCenter from "./UpdateMapCenter";

interface MapLocation{
    latitude:number;
    longitude:number;
}

export default function Map(){

    const showMainmapService=useRef<{changeMarker:()=>void}>();//버튼을 누르므로써 자식컴포넌트 mainMapService의 마커를 현재위치로 띄워주게 함
   
    const [currentPosition,setCurrentPosition]=useState<LatLngExpression|undefined>(undefined)//현재 위치에 대한 상태를 가짐
    const [getpositionState,setGetPositionState]=useState<boolean>(false)//현 위치정보를 제대로 가져왔는지에 대한 여부
    const position2:LatLngExpression=[33.3, 126.5]; //테스트 제주도 좌표값

    const changeMakerToCurrentPosition=()=>{
        if(showMainmapService.current){
            showMainmapService.current.changeMarker()
        }
    }

    
    useEffect(()=>{
        if(navigator.geolocation){
            const watchid=navigator.geolocation.watchPosition(
                (pos)=>{
                    const{latitude,longitude}:MapLocation=pos.coords
                    setCurrentPosition([latitude,longitude])
                    setGetPositionState(true)
                },
                (err)=>{
                    switch(err.code){
                        case err.PERMISSION_DENIED:
                            console.error("위치정보 권한을 얻어오지 못하였습니다")
                        case err.POSITION_UNAVAILABLE:
                            console.error("현재 위치정보를 가져오기 실패")
                        case err.TIMEOUT:
                            console.error("위치정보를 가져오기 위한 허용시간 초과")
                    }
                    setGetPositionState(false)
                },
                {enableHighAccuracy:false,timeout:10000}//위치 정확도를 높일려면 true로 바꿔주자
            )
            return()=>navigator.geolocation.clearWatch(watchid)//언마운트시 위치 추적 중지
            
        }else{
            console.error("geolocation 위치정보를 지원하지 않는 브라우저")
            setGetPositionState(false)
        }

    },[])

    return(
        <>
        {currentPosition!==undefined?
            (<>
            <MapContainer center={currentPosition} zoom={16} style={{ height: '100vh', width: '100%' }}>
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <UpdateMapCenter currentPosition={currentPosition}/>
                <Marker position={position2} icon={markerIcon}>
                    <Popup>🌎정상이네 집🌍</Popup>
                </Marker>
                <MainMapService position={currentPosition} ref={showMainmapService}/>/
            </MapContainer>
            <button onClick={changeMakerToCurrentPosition} className="absolute bottom-10 right-4 z-[1000] blured-layer text-rsgYellow-primary px-4 py-4 rounded-full shadow-lg active:bg-rsgGreen-primary focus:outline-none flex items-center">
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