import React from "react";
import { useState,useEffect  } from "react";

export const UpdateContactForm = (props) => {

    const {contact, onUpdate} = props;
    const [tempContacts, setTempContacts] = useState(contact);
    const [change, setChange] = useState(false);
    
    useEffect(() => {
        console.log('contact', contact);
        console.log('tempContact', tempContacts);
        onUpdate(tempContacts);
    })


      const handleUpdateContact = (e) => {
        e.preventDefault();
        onUpdate(tempContacts);
      }
    


    return (
        <form >
            <label>Name</label>
            <input
            type="text"
            name="Name"
            value={tempContacts.name}
            onChange={(e) => {
                setChange(true); 
                setTempContacts({...tempContacts, name: e.target.value})}
            }
            required>
            </input>
            <label>Phone</label>
            <input
            type="text"
            name="Phone"
            value={tempContacts.phone}
            onChange={(e) => {
                setChange(true); 
                setTempContacts({...tempContacts, phone: e.target.value})}
            }
            required>
            </input>
            <label>Email</label>
            <input
            type="text"
            name="Email"
            value={tempContacts.email}
            onChange={(e) => {
                setChange(true); 
                setTempContacts({...tempContacts, email: e.target.value})}
            }
            required>
            </input>
            { change ? (
                <>
                <button
                    onClick={() => {
                    setTempContacts({...contact})
                    setChange(false)
                }}
                >
                    Cancel
                </button>
                <button
                    onClick={handleUpdateContact}>Save</button>
                </>
            ) : null}
        </form>
    );
};