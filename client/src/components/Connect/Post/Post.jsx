import "./Post.scss";
import {useNavigate} from "react-router-dom";
import Posts from "./Posts/Posts";

const Post = ({posts}) => {
    const navigate = useNavigate();

    return (
        <div>
        {posts?.data?.map((item) => (
        <div key={item.id} className="posts" onClick={() => navigate("/post/" + item.id)}>
            <div className="post-content">
                
                <div className="img-container">
                    <img src={process.env.REACT_APP_DEV_URL + item.attributes.image.data[1].attributes.url} alt=""/>
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

        {/* {posts?.data?.map(item => (
            <Posts 
                key={item.id} 
                id={item.id} 
                data={item.attributes}
            />
        ))} */}
        </div>
    );
};

export default Post;