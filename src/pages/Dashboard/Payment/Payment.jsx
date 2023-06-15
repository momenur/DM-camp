import { loadStripe } from "@stripe/stripe-js";
import CheckOutFrom from "./CheckOutFrom";
import { Elements } from "@stripe/react-stripe-js";



const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk)

const Payment = () => {
    return (
        <div className="w-full p-32 text-black bg-white">
            <h1 className="">This is Payment</h1>

            <Elements stripe={stripePromise}>
                <CheckOutFrom></CheckOutFrom>
            </Elements>

        </div>
    );
};

export default Payment;