import {useNavigate} from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import Select from 'react-select';
import "./Connect.scss";
import Post from "./Post/Post";

import { Context } from "../../utils/context";
import { fetchDataFromApi } from "../../utils/api";

import { HiMiniMagnifyingGlass } from "react-icons/hi2";

const Connect = () => {
    const [posts, setPosts] = useState();
    const [products, setProducts] = useState();
    // const [query, setQuery] = useState("");
    // // const navigate = useNavigate();

    // const onChange = (e) => {
    //     setQuery(e.target.value);
    // };

    const option = [
        { value: 'Accountant', label: 'Accountant' },
        { value: 'Electrician', label: 'Electrician' },
        { value: 'Installer', label: 'Installer' },
        { value: 'Landscaper', label: 'Landscaper' },
        { value: 'Mechanic', label: 'Mechanic' },
        { value: 'Painter', label: 'Painter' },
        { value: 'Plumber', label: 'Plumber' },
        { value: 'Other', label: 'Other' }
    ]

    useEffect(() => {
        getPosts();
    }, [])

    const getPosts = () => {
        fetchDataFromApi("/api/posts?populate=*").then((res) => {
            console.log(res);
            setPosts(res);
        });
    };

    return (
        <div className="main-container">

            <div className="search-bar">
                <div className="search-bar-content">
                    <HiMiniMagnifyingGlass className="icon"/>
                    <input 
                        type="text"
                        autoFocus
                        placeholder="Search the network"
                        // value={query}
                        // onChange={onChange}
                    />
                </div>
            </div>

            <div className="content">
                <div className="filter">
                    <div className="filter-content">
                        <div className="subsection">
                            <p>Trade</p>
                            <Select 
                                className="trade-select"
                                maxMenuHeight={220}
                                menuPlacement="auto"
                                options={option}
                            />
                        </div>
                        <div className="subsection">
                            <p>Location</p>
                            <div className="input-loc">
                                <input 
                                    type="text"
                                    placeholder="Location"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="search-results">
                    <div className="results">
                        <Post posts={posts}/>
                    </div>
                </div> 

            </div>
       </div>
    );
};

export default Connect;