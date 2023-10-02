import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import SectionTitle from '../../components/SectionTitle';
const Register = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const { createUser, profileUpdate } = useContext(AuthContext)
    const navigate = useNavigate();
    const onSubmit = data => {
        console.log(data)
        if (data.password !== data.confirmPassword) {
            return;
        }
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                profileUpdate(data.name, data.photoURL)
                    .then(() => {

                        const userData = { name: data.name, email: data.email, role: 'student' }
                        fetch('https://summer-dance-camp-server-momenurislam6-gmailcom.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(userData)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset()
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User Sign Up Successful',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    navigate('/');
                                }
                            })


                    })
                    .catch(error => console.log(error))
            })
    };

    return (
        <div className=''>
            <Helmet>
                <title>Summer Dance | Sign Up</title>
            </Helmet>
            <SectionTitle title="Sign Up now !" subtitle="welcome to DM Master" />
            <div className="mb-20 ">
                <div className="flex-col hero-content">

                    <form onSubmit={handleSubmit(onSubmit)} className="flex-shrink-0  shadow-[#ff0800] shadow-2xl md:w-1/2 bg-yellow-50">
                        
                        <div className="w-full card-body">
                            <div className="w-full form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name='name' placeholder="Enter Your Name" className="input input-bordered" />
                                {errors.name && <span className='text-orange-600'>Name field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })} name='photoURL' placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className='text-orange-600'>PhotoURL field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-orange-600'>Email field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[a-z])/
                                })} name='password' placeholder="Password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-orange-400">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-orange-400">Password must be 6 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-orange-400">Password must have one Uppercase one lower case and one special character.</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" {...register("confirmPassword")} name='confirmPassword' placeholder="Confirm Password" className="input input-bordered" />

                            </div>
                            <div className="mt-6 form-control">
                                <input className="btn bg-transparent text-[#ff0800] border-[#ff0800] btn-secondary hover:bg-[#ff0800] hover:text-white duration-700 rounded-none" type="submit" value="Sign Up" />
                                <p className='mt-4'><small>All Ready Have an Account</small> <Link to='/login'><span className='font-semibold underline text-[#ff0800]'>Login</span></Link></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;