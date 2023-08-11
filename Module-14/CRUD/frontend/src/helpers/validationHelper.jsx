import { toast } from 'react-toastify';

class ValidationHelper {
  isEmpty(value) {
    if (value.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  successToast(msg) {
    toast.success(msg, {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  }
  errorToast(msg) {
    toast.error(msg, {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  }
}

export const { isEmpty, successToast, errorToast } = new ValidationHelper();
