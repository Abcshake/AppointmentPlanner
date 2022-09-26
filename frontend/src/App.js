import React from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import { useState,useEffect } from "react";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
 const [contacts, setContacts] = useState([]);
 const [appointments, setAppointment] = useState([]);


   const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */

  //potential place to add express get route for contacts and appointments

  useEffect(() => {
    async function fetchContacts() {
      const response = await fetch('http://localhost:5000/api/contacts');
        const json = await response.json();
        console.log(json);
        setContacts(json);
    
    }
    fetchContacts();

    async function fetchAppointments() {
      const response = await fetch('http://localhost:5000/api/appointments');
        const json = await response.json();
        console.log(json);
        setAppointment(json);
    
    }
    fetchAppointments();
  }, []);

  const addContacts = (name,phone,email) => { 
      //const data = {name, phone, email};
      
    setContacts([
    ...contacts, {
      name: name,
      phone: phone,
      email: email,
    },
  ]);
  
};

  const addAppointments = (title,contact,date,time) => {
    setAppointment([
      ...appointments, {
        title: title,
        contact: contact,
        date: date,
        time: time,
      },
    ]);
  };

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage
              addContacts={addContacts}
              contacts={contacts} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage
              addAppointments={addAppointments}
              appointments={appointments}
              contacts={contacts} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
