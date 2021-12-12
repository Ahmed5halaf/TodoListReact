import React,{useContext} from "react";
import ListItem from "./ListItem";
import {DataContext} from './DataProvider'



function List(){
    const [todos , setTodos] = useContext(DataContext);

        const switchComplete = id => {
            const newTodos =[...todos]
            newTodos.forEach((todo , index) => {
                if(index === id){
                    todo.complete = !todo.complete 
                }
            })
            setTodos(newTodos)
        }


        const handeleEditeTodos = (edittValue , id) => {
            const newTodos =[...todos]

            newTodos.forEach((todo , index) => {
                if(index === id){
                    todo.name = edittValue
                }
            })
            setTodos(newTodos)
        }
        
    return( 
        <ul>
            {
            todos.map((todo,index) => (
                <ListItem  todo={todo} key={index} id={index}
                chckedComplete={switchComplete} handeleEditeTodos={handeleEditeTodos} />
            ))
            }
     
      </ul>
    )
}
export default List