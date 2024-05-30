import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-error bg-red-600 hover:bg-red-700 text-white rounded-r-none">Latest News</button>
            <Marquee pauseOnHover gradient gradientColor="red" gradientWidth={150} speed={100}>
                <Link to="https://en.wikipedia.org/wiki/World_economy" className="ml-10">Global Economy: World Bank forecasts global economic growth to slow in 2024.</Link>
                <Link to="https://en.wikipedia.org/wiki/Technology" className="ml-10">Technology: Tech giant XYZ unveils breakthrough in quantum computing.</Link>
                <Link to="https://en.wikipedia.org/wiki/Environment" className="ml-10">Environment: UN report warns of accelerating climate change impacts.</Link>
                <Link to="https://en.wikipedia.org/wiki/Health" className="ml-10">Health: New vaccine shows 95% efficacy against emerging virus strain.</Link>
                <Link to="https://en.wikipedia.org/wiki/Sport" className="ml-10">Sports: Local team wins national championship in a stunning final.</Link>
                <Link to="https://en.wikipedia.org/wiki/Entertainment" className="ml-10">Entertainment: Award-winning actor announces retirement from the film industry.</Link>
                <Link to="https://en.wikipedia.org/wiki/Science" className="ml-10">Science: Astronomers discover potentially habitable exoplanet in nearby star system.</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;