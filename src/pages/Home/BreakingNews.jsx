import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-error rounded-r-none">Latest</button>
            <Marquee pauseOnHover gradient gradientColor="red" gradientWidth={150} speed={100}>
                <Link to="" className="ml-10">I can be a React component, multiple React components, or just some text.</Link>
                <Link to="" className="ml-10">I can be a React component, multiple React components, or just some text.</Link>
                <Link to="" className="ml-10">I can be a React component, multiple React components, or just some text.</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;