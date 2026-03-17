import { useState, useEffect } from 'react';

export const useFetchPlaces = (bounds: any, type: string) => {
  const [places, setPlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!bounds || !bounds.sw || !bounds.ne) return;

    const fetchPlaces = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary?bl_latitude=${bounds.sw.lat}&tr_latitude=${bounds.ne.lat}&bl_longitude=${bounds.sw.lng}&tr_longitude=${bounds.ne.lng}`, {
          method: 'GET',
          headers: {
            'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY || '',
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
          }
        });
        
        const data = await response.json();
        const validPlaces = data.data?.filter((place: any) => place.name && place.num_reviews > 0);
        setPlaces(validPlaces || []);
        
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlaces();
  }, [bounds, type]);

  return { places, isLoading };
};