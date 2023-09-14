import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import { getProductList } from "../api/api";
import FullscreenLoader from "./FulScreenLoader";

const ProductList = () => {
  const [searchKeyword, setSearchKeyword] = useState("0");
  const [perPage, setPerPage] = useState(5);

  const allProduct = useSelector((state) => state.product.allProduct);
  const total = useSelector((state) => state.product.total);

  useEffect(() => {
    getProductList(1, perPage, searchKeyword);
  }, []);

  const handlePageClick = (event) => {
    let pageNumber = event.selected;
    getProductList(pageNumber + 1, perPage, searchKeyword);
  };

  const handlePerPage = (event) => {
    setPerPage(parseInt(event.target.value));
    getProductList(1, event.target.value, searchKeyword);
  };

  const handleSearch = (event) => {
    setSearchKeyword(event.target.value);
    if (event.target.value.length === 0) {
      setSearchKeyword("0");
      getProductList(1, perPage, "0");
    }
  };

  const handleSearchBtn = () => {
    getProductList(1, perPage, searchKeyword);
  };

  return (
    <div className="container my-5">
      <FullscreenLoader />
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-6">
                    <h5>My Product List</h5>
                  </div>
                  <div className="col-2">
                    <select
                      onChange={handlePerPage}
                      className="form-control mx-2 form-select-sm form-select form-control-sm">
                      <option value="5">5 Per Page</option>
                      <option value="10">10 Per Page</option>
                      <option value="20">20 Per Page</option>
                      <option value="30">30 Per Page</option>
                      <option value="50">50 Per Page</option>
                      <option value="100">100 Per Page</option>
                    </select>
                  </div>
                  <div className="col-4">
                    <div className="input-group mb-3">
                      <input
                        onChange={handleSearch}
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="Search.."
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                      />
                      <button
                        onClick={handleSearchBtn}
                        className="btn  btn-outline-primary btn-sm mb-0"
                        type="button">
                        Search
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="table-responsive data-table">
                      <table className="table ">
                        <thead className="sticky-top bg-white">
                          <tr>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                              Product
                            </th>
                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                              Price
                            </th>
                            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                              Rating
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {allProduct.map((item) => (
                            <tr key={item.id}>
                              <td>
                                <div className="d-flex px-2 py-1">
                                  <div>
                                    <img
                                      src={item.thumbnail}
                                      style={{ width: "30%" }}
                                      className="avatar me-3"
                                    />
                                  </div>
                                  <div className="d-flex flex-column justify-content-center">
                                    <h6 className="mb-0  text-xs">{item.title}</h6>
                                    <p className="text-xs  text-secondary mb-0">{item.category}</p>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <p className="text-xs font-weight-bold mb-0">{item.brand}</p>
                                <p className="text-xs text-secondary mb-0">{item.price} Taka </p>
                              </td>
                              <td>
                                <span className="text-secondary text-xs font-weight-bold">{item.rating}</span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="col-12 mt-5">
                    <nav aria-label="Page navigation example">
                      <ReactPaginate
                        previousLabel="<"
                        nextLabel=">"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakLabel="..."
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        pageCount={total / perPage}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageClick}
                        containerClassName="pagination"
                        activeClassName="active"
                      />
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
