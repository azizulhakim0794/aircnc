import React, { useContext ,useEffect,useState} from 'react';
import './Login.css'
import "firebase/auth";
import firebase from 'firebase/app';
import firebaseConfig from './FirebaseConfig/FirebaseConfig'
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
const Login = () => {
  // const [userData , setUserData] = useContext(UserContext)
  const [loadReq] = useState(false)
  const [userDataInfo, setUserDataInfo] = useContext(UserContext)
  const history = useHistory()
  const location = useLocation()
  let { from } = location.state || { from: { pathname: "/" } };
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
  }
 
  const singInWithGoogle = (e) => {

    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        const user = result.user;
        const { displayName, email,uid } = user
        const newUserData = { ...userDataInfo }
          newUserData.isSignedIn = true
          newUserData.name = displayName
          newUserData.email = email
          newUserData.uid = uid
        setUserDataInfo(newUserData)



        // ...
      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        if(errorCode||errorMessage||email||credential){
          console.log(errorMessage,errorCode,email,credential);
        }
      });
      e.preventDefault()
  }
  useEffect(() => {
    if (userDataInfo.isSignedIn) {
      history.replace('/home');

    }
    if (userDataInfo.isSignedIn && userDataInfo.userLocation) {
      history.replace(from);

    }
    return loadReq;
  },[userDataInfo.isSignedIn , userDataInfo.userLocation])
  return (
    <div className="loginBody">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
        <p className="h2 air-brand">Aircnc</p>
        </div>
      </nav>
      <div className="container ">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Sign In</h5>
                <form className="form-signin">
                  <div className="form-label-group">
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" autoFocus />
                    <label htmlFor="inputEmail">Email address</label>
                  </div>

                  <div className="form-label-group">
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" />
                    <label htmlFor="inputPassword">Password</label>
                  </div>

                  <div className="custom-control custom-checkbox mb-3">
                    <input type="checkbox" className="custom-control-input mr-3" id="customCheck1" />
                    <label className="custom-control-label ms-3" htmlFor="customCheck1">Remember password</label>
                  </div>
                  <button className="btn btn-lg btn-air airBtn text-white btn-block text-uppercase col-md-12 col-sm-12 col-12" type="submit">Sign in</button>
                  <hr className="my-4" />
                  <button onClick={singInWithGoogle} className="btn btn-lg btn-google btn-block text-uppercase mb-3 col-md-12 col-sm-12 col-12" type="submit"><FontAwesomeIcon icon={faGoogle} /> Sign in with Google</button>
                  <button className="btn btn-lg btn-facebook btn-block text-uppercase col-md-12 col-sm-12 col-12" type="submit"><FontAwesomeIcon icon={faFacebookF} /> Sign in with Facebook</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Login;