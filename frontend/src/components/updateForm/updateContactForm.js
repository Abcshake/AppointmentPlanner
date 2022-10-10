import React from "react";

export const UpdateContactForm = (tile,updateContactForm) => {

    const handleUpdate = () => {
        updateContactForm(tile.name,tile.phone,tile.phone);
    }

    // const handleNameChange = (e) => {
    //     tile.name = e.target.value;
    // }
    // const handlePhoneChange = (e) => {
    //     tile.phone = e.target.value;
    // }
    // const handleEmailChange = (e) => {
    //     tile.email = e.target.value
    // }


    return (
        <form onSubmit={handleUpdate}>
            <label>Name</label>
            <input
            type="text"
            name="Name"
            value={tile.name}
            required>
            </input>
            <label>Phone</label>
            <input
            type="text"
            name="Phone"
            value={tile.phone}
            required>
            </input>
            <label>Email</label>
            <input
            type="text"
            name="Email"
            value={tile.email}
            required>
            </input>
            <input type="submit" value="submit"></input>
        </form>
    );
};