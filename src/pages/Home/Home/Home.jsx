import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import './Home.css'
import Topclass from "../Allclass/Topclass";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import { Helmet } from 'react-helmet-async';
const Home = () => {
    const [classes, setClasses] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/classes')
        .then(res => res.json())
        .then(data => setClasses(data))
    },[])
    return (
        <div className="home-bg">
            <Helmet>
                <title>Summer Dance | Home</title>
            </Helmet>
            <div className="pb-4 bg-black bg-opacity-50 m-o">
                <Banner></Banner>
                <Topclass topclass={classes}></Topclass>
                <PopularInstructors></PopularInstructors>
            </div>
        </div>
    );
};

export default Home;