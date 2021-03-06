import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router';
import AirCncNavHome from '../../CommonComponent/AirCncNavHome/AirCncNavHome';
import './HotelDetails.css'
import { UserContext } from '../../App';
import buildingImg from './../../images/building.jpeg'
import managerImg from './../../images/manager.jpg'
import Loading from '../../CommonComponent/Loading/Loading';
import home from './../../images/home.png'
import person from './../../images/single-01.png'
import check from './../../images/checkmark-square-2.png'
import spray from './../../images/solid.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faStar } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../CommonComponent/Footer/Footer';

const HotelDetails = () => {
    let { id } = useParams()
    const cleaningFee = 10
    const serviceFee = 13
    const [hotelDeData, setHotelDeData] = useState({})
    const [userDataInfo] = useContext(UserContext)
    const history = useHistory()
    useEffect(() => {
        axios.get(`https://fierce-chamber-07496.herokuapp.com/hotel/${id}`)
            .then(response => setHotelDeData(response.data))
    }, [id])
    const countDaysMoney = () => {
        return hotelDeData.perNightPrice * userDataInfo.diffDays
    }
    const handleBookHotel = () => {
        history.push(`/bookHotel/${id}`)
    }
    return (
        <div>
            {hotelDeData.name ? <div>
                <AirCncNavHome />
                <div className="container-fluid">
                    <div className="row">
                        <div className="d-flex justify-content-center">
                            <div className="col-md-6"><img className="img-responsive h-500 w-100 img-fluid" src={buildingImg} alt="" /></div>
                            <div className="col-md-6"><img className="img-responsive h-500 w-100 img-fluid" src={hotelDeData.img} alt="hotel" /></div>
                        </div>
                    </div>
                </div>
                <div className="container mt-4">

                    <div className="d-flex justify-content-center row">
                        <div className="col-md-6 mt-3 row d-flex justify-content-between">
                            <div className="col-md-8">
                                <h2 className="">{hotelDeData.name}</h2>
                            </div>
                            <div className="col-md-4">
                                <img src={managerImg} className="img-fluid rounded-50" alt="ManagerImage" />
                            </div>
                            <p className="text-secondary">Dhaka,Bangladesh</p>
                            <p className="text-secondary">4 Guests  2 Bedroom  2 Beds  2 Bath</p>
                            <div className="text-secondary">
                                <div><p className="h6"><img className="titleImg" src={home} alt="homePng" /> Entire Home</p><span>You'll have the Condominium yourself</span></div><br />
                                <div><p className="h6"><img className="titleImg rounded" src={check} alt="checkPng" /> Self Check-in</p><span>You can check in the doorman</span></div><br />
                                <div><p className="h6"><img className="titleImg" src={spray} alt="sprayPng" /> Sparking Clean</p><span>10 recent guest said this place was Sparking Clean</span></div><br />
                                <div><p className="h6"><img className="titleImg" src={person} alt="personPng" /> Rowdra is a Superhosts</p><span>Superhosts are experienced,highly rated host who are committed to providing great Says for Guests</span></div><br /><br />
                                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolore sint magni earum odio facere omnis, repudiandae fuga quia eligendi, eius hic nulla deserunt rem minus voluptate vel repellendus maiores! Quisquam voluptatum nihil tempora consequatur fuga doloremque amet debitis voluptate nesciunt, nam vel tenetur accusantium quae quod maxime blanditiis eaque dolorem minus ducimus numquam laborum ab doloribus? Modi, minima enim.</p>
                                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolore sint magni earum odio facere omnis, repudiandae fuga quia eligendi, eius hic nulla deserunt rem minus voluptate vel repellendus maiores! Quisquam voluptatum nihil tempora consequatur fuga doloremque amet debitis voluptate nesciunt, nam vel tenetur accusantium quae quod maxime blanditiis eaque dolorem minus.</p>
                            </div>
                        </div>
                        <div className="d-flex col-md-6 row">
                            <div>
                                <div className="col-md-10">
                                    <p className="h4">${hotelDeData.perNightPrice}/<span className="text-secondary">Night</span></p>
                                    <p className="h6"><span className="me-2 air-header"><FontAwesomeIcon icon={faStar} /></span>({hotelDeData.rating} reviews)</p>
                                    <small><b>Date</b></small>
                                    <div className="border p-2 mt-3 col-md-10 d-flex justify-content-around"><span ></span>{userDataInfo.userArrival}<span ><FontAwesomeIcon icon={faArrowRight} /></span><span >{userDataInfo.userDeparture}</span> </div>
                                </div>

                                <div className="col-md-10">
                                    <small><b>Guests</b></small>
                                    <div className="border p-2 mt-3 col-md-10 h5">{userDataInfo.adult} Adult {userDataInfo.child} Child {userDataInfo.babes} Babes</div>
                                </div>
                                {userDataInfo.diffDays ? <div className="col-md-10">
                                    <div className="border-bottom mt-3 col-md-10 d-flex justify-content-around"><p className="">${hotelDeData.perNightPrice}X{userDataInfo.diffDays} nights</p>
                                        <p className="">${countDaysMoney()}</p>
                                    </div>
                                </div> : ''}
                                <div className="col-md-10">
                                    <div className=" mt-3 col-md-10 d-flex justify-content-around"><p className="">Cleaning Fee</p>
                                        <p className="">${cleaningFee}</p></div>
                                </div>
                                <div className="col-md-10">
                                    <div className="border-bottom mt-3 col-md-10 d-flex justify-content-around"><p className="">Service Fee</p>
                                        <p className="">${serviceFee}</p></div>
                                </div>
                                <div className="col-md-10">
                                    <div className=" mt-3 col-md-10 h6 d-flex justify-content-around"><p className="">Total</p>
                                        <p className="">${serviceFee + cleaningFee + countDaysMoney()}</p></div>
                                </div>
                                <div className="col-md-10">
                                    <div className="text-center"><button className="btn btn-air airBtn col-md-10 col-sm-10 col-10 mb-3 text-white" onClick={handleBookHotel}>Reserve</button></div>
                                    <br />
                                    <p className="text-secondary col-md-10 text-center">You Won't be Change Yet.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <Footer/>
            </div> : <Loading />}
        </div>
    );
};

export default HotelDetails;