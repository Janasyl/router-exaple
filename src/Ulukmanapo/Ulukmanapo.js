import React from "react";
// import Audio from 'react-audio-player';
// import './Sam.css'
import uluk from "../components/Video/uluk.jpg";
import Ulukmanapo from "../components/Video/Uluk.mp4";

const Uluk = () => {
  return (
    <div>
      <div className="Samu">
        <video
          autoPlay
          loop
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
          <source src={Ulukmanapo} type="video/mp4" />
        </video>
      </div>
      
      <div className="EarlyLife">
        <h1>Early Life</h1>
        <img src={uluk} alt="logo" className="uluk" width="100px" height="100px" />

        <p>
        Ulukmanapo says little about his parents and childhood. He became
        interested in music during his school years, he especially likes Snoop
        Dogg and Drake, but the guy could not seriously think that he could earn
        his living with music. He always thought that he would graduate from
        school, receive a certificate, graduate from an educational institution
        and get a job. That is, he will live the life of an ordinary average person.
        </p>

      
      </div>
    </div>
  );
};

export default Uluk;
