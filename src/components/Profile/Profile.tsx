import React from 'react';
import styleCl from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import pic2 from "./pic2.jpg"
import ProfileInfo from "./ProfileInfo/PorfileInfo";

/* export type ProfilePropsType = {} */

const Profile = () => {
    return (
        <div className={styleCl.item}>
            <ProfileInfo />
            <MyPosts />
        </div>
    )
}

export default Profile;