import React from "react";

export default function Jam() {

    const [second, setSecond] = React.useState(new Date().getSeconds());

    const styleBg = {
        width: '500px',
        height: '500px',
        backgroundColor: '#202020',
        borderRadius: '50%',
    }

    const styleHour = {
        position: 'relative',
        left: '250px',
        width: '10px',
        height: '250px',
        backgroundColor: 'cornflowerblue',
        transformOrigin: 'bottom center',
        transform: 'rotate(6deg)',
    }
    
    return (
      <>
        <div className="bg"
          style={styleBg}
        >
          <div className="hour-hand"
            style={styleHour}
          ></div>
        </div>
      </>
    );
  }