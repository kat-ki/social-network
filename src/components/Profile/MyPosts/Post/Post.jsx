import React from 'react';
import styleCl from './Post.module.css'

const Post = (props) => {
    return (
        <div className={styleCl.item}>
            <img src='https://www.logolynx.com/images/logolynx/0c/0c79eccd47ca898469ee2e9b12bbf907.jpeg'
                 alt='profile' />
            {props.message}
            <div>
                <span>Like</span> {props.likesCount}
            </div>
        </div>


    )
}

export default Post;