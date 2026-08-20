

const Todo = ({ todo }) => {

  return (
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
              <h6 className="mb-0">{ todo.name }</h6>{" "}
              {" "}
            </div>{" "}
            <small className="opacity-50 text-nowrap">now</small>{" "}
          </div>{" "}
          </div>
  );

};

export default Todo;