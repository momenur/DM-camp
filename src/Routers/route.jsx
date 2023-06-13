import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";

import Classes from "../pages/Classes/classes";
import Instructors from "../pages/Instructors/Instructors";
import MyClasses from "../pages/Dashboard/MyClasses";
import Dashboard from "../Layout/Dashboard";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signUp',
                element: <Register></Register>
            },
            {
                path: 'classes',
                element: <Classes></Classes>
            },
            {
                path: 'instructors',
                element: <Instructors></Instructors>
            },
           
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
            {
                path: 'myClasses',
                element: <MyClasses></MyClasses>
            },
            {
                path: 'manageUsers',
                element: <AllUsers></AllUsers>
            }
        ]
    }
]);