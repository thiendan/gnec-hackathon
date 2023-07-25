import {useNavigate} from "react-router-dom";
import { useState } from "react";
import "./Connect.scss";
import Post from "./Post/Post";

import { HiMiniMagnifyingGlass } from "react-icons/hi2";

const Connect = () => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const onChange = (e) => {
        setQuery(e.target.value);
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
                        value={query}
                        onChange={onChange}
                    />
                </div>
            </div>

            <div className="content">
                <div className="filter">
                    <div className="filter-content">
                        <div className="title">Filter by:</div>
                        <div className="trade">Trade</div>
                        <div className="location">Location</div>
                    </div>
                </div>

                <div className="search-results">
                    <div className="results">
                        <Post />
                    </div>
                </div> 
            </div>
       </div>
    );
};

export default Connect;