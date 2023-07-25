import ReactPaginate from "react-paginate";

import styles from "./Pagination.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../redux/slices/filterSlice";

const Pagination = () => {
  const dispatch = useDispatch();
  const { totalPages } = useSelector((state) => state.filter);

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(e) => dispatch(setPage(e.selected + 1))}
      pageRangeDisplayed={18}
      pageCount={totalPages}
      forcePage={0}
      renderOnZeroPageCount={() => null}
    />
  );
};

export default Pagination;
