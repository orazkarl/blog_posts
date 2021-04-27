import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Link} from "react-router-dom";

function PostDetail({match}) {

    const [post, setPost] = useState([])
    const id = match.params.id

    useEffect(() => {
        axios({
            method: "GET",
            url: `http://localhost:8000/api/blogpost/${id}`
        }).then(response => {
            setPost(response.data)
        })
    }, [id])


    return (
        <div>
            Post with id{post.id}
            <p>Title: <strong>{post.title}</strong></p>

        </div>
    );
}

export default PostDetail;
