import { useState, useContext, useEffect } from "react";
import { fetchDataFromApi } from "../../utils/api";
import {useNavigate} from "react-router-dom";

import { AiOutlineArrowRight, AiOutlineCheck } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./SinglePost.scss";

const SinglePost = () => {
    const [image1, setImage1] = useState(false);
    const [image2, setImage2] = useState(true);
    const [image3, setImage3] = useState(false);
    const navigate = useNavigate();

    const {id} = useParams();
    const {data} = useFetch(`/api/posts?populate=*&[filters][id]=${id}`);

    // useEffect(() => {
    //     getPosts();
    // }, [])

    // const getPosts = () => {
    //     fetchDataFromApi("/api/posts?populate=*").then((res) => {
    //         console.log(res);
    //         setPosts(res);
    //     });
    // };
    if (!data) return;
    const post = data.data[0].attributes;

    return (
        <div>
            {/* {posts?.data?.map((item) => ( */}
                <div className="post-container">
                    <div className="content"> 

                        <div className="header">
                            <div className="title">
                                <h1>{post.title}</h1>
                            </div>
                            <div className="back" onClick={() => navigate("/connect")}>
                                <span>Back</span>
                                <AiOutlineArrowRight/>
                            </div>
                        </div>

                        {image1 && <div className="img-section">
                            <div className="img1">
                                <img src={process.env.REACT_APP_DEV_URL + post.image.data[0].attributes.url} alt=""/>
                            </div>
                            <div className="img2" onClick={() => {
                                setImage1(false);
                                setImage2(true);
                                setImage3(false);
                            }}>
                                <img src={process.env.REACT_APP_DEV_URL + post.image.data[1].attributes.url} alt=""/>
                            </div>
                            <div className="img3" onClick={() => {
                                setImage1(false);
                                setImage2(false);
                                setImage3(true);
                            }}>
                                <img src={process.env.REACT_APP_DEV_URL + post.image.data[2].attributes.url} alt=""/>
                            </div>
                        </div>}

                        {image2 && <div className="img-section">
                            <div className="img2" onClick={() => {
                                setImage1(true);
                                setImage2(false);
                                setImage3(false);
                            }}>
                                <img src={process.env.REACT_APP_DEV_URL + post.image.data[0].attributes.url} alt=""/>
                            </div>
                            <div className="img1">
                                <img src={process.env.REACT_APP_DEV_URL + post.image.data[1].attributes.url} alt=""/>
                            </div>
                            <div className="img3" onClick={() => {
                                setImage1(false);
                                setImage2(false);
                                setImage3(true);
                            }}>
                                <img src={process.env.REACT_APP_DEV_URL + post.image.data[2].attributes.url} alt=""/>
                            </div>
                        </div>}

                        {image3 && <div className="img-section">
                            <div className="img2"  onClick={() => {
                                setImage1(true);
                                setImage2(false);
                                setImage3(false);
                            }}>
                                <img src={process.env.REACT_APP_DEV_URL + post.image.data[0].attributes.url} alt=""/>
                            </div>
                            <div className="img3" onClick={() => {
                                setImage1(false);
                                setImage2(true);
                                setImage3(false);
                            }}>
                                <img src={process.env.REACT_APP_DEV_URL + post.image.data[1].attributes.url} alt=""/>
                            </div>
                            <div className="img1">
                                <img src={process.env.REACT_APP_DEV_URL + post.image.data[2].attributes.url} alt=""/>
                            </div>
                        </div>}

                        <div className="body-content">
                            <div className="desc">
                                <div className="location">
                                    <span className="loc-title">Location</span>
                                    <span className="loc">{post.location}</span>
                                </div>
                                <div className="description">
                                    <div className="title">Description</div>
                                    <span className="body">{post.desc}</span>
                                </div>
                            </div>
                            <div className="side">
                                <div className="about-me">
                                    <div className="header-about">
                                        <div className="image">
                                            <img src={process.env.REACT_APP_DEV_URL + post.avatar.data.attributes.url} alt=""/>
                                        </div>
                                        <div className="name-about">{post.name}</div>
                                    </div>
                                    <div className="number">{post.phoneNumber}</div>
                                </div>

                                <div className="experience">
                                    <div className="exp-content">
                                        <span className="title">Experience:</span>
                                        <div className="content">
                                            <span className="num">{post.experience}</span>
                                            <span className="yr">years</span>
                                        </div>
                                    </div>
                                </div>

                                {post.certified && <div className="certified green">
                                    <AiOutlineCheck className="icon"/>
                                    <span className="title">Certified</span>
                                </div>}

                                {!post.certified && <div className="certified red">
                                    <RxCross1 className="icon"/>
                                    <span className="title">Certified</span>
                                </div>}

                            </div>
                        </div>

                        <div className="recommended">

                        </div>
                        
                    </div>
                </div>
            {/* ))} */}
        </div>
    );
};

export default SinglePost;