import React from "react";

export const ContactForm = (props) => {
  const {name,
    setName,
    phone,
    setPhone,
    email,
    setEmail,
    handleSubmit} = props;

    const handleNameChange = (e) =>{
      setName(e.target.value);
    }

    const handlePhoneChange = (e) =>{
      setPhone(e.target.value);
    }

    const handleEmailChange = (e) =>{
      setEmail(e.target.value);
    }
    console.log(name);

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
