import SaveTodos from "./save_todos/Save_Todos.js";
import ListTodos from "./list_todos/List_Todos.js";
import FooterTodos from "./footer_todos/Footer_Todos.js";

import { useEffect, useState } from "react";

const MainTodos = () => {

    const [myTodo, setmyTodo] = useState([]);

    useEffect(() => {
        console.log(myTodo);
    },[myTodo]);

    return (

        <div>                                     

            <SaveTodos pushingTodo={setmyTodo} myTodo={myTodo}/>
            
            <ListTodos allTodos={myTodo} pushingTodo={setmyTodo}/>
            
            <FooterTodos />
        </div>

    );
}
export default MainTodos;