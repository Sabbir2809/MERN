import Swal from 'sweetalert2';
import { deleteTodo } from '../../redux/features/todo/todoSlice';
import store from '../../redux/app/store';

const DeleteAlert = (index) => {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
  }).then((result) => {
    if (result.isConfirmed) {
      store.dispatch(deleteTodo(index));
    }
  });
};

export default DeleteAlert;
