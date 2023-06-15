import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

const CheckOutFrom = ({ price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    console.log('cicret',clientSecret);


    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(price)
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));

    }, [])
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('error', error);
            setPaymentError(error.message);
        }
        else {
            setPaymentError('');
            console.log('payment method', paymentMethod);
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="px-6 mt-4 btn btn-primary btn-sm" type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            {
                paymentError && <p className="mt-4 text-orange-600">{paymentError}</p>
            }
        </div>
    );
};

export default CheckOutFrom;