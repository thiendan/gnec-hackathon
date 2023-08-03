import {useNavigate} from "react-router-dom";
import { useContext } from "react";

import bckd from "../../../assets/register.jpg";
import { FcGoogle } from "react-icons/fc";

import "./Login.scss";
import { Context } from "../../../utils/context";

const Login = () => {
    const {visited, setVisited} = useContext(Context);
    const navigate = useNavigate();

    return (
        <div className="container-reg">
            <div className="content">
                <div className="login-box">
                    <div className="register-info">

                        <div className="signIn">
                                <h1 className="title-h1">Welcome back</h1>
                                <p className="small-text">Welcome back! Please enter your details.</p>
                                <div className="cta">
                                    <p>Email</p>
                                    <div className="input-section">
                                        <input 
                                            type="text"
                                            autoFocus
                                        />
                                    </div>
                                </div>
                                
                                <div className="cta v2">
                                    <p>Password</p>
                                    <div className="input-section">
                                        <input type="text"/>
                                    </div>
                                </div>
                                
                                <div className="options">
                                    <div className="rmbr">
                                        <input type="checkbox"/>
                                        <p>Remember Me</p>
                                    </div>
                                    
                                    <div className="forgot-pwd">
                                        <p>Forgot Password?</p>
                                    </div>
                                </div>

                                <div className="sign-in-btn" onClick={()=> {
                                    setVisited(true)
                                    navigate("/Connect")
                                }}>
                                    <p>Sign In</p>
                                </div>

                                <div className="divider">
                                    <div className="line">
                                        <hr />
                                    </div>
                                    <p>or</p>
                                    <div className="line">
                                        <hr />
                                    </div>
                                </div>
                                
                                <div className="google-btn">
                                    <FcGoogle />
                                    <p>Log in with Google</p>
                                </div>

                                <div className="bottom-options">
                                    <p> Don't have an account?</p>
                                    <p className="v1" onClick={()=>navigate("/Register")}>Sign up</p>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="icon">
                    <img src={bckd} alt=""/>
                </div>
                
            </div>
        </div>
    );
};

export default Login;