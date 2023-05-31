import React, { handleChange } from "react";


const Modal = (props) => {
    
    return (
             
        <div className="modal">
         <p>modal</p>
         <input type="text" defaultValue={props.note.title}/>
         <input name="firstName" onChange={handleChange} />
         <input type="text"  />
            <button onClick={() => props.clickShowModal(false)}>
            SAVE
            </button>
        </div>
        
        
        


    
    )

};


export default Modal;