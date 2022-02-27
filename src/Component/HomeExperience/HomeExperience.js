import React from 'react'
// import travel1 from './../../images/travel1.jpg';
// import travel2 from './../../images/travel2.jpg';
const HomeExperience = () => {
    return (
        <div className="container">
            <h2 className="">Discover Airbnb Experiences</h2>
            <br />
            <br />
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col ">
                    <div className="card border-0 ex-img-1">
                        <h1 className="text-white p-4">Things to do on your trip</h1>
                        <div className="ps-4">
                            <button className="btn btn-air airBtn border-20">Experiences</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card border-0 ex-img-2">
                    <h1 className="text-white p-4">Things to do from home</h1>
                        <div className="ps-4">
                            <button className="btn btn-air airBtn border-20">Online Experiences</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeExperience