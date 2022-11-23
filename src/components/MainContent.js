import React from 'react';
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt"

export default function MainContent(data){
    return (
        <div className='content'>
            <img src={data.imageUrl} alt='location'/>
            <div className='detail'>
                <h4 className='location'><FaMapMarkerAlt className='marker-icon'/>{data.location}<a href={data.googleMapsUrl}className='googlemap-url'>View on Google Maps</a></h4>
                <h1 className='title'>{data.title}</h1>
                <h3 className='date'>{data.startDate} - {data.endDate}</h3>
                <p className='description'>{data.description}</p>
            </div>
        </div>
    )
    
}