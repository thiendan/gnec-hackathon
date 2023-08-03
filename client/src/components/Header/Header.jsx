import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import "./Header.scss";
import { Context } from "../../utils/context";

import { HiHandRaised } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";

const Header = () => {
    const navigate = useNavigate();
    const {visited, setVisited} = useContext(Context);

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

                {!(visited) && <div className="right">
                    <div className="cta v1" onClick={()=> navigate("/Login")}>Log in</div>
                    <div className="cta v2" onClick={()=> navigate("/Register")}>Sign up</div>
                </div>}

                {(visited) && <div className="right">
                    <div className="pfp">
                        <CgProfile />
                    </div>
                    <div className="cta v1" onClick={()=> {
                        setVisited(false)
                        navigate("/Login")
                    }}>Log out</div>
                </div>}

            </div>
        </header>
    );
};

export default Header;