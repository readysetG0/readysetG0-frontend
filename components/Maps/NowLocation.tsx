"use client"

import { LatLngExpression} from "leaflet"
import { forwardRef, useEffect, useImperativeHandle, useState } from "react"
import { Marker, Popup, useMap } from "react-leaflet"
import { currentLocationmarkerIcon } from "./Icon"
import { Angle } from "./types"

const NowLocation=forwardRef(({position,angle}:{position:LatLngExpression,angle:Angle},ref)=>{
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
            <Marker position={position} icon={currentLocationmarkerIcon(angle)}>
                <Popup>나 여깄지롱~~~!!</Popup>
            </Marker>
        </>
    )
})

export default NowLocation