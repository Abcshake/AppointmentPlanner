import React from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import { useState,useEffect  } from "react";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import { UpdateContactForm } from "./components/updateForm/updateContactForm";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
 const [contacts, setContacts] = useState([]);
 const [appointments, setAppointment] = useState([]);
 const [query, setQuery] = useState({});

   const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
    UPDATE: "/update/"
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */

  //potential place to add express get route for contacts and appointments

  // useEffect(() => {
  //   async function fetchContacts() {
  //     const response = await fetch('http://localhost:5000/api/contacts');
  //       const json = await response.json();
  //       setContacts(json);
    
  //   }
  //   fetchContacts();

  //   async function fetchAppointments() {
  //     const response = await fetch('http://localhost:5000/api/appointments');
  //       const json = await response.json();
  //       setAppointment(json);
    
  //   }
  //   fetchAppointments();
  // }, []);

  const addContacts = (name,phone,email) => { 
      //const data = {name, phone, email};
      
    const newContact =  {
      id: contacts.length + 1,
      name: name,
      phone: phone,
      email: email,
    };
    setContacts((prevContacts) => [...prevContacts, newContact]);
   
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
    console.log(query);
  };

  const handleDelete = name => {
    setContacts(contacts => contacts.filter(contact => contact.name !== name));
  }

  const handleUpdate = (newObject) => {
    let index = null;
    
    if (newObject.hasOwnProperty('name')) {
      index = contacts.findIndex(obj => obj.id === newObject.id);
      const newStateArray = [...contacts];
      newStateArray[index] = newObject; 
      setContacts(newStateArray);
    } else {
      index = appointments.findIndex(obj => obj.id === newObject.id);
      const newStateArray = [...appointments];
      newStateArray[index] = newObject;
      setAppointment(newStateArray);
    }
    
    if (index === -1) {
      // If the object with the specified name is not found, return without making any changes
      return;
    }
  
    
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
              onDelete={handleDelete}
              contacts={contacts}
              onQuery={setQuery} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage
              addAppointments={addAppointments}
              appointments={appointments}
              contacts={contacts}
              onQuery={setQuery} />
          </Route>
          <Route path={ROUTES.UPDATE}>
            <UpdateContactForm
             contact={query}
             onUpdate={handleUpdate}
             contacts={contacts}
              />
          </Route>
        </Switch>
      </main>
    </>
  );

  }
export default App;
