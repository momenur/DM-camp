import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

const MyClass = () => {
    const { user } = useContext(AuthContext);
    // const [myClass, setMyClass] = useState([])
    const [updateClass, setUpdateClass] = useState('')
    // console.log(updateClass);
    // useEffect(() => {
    //     fetch('http://localhost:5000/classes')
    //         .then(res => res.json())
    //         .then(data => setMyClass(data))
    // }, [])

    const { data: myClass = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/classes')
        return res.json()
    })

    const instructorAddedClass = myClass.filter(item => item.instructorEmail === user.email)

    const handleClassUpdate = (event) => {
        const from = event.target;
        const name = from.name.value;
        const image = from.photo.value;
        const instructorName = user.displayName;
        const instructorEmail = user.email;
        const seats = parseFloat(from.seats.value);
        const price = parseFloat(from.price.value)
        const updateClassInfo = { name, image, instructorName, instructorEmail, seats, price }
        console.log("Update Info", updateClassInfo);

        fetch(`http://localhost:5000/classes/${updateClass._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateClassInfo)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                from.reset()
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div className="w-full">
            <h1 className="py-4 text-3xl text-center underline uppercase">My Added Class</h1>
            <div>
                <div className="overflow-x-auto ms-4">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-white">
                                <th>SL</th>
                                <th>Class Name</th>
                                <th>Status</th>
                                <th>Feedback</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>


                            {
                                instructorAddedClass.map((item, index) => <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.status}</td>
                                    <td>{item.status ? <p>{item.feedback}</p> : <></>}</td>
                                    <td>{item.price}</td>
                                    <td><button onClick={() => window.my_modal_4.showModal(setUpdateClass(item))} className="btn btn-xs">Update</button></td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>

            <dialog id="my_modal_4" className="modal">
                <form onSubmit={handleClassUpdate} method="dialog" className="w-11/12 max-w-5xl modal-box bg-slate-600">
                    <div className="md:w-[800px] card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="text-white label-text">Class Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Enter Your Class Name" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-white label-text">Class Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered"/>

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-white label-text">Instructor Name</span>
                            </label>
                            <input type="text" name='photoURL' placeholder="Photo URL" className="input input-bordered" value={user?.displayName} readOnly />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-white label-text">Instructor Email</span>
                            </label>
                            <input type="text" name='photoURL' placeholder="Photo URL" className="input input-bordered" value={user?.email} readOnly />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-white label-text">Available seats</span>
                            </label>
                            <input type="number" name='seats' placeholder="Please Enter Available seats" className="input input-bordered"/>

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-white label-text">Price</span>
                            </label>
                            <input type="number" name='price' placeholder="Enter the Price" className="input input-bordered" />

                        </div>
                        <div className="mt-6 form-control">
                            <input className="btn btn-primary" type="submit" value="Update" />
                        </div>
                    </div>
                </form>
            </dialog>


        </div>
    );
};

export default MyClass;