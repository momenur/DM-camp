import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import './Instructors.css'
import { Helmet } from "react-helmet-async";

const Instructors = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/instructors')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])
    return (
        <div className="bg-instructors ">
            <Helmet>
                <title>Summer Dance | Instructor</title>
            </Helmet>
            <div className="pb-4 text-white bg-black bg-opacity-50">
                <SectionTitle subtitle="Check Our Instructors List" title="Our Instructors"></SectionTitle>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-white">
                                <th>SL</th>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Class Name</th>
                                {/* <th></th> */}
                            </tr>
                        </thead>
                        <tbody>

                            {
                                instructors.map((item, index)=> <tr key={item._id}>
                                    <th> {index + 1} </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="w-12 h-12 mask mask-squircle">
                                                    <img src={item.image} />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item.instructorName} </td>
                                    <td>{item.instructorEmail}</td>
                                    <td>{item.name}</td>
                                    {/* <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </th> */}
                                </tr>)
                            }


                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default Instructors;