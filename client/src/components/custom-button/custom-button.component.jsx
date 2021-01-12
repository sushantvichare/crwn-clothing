import React from 'react';



import { Custombtn } from './custom-button.styles';


function CustomButton({children, ...props}){
    
    return(
        <Custombtn {...props}>
        {children}
        </Custombtn>
        
        
        )

}


export default CustomButton;
