"use client";

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import List from '@/components/List';
import Map from '@/components/Map';
import { useFetchPlaces } from '@/hooks/useFetchPlaces';

export default function Home() {
  const [coordinates, setCoordinates] = useState({ lat: -16.6869, lng: -49.2648 });
  const [bounds, setBounds] = useState<any>(null);
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');

  const { places, isLoading } = useFetchPlaces(bounds, type);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    const filtered = places?.filter((place: any) => Number(place.rating) > Number(rating));
    setFilteredPlaces(filtered?.length ? filtered : places);
  }, [rating, places]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  return (
    <main className="h-screen w-full flex flex-col bg-stone-50 font-sans text-sky-950 overflow-hidden">
      <Header />

      <div className="flex-1 flex flex-col md:flex-row overflow-hidden relative">

        <div className={`
          ${showMap ? 'hidden' : 'flex'} 
          md:flex w-full md:w-100 lg:w-112.5 p-4 md:p-6
          bg-stone-50 border-r border-sky-100 z-10 shadow-lg 
          overflow-y-auto h-full
        `}>
          <List
            places={filteredPlaces}
            isLoading={isLoading}
            type={type} setType={setType}
            rating={rating} setRating={setRating}
          />
        </div>

        <div className={`
          ${!showMap ? 'hidden' : 'flex'} 
          md:flex flex-1 items-center justify-center relative h-full
        `}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={filteredPlaces}
          />
        </div>

        <button
          onClick={() => setShowMap(!showMap)}
          className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-100 bg-sky-950 text-white px-6 py-3 rounded-full shadow-2xl font-bold flex items-center gap-2 active:scale-95 transition-transform"
        >
          {showMap ? (
            <><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg> Ver Lista</>
          ) : (
            <><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A2 2 0 013 15.487V6a2 2 0 011.106-1.789l6.522-3.26a2 2 0 011.744 0l6.522 3.26A2 2 0 0121 6v9.487a2 2 0 01-1.106 1.789L14.447 20a2 2 0 01-1.553 0L9 20z" /></svg> Ver Mapa</>
          )}
        </button>
      </div>
    </main>
  );
}