import React from "react";

const User = ({contact, deleleUser, updateUser}) => {

    const drop = () => {
        deleleUser(contact.id)
    }

    const updateName = (e) => {
        contact.name = e.target.innerHTML;
        updateUser(contact);
    }

    const updateMail = (e) => {
        contact.email = e.target.innerHTML;
        updateUser(contact);
    }

    const updatePhone = (e) => {
        contact.phone = e.target.innerHTML;
        updateUser(contact);
    }

    return (<div>
                <span>Name: <span contenteditable="true" onBlur={updateName}>{contact.name}</span></span><br/>
                <span>Email: <span contenteditable="true" onBlur={updateMail}>{contact.email}</span></span><br/>
                <span>Phone: <span contenteditable="true" onBlur={updatePhone}>{contact.phone}</span></span>
                <input type="button" onClick={drop} value="Delete"/>
                <hr/>
            </div>);
}

export default User;
