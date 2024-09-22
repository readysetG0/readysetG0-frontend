import { LatLngExpression } from "leaflet";
import { useEffect } from "react";
import { useMap } from "react-leaflet";

export default function UpdateMapCenter({currentPosition}:{currentPosition:LatLngExpression}){
    const map=useMap()

    useEffect(()=>{
        if(currentPosition){
            map.setView(currentPosition,map.getZoom())
        }
    },[currentPosition,map])
    return null
}