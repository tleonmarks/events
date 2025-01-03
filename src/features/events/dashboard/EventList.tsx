 
import { AppEvent } from "../../../app/types/events";
import EventsListItem from "./EventsListItem";
type Props={
  events: AppEvent[]
}
export default function EventList({events}: Props) {
  return (
    <>
    {events.map(event =>(
  <EventsListItem key={event.id} event={event}/>
    ))}
   
    
     
    </>
  )
}