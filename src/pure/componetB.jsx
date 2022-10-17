import React,{useState} from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/contact.class';

const ComponetB = (contact) => {
    const [on, setOn ] = useState(true);

  

    return (
        <div>
            <h1>Name: {contact.name}</h1>
            <h2>Last Name: {contact.lastName}</h2>
            <h3>Email: {contact.email}</h3>
            <h4>Line: {on ?  "Contacto En Línea" : "Contacto No Disponible"}</h4>

<button onClick={() => setOn(!on)}>On//Off</button>
        </div>

        
    );
    

};


ComponetB.propTypes = {

    name: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    line: PropTypes.bool

};


export default ComponetB;
