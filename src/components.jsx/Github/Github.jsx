import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
     const data = useLoaderData()


     // Below data is used by using useeffect and use state method to call but we are using loader so we can optimize the code by hovering it 

    // const[ data, setData] = useState([])

    // useEffect (()=> {
    //     fetch('https://api.github.com/users/Prakash22-code')
    //     .then(Response=> Response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)
            
    //     })
    // }, [])
    

  return (
    <div className=' text-center m-4 bg-gray-700 text-white p-4  text-3xl '>
      Github Followers : {data.followers}
      <img src={data.avatar_url} alt="Git Picture URL " width= {300}/>

    </div>
  )
}

export default Github

export const  githubInfoLoader = async ()=>{
   const response = await fetch('https://api.github.com/users/Prakash22-code')
   return response.json()

}


