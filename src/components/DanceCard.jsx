
const DanceCard = ({item}) => {
    return (
        <div>
            <div className="shadow-xl card w-96 bg-base-100">
                <figure><img className="w-[350px] h-[300px] mt-4 rounded rounded-xl" src={item.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{item.name}</h2>
                    <p>Available seats: {item.seats}</p>
                    <div className="justify-end card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DanceCard;