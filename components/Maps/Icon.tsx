import L from 'leaflet'
import { FaLocationArrow } from "react-icons/fa";
import { IoIosCafe } from "react-icons/io";
import { renderToString } from 'react-dom/server';
import { MarkerType } from './utils/types';




export const currentLocationmarkerIcon =()=>{
    const iconHtml=renderToString(<FaLocationArrow size={20}/>)

    // const adjustAngle=angle-30//기본 아이콘의 각이 30도 기울여져 있어 조절필요

    return L.divIcon({
    className:"px-16 py-16 rounded-full shadow-lg bg-[#38a169]/[0.15] !flex items-center justify-center text-rsgYellow-primary",
    html:`<div class="px-3 py-3 rounded-full shadow-lg bg-[#38a169]/[0.40]">
    <div class="bg-rsgGreen-accent rounded-full px-1 py-1">
    <div class="bg-rsgGreen-primary rounded-full px-2 py-2" style="transform:rotate(30deg);">
    ${iconHtml}
    </div>
    </div>
    </div>`,
    iconSize:[150,150]
});}

export const defaultmarkerIcon =new L.Icon({
    iconUrl: '/mapImage/marker-icon.png',
    iconSize: [60, 70],
    iconAnchor: [12, 72],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

export const makeMarkerIcon=({markerType}:MarkerType)=>{
    const iconHtml=renderToString(<IoIosCafe size={25}/>)

    return L.divIcon({
    className:"bg-transparent border-none drop-shadow-lg ",
    html:` <div class="relative"><div class="w-10 h-[47px]" style="filter: drop-shadow(0px 4px 4px rgba(0,0,0,0.25));">
      <svg
        width="50"
        height="57"
        viewBox="0 0 40 47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="absolute"
        preserveAspectRatio="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M33.2291 35C37.3812 31.3353 40 25.9735 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 25.9735 2.61877 31.3353 6.77088 35H6.74859L20.3585 47L33.4138 35H33.2291Z"
          fill="white"
          fill-opacity="0.51"
        ></path>
      </svg>
      <div class="w-[42px] h-[42px] rounded-full  z-[290] absolute left-1 top-1 bg-rsgOrange-primary !flex items-center justify-center text-white">
          <div class=" absolute z-[300] ">
            ${iconHtml}
          </div>
      </div>
    </div></div>`,
iconSize:[60,70],
iconAnchor: [21, 60], // 아이콘의 하단 중앙을 마커 위치로 맞춤
popupAnchor: [1, -34]
})}

