import React from "react";
import state from "../../../Redux/state";
import FriendItem from "./FriendItem/FriendItem.jsx";
import f from "./Friends.module.css"

const Friends = (props) => {

    let friendsElemetnts = state.dialogsPage.dialogsData.map(d => <FriendItem name={d.name} />);

    return (
        <div>
            <div>
                <div className={f.headline}>
                    Friends:
                </div>
                {friendsElemetnts}
            </div>
        </div>
    )
}

export default Friends;