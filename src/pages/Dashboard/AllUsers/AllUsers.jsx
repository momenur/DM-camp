import { useQuery } from "@tanstack/react-query";
// import { useState } from "react";
import Swal from "sweetalert2";

const AllUsers = () => {
    // const [desable, setDesable] = useState(false)
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('https://summer-dance-camp-server-momenurislam6-gmailcom.vercel.app/users')
        return res.json()
    })

    const handleAdmin = id => {
        fetch(`https://summer-dance-camp-server-momenurislam6-gmailcom.vercel.app/users/${id}`, {
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
        fetch(`https://summer-dance-camp-server-momenurislam6-gmailcom.vercel.app/users/makeIns/${id}`, {
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
        <div className="w-full pt-10 pb-20 bg-orange-600 bg-opacity-40">
            <h1 className="my-4 text-3xl text-center">Total Users: {users.length}</h1>
            <div>
                <div className="overflow-x-auto ms-4">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-white ">
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
                                                <button disabled={true} onClick={() => handleAdmin(user._id)} className="btn btn-warning btn-xs me-4"><span className="text-white">Make Admin</span></button>
                                            </> : <>
                                                <button onClick={() => handleAdmin(user._id)} className="btn btn-warning btn-xs me-4"><span className="text-white">Make Admin</span></button></>
                                        }
                                        {
                                            user.role === 'instructor' ? <>
                                                <button disabled={true} onClick={() => handleInstructor(user._id)} className="btn btn-warning btn-xs"><span className="text-white">Make Instructor</span></button>
                                            </> : <>
                                                <button onClick={() => handleInstructor(user._id)} className="btn btn-warning btn-xs"><span className="text-white">Make Instructor</span></button>
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