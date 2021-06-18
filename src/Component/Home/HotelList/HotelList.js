import React from 'react';
import Star from '../../../CommonComponent/Star/Star';
const HotelList = ({data , handleDetailsHotel}) => {
    return (
                     <div onClick={()=>handleDetailsHotel(data._id)} className="col col-md-6 col-sm-6 my-3 col-12 cursor">
                        <div className="card">
                            <img src={data.img} className="card-img-top img-208" alt="" />
                            <div className="p-2">
                                <p className="text-secondary h5" >{data.name}</p>
                                <p className="text-secondary h6" >{data.details}</p>
                                <p className="text-secondary" > $ {data.perNightPrice} Per Night</p>
                                <p className="mt-2" ><Star /> ({data.rating}) superhost</p>
                            </div>
                        </div>
                    </div>
                    
    );
};

export default HotelList;