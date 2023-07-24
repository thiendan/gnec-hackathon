import { useNavigate } from "react-router-dom";
import "./Home.scss";
import BannerImg from "../../assets/banner-img.png";
import ChefLogo from "../../assets/chef_logo.png";

import { GiCook } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="hero-banner">
            <div className="content">

                <div className="text-content">
                    <div className="title-content">
                        {/* <GiCook className="icon"/> */}
                        <img className="icon" src={ChefLogo} alt=""/>
                        <h1>EcoEats</h1>
                    </div>

                    <div className="small-content">
                        <p className="main-text">Where Responsible Dining Meets a Greener Tomorrow</p>
                        <p className="sub-text">*only available in North America</p>
                    </div>

                    <div className="ctas">
                        <div className="banner-cta v1">
                            Shop Sustainably
                        </div>
                        <div 
                            className="banner-cta v2"
                            onClick={() => navigate("/About")}
                        >
                            or...learn more
                        </div>
                        <FaArrowRight className="banner-cta v3"/>
                    </div>
                </div>

                <img className="banner-img" src={BannerImg} alt=""/>
                
            </div>
        </div>
    );
};

export default Home;