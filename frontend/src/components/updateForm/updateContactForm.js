import React from "react";
import { useState  } from "react";
import { ContactPicker} from "../contactPicker/ContactPicker";
import { ConditionalButtons } from "./ConditionalButtons";
export const UpdateContactForm = (props) => {

    const {contact, onUpdate, contacts} = props;
    const [temp, setTemp] = useState(contact);
    const [change, setChange] = useState(false);
      const handleUpdateContact = (e) => {
        e.preventDefault();
        onUpdate(temp);
        console.log('Temp contact', temp);
        console.log('Updated contact', contacts);
      }
      const GetContactName = () => {
        return contacts.map((contact) => contact.name);
      };


    return (
        <form >
        {
            contact.hasOwnProperty('name') ? (    
            <>
                    <label>Name</label>
                    <input
                        type="text"
                        name="Name"
                        value={temp.name}
                        onChange={(e) => {
                            setChange(true);
                            setTemp({ ...temp, name: e.target.value });
                        } }
                        required>
                    </input>
                    <label>Phone</label>
                    <input
                        type="text"
                        name="Phone"
                        value={temp.phone}
                        onChange={(e) => {
                            setChange(true);
                            setTemp({ ...temp, phone: e.target.value });
                        } }
                        required>
                        </input>
                        <label>Email</label><input
                            type="text"
                            name="Email"
                            value={temp.email}
                            onChange={(e) => {
                                setChange(true);
                                setTemp({ ...temp, email: e.target.value });
                            } }
                            required>
                        </input></>
            ) : (
            <>
                    <label>Title</label>
                        <input
                            type="text"
                            name="Title"
                            value={temp.title}
                            onChange={(e) => {
                                setChange(true);
                                setTemp({ ...temp, title: e.target.value });
                            } }
                            required>
                        </input>
                        <ContactPicker
                                name="contact"
                                contacts={GetContactName()}
                                value={temp.contact}
                                placeholder="Appointment With" 
                                onChange={(e) => {
                                    setChange(true);
                                    setTemp({ ...temp, contact: e.target.value })
                                }} />
                        <label>Date</label>
                        <input
                            type="date"
                            name="date"
                            value={temp.date}
                            onChange={(e) => {
                                setChange(true);
                                setTemp({ ...temp, date: e.target.value });
                            } }
                            required>
                        </input>
                        <label>Time</label>
                        <input
                            type="time"
                            name="time"
                            value={temp.time}
                            onChange={(e) => {
                                setChange(true);
                                setTemp({ ...temp, time: e.target.value });
                            } }
                            required>
                        </input>
                            </>
            ) 
        }
        <ConditionalButtons 
            setTemp={setTemp}
            setChange={setChange}
            handleUpdateContact={handleUpdateContact}
            change={change}
            contact={contact}
         />
        </form>
          
       
    );
};