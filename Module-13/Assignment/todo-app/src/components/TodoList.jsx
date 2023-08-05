import React from 'react';
import { useSelector } from 'react-redux';
import { DeleteTodoAlert } from './DeleteTodoAlert';

const TodoList = () => {
  const todoItems = useSelector((state) => state.todo.value);

  return (
    <div className='container my-4'>
      <div className='row'>
        <div className='col-12'>
          <table className='table table-hover'>
            <thead>
              <tr>
                <th>#</th>
                <th>Task Name</th>
                <th>Status</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {todoItems.map((task, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{task}</td>
                  <td>
                    <button onClick={() => DeleteTodoAlert(index)} className='btn btn-sm btn-danger'>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
