import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';


const SaveTodos = ({pushingTodo, myTodo}) => {

    const [newTodo, setNewTodo] = useState("");

    const newTodoChange = (e) => {
        setNewTodo(e.target.value);
    }

    const submitNewTodo = (e) => {  
        e.preventDefault();
        
        const savedTodo = {
            id: Math.floor(Math.random() * 1000),
            value: newTodo,
            completed: false
        }
        pushingTodo(myTodo => [...myTodo, savedTodo]);

        // clean the input //
        setNewTodo("");
    }

    return (
        <section className='new-todo-section'>
            <form onSubmit={submitNewTodo}>
                <span>
                <FontAwesomeIcon icon={faFloppyDisk} />
                </span>
                <input value={newTodo} onChange={newTodoChange}/>
            </form>
        </section>
    );
}
export default SaveTodos;