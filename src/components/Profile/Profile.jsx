import React from 'react';
import styleCl from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/PorfileInfo";


const Profile = (props) => {

    return (
        <div className={styleCl.item}>
            <ProfileInfo />
            <MyPosts posts={props.state.posts}
                     addPost={props.addPost}
                     newPostText={props.state.newPostText}
                     updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}

export default Profile;