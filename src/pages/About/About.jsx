import Marquee from "react-fast-marquee";
import employee1 from "../../assets/employee1.png"
import employee2 from "../../assets/employee2.jpg"
import employee3 from "../../assets/employee3.jpg"
import employee4 from "../../assets/employee4.jpg"
import employee5 from "../../assets/employee6.jpg"
import Navbar from "../Shared/Navbar/Navbar";

const About = () => {
    return (
        <div>
            <Navbar className="mb-10"></Navbar>
            <Marquee className="text-black" speed={80}>
                <div className="bg-white rounded-2xl w-96 h-screen">
                    <img className="w-80 h-64 rounded-t-2xl" src={employee1} alt="" />
                    <div className="w-80 px-5 pt-5">
                        <h2 className="text-xl font-semibold">Jane Doe</h2>
                        <p className="font-semibold">Senior Reporter</p>
                        <p>Jane has been with Dragon News Company for 5 years, covering major events and delivering in-depth investigative reports. Her passion for journalism is evident in her work.</p>
                    </div>
                </div>
                <div className="bg-white rounded-2xl w-96 h-screen">
                    <img className="w-80 h-64 rounded-t-2xl" src={employee2} alt="" />
                    <div className="w-80 px-5 pt-5">
                        <h2 className="text-xl font-semibold">John Smith</h2>
                        <p className="font-semibold">Chief Editor</p>
                        <p>John is the backbone of our editorial team, ensuring all content meets our high standards of quality and integrity. He has over 10 years of experience in the news industry.</p>
                    </div>
                </div>
                <div className="bg-white rounded-2xl w-96 h-screen">
                    <img className="w-80 h-64 rounded-t-2xl" src={employee3} alt="" />
                    <div className="w-80 px-5 pt-5">
                        <h2 className="text-xl font-semibold">Emily Johnson</h2>
                        <p className="font-semibold">Social Media Manager</p>
                        <p>Emily engages our audience through various social media platforms. Her innovative strategies have significantly increased our online presence.</p>
                    </div>
                </div>
                <div className="bg-white rounded-2xl w-96 h-screen">
                    <img className="w-80 h-64 rounded-t-2xl" src={employee4} alt="" />
                    <div className="w-80 px-5 pt-5">
                        <h2 className="text-xl font-semibold">Sarah Williams</h2>
                        <p className="font-semibold">Video Producer</p>
                        <p>Michael produces compelling video content for our news stories. His creativity and technical skills bring our stories to life.</p>
                    </div>
                </div>
                <div className="bg-white rounded-2xl w-96 h-screen">
                    <img className="w-80 h-64 rounded-t-2xl" src={employee5} alt="" />
                    <div className="w-80 px-5 pt-5">
                        <h2 className="text-xl font-semibold">Michael Brown</h2>
                        <p className="font-semibold">Marketing Specialist</p>
                        <p>Sarah develops and implements marketing campaigns that promote our brand and expand our readership. Her strategic thinking and expertise are invaluable to our team.</p>
                    </div>
                </div>
            </Marquee>
        </div>
    );
};

export default About;