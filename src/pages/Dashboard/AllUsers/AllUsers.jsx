import { useQuery } from "@tanstack/react-query";
// import { useState } from "react";
import Swal from "sweetalert2";

const AllUsers = () => {
    // const [desable, setDesable] = useState(false)
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json()
    })

    const handleAdmin = id => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    // setDesable(true)
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'User Role Updated to Admin',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handleInstructor = id => {
        fetch(`http://localhost:5000/users/makeIns/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    // setDesable(true)
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'User Role Updated to Instructor',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        <div className="w-full">
            <h1 className="my-4 text-3xl text-center">Total Users: {users.length}</h1>
            <div>
                <div className="overflow-x-auto ms-4">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>Name</th>
                                <th>Role</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.role}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {
                                            user.role === 'admin' ? <>
                                                <button disabled={true} onClick={() => handleAdmin(user._id)} className="btn btn-outline btn-xs me-4">Make Admin</button>
                                            </> : <>
                                                <button onClick={() => handleAdmin(user._id)} className="btn btn-outline btn-xs me-4">Make Admin</button></>
                                        }
                                        {
                                            user.role === 'instructor' ? <>
                                                <button disabled={true} onClick={() => handleInstructor(user._id)} className="btn btn-outline btn-xs">Make Instructor</button>
                                            </> : <>
                                                <button onClick={() => handleInstructor(user._id)} className="btn btn-outline btn-xs">Make Instructor</button>
                                            </>
                                        }

                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;