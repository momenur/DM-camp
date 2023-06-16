import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const ManageClass = () => {
    // const [classes, setClasses] = useState([])
    // useEffect(() => {
    //     fetch('https://summer-dance-camp-server-momenurislam6-gmailcom.vercel.app/classes')
    //         .then(res => res.json())
    //         .then(data => setClasses(data))
    // }, [])


    const { data: classes = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('https://summer-dance-camp-server-momenurislam6-gmailcom.vercel.app/classes')
        return res.json()
    })

    const handleApprove = id => {
        fetch(`https://summer-dance-camp-server-momenurislam6-gmailcom.vercel.app/classes/approveClass/${id}`, {
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
                        title: 'Class is Approve Successful',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handleDeny = id => {
        fetch(`https://summer-dance-camp-server-momenurislam6-gmailcom.vercel.app/classes/denyClass/${id}`, {
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
                        title: 'Class is Deny Successful',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handleFeedback = id => {
        fetch(`https://summer-dance-camp-server-momenurislam6-gmailcom.vercel.app/classes/feedbackClass/${id}`, {
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
                        title: 'Send Feedback Successful',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        <div>
            <h1 className="my-8 text-3xl text-center underline uppercase">Manage Classes</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-white">
                                <th>
                                    SL
                                </th>
                                <th>Class Image</th>
                                <th> Class name</th>
                                <th>Instructor name,</th>
                                <th>Instructor email</th>
                                <th>Available seats</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>


                            {/* row 1 */}

                            {
                                classes.map((item, index) => <tr key={item._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="w-12 h-12 mask mask-squircle">
                                                    <img src={item.image} />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>{item.instructorName}</td>
                                    <td>{item.instructorEmail}</td>
                                    <td>{item.seats}</td>
                                    <td>{item.price}</td>
                                    <td>{item.status}</td>
                                    <th className="flex flex-col-reverse gap-4">
                                        {
                                            item.status === 'approve' ? <>
                                                <button disabled={true} onClick={() => handleApprove(item._id)} className="btn btn-warning btn-xs"><span className="text-white">Approve</span></button>
                                            </> : <>
                                                <button disabled={false} onClick={() => handleApprove(item._id)} className="btn btn-warning btn-xs">Approve</button>
                                            </>
                                        }
                                        {
                                            item.status === 'deny' ? <>
                                                <button disabled={true} onClick={() => handleDeny(item._id)} className=" btn btn-warning btn-xs"><span className="text-white">Deny</span></button>
                                            </> : <>
                                                <button disabled={false} onClick={() => handleDeny(item._id)} className=" btn btn-warning btn-xs"><span className="text-white">Deny</span></button>
                                            </>
                                        }
                                        {
                                            item?.feedback === 'This Class Not Approve by Admin' ? <>
                                                <button disabled={true} onClick={() => handleFeedback(item._id)} className=" btn btn-warning btn-xs"><span className="text-white">Feedback</span></button>
                                            </> : <>
                                                <button disabled={false} onClick={() => handleFeedback(item._id)} className=" btn btn-warning btn-xs"><span className="text-white">Feedback</span></button>
                                            </>
                                        }


                                    </th>
                                </tr>)
                            }





                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageClass;