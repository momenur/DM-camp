
import { Link } from 'react-router-dom';
import SectionTitle from '../../../components/SectionTitle';
import './Highlight.css'

const Highlight = () => {
    return (
        <div>
            <SectionTitle subtitle='Our best class' title='Highlight Class'></SectionTitle>
            <div className="mt-24 bg-fixed backgroundImg ">
                <div className="py-2 text-white bg-black opacity-70">
                    <div className="flex items-center justify-center gap-12 px-24 py-24">

                        <div>
                            <h1 className='mb-4 text-5xl font-semibold text-orange-600'>Dance Master Camp</h1>
                            <h2 className='text-xl font-bold'>Since 1992 ?</h2>
                            <h3 className='mt-4 mb-2 text-3xl uppercase'>About Us and Our Service</h3>
                            <p>Instructor Detail : instructor Name: Gobindo Kumar , Age: 41, Exprerience: 15 years.. est rem. Reprehenderit, quasi neque! Animi odit quaerat ipsa accusantium laboriosam omnis. Adipisci iusto necessitatibus perferendis ratione iste minus consequatur. Nemo repellendus facere recusandae illum iste odio labore numquam consectetur, incidunt, accusamus fugit reiciendis.</p>
                            <div className='flex items-center justify-center mt-6'>
                                <Link to='/classes'><button className="mt-6 border-0 border-4 btn btn-outline"><span className="text-white">See All Class</span></button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Highlight;