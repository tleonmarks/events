import { Container } from "semantic-ui-react";
 
import NavBar from "../../features/nav/NavBar";
import EventDashboard from "../../features/events/dashboard/EventDashboard";
import { useState } from "react";

function App() {
  const [formOpen, setFormOpen] =useState(false);
  return (
    <>
      <NavBar  setFormOpen={setFormOpen}/>
      <Container className="main">
    
      <EventDashboard formOpen ={formOpen} setFormOpen={setFormOpen}/>
      </Container>
     
    </>
  );
}

export default App;
