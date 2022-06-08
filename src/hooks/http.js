import { useEffect, useState } from "react";
//
export const useHttp = (url) => {
  const [isLoading, setIsloading] = useState(true);
  const [fetchData, setFetchData] = useState(null);
  useEffect(() => {
    // Method I to call async call
    // fetch(url)
    //   .then((response) => {
    //     if (!response.ok) {
    //       return new Error("Failed to fetch");
    //     }
    //     setIsloading(false);
    //     return response.json();
    //   })
    //   .then((data) => setFetchData(data))
    //   .catch((err) => {
    //     setIsloading(false);
    //     console.error(err);
    //   });

    // Method 2 to call async call
    // const ajax = async () => {
    //   const responce = await fetch(url);
    //   if (!responce.ok) {
    //     setIsloading(false);
    //     return new Error("Failed to fetch");
    //   }
    //   const data = await responce.json();
    //   if (data) {
    //     setIsloading(false);
    //     setFetchData(data);
    //   }
    //   console.log(data);
    // };
    // ajax();

    // Method 3 to call async call
    (async () => {
      const responce = await fetch(url);
      if (!responce.ok) {
        setIsloading(false);
        return new Error("Failed to fetch");
      }
      const data = await responce.json();
      if (data) {
        setIsloading(false);
        setFetchData(data);
      }
      console.log(data);
    })();
    return () => {
      console.log("API Done");
    };
  }, [url]);

  return [isLoading, fetchData];
};
