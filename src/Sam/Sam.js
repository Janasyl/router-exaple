import React from "react";
// import Audio from 'react-audio-player';
// import './Sam.css'
import Smith from "../components/Video/Sam.mp4";
import sam from "../components/Video/sam.jpg";

const Sth = () => {
  return (
    <div>
      <div className="Samu">
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-2",
          }}
        >
          <source src={Smith} type="video/mp4" />
        </video>
      </div>

      <div className="EarlyLife">
        <h1>Early Life</h1>
        <img src={sam} alt="logo" className="sam" />
        <p>
          <strong>2012–2013: Breakthrough Smith </strong>
          <br />
          Samuel Frederick Smith[16] was born on 19 May 1992 in London to
          Frederick Smith and broker Kate Cassidy. Smith was bullied for "having
          breasts" as a child and had liposuction at age 12. They were part of
          Youth Music Theatre UK and appeared in the troupe's 2007 production of
          Oh! Carol, a musical featuring the music of Neil Sedaka.Before
          entering the musical theatre, Smith had been in jazz bands. While
          studying singing and songwriting under jazz pianist Joanna Eden for a
          number of years Smith attended St Mary's Catholic School in Bishop's
          Stortford and was a member of the Bishop's Stortford Junior Operatics
          (now Bishops Stortford Musical Theatre Society) and the Cantate Youth
          Choir.
        </p>
          
      </div>
    </div>
  );
};

export default Sth;
