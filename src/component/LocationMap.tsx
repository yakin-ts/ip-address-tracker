import React,{useEffect} from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import {images} from '../constants/images'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const ChangeView = ({ center, zoom }) => {
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

interface LocationMapProps {
    position: number[];
    zoom: number;
  }

const LocationMap: React.FC<LocationMapProps> = ({position, zoom}) => {
    

    // Update position and zoom based on your requirements
    // setPosition([newLat, newLng]);
    // setZoom(newZoom);

    return (
            <MapContainer center={position} zoom={zoom} scrollWheelZoom={false} className='w-full h-3/5 z-0'>
                <ChangeView center={position} zoom={zoom} />
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={blackIcon}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
    )
}

export default LocationMap