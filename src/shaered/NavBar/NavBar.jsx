import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";

const NavBar = () => {

    const { logOut, user } = useContext(AuthContext)
    console.log(user);
    const userPhoto = user?.photoURL
    const navItem = <>
        <li><Link>Home</Link></li>
        <li><Link to='/instructors'>Instructors</Link></li>
        <li><Link to='/classes'>Classes</Link></li>
        {/* <li><Link>Dashboard</Link></li> */}
        {/* <li><Link to='/signUp'>Sign Up</Link></li> */}
        {
            user ? <>
                <li><Link to='/dashboard'>Dashboard</Link></li>
            </> : <>
                <li><Link to='/signUp'>Sign Up</Link></li>
            </>
        }
    </>

    const handleLogOut = () => {
        logOut()
        .then(() => { })
        .catch(error => console.log(error))
    }
    return (
        <div className="fixed z-10 w-full max-w-screen-xl">
            <div className="bg-black bg-opacity-40 ">
                <div className="navbar text-neutral-content">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">

                                {navItem}

                            </ul>
                        </div>
                        <a className="text-2xl font-semibold leading-none">DM Camp <br /> <span className="text-xs border-t-2 ">Dance Master Camp</span></a>
                    </div>
                    <div className="hidden navbar-center lg:flex">
                        <ul className="px-1 menu menu-horizontal">
                            {navItem}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {
                            user ? <>
                                <button onClick={handleLogOut} className="btn btn-ghost"><span className="text-red-600">Logout</span></button>
                                <img className="w-[55px] rounded-full" src={userPhoto} alt="" />
                            </> : <>
                                <span className="mx-8"><Link to='/login'>Login</Link></span>
                            </>
                        }



                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;