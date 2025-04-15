import { useState, useEffect } from "react";

export const useFetch = (url) => {

  const [data, setData] = useState(null);
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);
  const [id,setID] = useState(null)

  const httpConfig = (data,method) => {
    if(method === "POST"){
        setConfig({
            method,
            headers:{
                "Content-type" : "application/json"
            },
            body: JSON.stringify(data)
        });
        setMethod(method)
    }
    if(method === "DELETE"){
        setConfig({
            method,
            headers:{
                "Content-type" : "application/json"
            },
        });
        setMethod(method)
        setID(data)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();

      setData(data);
    };

    fetchData();
  }, [url, callFetch]);

  useEffect(() => {
    const httpRequest = async () => {
      if (method === "POST") {
        let fetchOptions = [url, config];

        const res = await fetch(...fetchOptions);

        const json = await res.json();

        setCallFetch(json);
      }

      if(method === "DELETE") {
        
        const deleteURl = `${url}/${id}`

        const res = await fetch(deleteURl,config)

        const json = await res.json()

        setCallFetch(json)
      }

    };


    httpRequest();
  }, [config, method, url]);
  

  return { data , httpConfig};
};
