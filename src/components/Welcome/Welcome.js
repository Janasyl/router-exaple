import React from 'react';
import Powerslap from '../Video/Piano.mp4';



   const Video = () => {
     return (
 
   <div className="Video">
     
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
                   zIndex: "-2"

              }}
                
                 
                 >
                      <source src={Powerslap} type="video/mp4" />
                 </video>
            
 
         </div>
 
 
       
     )
 };
 
 export default Video;