import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
  const data = useLoaderData();
    // const [data, setData] = useState({});

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/akashrautela')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // },[])

  return (
    <div className='text-center m-4 bg-gray-600 text-white text-3xl'>Github Followers: {data?.followers}
    <img src={data?.avatar_url} width={300} />
    </div>
  )
}

export default Github


export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/akashrautela')
  return response.json();   
}