import React, { useContext, useEffect, useState } from 'react';
import buildingImg from './../../images/building.jpeg'
import managerImg from './../../images/manager.jpg'
import Loading from '../../CommonComponent/Loading/Loading';
import home from './../../images/home.png'
import person from './../../images/single-01.png'
import check from './../../images/checkmark-square-2.png'
import spray from './../../images/solid.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import AirCncNavHome from '../../CommonComponent/AirCncNavHome/AirCncNavHome';
import { UserContext } from '../../App';
import { useHistory, useParams } from 'react-router';
import axios from 'axios';
import Footer from '../../CommonComponent/Footer/Footer';
const HomeHotelDetails = () => {
    let { id } = useParams()
    const cleaningFee = 10
    const serviceFee = 13
    const [hotelDetailsData, setHotelDetailsData] = useState({})
    const [userDataInfo] = useContext(UserContext)
    const history = useHistory()
    useEffect(() => {
        axios.get(`https://fierce-chamber-07496.herokuapp.com/hotel/${id}`)
            .then(response => setHotelDetailsData(response.data))
    }, [id])
    const handleForReserve = () => {
        if (!userDataInfo.isSignedIn) {
            history.push('/login')
        }
        if (!userDataInfo.isLocationValid) {
            history.push('/home')
        }
        else {
            history.push(`/bookHotel/${id}`)
        }
    }
    return (
        <div>
            {hotelDetailsData.name ? <div>
                <AirCncNavHome />
                <div className="container-fluid">
                    <div className="row">
                        <div className="d-flex justify-content-center">
                            <div className="col-md-6"><img className="img-responsive h-500 w-100 img-fluid" src={buildingImg} alt="" /></div>
                            <div className="col-md-6"><img className="img-responsive h-500 w-100 img-fluid" src={hotelDetailsData.img} alt="hotel" /></div>
                        </div>
                    </div>
                </div>
                <div className="container mt-4">

                    <div className="d-flex justify-content-center row">
                        <div className="col-md-6 mt-3 row d-flex justify-content-between">
                            <div className="col-md-8">
                                <h2 className="">{hotelDetailsData.name}</h2>
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
                                    <p className="h4">${hotelDetailsData.perNightPrice}/<span className="text-secondary">Night</span></p>
                                    <p className="h6"><span className="me-2 air-header"><FontAwesomeIcon icon={faStar} /></span>({hotelDetailsData.rating} reviews)</p>
                                </div>

                                <div className="col-md-10">
                                    <small><b>Guests</b></small>
                                    <div className="border p-2 mt-3 col-md-10 h5">{userDataInfo.adult} Adult {userDataInfo.child} Child {userDataInfo.babes} Babes</div>
                                </div>
                                {userDataInfo.diffDays ? <div className="col-md-10">
                                    <div className="border-bottom mt-3 col-md-10 d-flex justify-content-around"><p className="">${hotelDetailsData.perNightPrice}X{userDataInfo.diffDays} nights</p>
                                        <p className="">{hotelDetailsData.perNightPrice}</p>
                                    </div>
                                </div> : ''}
                                <div className="col-md-10">
                                    <div className=" mt-3 col-md-10 d-flex justify-content-around"><p className="">Adult</p>
                                        <p className="">${hotelDetailsData.adultPrice}</p></div>
                                </div>
                                <div className="col-md-10">
                                    <div className=" mt-3 col-md-10 d-flex justify-content-around"><p className="">Child</p>
                                        <p className="">${hotelDetailsData.childPrice}</p></div>
                                </div>
                                <div className="col-md-10">
                                    <div className=" mt-3 col-md-10 d-flex justify-content-around"><p className="">Baby</p>
                                        <p className="">${hotelDetailsData.babyPrice}</p></div>
                                </div>
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
                                        <p className="">${cleaningFee + serviceFee + Number(hotelDetailsData.adultPrice) + Number(hotelDetailsData.childPrice) + Number(hotelDetailsData.babyPrice)}</p></div>
                                </div>
                                <div className="col-md-10 col-sm-10 col-10">
                                    <button className="btn btn-air airBtn col-md-10 mb-3 text-white" data-bs-toggle="modal" data-bs-target="#exampleModal"  >Reserve</button>
                                    <br />
                                    <p className="text-secondary col-md-10 text-center">You Won't be Change Yet.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <Footer />
            </div> : <Loading />}

            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">!!!Notice</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            To Book This hotel You must fill the home page's requerments and click on the search button the many of hotel you search this one and then select and book this hotel. <br/> <br/>
                            Thank You
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-air" data-bs-dismiss="modal" onClick={handleForReserve}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomeHotelDetails;