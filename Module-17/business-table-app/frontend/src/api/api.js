import axios from "axios";
import { errorToast } from "../helpers/ToastMessage";
import store from "../redux/app/store";
import { setAllProduct, setTotal } from "../redux/features/productSlice";
import { hideLoader, showLoader } from "../redux/features/settingsSlice";

export const getProductList = async (pageNo, perPage, searchKeyword) => {
  try {
    store.dispatch(showLoader());

    const URL = `http://localhost:8000/api/product-list/${pageNo}/${perPage}/${searchKeyword}`;

    const res = await axios.get(URL);

    store.dispatch(hideLoader());

    if (res.status === 200) {
      if (res.data["data"][0]["rows"].length > 0) {
        store.dispatch(setAllProduct(res.data["data"][0]["rows"]));
        store.dispatch(setTotal(res.data["data"][0]["total"][0]["count"]));
      } else {
        store.dispatch(setAllProduct([]));
        store.dispatch(setTotal(0));
        errorToast("Data Not Found 1");
      }
    } else {
      errorToast("Data Not Found 2");
    }
  } catch (error) {
    errorToast(error.message);
    store.dispatch(hideLoader());
  }
};
