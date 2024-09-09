'use client'
import { LatLngExpression } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function Map(){
    const position:LatLngExpression=[51.505, -0.09]; //현 좌표값
    return(
        <>
            <MapContainer center={position} zoom={13} style={{ height: '100vh', width: '100%' }}>
                <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={position}>
                    <Popup>🌎테스트로 지도를 띄워보자🌍</Popup>
                </Marker>
            </MapContainer>
        </>
    )
}