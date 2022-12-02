import React from "react";
import { NavLink } from "react-router-dom";
import d from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogItems}>
                <div className={d.dialog + ' ' + d.active}>
                    <NavLink to="/dialogs/1" >Andrii</NavLink>
                </div>
                <div className={d.dialog}>
                    <NavLink to="/dialogs/2">Anton</NavLink>
                </div>
                <div className={d.dialog}>
                    <NavLink to="/dialogs/3">Ilia</NavLink>
                </div>
            </div>
            <div className={d.messages}>
                    <div className={d.message}>Hi</div>
                    <div className={d.message}>How are you doing?</div>
                    <div className={d.message}>Let's drink some cofee tomorrow</div>
            </div>
        </div>

    )
}

export default Dialogs;
