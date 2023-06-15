import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";

const MyClass = () => {
    const { user } = useContext(AuthContext);
    const [myClass, setMyClass] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setMyClass(data))
    }, [])

    const instructorAddedClass = myClass.filter(item => item.instructorEmail === user.email)
    
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
                                <td><button className="btn btn-xs">Update</button></td>
                            </tr>) 
                            }
                            
                          
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyClass;