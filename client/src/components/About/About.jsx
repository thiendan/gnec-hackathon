import "./About.scss";
import Header from "../Header/Header";

import AboutBannerImg from "../../assets/about-banner.jpg";
import Sec1 from "../../assets/sec1-img.jpg";
import Sec2 from "../../assets/sec2-img.png";
import Sec3 from "../../assets/sec3-img.png";

const About = () => {
    return (
        <div className="main-content">
            <Header />

            <div className="title-banner">
                <div className="section-title">
                    <p>About</p>
                    <h1>Profile</h1>
                </div>
                <div className="section-img">
                    <img src={AboutBannerImg} alt="" />
                </div>
            </div>

            <div className="first-sec">
                <p>Together, we can take meaningful steps towards a more sustainable future. Let's embark on this sustainable food adventure together with EcoEats!</p>
            </div>

            <div className="sections">
                <div className="title">
                    <h1>Our Mission</h1>
                </div>
                <div className="body-sec">
                    <div className="body">
                        <p>EcoEats is a revolutionary Sustainable Food Finder app on a mission to make sustainable and ethical food choices accessible to all. Our platform empowers users to explore a world of delectable delights while promoting responsible consumption and production. With a vision to achieve United Nations' Goals 2 and 12—Zero Hunger and Responsible Consumption and Production—we are committed to creating a positive impact on communities and the environment.</p>
                    </div>
                    <div className="img-sec">
                        <img src={Sec1} alt=""/>
                    </div>
                </div>

                <div className="title">
                    <h1>Our Purpose</h1>
                </div>
                <div className="body-sec">
                    <div className="img-sec2">
                        <img src={Sec2} alt=""/>
                    </div>
                    <div className="body2">
                        <p>Through EcoEats, users can embark on a culinary journey that aligns with their values. Our website provides a seamless experience, guiding users to discover local restaurants and grocery stores that offer sustainably sourced and ethically produced food options. We believe that every bite counts, and by supporting businesses that prioritize sustainability, we collectively contribute to a healthier, more sustainable future.</p>
                    </div>
                </div>

                <div className="title">
                    <h1>Our Attitude</h1>
                </div>
                <div className="body-sec">
                    <div className="body">
                        <p>With a user-friendly interface and powerful search capabilities, EcoEats empowers individuals to make conscious dining and grocery choices. By bringing together a curated selection of establishments that share our vision for a greener planet, we create a vibrant and thriving ecosystem of sustainable food options.</p>
                        <p>EcoEats is not just an site; it's a movement—a movement towards a world where food nourishes not only our bodies but also our communities and planet. Join us in this journey as we savor the flavors of responsible dining and celebrate the joy of making a positive impact—one delicious meal at a time.</p>
                    </div>
                    <div className="img-sec">
                        <img src={Sec3} alt=""/>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default About;