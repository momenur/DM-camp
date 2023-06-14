import { NavLink, Outlet } from "react-router-dom";
import NavBar from "../shaered/NavBar/NavBar";
import { FaMoneyCheck, FaHome, FaUser } from 'react-icons/fa';
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstrucror";

const Dashboard = () => {
    const [makeInstructor] = useInstructor();
    // const { user, loading } = useContext(AuthContext);
    const [makeAdmin] = useAdmin();


    const isAdmin = makeAdmin?.admin;
    const isInstructor = makeInstructor?.instructor

    console.log(isInstructor);

    return (
        <div>

            <NavBar></NavBar>
            <div className=" drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="flex flex-col items-center pt-24 drawer-content">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="h-full p-4 pt-24 menu w-80 bg-base-200 text-base-content">

                        {/* {
                            adminInfo?.email === userEmail && adminInfo.role === 'admin' ? <>
                                <li><NavLink to='/dashboard/myClasses'> <FaHome></FaHome>Manage Class</NavLink></li>
                                <li><NavLink to='/dashboard/manageUsers'> <FaUser></FaUser> Manage Users</NavLink></li>
                            </> : <>
                                <li><NavLink to='/dashboard/myClasses'> <FaHome></FaHome>My Selected Class</NavLink></li>
                                <li><NavLink to='/dashboard/history'> <FaMoneyCheck></FaMoneyCheck> Payment History</NavLink></li>
                            </>
                        } */}
                        {
                            isAdmin ? <>
                                <li><NavLink to='/dashboard/myClasses'> <FaHome></FaHome>Manage Class</NavLink></li>
                                <li><NavLink to='/dashboard/manageUsers'> <FaUser></FaUser> Manage Users</NavLink></li>
                            </> : isInstructor ? <>
                                <li><NavLink to='/dashboard/addClass'> <FaHome></FaHome>Add a Class</NavLink></li>
                                <li><NavLink to='/dashboard/history'> <FaMoneyCheck></FaMoneyCheck> Instructor</NavLink></li>
                            </> : <>
                                <li><NavLink to='/dashboard/myClasses'> <FaHome></FaHome>My Selected Class</NavLink></li>
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