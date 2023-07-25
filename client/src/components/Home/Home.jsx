import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.scss";
import background1 from "../../assets/bkgrd1.jpeg";

import { BsPersonFillGear, BsFillPhoneFill } from "react-icons/bs";

const Home = () => {
    const navigate = useNavigate();

    const [showService, setShowService] = useState(true);
    const [showConnect, setShowConnect] = useState(false);

    return (
        <div className="hero-banner">
            <div className="content">

                <div className="text-content">

                    <div className="header-content">
                        <ul className="menu-items">
                            {!showService && 
                                <li className="menu" onClick={()=> {
                                            setShowService(true)
                                            setShowConnect(false)
                                    }}>
                                    <BsPersonFillGear className="icon"/>
                                    <p>Add your services</p>
                                </li>
                            }
                            {showService && 
                                <li className="menu-click">
                                    <BsPersonFillGear className="icon"/>
                                    <p>Add your services</p>
                                </li>
                            }
                            {!showConnect && 
                                <li className="menu" onClick={()=> {
                                    setShowConnect(true)
                                    setShowService(false)
                                }}>
                                    <BsFillPhoneFill className="icon"/>
                                    <p>Connect</p>
                                </li>
                            }
                            {showConnect && 
                                <li className="menu-click" >
                                    <BsFillPhoneFill className="icon"/>
                                    <p>Connect</p>
                                </li>
                            }
                        </ul>
                    </div>

                    {showService && <div className="main-content">
                        <div className="header">
                            <h1>A platform for the self-employed</h1>
                        </div>
                        <div className="body">
                            Offer your skill set to the community.
                        </div>
                        <div className="cta v1" onClick={()=> navigate("/Register")}>Join the Community</div>
                        <div className="cta v2">Learn more about Need a Hand</div>
                    </div>}

                    {showConnect && <div className="main-content">
                        <div className="header">
                            <h1>Hire locally</h1>
                        </div>
                        <div className="body">
                            Help boost the economy within your community 
                        </div>
                        <div className="cta v1" onClick={()=> navigate("/Connect")}>Search the Network</div>
                        <div className="cta v2">Learn more about Need a Hand</div>
                    </div>}

                </div>
                
            </div>
        </div>
    );
};

export default Home;