import { LatLngExpression, PathOptions } from "leaflet";
import { Polyline } from "react-leaflet";

const pathOptions:PathOptions={
    color:"#38A169",
    weight:5,
    opacity:0.7
}

export default function TrackingLine({positionList}:{positionList:LatLngExpression[]}){
    return(
        <>
            <Polyline positions={positionList} pathOptions={pathOptions} />
        </>
    )
}