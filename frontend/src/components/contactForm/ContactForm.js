import React from "react";

//potential entry point for post express route for contacts

export const ContactForm = (props) => {
  const {name,
    setName,
    phone,
    setPhone,
    email,
    setEmail,
    onSubmit} = props;

    const handleNameChange = (e) =>{
      setName(e.target.value);
    }

    const handlePhoneChange = (e) =>{
      setPhone(e.target.value);
    }

    const handleEmailChange = (e) =>{
      setEmail(e.target.value);
    }
  

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Name</label>
        <input
         type="text"
         value={name}
         name="name"
         onChange={handleNameChange}
         required
         placeholder = "Contact name">
        </input>

        <label>Phone</label>
        <input
         type="tel"
         value={phone}
         onChange={handlePhoneChange}
         required
         placeholder = "Contact phone number">
        </input>

        <label>Email</label>
        <input
         type="email"
         value={email}
         onChange={handleEmailChange}
         required
         placeholder="Contact email">
         </input>

        <input type="submit" value="submit"></input>
      </form>
    </div>
  );
};
