import { Outlet } from "react-router-dom";
import NavBar from "../shaered/NavBar/NavBar";
import Footer from "../shaered/Footer/Footer";

const Main = () => {
    return (
        <div className="mx-auto md:max-w-screen-xl">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;