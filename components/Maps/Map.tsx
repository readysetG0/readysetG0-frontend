'use client'
import { LatLngExpression } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from 'leaflet'

export default function Map(){
    const markerIcon =new L.Icon({
        iconUrl: '/mapImage/marker-icon.png',
        iconRetinaUrl: '/mapImage/marker-icon-2x.png',
        shadowUrl: '/mapImage/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
    });

    const position:LatLngExpression=[37.5, 127]; //현 좌표값
    return(
        <>
            <MapContainer center={position} zoom={13} style={{ height: '100vh', width: '100%' }}>
                <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={position} icon={markerIcon}>
                    <Popup>🌎테스트로 지도를 띄워보자🌍</Popup>
                </Marker>
            </MapContainer>
        </>
    )
}