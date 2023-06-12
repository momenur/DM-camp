import { Helmet } from "react-helmet-async";
import useSelectedItem from "../../hooks/useSelectedItem";
import { FaTrash } from 'react-icons/fa';

const MyClasses = () => {
    const [selected] = useSelectedItem();
    console.log(selected);
    return (
        <div>
            <Helmet>
                <title>Summer Dance | Selected Class</title>
            </Helmet>
            <div>
                <h2>Total Selected Classes: {selected.length}</h2>
            </div>
            <div>
                <div className="w-full overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>Class Name</th>
                                <th>Instructor</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                selected.map((cla, index) => <tr key={cla._id}>
                                    <td>{index + 1}</td>
                                    <td>{cla.name}</td>
                                    <td>{cla.instructorName}</td>
                                    <td>{cla.price}</td>
                                    <td>
                                        <button className="btn btn-error me-8"><FaTrash></FaTrash></button>
                                        <button className="btn btn-info">Pay</button>
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

export default MyClasses;