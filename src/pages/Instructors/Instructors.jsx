import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { Helmet } from "react-helmet-async";

const Instructors = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(() => {
        fetch('https://summer-dance-camp-server-momenurislam6-gmailcom.vercel.app/instructors')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])
    return (
        <div className="bg-instructors ">
            <Helmet>
                <title>Summer Dance | Instructor</title>
            </Helmet>
            <div className="pb-4 text-white bg-opacity-50 bg-yellow-50">
                <SectionTitle subtitle="Check Our Instructors List" title="Our Instructors"></SectionTitle>
                <div className="overflow-x-auto">
                    <table className="table text-lg text-black">
                        {/* head */}
                        <thead>
                            <tr className="text-black">
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
                                    <th className="text-[#ff0800]"> {index + 1} </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="w-16 h-16 rounded-full">
                                                    <img className="border-[#ff0800] border-2 rounded-full" src={item.image} />
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