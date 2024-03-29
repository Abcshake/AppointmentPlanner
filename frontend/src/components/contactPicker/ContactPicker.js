import React from "react";

export const ContactPicker = ({name, onChange, contacts}) => {

  return (
    <select name={name} onChange={onChange} required>
      <option value={""} key={-1} selected="selected">
        No Contact Selected
      </option>
      {Object.values(contacts).map((contact) => {
        return (
          <option value={contact} key={contact}>
            {contact} 
          </option>
        );
      })}
    </select>
  );
};
