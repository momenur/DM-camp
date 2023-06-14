import img from '../../../assets/home/highlight.jpg'
import './Highlight.css'

const Highlight = () => {
    return (
        <div className="mt-24 mb-12 bg-fixed backgroundImg ">
        <div className="py-2 text-white bg-black opacity-70">
            <div className="flex items-center justify-center gap-12 px-24 py-12">
                <div>
                    <img src={img} alt="feature img" />
                </div>
                <div>
                    <p>March 20, 2023</p>
                    <h2>WHERE CAN I GET SOME?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi beatae dolor maiores natus ratione, ad incidunt est rem. Reprehenderit, quasi neque! Animi odit quaerat ipsa accusantium laboriosam omnis. Adipisci iusto necessitatibus perferendis ratione iste minus consequatur. Nemo repellendus facere recusandae illum iste odio labore numquam consectetur, incidunt, accusamus fugit reiciendis.</p>
                    <button className="mt-6 border-0 border-b-4 btn btn-outline"><span className="text-white">Order Now</span></button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Highlight;