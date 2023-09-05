import React from 'react';
import styleCl from './ProfileInfo.module.css'
import pic2 from "../pic2.jpg"

/* export type ProfilePropsType = {} */

const ProfileInfo = () => {
    return (
        <div>
            <div className={styleCl.pic}>
                <img
                    src={pic2}
                    alt='image'
                    style={{width: '100%', height: 'auto'}}
                />
            </div>
            <div className={styleCl.descriptionBlock}> profile description</div>
        </div>

    )
}

export default ProfileInfo;