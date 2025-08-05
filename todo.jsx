import {useState} from "react";

export default function App() {
    const [list, setList] = useState([]);
    const [text, setText] = useState("");

    const addTodo = () => {
        if(text){
            setList([...list, { text, isCompleted : false}]);
            setText("");
        }
    }
    const toggleTodo = (index) => {
        const newList = [...list];
        newList[index].isCompleted = !newList[index].isCompleted;
        setList(newList);
    }
    const removeTodo = (index) => {
        const newList = [...list];
        newList.splice(index,1);
        setList(newList);
    }
    
    return(
        <div>
            <ol>
                {list.map( (todo, index) => (
                        <li key={index}>
                            {todo.text} - {todo.isCompleted}
                            <button onClick={() => toggleTodo(index)}>Toggle</button>
                            <button onClick={() => removeTodo(index)}>Remove</button>
                        </li>
                        )
                    )
                }
            </ol>
            <input placeholder={"Enter new task:"} type="text"  value={text} onChange={(e)=>setText(e.target.value)}/>
            <button onClick={ addTodo }>Add task</button>
        </div>
    );
}