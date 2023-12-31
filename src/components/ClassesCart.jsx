import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useSelectedItem from "../hooks/useSelectedItem";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstrucror";

const ClassesCart = ({item}) => {
    const [makeAdmin] = useAdmin();
    const [makeInstructor] = useInstructor();
    const isAdmin = makeAdmin?.admin;
    const isInstructor = makeInstructor?.instructor

    
    
    const {user} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useSelectedItem();
    const handleAddClass = (item) => {
        if(user && user.email){
            const selectedItem = {itemId: item._id, price: item.price, image: item.image, name: item.name, instructorName: item.instructorName, instructorEmail: item.instructorEmail, email: user.email}
            fetch('https://summer-dance-camp-server-momenurislam6-gmailcom.vercel.app/selected', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedItem)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Class Selected Successfully',
                        showConfirmButton: false,
                        timer: 1500
                      }) 
                      refetch();
                }
            })
        }
        else{
            navigate('/login', {state: {from: location}})
        }
    }
    return (
        <div>
            <div className="bg-yellow-200 hover:bg-yellow-400 hover:shadow-yellow-500 duration-700 shadow-[#ff0800] shadow-xl card w-96 rounded-none">
                <figure><img className="w-[300px] h-[300px] mt-4 rounded-full -mb-16 border-[#ff0800] border-4" src={item.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Class Name: {item.name}</h2>
                    <h2 className="card-title">Instructor Name: {item.instructorName}</h2>
                    <h2 className="card-title">Email: {item.instructorEmail}</h2>
                    <p className="text-orange-400">Available seats: {item.seats}</p>
                    <p>Price: {item.price}</p>
                    <div className="justify-end card-actions">
                        <button disabled={isAdmin || isInstructor} onClick={() => handleAddClass(item)} className="btn bg-transparent text-[#ff0800] border-[#ff0800] btn-secondary hover:bg-[#ff0800] hover:text-white duration-700 rounded-none">Select Class</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassesCart;
