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
            <h1>This is My Class</h1>
            <div>
                <div className="overflow-x-auto ms-4">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>Class Name</th>
                                <th>Status</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            

                            {
                               instructorAddedClass.map((item, index) => <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>{item.nameClass}</td>
                                <td>{item.status}</td>
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