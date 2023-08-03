import { useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import ReactModal from "react-modal";
import Popup from 'reactjs-popup';

import { AiFillCheckCircle } from "react-icons/ai";

import "./CreatePost.scss";

import av1 from "../../assets/avatar/av.jpg";
import av3 from "../../assets/avatar/av4.jpg";
import av5 from "../../assets/avatar/av6.jpg";
import av6 from "../../assets/avatar/av9.jpg";
import av7 from "../../assets/avatar/av10.jpg";
import av8 from "../../assets/avatar/av11.jpg";
import av9 from "../../assets/avatar/av12.jpg";

const CreatePost = () => {
    const [isTrue, setIsTrue] = useState(false);
    const [isFalse, setIsFalse] = useState(false);
    const [state, setState] = useState(null);

    const [avatar1, setAvatar1] = useState(false);
    const [avatar2, setAvatar2] = useState(false);
    const [avatar3, setAvatar3] = useState(false);
    const [avatar4, setAvatar4] = useState(false);
    const [avatar5, setAvatar5] = useState(false);
    const [avatar6, setAvatar6] = useState(false);
    const [avatar7, setAvatar7] = useState(false);

    const navigate = useNavigate();

    const onFileChange = event => {
        setState({ selectedFile: event.target.files[0] });
    }

    const onFileUpload = () => {
 
        // Create an object of formData
        const formData = new FormData();
 
        // Update the formData object
        formData.append(
            "myFile",
            this.state.selectedFile,
            this.state.selectedFile.name
        );
 
        // Details of the uploaded file
        console.log(this.state.selectedFile);
 
        // Request made to the backend api
        // Send formData object
        axios.post("api/uploadfile", formData);
    };

    const fileData = () => {
 
        if (this.state.selectedFile) {
 
            return (
                <div>
                    <h2>File Details:</h2>
                    <p>File Name: {this.state.selectedFile.name}</p>
 
                    <p>File Type: {this.state.selectedFile.type}</p>
 
                    <p>
                        Last Modified:{" "}
                        {this.state.selectedFile.lastModifiedDate.toDateString()}
                    </p>
 
                </div>
            );
        } else {
            return (
                <div>
                    <br />
                    <h4>Choose before Pressing the Upload button</h4>
                </div>
            );
        }
    };

    return (
       <div className="container">
            <div className="content">
                <div className="header">
                    <h1>Create a Post</h1>
                </div>
                <div className="body">
                    <div className="prompt">
                        <span>Connect with your community, one trade at a time!</span>
                    </div>
                    <div className="form">
                        <div className="personal-info">
                            <div className="section">
                                <span>Name</span>
                                <input 
                                    type="text" 
                                    placeholder="John Doe"
                                />
                            </div>
                            
                            <div className="section">
                                <span>Location</span>
                                <input 
                                    type="text" 
                                    placeholder="London, Ontario"
                                />
                            </div>
                            
                            <div className="section">
                                <span>Phone Number</span>
                                <input 
                                    type="text" 
                                    placeholder="123-456-7890"
                                />
                            </div>
                        </div>
                        <div className="desc">
                            <div className="section">
                                <span>Trade</span>
                                <input 
                                    type="text" 
                                    placeholder="Plumber"
                                />
                            </div>
                            <div className="section description">
                                <span>Description</span>
                                <input 
                                    type="text" 
                                    placeholder="Give a brief description of your services"
                                />
                            </div>
                        </div>
                        <div className="misc">
                            <div className="section">
                                <span>Expereience (in years)</span>
                                <input 
                                    type="text" 
                                    placeholder="10"
                                />
                            </div>
                            <div className="section-cert">
                                <span>Certtified</span>
                                <div className="btns">
                                    {!isTrue && <div className="btn yes" onClick={() => {
                                        setIsTrue(true);
                                        setIsFalse(false);
                                    }}>
                                        <span>Yes</span>
                                    </div>}
                                    {isTrue && <div className="btn yesClicked">
                                        <span>Yes</span>
                                    </div>}
                                    {!isFalse && <div className="btn no" onClick={() => {
                                        setIsTrue(false);
                                        setIsFalse(true);
                                    }}>
                                        <span>No</span>
                                    </div>}
                                    {isFalse && <div className="btn noClicked">
                                        <span>No</span>
                                    </div>}
                                </div>  
                            </div>
                        </div>
                        <div className="images">
                            <div className="avatar">
                                <span>Select an avatar</span>
                                <div className="avatars">
                                    {!avatar1 && <img src={av1} alt="" onClick={() => {
                                        setAvatar1(true);
                                        setAvatar2(false);
                                        setAvatar3(false);
                                        setAvatar4(false);
                                        setAvatar5(false);
                                        setAvatar6(false);
                                        setAvatar7(false);
                                    }}/>}
                                    {avatar1 && <img src={av1} alt="" className="selected"/>}

                                    {!avatar2 && <img src={av3} alt="" onClick={() => {
                                        setAvatar1(false);
                                        setAvatar2(true);
                                        setAvatar3(false);
                                        setAvatar4(false);
                                        setAvatar5(false);
                                        setAvatar6(false);
                                        setAvatar7(false);
                                    }}/>}
                                    {avatar2 && <img src={av3} alt="" className="selected"/>}
                                    
                                    {!avatar3 && <img src={av5} alt="" onClick={() => {
                                        setAvatar1(false);
                                        setAvatar2(false);
                                        setAvatar3(true);
                                        setAvatar4(false);
                                        setAvatar5(false);
                                        setAvatar6(false);
                                        setAvatar7(false);
                                    }}/>}
                                    {avatar3 && <img src={av5} alt="" className="selected"/>}
                                    
                                    {!avatar4 && <img src={av6} alt="" onClick={() => {
                                        setAvatar1(false);
                                        setAvatar2(false);
                                        setAvatar3(false);
                                        setAvatar4(true);
                                        setAvatar5(false);
                                        setAvatar6(false);
                                        setAvatar7(false);
                                    }}/>}
                                    {avatar4 && <img src={av6} alt="" className="selected"/>}
                                    
                                    {!avatar5 && <img src={av7} alt="" onClick={() => {
                                        setAvatar1(false);
                                        setAvatar2(false);
                                        setAvatar3(false);
                                        setAvatar4(false);
                                        setAvatar5(true);
                                        setAvatar6(false);
                                        setAvatar7(false);
                                    }}/>}
                                    {avatar5 && <img src={av7} alt="" className="selected"/>}
                                    
                                    {!avatar6 && <img src={av8} alt="" onClick={() => {
                                        setAvatar1(false);
                                        setAvatar2(false);
                                        setAvatar3(false);
                                        setAvatar4(false);
                                        setAvatar5(false);
                                        setAvatar6(true);
                                        setAvatar7(false);
                                    }}/>}
                                    {avatar6 && <img src={av8} alt="" className="selected"/>}
                                    
                                    {!avatar7 && <img src={av9} alt="" onClick={() => {
                                        setAvatar1(false);
                                        setAvatar2(false);
                                        setAvatar3(false);
                                        setAvatar4(false);
                                        setAvatar5(false);
                                        setAvatar6(false);
                                        setAvatar7(true);
                                    }}/>}
                                    {avatar7 && <img src={av9} alt="" className="selected"/>}
                                </div>
                            </div>
                            <div className="work-img">
                                <span>Import images of your previous work</span>
                                <div className="uploads">
                                    <div className="upload">
                                        <input type="file" onChange={onFileChange}/>
                                        {/* <div onClick={onFileUpload} className="btn">Upload</div> */}
                                    </div>
                                    <div className="upload">
                                        <input type="file" onChange={onFileChange}/>
                                        {/* <div onClick={onFileUpload} className="btn">Upload</div> */}
                                    </div>
                                    <div className="upload">
                                        <input type="file" onChange={onFileChange}/>
                                        {/* <div onClick={onFileUpload} className="btn">Upload</div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Popup trigger=
                    {<div className="btn-submit">Submit</div>}
                    modal nested>
                    {
                        close => (
                            <div className='modal'>
                                <div className='content'>
                                    <AiFillCheckCircle/>
                                    <div className="fill">
                                        <h1>Submission Recieved</h1>
                                        <p>Check out other posts in the community</p>
                                    </div>
                                </div>
                                <div className="cta">
                                    <div className="cta-btn" onClick=
                                        {() => navigate("/Connect")}>
                                            Search Postings
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </Popup>
                </div>
            </div>
       </div>
    );
};

export default CreatePost;