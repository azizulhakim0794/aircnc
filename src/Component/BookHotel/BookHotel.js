import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import './BookHotel.css'
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../App';
import Loading from '../../CommonComponent/Loading/Loading';
import childImg from '../../images/ic_child_friendly_48px.png'
import petImg from '../../images/ic_pets_48px.png'
import forbiddenImg from '../../images/forbidden.png'
import smokingImg from '../../images/ic_smoking_rooms_48px.png'
import managerImg from '../../images/manager.jpg'
import PaymentProcess from '../PaymentProcess/PaymentProcess';
const BookHotel = () => {
    let { id } = useParams()
    const cleaningFee = 10
    const serviceFee = 13
    const [bookHotelData, setBookHotelData] = useState({})
    const [reviews, setReviews] = useState('')
    const [whoComing, setWhoComing] = useState('d-none')
    const [pay, setPay] = useState('d-none')
    const [userDataInfo] = useContext(UserContext)
    useEffect(() => {
        axios.get(`https://fierce-chamber-07496.herokuapp.com/hotel/${id}`)
            .then(response => setBookHotelData(response.data))
    }, [id])
    let countDaysMoney = () => {
        return bookHotelData.perNightPrice * userDataInfo.diffDays
    }
    const handleRules = () => {
        if (reviews === 'd-none') {
            setReviews('')
            setWhoComing('d-none')
        }
        if (reviews === '') {
            setReviews('d-none')
            setWhoComing('')
        }
    }
    const handlePays = () => {
        if (whoComing === 'd-none') {
            setWhoComing('')
            setPay('d-none')
        }
        if (whoComing === '') {
            setWhoComing('d-none')
            setPay('')

        }
    }
    return (
        <div className="container-fluid">
            {bookHotelData.name ? <div >
                <p className="user-select-none "><span className="me-4"><span className="h5 me-2"> 1. Review House rules</span> <FontAwesomeIcon icon={faChevronRight} /></span><span className="me-4"><span className="h5 me-2"> 2. Who's coming ?</span> <FontAwesomeIcon icon={faChevronRight} /></span><span className="h5 me-2"> 3. Confirm and pay</span></p>
                <div>
                    <div className="row d-flex user-select-none justify-content-center">
                    <div className="d-flex col-md-6 row">
                            <div>
                                <div className="col-md-10">
                                    <div className="row mt-5">
                                        <p className="col-md-5 h4">{bookHotelData.name}</p>
                                        <img className=" col-md-7 book-hotel-img " src={bookHotelData.img} alt={`${bookHotelData._id + "hotel"}`} />
                                    </div>
                                    <p className="h6"><span className="me-2 air-header"><FontAwesomeIcon icon={faStar} /></span>({bookHotelData.rating} reviews)</p>
                                    <small><b>Date</b></small>
                                    <div className="border p-2 mt-3 col-md-10 d-flex justify-content-around"><span ></span>{userDataInfo.userArrival}<span ><FontAwesomeIcon icon={faArrowRight} /></span><span >{userDataInfo.userDeparture}</span> </div>
                                </div>

                                <div className="col-md-10">
                                    <small><b>Guests</b></small>
                                    <div className="border p-2 mt-3 col-md-10 h5">{userDataInfo.adult} Adult {userDataInfo.child} Child {userDataInfo.babes} Babes</div>
                                </div>
                                {userDataInfo.diffDays ? <div className="col-md-10">
                                    <div className="border-bottom mt-3 col-md-10 d-flex justify-content-around"><p className="">${bookHotelData.perNightPrice}X{userDataInfo.diffDays} nights</p>
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
                            </div>
                        </div>
                        <div className={`col-md-6 mt-5 ${reviews}`}>
                            <p className="h6">{userDataInfo.diffDays} nights in {userDataInfo.userLocation}</p>
                            <div className="row mt-5">

                                <div className="col-md-6 col-sm-6 col-6">
                                    <p className="h4">Check-in :<span className="badge bg-secondary">{userDataInfo.userDeparture}</span> </p>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <p className="h4">Checkout :<span className="badge bg-secondary"> {userDataInfo.userDeparture}</span> </p>
                                </div>
                            </div>
                            <p className="text-secondary border-bottom border-dark border-2  py-4">Self Check-ng with building staff</p>
                            <p className="h4">Things to Keep in mind</p>
                            <div className="mt-5">
                                <div className="row ms-4 m-auto"><p className="p-3 card m-0 things-box col-md-2 col-sm-2 col-2"><img className="thingInImg  col-md-2 col-sm-2 col-4" src={childImg} alt="childImg" /></p> <span className=" h6 col-md-10 col-sm-10 col-8 m-auto">Suitable for Children and infants</span></div>
                                <div className="row ms-4 m-auto mt-3"><p className="p-3 card m-0 things-box"><img className="thingInImg col-md-2 col-sm-2 col-4" src={petImg} alt="childImg" /></p> <span className=" h6 col-md-10 col-sm-10 col-8 m-auto">Pets allowed</span></div>
                                <div className="row ms-4 m-auto mt-3"><p className="p-3 card m-0 things-box"><img className="thingInImg col-md-2 col-sm-2 col-4" src={forbiddenImg} alt="childImg" /></p> <span className=" h6 col-md-10 col-sm-10 col-8 m-auto">No parties and Events</span></div>
                                <div className="row ms-4 m-auto my-3 "><p className="p-3 card m-0 things-box"><img className="thingInImg col-md-2 col-sm-2 col-4" src={smokingImg} alt="childImg" /></p> <span className=" h6 col-md-10 col-sm-10 col-8 m-auto">Smoking in allowed</span></div>
                            </div>
                            <div className="dropdown mb-4 ms-4">
                                <button className="btn text-primary h6 dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                    Read more
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                    <p className="p-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt praesentium magni doloribus aliquid saepe vero harum aut quidem dolorum architecto blanditiis facilis voluptatem officia provident excepturi quae autem, vel sint nesciunt dolorem distinctio earum voluptatibus. Blanditiis odio quae voluptate facere commodi necessitatibus neque ratione dolorem.</p>
                                </div>
                            </div>
                            <div className="my-4 ms-4 text-center"><button onClick={handleRules} className="btn btn-air airBtn text-white mb-3 col-10 col-sm-10">Agree and Continue</button></div>
                        </div>
                        <div className={`col-md-6 mt-5 ${whoComing}`}>
                            <p className="h6">Traveling for Work</p>
                            <div className="row mt-5">
                                <div className="col-md-8">
                                    <p className="text-secondary">Say Hello to your host <br /> Let Abdul know about your Self ans why you are Coming ?</p>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <img src={managerImg} className="img-fluid rounded-50" alt="ManagerImage" /> Abdul
                            </div>
                            </div>
                            <textarea className="form-control" placeholder="write your description for help yourself"></textarea>
                            <div className="my-4  text-center"><button onClick={handlePays} className="btn btn-air airBtn text-white col-10 col-sm-10 mb-3">Continue</button></div>
                        </div>
                        <div className={`col-md-6 mt-5 ${pay}`}>
                            <PaymentProcess/>
                        </div>
                    </div>
                </div>
            </div> : <Loading />}
        </div>
    );
};

export default BookHotel;