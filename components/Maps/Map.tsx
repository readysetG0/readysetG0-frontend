"use client"
import { LatLngExpression } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import MainMapService from "./MainMapService";
import { markerIcon } from "./Icon";
import { FaLocationArrow } from "react-icons/fa";

export default function Map(){
   
    const position1:LatLngExpression=[37.5, 127]; //현 좌표값
    const position2:LatLngExpression=[33.3, 126.5]; //테스트 제주도 좌표값

    return(
        <>
            <MapContainer center={position1} zoom={13} style={{ height: '100vh', width: '100%' }}>
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={position2} icon={markerIcon}>
                    <Popup>🌎정상이네 집🌍</Popup>
                </Marker>
                <MainMapService/>
            </MapContainer>
            <button className="absolute bottom-10 right-4 z-[1000] blured-layer text-rsgYellow-primary px-4 py-4 rounded-full shadow-lg active:bg-rsgGreen-primary focus:outline-none flex items-center">
                <FaLocationArrow />
            </button>
        </>
    )
}