import { NavLink, Outlet } from "react-router-dom";
import NavBar from "../shaered/NavBar/NavBar";
import { FaMoneyCheck, FaHome } from 'react-icons/fa';

const Dashboard = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content pt-24">
                    {/* Sidebar content here */}
                    <li><NavLink to='/dashboard/myClasses'> <FaHome></FaHome>My Selected Class</NavLink></li>
                    <li><NavLink to='/dashboard/history'> <FaMoneyCheck></FaMoneyCheck> Payment History</NavLink></li>
                </ul>

            </div>
        </div>
        </div>
    );
};

export default Dashboard;