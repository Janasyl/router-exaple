import React from "react";
// import Audio from 'react-audio-player';
// import './Sam.css'
import Sheeran from "../components/Video/Sheeran.mp4";
import ed from "../components/Video/ed.jpg";


const Ed = () => {
  return (
    <div>
      <div className="Sheer">
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
          <source src={Sheeran} type="video/mp4" />
        </video>
      </div>
          
      <div className="EarlyLife">
      <h1>
              Early Life
          </h1>
          <img src={ed} alt="logo" className="ed" />
        <p>
          Edward Christopher Sheeran was born in Halifax, West Yorkshire,
          England on 17 February 1991. His early childhood home was on
          Birchcliffe Road in nearby Hebden Bridge.His father was a curator
          at Cartwright Hall in Bradford and his mother worked at Manchester
          City Art Gallery. In December 1995 he moved with his family from
          Hebden Bridge to Framlingham in Suffolk. He has an older
          brother named Matthew, who works as a composer. Sheeran's parents,
          John and Imogen, are from London. His paternal grandparents are
          Irish, and Sheeran has stated that his father is from a
          "very large" Catholic family. John is an art curator and lecturer,
          and Imogen is a culture publicist turned jewellery designer.
          His parents ran Sheeran Lock, an independent art consultancy, from
          1990 to 2010.Sheeran sang at a local church choir at the age of
          four, learned how to play the guitar at age eleven, and began
          writing songs while at Thomas Mills High School in
          Framlingham. A 2004 school report described him as a "natural
          performer", and his classmates also voted him "most likely to be
          famous".He was accepted at the National Youth Theatre in London
          as a teenager.He successfully auditioned for Youth Music
          Theatre UK in 2007 and joined their production of Frankenstein in
          Plymouth.[27] He is a patron of Youth Music Theatre UK (now renamed
          British Youth Music Theatre) and of Access to Music, where he
          studied Artist Development. Sheeran is a second cousin of
          Northern Irish broadcaster Gordon Burns who hosted the British
          game show The Krypton Factor.
        </p>
      </div>
    </div>
  );
};

export default Ed;
