"use client"

import { LatLngExpression} from "leaflet"
import { forwardRef, useEffect, useImperativeHandle, useState } from "react"
import { Marker, Popup, useMap } from "react-leaflet"
import { markerIcon } from "./Icon"

const MainMapService=forwardRef(({position}:{position:LatLngExpression},ref)=>{
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
            <Marker position={position} icon={markerIcon}>
                <Popup>나 여깄지롱~~~!!</Popup>
            </Marker>
        </>
    )
})

export default MainMapService