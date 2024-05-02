import { useState, useEffect } from 'react';

export const useEndpoint = (url: string) => {
  const [info, setInfo] = useState([]);
  const getInfo = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setInfo(data.results);
      console.log(data.results);
    } catch (error: any) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getInfo();
  }, []);

  return info;
};
