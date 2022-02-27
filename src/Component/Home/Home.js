import React, { useContext, useEffect, useState } from 'react';
import AirCncNavHome from '../../CommonComponent/AirCncNavHome/AirCncNavHome';
import './Home.css'
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from '../../App';
import axios from 'axios';
import HotelList from './HotelList/HotelList';
// import Loading from '../../CommonComponent/Loading/Loading';
import Footer from '../../CommonComponent/Footer/Footer';
// import Fade from 'react-reveal/Fade';
// import homePng from '../../images/hotel-home.jpg';
import HomeHeader from './../HomeHeader/HomeHeader';
import HomeExperience from './../HomeExperience/HomeExperience';
const Home = () => {
    const [userDataInfo, setUserDataInfo] = useContext(UserContext)
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)
    const [count3, setCount3] = useState(0)
    const [bedRoom, setBedRoom] = useState(0)
    const [hotels, setHotels] = useState([])
    const [differenceDays, setDifferenceDays] = useState(0)
    const [userTime, setUserTime] = useState({
        arrival: '',
        departure: ''
    })
    const [userSearchLocation, setUserSearchLocation] = useState({})
    const history = useHistory()
    const location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };
    useEffect(() => {
        axios.get('https://fierce-chamber-07496.herokuapp.com/hotel')
            .then(res => {
                const hotelsData = res.data;
                setHotels(hotelsData)
            })
    }, [])

    const diffDay = (date1, date2) => Math.ceil(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24));

    const handleLocation = () => {
        history.push('/location')
    }
    const handleCountPlus = (value, setValue) => {
        if (value < 10) {
            setValue(value + 1)
        }
    }
    const handleCountMinus = (value, setValue) => {
        if (value > 0) {
            setValue(value - 1)
        }
    }
    const handleInputSearchBlur = (e) => {
        const userInfoSearch = { ...userSearchLocation }
        userInfoSearch[e.target.name] = e.target.value
        setUserSearchLocation(userInfoSearch)

    }
    useEffect(() => {
        if (userTime.arrival && userTime.departure) {
            setDifferenceDays(diffDay(new Date(userTime.arrival), new Date(userTime.departure)))
        }
    }, [userTime.arrival, userTime.departure])
    const handleCountDaysChange = (e) => {
        const userInfo = { ...userTime }
        userInfo[e.target.name] = e.target.value
        setUserTime(userInfo)
    }
    if (userDataInfo.userLocation === 'Sundarbans') {
        history.replace(from);

    }
    const handleSubmit = (e) => {
        if (userTime.arrival === userTime.departure) {
            alert('Please select departure date again')
        }
        // all UserDataInfo Set
        if (count1 >= 1) {
            if (bedRoom >= 1) {
                const newUserData = { ...userDataInfo }
                newUserData.userArrival = userTime.arrival
                newUserData.userDeparture = userTime.departure
                newUserData.diffDays = differenceDays
                newUserData.userLocation = userSearchLocation.searchLocation
                newUserData.adult = count1
                newUserData.child = count2
                newUserData.babes = count3
                newUserData.bookRoom = bedRoom
                newUserData.isLocationValid = true
                setUserDataInfo(newUserData)
                if (differenceDays >= 1) {
                    handleLocation()
                }
            }
            else {
                alert('Your selection must be 1 Bed Room')
            }
        }

        else {
            alert('Your selection must be Adult First')
        }

        e.preventDefault()
    }
    const handleDetailsHotel = (e) => {
        history.push(`/details/${e}`)
    }
    return (
        <div>

            <div>
                <AirCncNavHome />
                {/* <img src={homePng} loading="lazy" alt="home" /> */}
                    <HomeHeader/>
                    <br />
                    <br />
                    <br />
                    <HomeExperience/>
                <div className="container-fluid row mt-5 m-auto">
                    <div className="col-md-4 col ">
                        <p className="h4">Where do you want go?</p>
                        <form onSubmit={handleSubmit} >
                            <div className="">
                                <label className="form-label h5">Location</label>
                                <input type="text" name="searchLocation" onBlur={handleInputSearchBlur} placeholder="Add city,Landmark or address" list="suggestions" className="form-control" required />
                                <datalist id="suggestions">
                                    <option value="Sundarbans" />
                                    <option value="Chittagong Hill Tracks" />
                                    <option value="Srimagal" />
                                    <option value="Rangamati" />
                                    <option value="Paharpur" />
                                    <option value="Lalbag Fort" />
                                    <option value="Bisanakandi" />
                                    <option value="Jaflong" />
                                    <option value="Paharpur" />
                                    <option value="Sajek Valley" />
                                    <option value="Saat Gambuj Mosque" />
                                    <option value="St. Martin Island" />
                                    <option value="Cox’s Bazar" />
                                    <option value="Small Golden Mosque" />
                                </datalist>
                            </div><br />
                            <div className="row mt-4">
                                <div className="col-md-6">
                                    <label className="form-label text-secondary">Arrival</label>
                                    <input type="Date" name="arrival" onChange={handleCountDaysChange} min={new Date().toISOString().split('T')[0]} className="form-control" required />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label text-secondary">Departure</label>
                                    <input type="Date" name="departure" onChange={handleCountDaysChange} min={new Date().toISOString().split('T')[0]} className="form-control" required />
                                </div>
                            </div>
                            <label htmlFor="" className="form-label text-secondary mt-4">Guests</label>
                            <div className="row">
                                <p className="h5">{count2} CHILD, {count1} ADULT ,{count3} BABIES </p>
                                <span className="border-bottom border border-1 mt-2"></span>
                                <div className="mt-3 row">
                                    <div className="col-md-8 col-sm-6 col-8">
                                        <p className="h4">ADULT</p>
                                        <p className="text-secondary user-select-none mt-1">Up to 18 years</p>
                                    </div>
                                    <div className="col-md-4 col-sm-4 col-4">
                                        <p className="h4 user-select-none"> <span className="cursor" onClick={() => handleCountMinus(count1, setCount1)}>–</span> {count1} <span className="cursor" onClick={() => handleCountPlus(count1, setCount1)}>+</span></p>
                                    </div>
                                </div>
                                <div className="mt-2 row">
                                    <div className="col-md-8 col-sm-6 col-8">
                                        <p className="h4">CHILD</p>
                                        <p className="text-secondary user-select-none mt-1">Age 2-17 years</p>
                                    </div>
                                    <div className="col-md-4 col-sm-4 col-4">
                                        <p className="h4 user-select-none"> <span className="cursor" onClick={() => handleCountMinus(count2, setCount2)}>–</span> {count2} <span className="cursor" onClick={() => handleCountPlus(count2, setCount2)}>+</span></p>
                                    </div>
                                </div>
                                <div className="mt-2 row">
                                    <div className="col-md-8 col-sm-6 col-8">
                                        <p className="h4">BABIES</p>
                                        <p className="text-secondary user-select-none mt-1">Younger 2 years</p>
                                    </div>
                                    <div className="col-md-4 col-sm-4 col-4">
                                        <p className="h4 user-select-none"> <span className="cursor" onClick={() => handleCountMinus(count3, setCount3)}>–</span> {count3} <span className="cursor" onClick={() => handleCountPlus(count3, setCount3)}>+</span></p>
                                    </div>
                                </div>
                                <div className="mt-2 row">
                                    <div className="col-md-8 col-sm-6 col-8">
                                        <p className="h4">BEDROOM</p>
                                        <p className="text-secondary user-select-none mt-1">Hightest Book 10</p>
                                    </div>
                                    <div className="col-md-4 col-sm-4 col-4">
                                        <p className="h4 user-select-none"> <span className="cursor" onClick={() => handleCountMinus(bedRoom, setBedRoom)}>–</span> {bedRoom} <span className="cursor" onClick={() => handleCountPlus(bedRoom, setBedRoom)}>+</span></p>
                                    </div>
                                </div>
                            </div>
                            {/* <div className=""><button className="btn btn-air airBtn mb-3">Apply</button></div> */}
                            <div><button className="btn btn-air airBtn col-md-12 mb-3" type="submit">Search</button></div>

                        </form>
                    </div>
                    <div className="col-md-8 mt-5  row h-700 overFlow-scroll">
                        {hotels.map(data => <HotelList handleDetailsHotel={handleDetailsHotel} data={data} key={data._id} />)

                        }
                    </div>
                </div>
                <Footer />
            </div>

        </div>
    );
};

export default Home;