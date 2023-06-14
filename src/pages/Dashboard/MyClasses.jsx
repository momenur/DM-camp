import { Helmet } from "react-helmet-async";
import useSelectedItem from "../../hooks/useSelectedItem";
import { FaTrash } from 'react-icons/fa';
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyClasses = () => {
    const [selected, refetch] = useSelectedItem();

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/selected/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your Selected Class has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div className="w-full">
            <Helmet>
                <title>Summer Dance | Selected Class</title>
            </Helmet>
            <div>
                <h2 className="my-6 text-2xl font-semibold text-center ">Total Selected Classes: {selected.length}</h2>
            </div>
            <div className="md:ms-4">
                <div className="w-full overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr className="text-white">
                                <th>SL</th>
                                <th>Class Name</th>
                                <th>Instructor</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                selected.map((item, index) => <tr key={item._id}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.instructorName}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <Link><button onClick={() => handleDelete(item)} className="rounded-full btn btn-error me-8"><FaTrash></FaTrash></button></Link>
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