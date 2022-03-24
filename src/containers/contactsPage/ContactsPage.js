import React, { useEffect, useState } from "react";
import {ContactForm} from "../../components/contactForm/ContactForm";
import {TileList} from "../../components/tileList/TileList";

export const ContactsPage = ({addContacts, contacts}) => {
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
     addContacts(name,phone,email);
     setName('');
     setPhone('');
     setEmail('');
   }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
 useEffect(() => {
   for (let contact of contacts){
     name === contact.name ? setDuplicate(true): setDuplicate(false)
   }
   return () => {
    setDuplicate(false);
   }
 },[contacts]);
 
  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
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
          list={contacts}
        />
      </section>
    </div>
  );
};
