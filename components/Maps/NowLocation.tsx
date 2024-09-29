"use client"

import { LatLngExpression} from "leaflet"
import { forwardRef, useEffect, useImperativeHandle, useState } from "react"
import { Marker, Popup, useMap, useMapEvent, useMapEvents } from "react-leaflet"
import { currentLocationmarkerIcon } from "./Icon"
import { Angle } from "./types"
import { LeafletTrackingMarker } from "react-leaflet-tracking-marker"

const NowLocation=forwardRef(({position}:{position:[number,number]},ref)=>{
    const [prevPos,setPrevPos]=useState<[number,number]>(position)//이전 위치를 저장하고 있다
    const [keepCenter,setKeepCenter]=useState<boolean>(true)// 기본적으로 현재 마커의 위치를 따라가게 하되 지도영역 터치시 다른 영역 탐색하도록 구현
    const map=useMap();
    // const mapEvent=useMapEvent('mousedown',
    //     ()=>{
    //         console.log("무브엔드 이벤트 호출")
    //         setKeepCenter(false)//포커스를 가운데에서 해제시킴
    //         mapEvent.dragging.enable()
    //     }
    // )

    useImperativeHandle(ref,()=>({
        changeMarker
    }))

    const changeMarker=()=>{
        console.log("호출됌???")
        console.log(position)
        map.flyTo(position,map.getZoom())
        setKeepCenter(true)//다시 트래킹 되도록 포커스 on
    }

    useEffect(()=>{
        const mapContainer=map.getContainer();
        mapContainer.addEventListener("touchstart",()=>{
            console.log("무브엔드 이벤트 호출")
            setKeepCenter(false)//포커스를 가운데에서 해제시킴
        })

        return()=>{mapContainer.removeEventListener("touchstart",()=>{
            console.log("무브엔드 이벤트 언마운트")}
            )}
    },[])

    useEffect(()=>{
        if((position[0]!==prevPos[0])||(position[1]!==prevPos[1])){
            setPrevPos(position)
        }
    },[position])


    return(
        <>
            {/* <Marker position={position} icon={currentLocationmarkerIcon(angle)}>
                <Popup>나 여깄지롱~~~!!</Popup>
            </Marker> */}
            <LeafletTrackingMarker 
            icon={currentLocationmarkerIcon()}
            position={position}
            previousPosition={prevPos}
            duration={1000}
            keepAtCenter={keepCenter}
            draggable={keepCenter}
            />
        </>
    )
})

export default NowLocation