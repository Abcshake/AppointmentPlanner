import React from "react";

export const ContactPicker = (props) => {

  const {contact, contacts} = props


  return (
    <select>
      <option selected="selected">Select a Contact</option>
      {contacts.map((value, key) => <option value={contact} key={contact}></option>
      )}
    </select>  
  );
};
