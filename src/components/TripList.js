import React, { useState} from 'react'
import {useFetch} from '../hooks/useFetch' // default export kroge toh curly brace nhi lagana
// adding styles here
import './Triplist.css'
export default function TripList () {
    const [url,setUrl] = useState('http://localhost:3000/trips')
    const {data,Ispending,error} = useFetch(url)
  return (
    <div className='trip-list'>
        <h2>TripList</h2>
        {Ispending && <div> Loading...</div>}
        {error && <div>{error}</div>}
        <ul>
            {
                data && data.map(trip=>(
                    <li key={trip.id}>
                        <h3>{trip.title}</h3>
                        <p>{trip.price}</p>
                    </li>
                ))
            }
        </ul>
        <div className="filters">
            <button onClick={()=>setUrl('http://localhost:3000/trips?loc=europe')}>
                European Trips
            </button>
            <button onClick={()=>setUrl('http://localhost:3000/trips')}>
                All trips

            </button>

        </div>
    </div>
  )
}

