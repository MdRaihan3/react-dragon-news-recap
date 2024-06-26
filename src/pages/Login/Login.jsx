import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
    const { signIn } = useContext(AuthContext)
    const location = useLocation();
    console.log('location:', location)
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')

        console.log(email, password);

        signIn(email, password)
            .then(result => {
                console.log(result.user)
                // navigate after login
                navigate(location?.state ? location.state : '/')
            })
            .then(error => {
                console.error(error)
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h1 className=" text-3xl text-center">Login</h1>
                <p className=" text-3xl">This is login</p>
            </div>

            <div className="hero  bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        {/* forrrrrrrrrrrrrrrrrrrrrrrrrm */}
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>

                    </div>
                    <p className=" text-center text-lg mt-4">Do not have an account? <Link className=' text-lg text-blue-600 font-bold' to='/register'>Register</Link></p>

                </div>
            </div>
        </div>
    );
};

export default Login;