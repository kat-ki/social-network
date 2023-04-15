import React from 'react';
import styleCl from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/PorfileInfo";


const Profile = (props: any) => {

    return (
        <div className={styleCl.item}>
            <ProfileInfo />
            <MyPosts posts={props.state.posts} />
        </div>
    )
}

export default Profile;