import {useEffect, useState} from "react";

export const useRestApi = ({url}: { url: string }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error:', error);
      }
      setLoading(false)
    };

    void fetchData();
  }, [url]); // Empty dependency array means it only runs once when the component mounts

  return {
    data,
    loading
  }
}