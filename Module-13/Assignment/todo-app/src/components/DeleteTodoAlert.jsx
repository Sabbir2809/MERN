import Swal from 'sweetalert2';
import store from '../app/store';
import { deleteTodo } from '../features/todo/todoSlice';

export const DeleteTodoAlert = (index) => {
  Swal.fire({
    title: 'Are you sure?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, Delete It!',
  }).then((result) => {
    if (result.isConfirmed) {
      store.dispatch(deleteTodo(index));
    }
  });
};
