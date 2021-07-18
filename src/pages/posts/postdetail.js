import axios from "axios";
import React, { useEffect, useState } from "react";

const PostDetail = () => {

    const [currentPostId, setCurrentPostId] = useState(1);

    const [viewDetail, setViewDetail] = useState();

    const [isLoading, setIsLoading] = useState(true);

    const [listPost, setListPost] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        axios.get(`https://jsonplaceholder.typicode.com/posts/${currentPostId}`)
            .then(respone => {
                console.log(respone);
                setIsLoading(false);
                setListPost(respone.data);
            })
    }, [currentPostId])
return (
    <div>
        <div>
            {listPost.id}
        </div>
        <div>
            listPost.title
        </div>
        <div>
            listPost.body
        </div>
    </div>

)
}
export default PostDetail;
