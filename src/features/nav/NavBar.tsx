import { Button, Container, Menu, MenuItem } from "semantic-ui-react";
type Props ={

  setFormOpen : (value: boolean) =>void;

}
export default function NavBar({ setFormOpen}:Props) {
  return (
   <Menu inverted={true} fixed="top">
    <Container>
    <MenuItem header>
    <img src="/assets/logo.png" alt="logo" />
    Online Events
    </MenuItem>
    <MenuItem name="Event" />

    <MenuItem>
    <Button 
    onClick={()=>setFormOpen(true)}
    floated="right" 
    positive={true} inverted={true} 
    content="Create Event" />
    </MenuItem>
    <MenuItem position="right">

    <Button basic inverted content="Login" />
    <Button basic inverted content="Register" style={{marginLeft: "0.5em"}} />
    </MenuItem>
    
    </Container>
   </Menu>
  )
}