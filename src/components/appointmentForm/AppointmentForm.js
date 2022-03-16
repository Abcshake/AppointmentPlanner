import React from "react";
import { contactPicker} from "../contactPicker/ContactPicker"
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
  }

  const handleDateChange = (e) => {
    setDate(e.target.value);
  }

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" value={title} onChange={handleTitleChange}></input>
        <label>Date</label>
        <input type="date" value={date} onChange={handleDateChange}></input>
        <label>Title</label>
        <input type="time" value={time} onChange={handleTimeChange}></input>
        <contactPicker contacts ={contacts} />
        <button type="submit" value="submit"></button>
      </form>
    </div>
  );
};
