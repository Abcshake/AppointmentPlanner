import React from "react";
import { ContactPicker} from "../contactPicker/ContactPicker"
export const AppointmentForm = (props) => {
const {
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
} = props;
const getTodayString = () => {
  const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const GetContactName = () => {
    return contacts.map(contact => contact.name);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" value={title} onChange={handleTitleChange}></input>
        <label>Date</label>
        <input type="date" value={date} min={getTodayString()} onChange={handleDateChange}></input>
        <label>Time</label>
        <input type="time" value={time} onChange={handleTimeChange}></input>
        <ContactPicker 
        contacts={GetContactName}
        value ={contact}
        onChange={(e) => setContact(e.target.value)} />
        <button type="submit" value="submit"></button>
      </form>
    </div>
  );
};
