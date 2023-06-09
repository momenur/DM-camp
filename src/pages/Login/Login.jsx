import './Login.css'
const Login = () => {
    return (
        <div className='loginBG'>
            <div className="min-h-screen bg-black hero bg-opacity-70">
                <div className="flex-col hero-content ">
                <h1 className="mb-6 text-5xl font-bold text-neutral-content">Login Now !</h1>
                    <form className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
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
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="mt-6 form-control">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </div>
                    </form>
                    <button className='btn btn-primary'> Sign In With Google</button>
                            
                </div>
            </div>
        </div>
    );
};

export default Login;