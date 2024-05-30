import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {

    const location = useLocation();

    const navigate = useNavigate();

    const {signIn} = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        console.log(form.get('email'));
        const email = form.get('email');
        const password = form.get('password');
        signIn(email, password)
        .then(result =>{
            console.log(result.user);
            // navigate after login
            navigate(location?.state ? location.state : "/");
        })
        .catch(error => {
            console.error(error);
        })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero mt-14">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 pt-10 ">
                    <h3 className="text-3xl font-semibold text-center">Login your account</h3>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className="text-center pb-14 text-base">Do Not Have An Account ? <Link className="text-red-500 font-semibold" to="/register">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;