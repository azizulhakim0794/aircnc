import React from 'react';
import Star from '../../../CommonComponent/Star/Star';
import './LocationHotelList.css'
const LocationHotelList = ({data , handleHotelDetails}) => {
    return (
        <div className="col col-md-12 col-sm-12 my-3 col-12 cursor" onClick={() => handleHotelDetails(data._id)}>
        <div className="card my-3">
        <div className="row p-2">
            <div className="col-md-6 mt-1"><img className="w-100 h-100 rounded" src={data.img} alt={data._id}/></div>
            <div className="col-md-6 mt-1">
                <h5>{data.name}</h5>
                    <Star /><span> ({data.rating})</span>
                    <p className="text-secondary">{data.details}</p>
                    <p className="text-secondary">${data.perNightPrice} Per Night Price</p> 
            </div>
        </div>
    </div>
    </div>
    );
};

export default LocationHotelList;