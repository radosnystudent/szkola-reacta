import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "./styles/userMap.scss";

export default function UserMap({ user }) {
    const latitude = user.location.coordinates.latitude;
    const longitude = user.location.coordinates.longitude;

    const position = [parseFloat(latitude), parseFloat(longitude)];

    return (
        <MapContainer
            center={position}
            zoom={4}
            scrollWheelZoom={false}
            className="map-container"
        >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    <span>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </span>
                </Popup>
            </Marker>
        </MapContainer>
    );
}
