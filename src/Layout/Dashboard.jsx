import { NavLink, Outlet } from "react-router-dom";
import NavBar from "../shaered/NavBar/NavBar";
import { FaMoneyCheck, FaHome, FaUser } from 'react-icons/fa';
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstrucror";
import './Dashboard.css'


const Dashboard = () => {
    
    const [makeInstructor] = useInstructor();
    const [makeAdmin] = useAdmin();

    const isAdmin = makeAdmin?.admin;
    const isInstructor = makeInstructor?.instructor




    // console.log(isInstructor);

    return (
        <div className="bg-drawer-custom">

            <NavBar></NavBar>
            <div className="text-white bg-black bg-opacity-60 drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="flex flex-col items-center pt-28 drawer-content">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                    <ul className="h-full p-4 text-white bg-orange-200 pt-28 menu w-80">
                        

                       
                        {
                            isAdmin ? <>
                                <li><NavLink to='/dashboard/TODO'> <FaHome></FaHome>Manage Classes</NavLink></li>
                                <li><NavLink to='/dashboard/manageUsers'> <FaUser></FaUser>Manage Users</NavLink></li>
                            </> : isInstructor ? <>
                                <li><NavLink to='/dashboard/addClass'> <FaHome></FaHome>Add a Class</NavLink></li>
                                <li><NavLink to='/dashboard/myClass'> <FaMoneyCheck></FaMoneyCheck> My Classes</NavLink></li>
                            </> : <>
                                <li><NavLink to='/dashboard/myClasses'> <FaHome></FaHome>My Selected Class</NavLink></li>
                                <li><NavLink to='/dashboard/history'> <FaMoneyCheck></FaMoneyCheck> My Enrolled Classes</NavLink></li>
                                
                                <li><NavLink to='/dashboard/history'> <FaMoneyCheck></FaMoneyCheck> Payment History</NavLink></li>
                            </>

                        }
                    </ul>

                </div>
            </div>
        </div >
    );
};

export default Dashboard;