import "../Post.scss";
import {useNavigate} from "react-router-dom";

const Posts = ({id, data}) => {
    const navigate = useNavigate();

    return (
        <div className="posts" onClick={() => navigate("/post/" + id)}>
            <div className="post-content">
                
                <div className="img-container">
                    <img src={process.env.REACT_APP_DEV_URL + data.image.data[0].attributes.url} alt=""/>
                </div>
                
               
                <div className="details">
                    <div className="title">
                        <span className="name">{data.title}</span>
                        <span className="loc">{data.location}</span>
                    </div>
                    <span className="desc">{data.desc}</span>
                </div>
                
            </div>
        </div>
    );
};

export default Posts;