import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import InstructorCard from "../../../components/InstructorCard";

const PopularInstructors = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/instructors')
        .then(res => res.json())
        .then(data => setInstructors(data))
    },[])
    return (
        <div>
            <SectionTitle
                subtitle="Popular Teacher"
                title="Instructors"
            ></SectionTitle>
            <div className="grid-cols-2 gap-6 px-4 md:grid">
                {
                    instructors.map(item => <InstructorCard key={item._id} item={item}></InstructorCard>)
                }
            </div>
        </div>
    );
};

export default PopularInstructors;