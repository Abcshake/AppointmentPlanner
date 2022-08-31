import React from "react";
import { ContactPicker} from "../contactPicker/ContactPicker"
//potential entry point for post express route for appointments
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
  onSubmit
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
    return contacts.map((contact) => contact.name);
  };
  console.log(contact.name);

  return (
      <form onSubmit={onSubmit}>
        <label>Title</label>
        <input
         type="text"
         name="title"
         value={title}
         required
         onChange={handleTitleChange}>
        </input>
        <label>Date</label>
        <input 
         type="date"
         name="date"
         value={date}
         min={getTodayString()}
         onChange={handleDateChange}
         required>
        </input>
        <label>Time</label>
        <input type="time"
         name="time"
         value={time}
         onChange={handleTimeChange}
         required>
        </input>
        <ContactPicker 
        name="contact"
        contacts={GetContactName()}
        value ={contact}
        onChange={(e) => setContact(e.target.value)}
        placeholder="Appointment With" />
        <input type="submit" value="submit"></input>
      </form>
  );
};
