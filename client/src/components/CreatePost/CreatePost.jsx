import "./CreatePost.scss";
import bckgrd from "../../assets/bkgrd-createPost.png";

const CreatePost = () => {

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
                            <div className="name">
                                <span>Name</span>
                                <input 
                                    type="text" 
                                    placeholder="Name"
                                />
                            </div>
                            
                            <div className="location">
                                <span>Location</span>
                                <input 
                                    type="text" 
                                    placeholder="Location"
                                />
                            </div>
                            
                            <div className="number">
                                <span>Phone Number</span>
                                <input 
                                    type="text" 
                                    placeholder="Phone Number"
                                />
                            </div>
                        </div>
                        <div className="desc">
                            <div className="trade">
                                <span>Trade</span>
                                <input 
                                    type="text" 
                                    placeholder="Trade"
                                />
                            </div>
                            <div className="description">
                                <span>Description</span>
                                <input 
                                    type="text" 
                                    placeholder="Description"
                                />
                            </div>
                        </div>
                        <div className="misc">
                            <div className="trade">
                                <span>Expereience (in years)</span>
                                <input 
                                    type="text" 
                                    placeholder="Experience"
                                />
                            </div>
                            <div className="certified">
                                <span>Certtified</span>
                                <button>Yes</button>
                                <button>No</button>
                            </div>
                        </div>
                        <div className="images">
                            <div className="avatar">
                                <span>Select an avatar</span>
                            </div>
                            <div className="work-img">
                                <span>Import images of your previous work</span>
                            </div>
                        </div>
                    </div>
                    <div className="btn">
                        <button>Submit</button>
                    </div>
                </div>
            </div>
       </div>
    );
};

export default CreatePost;