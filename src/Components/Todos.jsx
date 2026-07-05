import  { act, useReducer, useState } from 'react'
const initialState = {
   todos : [],
//    totalCount:0
}
function reducer(state, action){
switch(action.type){
case "Add" :
    return {todos : [...state.todos, {id:Date.now(), task:action.payload, completed: false}], }
case "Delete":
    return {todos: state.todos.filter(todo => todo.id !== action.payload)}
case "ToggleTodo":
    const updatedTodo = state.todos.map((todo=>todo.id === action.payload ? {...todo, completed:!todo.completed} : todo));
    return {todos: updatedTodo}

}

}


const Todos = () => {
    const [state , dispatch ] = useReducer(reducer , initialState)
    const [todoText, setTodoText] = useState("")
    const handleinput =()=>{
        dispatch({type: "Add",  payload: todoText});
        setTodoText("")
    }
return (
<>
<div style={{padding: '10px'}} >
    
<input value={todoText} onChange={(e)=>setTodoText(e.target.value)} type="text" placeholder='Enter a todo' />
<button onClick={ handleinput} >Add</button>

</div>
<h4>Tasks</h4>
{state.todos.map(todo=> ( <ul className='flex' key={todo.id}>
    <input checked={todo.completed} onChange={()=>dispatch({type: "ToggleTodo", payload: todo.id})} type="checkbox" />
    <li>{todo.task}</li>
    <button onClick={()=>dispatch({type: "Delete", payload: todo.id})}>Delete</button>
</ul>))}
</>    
)
}

export default Todos