"use client";

import React, { useState } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

const containerStyle = { width: '100%', height: '100%' };

export default function Map({ setCoordinates, setBounds, coordinates, places }: any) {
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const handleMapChange = () => {
    if (map) {
      const newBounds = map.getBounds();
      const center = map.getCenter();
      
      if (newBounds && center) {
        setCoordinates({ lat: center.lat(), lng: center.lng() });
        setBounds({
          ne: { lat: newBounds.getNorthEast().lat(), lng: newBounds.getNorthEast().lng() },
          sw: { lat: newBounds.getSouthWest().lat(), lng: newBounds.getSouthWest().lng() }
        });
      }
    }
  };

  return (
    <div className="h-full w-full">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={coordinates}
        zoom={14}
        options={{ disableDefaultUI: true, zoomControl: true }}
        onLoad={(mapInstance) => {
          setMap(mapInstance);
          setTimeout(() => handleMapChange(), 500); 
        }}
        onDragEnd={handleMapChange}
        onZoomChanged={handleMapChange}
      >
        <Marker position={coordinates} />

        {places?.map((place: any, i: number) => (
          place.latitude && place.longitude ? (
            <Marker 
              key={i} 
              position={{ lat: Number(place.latitude), lng: Number(place.longitude) }} 
            />
          ) : null
        ))}
      </GoogleMap>
    </div>
  );
}