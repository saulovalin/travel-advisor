import { useState, useEffect } from 'react';

export const useGeolocation = () => {
  const [coordinates, setCoordinates] = useState({ lat: -19.9166813, lng: -43.9344931 });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      },
      (error) => {
        console.error("Erro ou permissão negada para geolocalização:", error);
      }
    );
  }, []);

  return { coordinates, setCoordinates };
};