import React, { useState } from "react";




const Note = (props) => {
    
    const [isVisibleDesc, setIsVisibleDesc] = useState(false);
    
       
    
    
 

    return (
        <div>
            
            <div className="note">
                <h4 onClick={() => setIsVisibleDesc(!isVisibleDesc)}>{props.title}</h4>
                
                
                
                
                
               

                {isVisibleDesc && (
                    <p>{props.description}</p>
                )}
            </div>
            <div className="note2">
                <button onClick={() => props.clickDelete(props.id)}>
                DELETE
                </button >
                <button onClick={() => props.clickShowModal(props.id)}> 
                EDIT
                </button>
            </div>
        </div>
    
    )

};



export default Note;