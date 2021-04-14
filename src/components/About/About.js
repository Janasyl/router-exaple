import React from 'react';
import Audio from 'react-audio-player';
import './About.css'


const About = () => {
    return (
        <div className="About">
             <h1>About please !!!</h1>
             <h2>Чокуң</h2>
            <Audio 
            src="./Audio/Audio.mp3"
            autoPlay
            controls />
                
            

        </div>
    )
};

export default About;