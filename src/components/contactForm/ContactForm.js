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
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" value={name} onChange={handleNameChange}></input>

        <label>Phone</label>
        <input type="tel" value={phone} onChange={handlePhoneChange}></input>

        <label>Email</label>
        <input type="email" value={email} onChange={handleEmailChange}></input>

        <input type="submit" value="submit"></input>
      </form>
    </div>
  );
};
