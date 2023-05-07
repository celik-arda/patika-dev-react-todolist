import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faTrashCan } from '@fortawesome/free-solid-svg-icons';


const ListTodos = ({allTodos, pushingTodo}) => {

    const deleteTodo =(todoId) => {

        console.log(todoId);
        let updatedTodos = allTodos.filter(item => {
            return item.id !== todoId;
        });
        pushingTodo(updatedTodos);
    }

    const makeTodoAsDone = (todoId) => {

        let completedTodos = allTodos.map(e => {
            if(e.id === todoId){
                return (
                    {...e, completed : !e.completed}
                )
            }
            else {
                return (e)
            }
        });
        pushingTodo(completedTodos);
    }

    return (
        <section className='todos-section'>
            <ul>
                {allTodos.map((todo) => {

                    return (
                        <li className='list-item' key={todo.id}>

                            <div className='done-icon'>
                                <FontAwesomeIcon onClick={() => {makeTodoAsDone(todo.id)}} icon={faCircleCheck} />
                            </div>
                            <div className={todo.completed ? "todo-name done" : "todo-name"}>
                                {todo.value}
                            </div>                            
                            <div className='delete-icon'>
                                <FontAwesomeIcon onClick={() => deleteTodo(todo.id)} icon={faTrashCan}/>
                            </div>
                            
                        </li>
                    )
                })}
            </ul>
        </section>
    ); 
}
export default ListTodos;