import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import ClassesCart from "../../components/ClassesCart";

const Classes = () => {
    const [classes, setClasses] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    return (
        <div className="home-bg">
            <div className="pb-4 bg-black bg-opacity-50 m-o">
                <SectionTitle subtitle='Visit Our Class' title="Our Classes"></SectionTitle>
                <div className="grid-cols-3 gap-4 mb-8 md:grid ms-4">
                    {
                        classes.map(item => <ClassesCart key={item._id} item={item}></ClassesCart>)
                    }
                </div>
            </div>
        </div>

    );
};

export default Classes;