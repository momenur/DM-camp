
const DanceCard = ({ item }) => {
    return (
        <div className="pb-16">
            <div className="bg-yellow-200 hover:bg-yellow-400 hover:shadow-yellow-500 duration-700 shadow-[#ff0800] shadow-xl card w-96 rounded-none">
                <figure><img className="w-[370px] h-[300px] mt-2" src={item.image} alt="Shoes" /></figure>
                <div className="card-body text-red-500 hover:text-[#ff0800]">
                    <h2 className="card-title">{item.name}</h2>
                    <p className="">Available seats: {item.seats}</p>
                    <div className="justify-end card-actions">
                        <button className="btn bg-transparent text-[#ff0800] border-[#ff0800] btn-secondary hover:bg-[#ff0800] hover:text-white duration-700 rounded-none">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DanceCard;