import { useState, useEffect } from "react";
import axios from '../api/axios.js';

const TodoList = () => {
  const [ todoList, setTodoList ] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
      const todos = await axios.get('/tasks/task/');
      setTodoList(todos.data);
      } catch (error) {
        console.log('server error fetching posts');
        return [];
      }
    };
    fetchTodos();
  }, []);

  return (
    <>
    <div className="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
       {" "}
      <div className="list-group todoLists">
       {" "}
       {todoList.map((item) => (
        <div
          className="list-group-item list-group-item-action d-flex gap-3 py-3"
          aria-current="true"
        >
          <div>
            <input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
          </div>
          <div className="d-flex gap-2 w-100 justify-content-between">
            {" "}
            <div>
              {" "}
              <h6 className="mb-0">{ item.name }</h6>{" "}
              {" "}
            </div>{" "}
            <small className="opacity-50 text-nowrap">now</small>{" "}
          </div>{" "}
          </div>
          ))}
          {" "}
      </div>{" "}
    </div>
  </>
  );
};

export default TodoList;
