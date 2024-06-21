import React, { useEffect, useRef, useState } from 'react'
import './Todo.css'
import TodoItem from '../todo_item/TodoItem.jsx'

let count = 0

const Todo = () => {

    const [todos, setTodos] = useState([])
    const inputRef = useRef(null)

    const addData = () => {
        setTodos([...todos, { no: count++, text: inputRef.current.value, display: "" }])
        inputRef.current.value = "";
        localStorage.setItem("todos_no", count)
    }

    useEffect(() => {
        setTodos(JSON.parse(localStorage.getItem("todos")))
        count = localStorage.getItem("todos_no")
    }, [])

    useEffect(() => {
        setTimeout(() => {
            console.log(todos)
            localStorage.setItem("todos", JSON.stringify(todos))
        }, 100)
    }, [todos])

    return (
        <>
            <div className="container">
                <div className="todo">
                    <div className="todo-header">To-Do List</div>
                    <div className="todo-add">
                        <input type="text" ref={inputRef} placeholder="Add Your Task" className="todo-input" />
                        <button className="todo-add-btn" onClick={() => addData()}>ADD TASK</button>
                    </div>
                    <ul className="todo-list">
                        {todos.map((item, index) => {
                            return <TodoItem key={index} setTodos={setTodos} no={item.no} text={item.text} display={item.display} />
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Todo