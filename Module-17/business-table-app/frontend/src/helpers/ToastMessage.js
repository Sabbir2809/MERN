import { toast } from "react-hot-toast";

class ToastMessage {
  errorToast(msg) {
    toast.error(msg);
  }
  successToast(msg) {
    toast.error(msg);
  }
}

export const { errorToast, successToast } = new ToastMessage();
