
const InstructorCard = ({ item }) => {
    return (
        <div>
            <div className="shadow-xl card card-side bg-yellow-200 hover:bg-yellow-400 hover:shadow-yellow-500 duration-700 shadow-[#ff0800] rounded-none">
                <figure className="my-6 rounded-full ms-6"><img className="w-[350px] h-[300px]" src={item.image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="mb-4 text-orange-600 card-title">{item.instructorName}</h2>
                    <p>Email: {item.instructorEmail} <br /> <span className="text-orange-600 ">Address: {item.address}</span></p>
                    <div className="justify-end card-actions">
                    <button className="btn bg-transparent text-[#ff0800] border-[#ff0800] btn-secondary hover:bg-[#ff0800] hover:text-white duration-700 rounded-none">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;