import {useEffect, useState} from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(()=>{
        let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;

        fetch(url)
        .then((res) => res.json())
        .then((jsonRes) => setData(jsonRes[currency]))

    }, [currency]);

    console.log(data); //find out which data is getting set into data variable
    
    return data;
}

export default useCurrencyInfo;