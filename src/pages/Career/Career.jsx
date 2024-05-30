import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const careersData = {
    introduction: {
        title: "Join the Dragon News Team",
        description: "At Dragon News Company, we are dedicated to delivering the latest news with accuracy and integrity. Join us in making a difference!"
    },
    whyWorkWithUs: {
        title: "Why Work with Us",
        description: "Discover the benefits of working with a dynamic and forward-thinking news organization. We offer a collaborative environment, opportunities for growth, and a strong commitment to journalistic excellence."
    },
    jobOpenings: [
        { title: "Reporter", link: "job-description1.html" },
        { title: "Editor", link: "job-description2.html" },
        { title: "Social Media Manager", link: "job-description3.html" }
    ],
    howToApply: {
        title: "How to Apply",
        description: "Interested candidates can apply by sending their resume and cover letter to careers@dragonnews.com or by filling out our online application form.",
        email: "careers@dragonnews.com",
        formLink: "application-form.html"
    },
    employeeTestimonials: [
        { quote: "Working at Dragon News has been an incredible journey. The supportive team and exciting projects make it a fantastic place to grow my career.", author: "Jane Doe, Reporter" },
        { quote: "Dragon News Company values its employees and offers numerous opportunities for professional development.", author: "John Smith, Editor" }
    ],
    companyBenefits: {
        title: "Company Benefits",
        benefits: [
            "Comprehensive health insurance",
            "Retirement savings plan",
            "Generous paid time off",
            "Professional development programs"
        ]
    },
    careerDevelopment: {
        title: "Career Development",
        description: "We are committed to helping our employees grow through continuous training and career advancement opportunities."
    },
    diversityInclusion: {
        title: "Diversity and Inclusion",
        description: "We embrace diversity and are dedicated to creating an inclusive environment where everyone feels valued and respected."
    },
    contact: {
        title: "Contact Us",
        description: "If you have any questions, feel free to contact our HR department at hr@dragonnews.com.",
        email: "hr@dragonnews.com"
    },
    faqs: {
        title: "FAQs",
        description: "Find answers to common questions about working at Dragon News Company",
        link: "faqs.html"
    }
};

const Career = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="grid grid-cols-4">
                <div className="career-section text-center space-y-10 col-span-3">
                    <section className="intro text-center">
                        <h1 className="text-2xl font-bold">{careersData.introduction.title}</h1>
                        <p>{careersData.introduction.description}</p>
                    </section>

                    <section className="why-work-with-us">
                        <h2 className="text-2xl font-bold">{careersData.whyWorkWithUs.title}</h2>
                        <p>{careersData.whyWorkWithUs.description}</p>
                    </section>

                    <section className="job-openings">
                        <h2 className="text-2xl font-bold">Current Job Openings</h2>
                        <ul>
                            {careersData.jobOpenings.map((job, index) => (
                                <li key={index}>
                                    <a href={job.link}>{job.title}</a>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="how-to-apply">
                        <h2 className="text-2xl font-bold">{careersData.howToApply.title}</h2>
                        <p>
                            {careersData.howToApply.description}{' '}
                            <a href={`mailto:${careersData.howToApply.email}`}>{careersData.howToApply.email}</a> or by filling out our <a href={careersData.howToApply.formLink}>online application form</a>.
                        </p>
                    </section>

                    <section className="employee-testimonials">
                        <h2 className="text-2xl font-bold">Employee Testimonials</h2>
                        {careersData.employeeTestimonials.map((testimonial, index) => (
                            <blockquote key={index}>
                                "{testimonial.quote}" - {testimonial.author}
                            </blockquote>
                        ))}
                    </section>

                    <section className="company-benefits">
                        <h2 className="text-2xl font-bold">{careersData.companyBenefits.title}</h2>
                        <ul>
                            {careersData.companyBenefits.benefits.map((benefit, index) => (
                                <li key={index}>{benefit}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="career-development">
                        <h2 className="text-2xl font-bold">{careersData.careerDevelopment.title}</h2>
                        <p>{careersData.careerDevelopment.description}</p>
                    </section>

                    <section className="diversity-inclusion">
                        <h2 className="text-2xl font-bold">{careersData.diversityInclusion.title}</h2>
                        <p>{careersData.diversityInclusion.description}</p>
                    </section>

                    <section className="contact">
                        <h2 className="text-2xl font-bold">{careersData.contact.title}</h2>
                        <p>
                            {careersData.contact.description}{' '}
                            <a href={`mailto:${careersData.contact.email}`}>{careersData.contact.email}</a>.
                        </p>
                    </section>

                    <section className="faqs">
                        <h2 className="text-2xl font-bold">{careersData.faqs.title}</h2>
                        <p>
                            {careersData.faqs.description} <a href={careersData.faqs.link}>here</a>.
                        </p>
                    </section>
                </div>
                <RightSideNav></RightSideNav>
            </div>
        </div>
    );
};

export default Career;