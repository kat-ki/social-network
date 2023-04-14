import React from 'react';
import styleCl from './MyPosts.module.css'
import Post from "./Post/Post";

export type MyPostsPropsType = {}
const MyPosts = (props: MyPostsPropsType) => {

    let posts = [
        { id: 1, message: 'Hi, how are you?', likesCount: 0 },
        { id: 2, message: 'Hi, how was your vacation?', likesCount: 15 }
    ]

    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    return (
        <div>
            <div className={styleCl.postsBlock}>
                <h2>My posts</h2>
                <div><textarea></textarea></div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={styleCl.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;