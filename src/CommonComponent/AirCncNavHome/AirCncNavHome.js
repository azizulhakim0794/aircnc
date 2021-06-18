import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './AirCncNavHome.css'

const AirCncNavHome = () => {
    const history = useHistory()
    const handleLogin = () =>{
        history.push('/login')
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="air-header">
                <p className="h2 air-brand">Aircnc</p>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse nav-right navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mx-5 mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link h6 px-3 active" to="/home" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link h6 px-3 active " to="/helps">Help</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="px-3 h6 nav-link active" >Login</Link>
                        </li>
                        <li className="nav-item">
                        <button onClick={handleLogin} className="btn btn-air airBtn border-20">Sing Up</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default AirCncNavHome;