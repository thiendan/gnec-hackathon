import "./About.scss";

import img1 from "../../assets/abt-img1.png";
import img2 from "../../assets/abt-img2.jpg";
import img3 from "../../assets/abt-img3.jpg";
import img4 from "../../assets/abt-img4.png";
import goal1 from "../../assets/goal1.png";
import goal8 from "../../assets/goal8.png";
import goal10 from "../../assets/goal10.jpg";

const About = () => {

    return (
        <div className="main-content-abt">
            <div className="abt-content">

                <div className="title-banner">
                    <div className="section-title-abt">
                        <p>About</p>
                        <h1>Profile</h1>
                    </div>
                    <div className="section-img">
                        <img src={img1} alt=""/>
                    </div>
                </div>

                <div className="first-sec">
                    <p>Connect with your community, one trade at a time</p>
                </div>

                <div className="sections">
                    <div className="title-abt">
                        <h1>Our Mission</h1>
                    </div>
                    <div className="body-sec">
                        <div className="body">
                            <p>Our mission is to contribute to the UN SDG's in the following ways:</p>
                        </div>
                        <div className="goals-sec">
                            <div className="goal-desc">
                                <p className="goal-title">Goal 1: No Poverty</p>
                                <p className="goal-desc">By providing self-employment opportunities, individuals have the chance to earn a sustainable income, which can help lift them and their families out of poverty.</p>
                            </div>
                            <div className="img-sec">
                                <img src={goal1} alt=""/>
                            </div>
                        </div>
                        <div className="goals-sec">
                            <div className="img-sec">
                                <img src={goal8} alt=""/>
                            </div>
                            <div className="goal-desc">
                                <p className="goal-title">Goal 8: Decent Work and Economic Growth</p>
                                <p className="goal-desc">Offering self-employment opportunities can create new jobs and foster economic growth in the community, leading to improved living standards and reduced unemployment rates.</p>
                            </div>
                        </div>
                        <div className="goals-sec">
                            <div className="goal-desc">
                                <p className="goal-title">Goal 10: Reduced Inequalities</p>
                                <p className="goal-desc">Self-employment can empower marginalized and disadvantaged individuals, reducing income disparities and promoting more inclusive economic opportunities.</p>
                            </div>
                            <div className="img-sec">
                                <img src={goal10} alt=""/>
                            </div>
                        </div>
                        
                    </div>

                    <div className="title-abt">
                        <h1>Our Plan</h1>
                    </div>
                    <div className="body-sec">
                        <div className="plan-sec">
                            <div className="body">
                                <p className="body-desc">Need a Hand plans on developing a mobile application that allows users within the community to connect with trades workers and request their service on demand.</p>
                            </div>
                            <div className="img-sec">
                                <img src={img2} alt=""/>
                            </div>
                        </div>
                        
                        <div className="plan-sec">
                            <div className="img-sec">
                                <img src={img4} alt=""/>
                            </div>
                            <div className="body">
                                <p className="body-desc2">A platform where community members can request assistance with household repairs and where companies can find manual labour contractors.</p>
                            </div>
                            
                        </div>
                        <div className="plan-sec">
                            {/* <div className="img-sec2">
                                <img src={img3} alt=""/>
                            </div> */}
                            <div className="body-q">
                                <p className="body-quote">"It's Uber for the trades"</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;