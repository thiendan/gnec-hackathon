import "./Post.scss";
import {useNavigate} from "react-router-dom";

const Post = ({posts}) => {
    const navigate = useNavigate();

    return (
        <div>
        {posts?.data?.map((item) => (
        <div key={item.id} className="posts" onClick={() => navigate("/post/" + item.id)}>
            <div className="post-content">
                
                <div className="img-container">
                    <img src={process.env.REACT_APP_DEV_URL + item.attributes.image.data[0].attributes.url} alt=""/>
                </div>
                
               
                <div className="details">
                    <div className="title">
                        <span className="name">{item.attributes.title}</span>
                        <span className="loc">{item.attributes.location}</span>
                        </div>
                        <span className="desc">{item.attributes.desc}</span>
                </div>
                
            </div>
        </div>
        ))}
        </div>
    );
};

export default Post;