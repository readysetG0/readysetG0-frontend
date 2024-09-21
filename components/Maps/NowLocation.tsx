"use client"

import { LatLngExpression} from "leaflet"
import { forwardRef, useEffect, useImperativeHandle, useState } from "react"
import { Marker, Popup, useMap } from "react-leaflet"
import  {currentLocationmarkerIcon} from "./Icon"

const NowLocation=forwardRef(({position}:{position:LatLngExpression},ref)=>{
    const map=useMap();

    useImperativeHandle(ref,()=>({
        changeMarker
    }))

    const changeMarker=()=>{
        console.log("호출됌???")
        console.log(position)
        map.flyTo(position,map.getZoom())
    }



    return(
        <>
            <Marker position={position} icon={currentLocationmarkerIcon()}>
                <Popup>나 여깄지롱~~~!!</Popup>
            </Marker>
        </>
    )
})

export default NowLocation