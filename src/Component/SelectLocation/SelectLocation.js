import React, { useContext, useEffect, useState } from 'react';
import AirCncNavHome from '../../CommonComponent/AirCncNavHome/AirCncNavHome';
import './SelectLocation.css'
import { UserContext } from '../../App';
import axios from 'axios';
import LocationHotelList from './LocationHotelList/LocationHotelList';
import { useHistory } from 'react-router';
import Loading from '../../CommonComponent/Loading/Loading';

const SelectLocation = () => {

    const [userDataInfo] = useContext(UserContext)
    const [locationData, setLocationData] = useState([])
    const history = useHistory()
    // let fetchingFunction= ()=>{
    //     // fetching
    //   }
    useEffect(() => {

        axios.get('https://fierce-chamber-07496.herokuapp.com/hotel')
            .then(res => {
                const hotelsData = res.data;
                setLocationData(hotelsData)
            })
            // return () => {
            //     fetchingFunction= null
            // }
    }, [])

    const handleHotelDetails = (e) => {
        history.push(`/hotelDetails/${e}`)
    }
    return (
        <div>
           {locationData.length ? <div>
                <AirCncNavHome />

                <div className="container-fluid">
                    <div className="">
                        <p className="text-secondary h6">Search Your best Option</p>
                        <p className=" h4">Stay any where in {!userDataInfo.userLocation ? 'Bangladesh' : userDataInfo.userLocation} {!userDataInfo.diffDays ? '' : userDataInfo.diffDays} {!userDataInfo.diffDays ? '' : 'days'}</p>
                        <div className="buttons"> <button className="btn btn-outline-secondary mx-1 my-3 round">Cancellation flexibility</button><button className="btn btn-outline-secondary round mx-1 my-3">Price</button><button className="btn btn-outline-secondary round mx-1 my-3">Instant Book</button><button className="btn btn-outline-secondary round mx-1 my-3">Type of Price</button></div>
                    </div>
                </div>

                <div className="container-fluid row mt-5 m-auto">

                    <div className="col-md-6 col h-700 overFlow-scroll">
                        {locationData.map(data => <LocationHotelList data={data} handleHotelDetails={handleHotelDetails} key={data._id} />)
                           }
                    </div>
                    <div className="col-md-6 mt-5 ">
                    <iframe title="My Daily Marathon Tracker" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.8223908687!2d90.27923710646989!3d23.780887457084543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1622509078741!5m2!1sen!2sbd" style={{width:"100%", height:"600px" ,style:"border:0"}} allowFullScreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </div> : <Loading/>}
            
        </div>

    );
};

export default SelectLocation;
