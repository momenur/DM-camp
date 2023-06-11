import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const ClassesCart = ({item}) => {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate();
    const handleAddClass = () => {
        if(!user){
            return navigate('/login')
        }
    }
    return (
        <div>
            <div className="shadow-xl card w-96 bg-base-100">
                <figure><img className="w-[350px] h-[300px] mt-4 rounded rounded-xl" src={item.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Class Name: {item.name}</h2>
                    <h2 className="card-title">Instructor Name: {item.instructorName}</h2>
                    <h2 className="card-title">Email: {item.instructorEmail}</h2>
                    <p className="text-orange-400">Available seats: {item.seats}</p>
                    <p>Price: {item.price}</p>
                    <div className="justify-end card-actions">
                        <button onClick={handleAddClass} className="btn btn-outline btn-secondary">Add Class</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassesCart;