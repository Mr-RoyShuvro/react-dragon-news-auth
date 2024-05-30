import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png"
import qZone2 from "../../../assets/qZone2.png"
import qZone3 from "../../../assets/qZone3.png"
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const RightSideNav = () => {

    const {googleSignIn} = useContext(AuthContext);

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.error(error);
        })
    }

    return (
        <div>
            <div className="p-4 space-y-3 mb-6">
                <h3 className="text-3xl">Login With</h3>
                <button onClick={handleGoogleSignIn} className="btn btn-outline w-full text-sky-500 hover:bg-sky-500 hover:text-white ">
                    <FaGoogle />
                    Login with Google
                </button>
                <button className="btn btn-outline w-full text-orange-500 hover:bg-orange-500 hover:text-white">
                    <FaGithub />
                    Login with Github
                </button>
            </div>
            <div className="p-4 mb-6">
                <h3 className="text-3xl mb-4">Find Us On</h3>
                <a className="flex items-center p-4 text-lg border rounded-t-lg" href="">
                    <FaFacebook className="mr-3"></FaFacebook>
                    Facebook
                </a>
                <a className="flex items-center p-4 text-lg border-x" href="">
                    <FaTwitter className="mr-3"></FaTwitter>
                    Twitter
                </a>
                <a className="flex items-center p-4 text-lg border rounded-b-lg" href="">
                    <FaInstagram className="mr-3"></FaInstagram>
                    Instagram
                </a>
            </div>

            {/* q zone */}
            <div className="p-4 space-y-3 mb-6 bg-gray-300">
                <h3 className="text-3xl text-black">Q Zone</h3>
                <img src= {qZone1} alt="" />
                <img src= {qZone2} alt="" />
                <img src= {qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;