import React from "react";
import { useState } from "react";
import {AppointmentForm} from "../../components/appointmentForm/AppointmentForm";
import {TileList} from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
 const [title, setTitle] = useState('');
 const [contact, setContact] = useState(
  props.contacts.length > 0 ? props.contacts[0].name : ""
 );
 const [date, setDate] = useState('');
 const [time, setTime] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    props.addAppointments(title,contact,date,time);
    setTitle("");
    setContact("");
    setDate("");
    setTime("");
    /* Post Request */
    const data = { title,contact,date,time };
    fetch('http://localhost:5000/api/appointments', {
         method: 'POST',
         mode: 'cors',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
         },
         body: JSON.stringify(data)
       }).then(() => {
         console.log({title,contact,date,time})
       }).catch(error => {
         // handle network errors
         console.error(error);
       });
   
  };


  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          contacts = {props.contacts}
          title={title}
          setTitle={setTitle}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          onSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList 
          list={props.appointments}
          onQuery={props.onQuery} />
      </section>
    </div>
  );
};
