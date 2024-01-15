import React,{useEffect} from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { LocationMapProps, ChangeViewProps } from "../types";
import {images} from '../constants/images'
//@ts-ignore
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'


const ChangeView = ({ center, zoom }: ChangeViewProps) => {
    const map = useMap();
    useEffect(() => {
        map.setView(center, zoom);
    }, [center, zoom, map]);
    return null;
}

const blackIcon = L.icon({
    iconUrl: images.iconLocation,
    iconSize: [36, 46],
    iconAnchor: [23, 56],
    popupAnchor: [1, -34],
});



const LocationMap: React.FC<LocationMapProps> = ({position, zoom}) => {
    

    // Update position and zoom based on your requirements
    // setPosition([newLat, newLng]);
    // setZoom(newZoom);


    return (
            <MapContainer className='w-full h-full z-0'>
                <ChangeView center={[position.latitude, position.longitude]} zoom={zoom} />
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* @ts-ignore */}
                <Marker position={[position.latitude, position.longitude]} icon={blackIcon}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
    )
}

export default LocationMap