
const InstructorCard = ({ item }) => {
    return (
        <div>
            <div className="shadow-xl card card-side bg-base-100">
                <figure><img className="w-[350px] h-[300px]" src={item.image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="mb-4 text-orange-600 card-title">{item.instructorName}</h2>
                    <p>Email: {item.instructorEmail} <br /> <span className="text-orange-600 ">Address: {item.address}</span></p>
                    <div className="justify-end card-actions">
                    <button className="btn btn-outline btn-secondary">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;