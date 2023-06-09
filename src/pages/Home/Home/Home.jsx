import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import './Home.css'
import Topclass from "../Allclass/Topclass";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
const Home = () => {
    const [classes, setClasses] = useState([])
    useEffect(() => {
        fetch('classes.json')
        .then(res => res.json())
        .then(data => setClasses(data))
    },[])
    return (
        <div className="home-bg">
            <div className="pb-4 bg-black bg-opacity-50 m-o">
                <Banner></Banner>
                <Topclass topclass={classes}></Topclass>
                <PopularInstructors></PopularInstructors>
            </div>
        </div>
    );
};

export default Home;