import React from 'react';
import Tilt from 'react-tilt'
import brain from  './brain.png';
import './Logo.css';

const Logo = () => {
    return (
        <div >
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 250, width: 250 }} >
                <div className="Tilt-inner pa3"><img src={brain} alt="logo" style={{paddingTop: "5px"}}/> </div>
            </Tilt>

        </div>
    );
}

export default Logo;