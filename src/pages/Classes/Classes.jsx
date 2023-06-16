import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import ClassesCart from "../../components/ClassesCart";
import { Helmet } from "react-helmet-async";

const Classes = () => {
    const [classes, setClasses] = useState([])
    useEffect(() => {
        fetch('https://summer-dance-camp-server-momenurislam6-gmailcom.vercel.app/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    console.log(classes);

    const approveClasses = classes.filter(item => item.status === 'approve')
    return (
        <div className="home-bg">
            <Helmet>
                <title>Summer Dance | Classes</title>
            </Helmet>
            <div className="pb-4 bg-black bg-opacity-50 m-o">
                <SectionTitle subtitle='Visit Our Class' title="Our Classes"></SectionTitle>
                <div className="grid-cols-3 gap-4 mb-8 md:grid ms-4">
                    {
                        approveClasses.map(item => <ClassesCart key={item._id} item={item}></ClassesCart>)
                    }
                </div>
            </div>
        </div>

    );
};

export default Classes;