import React, { useEffect, useState } from "react";
import {ContactForm} from "../../components/contactForm/ContactForm";
import {TileList} from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */

 const [name, setName] = useState('');
 const [phone, setPhone] = useState('');
 const [email, setEmail] = useState('');
 const [duplicate, setDuplicate] = useState(false);
 
 
  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   if(!duplicate){
     props.addContacts(name,phone,email);
     setName('');
     setPhone('');
     setEmail('');
    }
    //Post request 
    // const data = { name, phone, email };
    // fetch('http://localhost:5000/api/contacts', {
    //      method: 'POST',
    //      mode: 'cors',
    //      headers: {
    //        'Accept': 'application/json',
    //        'Content-Type': 'application/json'
    //      },
    //      body: JSON.stringify(data)
    //    }).then(() => {
    //    }).catch(error => {
    //      // handle network errors
    //    });
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
 useEffect(() => {
  const nameIsDuplicate = () => {
    const found = props.contacts.find((contact) => contact.name === name);
    if (found !== undefined) {
      return true;
    } else {
      return false;
    }
  };

  if (nameIsDuplicate()===true) {
    setDuplicate(true);
  } else {
    setDuplicate(false);
  }
  
}, [name,duplicate,props.contacts]);

 
  return (
    <div>
      <section>
        <h2>
          Add Contact
          {duplicate? "- Name already exists -" : ""}
          </h2> 
        <ContactForm
          name = {name}
          email = {email}
          phone = {phone}
          setName = {setName}
          setEmail = {setEmail}
          setPhone = {setPhone}
          onSubmit = {handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList
          list={props.contacts}
          onDelete={props.onDelete}
          onQuery={props.onQuery}
        />
      </section>
    </div>
  );
};
