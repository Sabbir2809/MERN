import React from 'react';
import { useSelector } from 'react-redux';
import DeleteAlert from './DeleteAlert';
import { EditAlert } from './EditAlert';

const TodoList = () => {
  const todoItems = useSelector((state) => state.todo.value);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <table className='table table-striped table-hover'>
            <thead>
              <tr>
                <th>#</th>
                <th>Task Name</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {todoItems.map((item, index) => (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{item}</td>
                  <td>
                    <button onClick={() => EditAlert(index, item)} className='btn btn-sm btn-warning'>
                      Edit
                    </button>
                  </td>
                  <td>
                    <button onClick={() => DeleteAlert(index)} className='btn btn-sm btn-danger'>
                      Delete
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
