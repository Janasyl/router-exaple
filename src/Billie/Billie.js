import React from 'react';
// import Audio from 'react-audio-player';
import './Billie.css'
import Elish from '../components/Video/Elish.mp4'

const Vid = () => {
     return (
 
   <div className="Elish">
     
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
                      <source src={Elish} type="video/mp4" />
                 </video>
            
 
         </div>
 
 
       
     )
 };




// const Billie = () => {
//     return (

//   <div className="Billie">
//              <h1>Billie Elish</h1>
             
      
                
            

//         </div>


      
//     )
// };

// export default Billie;
export default Vid;
