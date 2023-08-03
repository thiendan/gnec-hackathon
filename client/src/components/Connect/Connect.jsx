import {useNavigate, useParams} from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import Select from 'react-select';
import "./Connect.scss";
import Post from "./Post/Post";

import { Context } from "../../utils/context";
import { fetchDataFromApi } from "../../utils/api";
import useFetch from "../../hooks/useFetch";


import { HiMiniMagnifyingGlass } from "react-icons/hi2";

const Connect = () => {
    const {posts, setPosts} = useContext(Context);
    const {categories, setCategories} = useContext(Context);
    const [trade] = useState("");
    
    const [query, setQuery] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    // // const navigate = useNavigate();

    const onChange = (e) => {
        setQuery(e.target.value);
    };

    const onChangeLoc = (e1) => {
        setSearchQuery(e1.target.value);
    };

    let {data} = useFetch(`/api/posts?populate=*&filters[title][$contains]=${query}`);

    let {dataCat} = useFetch(`/api/posts?populate=*&filters[category][$contains]=${trade}`);

    let {searchData} = useFetch(`/api/posts?populate=*&filters[title][$contains]=${query}&filters[location][$contains]=${searchQuery}`);

    let {searchDataOnly} = useFetch(`/api/posts?populate=*&filters[location][$contains]=${searchQuery}`);

    if (!query.length && !searchQuery.length) {
        data = posts;
    }

    if (searchQuery.length){
        data = searchDataOnly;
    }

    // if (query.length && searchQuery.length){
    //     data = searchData;
    // }

    useEffect(() => {
        getPosts();
        getCategories();
    }, [])

    const getPosts = () => {
        fetchDataFromApi("/api/posts?populate=*").then((res) => {
            console.log(res);
            setPosts(res);
        });
    };

    const getCategories= () => {
        fetchDataFromApi("/api/categories?populate=*").then((res) => {
            console.log(res);
            setCategories(res);
        });
    };

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
                        <div className="subsection">
                            <p>Trade</p>
                            <Select 
                                className="trade-select"
                                maxMenuHeight={220}
                                menuPlacement="auto"
                                options={option}
                                // value={trade}
                            />
                        </div>
                        <div className="subsection">
                            <p>Location</p>
                            <div className="input-loc">
                                <input 
                                    type="text"
                                    placeholder="Location"
                                    value={searchQuery}
                                    onChange={onChangeLoc}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="search-results">
                    <div className="results">
                        <Post posts={data}/>
                    </div>
                </div> 

            </div>
       </div>
    );
};

export default Connect;