
import { Link } from 'react-router-dom';
import midImg from '../../../assets/home/mid.jpg'
import SectionTitle from '../../../components/SectionTitle';
import './Highlight.css'

const Highlight = () => {
    return (
        <div>
            <SectionTitle subtitle='Our best class' title='Highlight Class'></SectionTitle>
            <div className="mt-24 mb-12 bg-fixed backgroundImg ">
                <div className="py-2 text-white bg-black opacity-70">
                    <div className="flex items-center justify-center gap-12 px-24 py-24">
                        <div>
                            <img src={midImg} alt="
                            " />
                        </div>
                        <div>
                            <p>Class Name: Malangla</p>
                            <h2>Do You want?</h2>
                            <p>Instructor Detail : instructor Name: Gobindo Kumar , Age: 41, Exprerience: 15 years.. est rem. Reprehenderit, quasi neque! Animi odit quaerat ipsa accusantium laboriosam omnis. Adipisci iusto necessitatibus perferendis ratione iste minus consequatur. Nemo repellendus facere recusandae illum iste odio labore numquam consectetur, incidunt, accusamus fugit reiciendis.</p>
                            <Link to='/classes'><button className="mt-6 border-0 border-b-4 btn btn-outline"><span className="text-white">See All Class</span></button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Highlight;