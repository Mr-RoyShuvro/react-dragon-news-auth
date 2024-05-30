import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";

const News = () => {

    const { id } = useParams();
    const news = useLoaderData();

    const aNews = news.find(aNews => aNews._id === id);

    const { image_url, title, details } = aNews;

    console.log(id, aNews)
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">

                    <div className="card bg-base-100 shadow-xl">
                        <figure><img className="w-full" src={image_url} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{title}</h2>
                            <p>{details}</p>
                            <div className="card-actions justify-start">
                                <Link to= "/">
                                    <button className="btn btn-secondary text-white">Go Back - All news in this category</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;