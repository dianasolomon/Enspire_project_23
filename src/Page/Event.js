import React from "react";
import '../styles/event.css'
import adarena from "../assets/adarena.png";
import quiz from "../assets/equiz.png";
import atf from "../assets/fallen.png";
import ipl from "../assets/ipl.png";
import mr from "../assets/mysteryroom.png";
import mdi from "../assets/mdi.png";

const EventList = [
  {
    name: "Ad Arena",
    image: adarena,
  },
  {
    name: "Eship-Quiz",
    image: quiz,
  },
  {
    name: "Avenge the Fallen",
    image: atf,
  },
  {
    name: "IPL Auction",
    image: ipl,
  },
  {
    name: "Mystery Room",
    image: mr,
  },
  {
    name: "Million Dollar Idea",
    image: mdi,
  },
];
function EventItem({ image, name }) {
  const btnstyle = {
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#4CAF50',
    color: '#fff', 
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };
  return (
    <div className="eventItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1 id="heading"> {name} </h1>
      <div className="buttonContainer">
      <button style={btnstyle}>Register</button>
      </div>
        
    </div>
  );
}
function Events() {
  return (
    <div className="event">
      <h1 className="eventTitle">Our Events</h1>
      <div className="eventList">
        {EventList.map((eventItem, key) => {
          return (
            <EventItem
              key={key}
              image={eventItem.image}
              name={eventItem.name}
              />
          );
        })}
      </div>
    </div>
  );
}

export default Events;