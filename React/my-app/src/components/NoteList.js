import Note from './Note';
import React, { useState } from "react";
import { allNotes } from "./consts.js";
import Modal from "./Modal";


const NoteList = () => {

    const [notes, setNotes] = useState(allNotes);
    
    
    
    
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedNote, setSelectedNote] = useState();
    const setShowModal = (id) => {
        setSelectedNote(notes.find(n => {
            return n.id === id
        }))
        setIsModalVisible(s => !isModalVisible);
    }
    return (
        <div className="notes-list">
                            
            {!isModalVisible && ( notes.map((note) => (
                    <Note key={note.id} 
                        id={note.id}
                        title={note.title} 
                        description={note.description} 
                        clickShowModal={setShowModal} 
                        clickDelete={deleteClick}
                        input name="firstName" onChange={handleChange}
                        />
                        
                    )))
                }
             {isModalVisible && (
                    <Modal note={selectedNote} clickShowModal={setShowModal} />
                    
                    
                    
                )}

                
        </div>
       
    );

    function deleteClick(id) {
        let filteredArray = notes.filter(item => item.id !== id);
        setNotes(filteredArray);
      }

      function handleChange(event) {
        console.log(event.target.value);
      }
      
   

      

    
};



export default NoteList;