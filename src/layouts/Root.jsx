import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";


const Root = () => {
    return (
        <div className="font-poppins">
            <div className="max-w-6xl mx-auto">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;