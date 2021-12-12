import React,{useState} from "react";

function ListItem({todo , id , chckedComplete , handeleEditeTodos}){
    const [onEdite , setOnEdite] = useState(false);
    const [edittValue , setEditeValue] = useState(todo.name)

    const handelOnEdite = () => {
        setOnEdite(true)
    }

    const handelSave = id => {
        setOnEdite(false)

        if(edittValue){
            handeleEditeTodos(edittValue , id)
        }else{
            setEditeValue(todo.name)
        }
    }

    if(onEdite){
        return(
            <li>
                <input type="text" id={edittValue} value={edittValue} name={edittValue}
                onChange={e => setEditeValue(e.target.value.toLowerCase())}
                />
                <button onClick={() => handelSave(id)}>save</button>
            </li>
        )
           
    }else{

        return(
            <li>
                <label htmlFor={id} className={todo.complete ? "active" : ""}>
                    <input type="checkbox" id={id} checked={todo.complete} onChange={() => chckedComplete(id)} />
                        {todo.name}
                </label>
                <button disabled={todo.complete} onClick={handelOnEdite}>Edite</button>
            </li>
        )
    }
   
    
}

export default ListItem