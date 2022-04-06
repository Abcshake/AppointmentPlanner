import React from "react";
import { useState } from "react";
import {AppointmentForm} from "../../components/appointmentForm/AppointmentForm";
import {TileList} from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
 const {appointments,addAppointments} = props;
 const [title, setTitle] = useState('');
 const [contact, setContact] = useState('');
 const [date, setDate] = useState(new Date());
 const [time, setTime] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    addAppointments(title,contact,date,time);
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
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
        <TileList list={appointments} />
      </section>
    </div>
  );
};
