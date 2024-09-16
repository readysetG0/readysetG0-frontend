"use client"

import { LatLngExpression} from "leaflet"
import { useEffect, useState } from "react"
import { Marker, Popup, useMapEvents } from "react-leaflet"
import { markerIcon } from "./Icon"

export default function MainMapService(){
    const [nowLocation,setNowLocation]=useState<LatLngExpression>({lat:37.5,lng:127})
    const map=useMapEvents({
        click(){
            map.locate()
        },
        locationfound(e){
            console.log(e.latlng)
            setNowLocation(e.latlng)
            // map.flyTo(e.latlng,map.getZoom())
        }
    })


    return(
        <>
            <Marker position={nowLocation} icon={markerIcon}>
                <Popup>나 여깄지롱~~~!!</Popup>
            </Marker>
        </>
    )
}