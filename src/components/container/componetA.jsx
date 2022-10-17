import React from 'react';
import ComponetB from '../../pure/componetB';
const ComponetA = () => {
    return (
        <div>
        <ComponetB 
        name={"Rodri"}
        lastName={"Cantudo"}
        email={"email@email.com"}
        line= {false}   
        />    
        </div>
    );
}

export default ComponetA;
