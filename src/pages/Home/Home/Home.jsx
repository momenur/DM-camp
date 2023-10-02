import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import './Home.css'
import Topclass from "../Allclass/Topclass";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import { Helmet } from 'react-helmet-async';
import Highlight from "../hilightCLass/Highlight";
const Home = () => {
    const [classes, setClasses] = useState([])
    useEffect(() => {
        fetch('https://summer-dance-camp-server-momenurislam6-gmailcom.vercel.app/classes')
        .then(res => res.json())
        .then(data => setClasses(data))
    },[])
    const approveClasses = classes.filter(item => item.status === 'approve')
    return (
        <div className="bg-white">
            <Helmet>
                <title>Summer Dance | Home</title>
            </Helmet>
            <div className="pb-4">
                <Banner></Banner>
                <Topclass topclass={approveClasses}></Topclass>
                <PopularInstructors></PopularInstructors>
                <Highlight></Highlight>
            </div>
        </div>
    );
};

export default Home;


