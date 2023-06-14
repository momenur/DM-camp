import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const AddClass = () => {
    const {user} = useContext(AuthContext)
    console.log(user);
    const handleAddClass = event => {
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const image = from.photo.value;
        const instructorName = user.displayName;
        const instructorEmail = user.email;
        const seats = parseFloat(from.seats.value);
        const price = parseFloat(from.price.value);
        const status = 'pending';
        const AddClassInfo = {name, image, instructorName, instructorEmail, seats, price, status}

        fetch('http://localhost:5000/classes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(AddClassInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data, 'added');
            from.reset()
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your Class Added Successfully',
                showConfirmButton: false,
                timer: 1500
              })
        })
    };

    return (
        <div>
            <h1 className="text-3xl font-semibold">ADD A CLASS</h1>
            <div className='w-full'>
                <form onSubmit={handleAddClass} className="w-full mb-12 shadow-2xl bg-base-100">
                    <div className="md:w-[800px] card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Class Name</span>
                            </label>
                            <input type="text"  name='name' placeholder="Enter Your Class Name" className="input input-bordered" />
                            
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Class Photo URL</span>
                            </label>
                            <input type="text"  name='photo' placeholder="Photo URL" className="input input-bordered" />
                           
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Instructor Name</span>
                            </label>
                            <input type="text"  name='photoURL' placeholder="Photo URL" className="input input-bordered" value={user?.displayName} readOnly/>
                           
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Instructor Email</span>
                            </label>
                            <input type="text"  name='photoURL' placeholder="Photo URL" className="input input-bordered" value={user?.email} readOnly/>
                           
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available seats</span>
                            </label>
                            <input type="number"  name='seats' placeholder="Please Enter Available seats" className="input input-bordered" />
                           
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number"  name='price' placeholder="Enter the Price" className="input input-bordered"/>
                           
                        </div>
                        <div className="mt-6 form-control">
                            <input className="btn btn-primary" type="submit" value="Add CLass" />
                           
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddClass;