import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import { FaEye, FaGoogle } from 'react-icons/fa';
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
                const userData = {name: data.displayName, email: data.email, role: 'student'}
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
        <div className='loginBG'>
            <Helmet>
                <title>Summer Dance | Login</title>
            </Helmet>
            <div className="min-h-screen bg-black hero bg-opacity-70">
                <div className="flex-col hero-content ">
                    <h1 className="mb-6 text-5xl font-bold text-neutral-content">Login Now !</h1>
                    <form onSubmit={handleLogin} className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
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
                                <div className='flex items-center justify-center'>
                                    <input type={value} name='password' placeholder="password" className="input input-bordered" />
                                    <span onClick={() => setToggle(!visible)}><FaEye /></span>
                                </div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="mt-6 form-control">
                                <input className="btn btn-primary" type="submit" value="Login" />
                                <p className='mt-4'><small>You Have no Account</small> <Link to='/signUp'><span className='font-semibold underline text-sky-600'>Sign Up</span></Link></p>
                            </div>
                        </div>
                    </form>
                    <button onClick={handeleGoogleSignIn} className='w-full -mt-3 btn btn-primary'> <span className='text-xl font-semibold text-red-600'><FaGoogle></FaGoogle></span> Sign In With Google</button>

                </div>
            </div>
        </div>
    );
};

export default Login;