import L from 'leaflet'

export const markerIcon =new L.Icon({
    iconUrl: '/mapImage/marker-icon.png',
    iconRetinaUrl: '/mapImage/marker-icon-2x.png',
    shadowUrl: '/mapImage/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});
