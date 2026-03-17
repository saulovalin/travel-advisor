"use client";

import React, { useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = { width: '100%', height: '100%' };
const libraries: any = ['places'];

export default function Map({ setCoordinates, setBounds, coordinates, places }: any) {
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
    libraries: libraries,
  });

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

  if (!isLoaded) return (
    <div className="h-full w-full flex items-center justify-center bg-gray-200">
      <p className="text-gray-500 font-medium">Carregando mapa...</p>
    </div>
  );

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
        <Marker position={coordinates} icon="http://maps.google.com/mapfiles/ms/icons/blue-dot.png" />

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