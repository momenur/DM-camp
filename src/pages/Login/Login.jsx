import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import { FaEye, FaGoogle } from 'react-icons/fa';
import SectionTitle from '../../components/SectionTitle';
const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [visible, setToggle] = useState(true)
    console.log(visible);
    let value = 'text';
    if (visible) {
        value = 'password'
    }

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your Log In Successful',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true });
            })
    }

    const handeleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const data = result.user;
                console.log(data);
                const userData = { name: data.displayName, email: data.email, role: 'student' }
                fetch('https://summer-dance-camp-server-momenurislam6-gmailcom.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userData)
                })
                    .then(res => res.json())
                    .then(() => {

                        navigate(from, { replace: true });
                    })
                // if (loggedUser) {
                //     navigate(from, { replace: true });
                // }
            })
            .catch(error => console.log(error))
    }
    return (
        <div className=''>
            <Helmet>
                <title>Summer Dance | Login</title>
            </Helmet>
            <SectionTitle title="Login Now" subtitle="Please Login Now" />
            <div className="mb-20">
                <div className="flex-col hero-content ">
                    <form onSubmit={handleLogin} className="flex-shrink-0 md:w-[500px] shadow-2xl shadow-[#ff0800] card bg-yellow-50">
                        <div className='pt-8 ps-8 text-[#ff0800]'>
                            <h1>Admin Email: admin@gmail.com</h1>
                            <h4>Admin Password: Admin123#</h4>
                        </div>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className='flex items-center justify-center gap-2'>
                                    <input type={value} name='password' placeholder="password" className="w-full input input-bordered" />
                                    <span onClick={() => setToggle(!visible)}><FaEye /></span>
                                </div>
                            </div>
                            <div className="mt-6 form-control">
                                <input className="btn bg-transparent text-[#ff0800] border-[#ff0800] btn-secondary hover:bg-[#ff0800] hover:text-white duration-700 rounded-none" type="submit" value="Login" />
                                <p className='mt-4'><small>You Have no Account</small> <Link to='/signUp'><span className='font-semibold underline text-sky-600'>Sign Up</span></Link></p>
                            </div>
                        </div>
                    </form>
                    <button onClick={handeleGoogleSignIn} className='w-[450px] mt-12 btn bg-transparent text-[#ff0800] border-[#ff0800] btn-secondary hover:bg-[#ff0800] hover:text-white duration-700 rounded-none shadow-yellow-400 shadow-xl'> <span className='text-xl font-semibold text-red-600'><FaGoogle></FaGoogle></span> Sign In With Google</button>

                </div>
            </div>
        </div>
    );
};

export default Login;