import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';
const stripePromise = loadStripe('pk_test_51IiFbLIQFxvnZ35y7eTLeRzag9eGJ4qtO7eaxQJARldO2fuuYoDadBNWHmLG3nflwXssUSuCC0a3STeZlW2TYjlQ00qhbOwsz2');
const PaymentProcess = () => {
    // const [info, setInfo] = useState({})
    // const handlePaymentOfOrder = (e,paymentId) => {

    //     // const allData = { ...info, date: new Date(), paymentId: paymentId,plans:id,userEmail:userData.email}
    //     alert('Thank you for try to Order!!!')

    // }
    return (
        <div className="container">
            {/* <nav className="navbar navbar-light bg-light">
                    <p className="h4">POWER <span className="text-warning">X</span></p>
            </nav> */}
            <div className="col-md-8 round p-4 margin-auto shadow-lg">
                <Elements stripe={stripePromise}>
                    <SimpleCardForm/>
                </Elements>
            </div>
        </div>
    );
};

export default PaymentProcess;