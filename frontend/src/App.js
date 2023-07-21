import React from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import { useState  } from "react";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import { UpdateContactForm } from "./components/updateForm/updateContactForm";
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { ThemeProvider } from "@mui/material";
import { Theme } from "./Theme";

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

  const handleDelete = tile => {
    if (tile.hasOwnProperty('name')) {
        setContacts(contacts => contacts.filter(contact => contact.name !== tile.name));
  } else {
    setAppointment(appointments => appointments.filter(app => app.title !== tile.title))
  }
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
    <ThemeProvider theme={Theme}>
      <AppBar position="relative" sx={{backgroundColor: "primary.other"}}>
        <Container maxWidth="xl">
          <ToolBar>
            <Container sx={{display: "flex", justifyContent: "center"}}>
              <Button sx={{ backgroundColor: "primary.main"}}startIcon={<Diversity3Icon />} variant="contained" component={Link} to={ROUTES.CONTACTS}>Contacts</Button>
              <Button sx={{  backgroundColor: "primary.main"}}startIcon={<CalendarMonthIcon />} variant="contained" component={Link} to={ROUTES.APPOINTMENTS}>Appointments</Button>
            </Container>
          </ToolBar>
        </Container>
      </AppBar>
    </ThemeProvider>
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
              onQuery={setQuery}
               />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage
              addAppointments={addAppointments}
              onDelete={handleDelete}
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
