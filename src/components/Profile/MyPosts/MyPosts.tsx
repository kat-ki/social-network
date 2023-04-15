import React from 'react';
import styleCl from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props: any) => {

    let postsElements = props.posts.map((p: { message: string; likesCount: number; }) => <Post message={p.message} likesCount={p.likesCount} />)

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