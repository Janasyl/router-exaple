import React from 'react';
// import Audio from 'react-audio-player';
// import './Sam.css'
import Smith from "../components/Video/Sam.mp4";

const Sth = () => {
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
          <source src={Smith} type="video/mp4" />
        </video>
      </div>
            

        </div>


      
    )
};

export default Sth;