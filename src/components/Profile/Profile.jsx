import React from "react";
import MyPosts from "./MyPosts/MyPosts.jsx"
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />

            <MyPosts postsData={props.state.postsData} addPost={props.addPost} />
        </div>

    )
}

export default Profile;

