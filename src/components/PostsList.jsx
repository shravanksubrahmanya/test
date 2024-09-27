import { useState, useEffect } from "react";
import Post from "./Post";
import classes from './PostsList.module.css'

function PostsList(props) {
    // let modalContent;
    // if (modalIsVisible){
    //     modalContent = (<Modal onClose={hideModalHandler} >
    //         <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
    //     </Modal>);
    // }

    // return (
    //     <>
    //     {props.isPosting && (<Modal onClose={props.onStopPosting} >
    //         <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} onCancel={props.onStopPosting} />
    //     </Modal>)}
    //     <ul className={classes.posts}>
    //     <li><Post author={enteredAuthor} content={enteredBody} /></li>
    //     <li><Post author="King" content="Whaaat a greeat person!!!!!!" /></li>
    //     </ul>
    //     </>
    // );

    const [posts, setPosts] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    useEffect(() => {
        // useeffect takes a function that does not return a promise itself, but rethrna a nothing or a cleanup function
        async function fetchPosts(){
            setIsFetching(true);
            const response = await fetch('http://localhost:8080/posts')
            .then(response => response.json())
            .then(data => setPosts(data.posts));
            setIsFetching(false);
        }
        fetchPosts()
    }, [])

   

    function addPostHandler(postData){
        // setPosts([postData, ...posts])
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        });   
        // fetch function is not only used to fetch data but also used to send data.
        setPosts((existingPosts) => [postData, ...existingPosts])
    }
    
    return (
        <>
        { !isFetching && posts.length > 0 && (
            <ul className={classes.posts}>
                {posts.map((post) => <li><Post key={post.body} author={post.author} content={post.content} /></li>)}
            </ul>
        )}
        { !isFetching && posts.length === 0 && (
            <div style={{textAlign: 'center', color: "black"}}>
                <h2>There are no posts yet. </h2>
                <p> Start adding some </p>
            </div>
        )}
        { isFetching && (
            <div style={{textAlign: 'center', color: 'green'}}> <p>Loading posts ... </p></div>
        )}
        </>
    );
}

export default PostsList;