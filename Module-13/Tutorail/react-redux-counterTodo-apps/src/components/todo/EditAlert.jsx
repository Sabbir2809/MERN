import Swal from 'sweetalert2';
import store from '../../redux/app/store';
import { editTodo } from '../../redux/features/todo/todoSlice';

export const EditAlert = (index, item) => {
  Swal.fire({
    title: 'Update Task Name',
    input: 'text',
    inputValue: item,
    inputValidator: (value) => {
      if (value) {
        store.dispatch(editTodo({ index: index, task: value }));
      }
    },
  });
};
