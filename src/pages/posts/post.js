import axios from "axios";
import React, { useEffect, useState } from "react";
import PostDetail from "./postdetail";

const Posts = () => {
    const [isLoading, setIsLoading] = useState(true);

    const [listPost, setListPost] = useState([]);

    const [searchText, setSearchText] = useState("");

    const [isSortByTitle, setIsSortByTitle] = useState("Title -- Sort (NONE)");

    useEffect(() => {
        document.title = "Posts Page"
    }, []);

    //call API
    useEffect(() => {
        setIsLoading(true);
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(respone => {
                console.log(respone);
                setIsLoading(false);
                setListPost(respone.data);
            })
    }, [])

    if (isLoading) {
        return <div>LOADING...</div>
    }

    //Filter Post for title
    const ListPostFilter = listPost.filter(post => post.title.toLowerCase().includes(searchText.toLowerCase()));

    //Sort
    // const SortByTitle = isSortByTitle ? ListPostFilter.sort((post1, post2) => {
    //     if (post1.title < post2.title)
    //         return -1;
    //     if (post1.title > post2.title)
    //         return 1;
    //     return 0;

    // }) : ListPostFilter;

    const SortToChangeTitle = () => {
        if (isSortByTitle === "Title -- Sort (NONE)") {
            setIsSortByTitle("Title -- Sort ASC");
            listPost.sort((a, b) => a.title.localeCompare(b.title));
        }
        else if (isSortByTitle === "Title -- Sort ASC") {
            setIsSortByTitle("Title -- Sort DESC");
            listPost.sort((a, b) => b.title.localeCompare(a.title));
        }
        else {
            setIsSortByTitle("Title -- Sort (NONE)");
            // setIsSortByTitle("");
            listPost.sort((a, b) => a.id - b.id);
            //listPost.filter(post => post.title.toLowerCase().includes(searchText.toLowerCase()));
        }
    }

    // const openTabDetail = () => {
    //     window.open(`https://jsonplaceholder.typicode.com/posts/${listPost.id}`);
    //     return (
    //         <div>
    //             <div>
    //                 Id: {listPost.id}
    //             </div>
    //             <div>
    //                 Title: {listPost.title}
    //             </div>
    //             <div>
    //                 Body: {listPost.body}
    //             </div>
    //         </div>
    //     )
    // }

    return (
        <div>
            <input placeholder="Search by title"
                type="text"
                style={{ margin: 15 }}
                value={searchText}
                onChange={event => setSearchText(event.target.value)}></input>
            {ListPostFilter.length === 0 && <div style={{ backgroundColor: "red" }}>Not Found</div>}
            <div className="list-Post">
                <table border="" style={{ width: "100%" }}>
                    <thead>
                        <tr>
                            <th><b>ID</b></th>
                            <th onClick={SortToChangeTitle}><b>{isSortByTitle}</b></th>
                            <th><b>Actions</b></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ListPostFilter.map(listPost => (
                                <tr key={listPost.id}>
                                    <td>{listPost.id}</td>
                                    <td>{listPost.title}</td>
                                    <td style={{ textAlign: "center" }}>
                                        <a href={`posts/${listPost.id}`}>View detail</a>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Posts;