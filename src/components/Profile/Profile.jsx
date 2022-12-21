import React from "react";
import MyPosts from "./MyPosts/MyPosts.jsx"
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />

            <MyPosts postsData={props.profilePage.postsData}
                     newPostText={props.profilePage.newPostText}
                     addPost={props.addPost} 
                     udateNewPostText={props.udateNewPostText}
                     />
        </div>

    )
}

export default Profile;

