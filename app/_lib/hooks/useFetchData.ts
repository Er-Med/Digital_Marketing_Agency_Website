import { useState, useEffect } from 'react';
import { baseUrl } from '../data';

const useFetchData = (url: string) => {
 const [data, setData] = useState<any>(null);
 const [loading, setLoading] = useState<boolean>(true);
 const [error, setError] = useState<string | null>(null);

 useEffect(() => {
  const fetchData = async () => {
   try {
    const response = await fetch(baseUrl + url);
    const result = await response.json();
    setData(result);
   } catch (err: any) {
    setError(err.message);
   } finally {
    setLoading(false);
   }
  };

  fetchData();
 }, [url]);

 return { data, loading, error };
};

export default useFetchData;