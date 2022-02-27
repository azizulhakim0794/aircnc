import React from 'react';
import AirCncNavHome from '../../CommonComponent/AirCncNavHome/AirCncNavHome';
import './HelpPage.css'
import home from '../../images/website-photo/homefil.jpg'
import homeSearch from '../../images/website-photo/homeSearch.jpg'
import Location from '../../images/website-photo/locationWiseHotel.png'
import hotelDetails from '../../images/website-photo/hotelDetails.png'
import login from '../../images/website-photo/login.png'
import hotelBook1 from '../../images/website-photo/hotelBook1.png'
import hotelBook2 from '../../images/website-photo/hotelBook2.png'
import hotelPay from '../../images/website-photo/bookHotelPay.png'
const HelpPage = () => {
    return (
        <div>
            <AirCncNavHome/>
            <div className="container row m-auto mt-5">
                <p className="lead">This Website is for the Tourist who go to the historical , Natural beautiful  places. Here We are supporting all the tourist by made this website because Every tourist need the chip,safe and beautiful places for stay.A tourist using our website they can book their departure location hotel easily.Thats why we made this website for Every visitor. Here we are guide you how to book hotel step by step using this website easily and we take care of our every Tourist who loves this place.<br /><br /> Thank you for using our Website </p>
                <div className="my-5">
                    <p className="h5">1.Fill the required fields and then Click on Search Button.</p>
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-6"><img className="img-responsive w-100" loading="lazy" src={home} alt="home1" /></div>
                        <div className="col-md-6 col-sm-6 col-6"><img className="img-responsive w-100" loading="lazy" src={homeSearch} alt="homeSearch" /></div>
                    </div>
                </div>
                <div className="my-5">
                    <p className="h5">2.Then you go to the Location page and then select a hotel for your fall under. Then Select any.</p>
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-6"><img className="img-responsive w-100" loading="lazy" src={Location} alt="Location1" /></div>
                        <div className="col-md-6 col-sm-6 col-6"><img className="img-responsive w-100" loading="lazy" src={hotelDetails} alt="hotelDetails" /></div>
                    </div>
                </div>
                <div className="my-5">
                    <p className="h5">3.Going to location wise hotel to Reserve one, to book a hotel you have to login first</p>
                    <p className="text-secondary">**Only the Google SignUp and Login Successfully Work**</p>
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-6"><img className="img-responsive w-100" loading="lazy" src={hotelDetails} alt="hotelDetails" /></div>
                        <div className="col-md-6 col-sm-6 col-6"><img className="img-responsive w-100" loading="lazy" src={login} alt="login1" /></div>
                    </div>
                </div>
                <div className="my-5">
                    <p className="h5">4.After Sing Up and login agree Teem and condition you have to write the hotel manager Why you are Coming</p>

                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-6"><img className="img-responsive w-100" loading="lazy" src={hotelBook1} alt="hotelBook1" /></div>
                        <div className="col-md-6 col-sm-6 col-6"><img className="img-responsive w-100" loading="lazy" src={hotelBook2} alt="Comment Manager" /></div>
                    </div>
                </div>
                <div className="my-5">
                    <p className="h5">5.After agree All condition pay for your needed hotel</p>
                    <p className="text-secondary">You can try this visa Card Number <b>4242-4242-4242-4242</b> or Your Date must be a Future date</p>
                    <div className="row">
                        <img className="img-responsive w-100" loading="lazy" src={hotelPay} alt="hotelBook1" />
                    </div>
                </div>
                <p className="text-center text-secondary mb-4">Thank You for understanding our Policy</p>
            </div>
        </div>
    );
};

export default HelpPage;