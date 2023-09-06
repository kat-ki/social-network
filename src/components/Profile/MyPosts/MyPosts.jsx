import React, {useRef} from 'react';
import styleCl from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostAC, updateNewPostText, updateNewPostTextAC} from "../../../Redux/state";

const MyPosts = (props) => {

    let postsElements = props.posts.map((p) => <Post message={p.message}
                                                     likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();

    const addPost = () => {
        props.dispatch(addPostAC());
    }

    const onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextAC(text)
        props.dispatch(action)

    }

    return (
        <div>
            <div className={styleCl.postsBlock}>
                <h2>My posts</h2>
                <div>
                    <textarea ref={newPostElement}
                              value={props.newPostText}
                              onChange={onPostChange}
                    />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={styleCl.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;