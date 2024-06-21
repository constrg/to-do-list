import React from 'react'
import './TodoItem.css'
const TodoItem = ({ no, text, display, setTodos }) => {

    const toggle = (no) => {
        let data = JSON.parse(localStorage.getItem("todos"))
        for (let i = 0; i < data.length; i++) {
            if (data[i].no === no) {
                if (data[i].display === "") {
                    data[i].display = "line-through"
                }
                else {
                    data[i].display = ""
                }
                break
            }
        }
        setTodos(data)
    }

    const deleteData = (no) => {
        let data = JSON.parse(localStorage.getItem("todos"))
        data = data.filter((todo) => todo.no !== no)
        setTodos(data)
    }
    return (
        <div className="todo-item">
            <div className={`todo-item-container ${display}`} onClick={() => toggle(no)}>
                {display === "" ? <input type="checkbox" className="checkbox" /> : <input type="checkbox" className="checkbox" checked />}
                <li className="todo-item-text">{text}</li>
            </div>
            <div className="delete-btn" onClick={() => { deleteData(no) }}>
                <span className="delete-btn-line"></span>
                <span className="delete-btn-line"></span>
            </div>
        </div>
    )
}

export default TodoItem