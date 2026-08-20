import { useState, useEffect } from "react";
import axios from "../api/axios.js";
import Todo from "./Todo.jsx";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const todos = await axios.get("/tasks/task/");
        setTodoList(todos.data);
      } catch (error) {
        console.log("server error fetching posts");
        return [];
      }
    };
    fetchTodos();
  }, []);

  return (
    <>
      <div className="todo-list-container">
        {" "}
        <div className="list-group todoLists">
          {" "}
          {todoList.map((item) => (
            <Todo key={item.key} todo={item} />
          ))}{" "}
        </div>{" "}
      </div>
    </>
  );
};

export default TodoList;
