import L from 'leaflet'
import { FaLocationArrow } from "react-icons/fa";
import { renderToString } from 'react-dom/server';
import { Angle } from './types';



export const currentLocationmarkerIcon =(angle:Angle)=>{
    const iconHtml=renderToString(<FaLocationArrow size={20}/>)

    const adjustAngle=angle-30//기본 아이콘의 각이 30도 기울여져 있어 조절필요

    return L.divIcon({
    className:"px-16 py-16 rounded-full shadow-lg bg-[#38a169]/[0.15] !flex items-center justify-center text-rsgYellow-primary",
    html:`<div class="px-3 py-3 rounded-full shadow-lg bg-[#38a169]/[0.40]">
    <div class="bg-rsgGreen-accent rounded-full px-1 py-1">
    <div class="bg-rsgGreen-primary rounded-full px-2 py-2" style="transform: rotate(${adjustAngle}deg);">
    ${iconHtml}
    </div>
    </div>
    </div>`,
    iconSize:[150,150]
});}

export const defaultmarkerIcon =new L.Icon({
    iconUrl: '/mapImage/marker-icon.png',
    iconRetinaUrl: '/mapImage/marker-icon-2x.png',
    shadowUrl: '/mapImage/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

