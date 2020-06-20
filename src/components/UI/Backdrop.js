import React from 'react';




const Backdrop=(props)=>
    props.show ? <div className="backdrop" onClick={props.backdropClicked} /> : null;


export default Backdrop;