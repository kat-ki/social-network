import React from 'react';
import styleCl from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import pic2 from "./pic2.jpg"

/* export type ProfilePropsType = {} */

const Profile = () => {
    return (
        <div className={styleCl.item}>
            <div>
                <img
                    src={pic2}
                    alt=''/>
            </div>
            <div>
                <div> profile description</div>
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;