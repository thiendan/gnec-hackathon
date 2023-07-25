import { Navigate, useNavigate } from "react-router-dom";
import "./Header.scss";

import { HiHandRaised } from "react-icons/hi2";

const Header = () => {
    const navigate = useNavigate();
    return (
        <header className="main-header">
            <div className="header-content">
                <ul className="left">
                    <li onClick={()=> navigate("/")}>Home</li>
                    <li onClick={()=> navigate("/Connect")}>Connect</li>
                    <li onClick={()=> navigate("/CreatePost")}>Create Post</li>
                </ul>
            
                <div className="center" onClick={()=> navigate("/")}>
                    <HiHandRaised className="icon"/>
                    <h1>Need a Hand</h1>
                </div>

                <div className="right">
                    <div className="cta v1" onClick={()=> navigate("/Register")}>Log in</div>
                    <div className="cta v2" onClick={()=> navigate("/Register")}>Sign up</div>
                </div>
            </div>
        </header>
    );
};

export default Header;