import React, { useEffect, useState } from "react";


var REQUEST_URL = "https://api.up.com.au/api/v1/transactions";
var STORAGE_KEY =
  "Bearer up:yeah:UwoTA9D94NS8PwnSsfYCEkqwDqEdhSOJXlRqQIMS6b9UONH0L9B6lcAqS0pFd3770hxBxkut9laaaR2llyObIU9pZLvl5lCqiIyqv3e60LLBBvyNUvcTU8gjhPVCyhbk";

function retrieveApi(link) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(link, {
      headers: {
        Authorization: STORAGE_KEY,
      },
    })
      // fetch("https://reactnative.dev/movies.json")
      .then((response) => response.json())
      .then((json) => {
        setData(json.data);
        console.log(json.data);
      })

      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

}

export default retrieveApi;
