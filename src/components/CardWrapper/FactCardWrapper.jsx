import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../Card";
import { factService } from "../../services/FactService";
import Pagination from "../Pagination";
import { useDispatch, useSelector } from "react-redux";

import "./CardWrapper.scss";
import { setTotalPages } from "../../redux/slices/filterSlice";

const FactCardWrapper = () => {
  const [data, setData] = useState([]);
  const { searchValue, page } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    factService.getAllFacts(searchValue, page).then((res) => {
      console.log(res);
      setData(res.data.content);
      dispatch(setTotalPages(res.data.totalPages));
    });
  }, [searchValue]);

  return (
    <>
      <div className="main__container">
        <div className="card-wrapper__header">
          <h2 className="card-wrapper__title">Факты</h2>
          <Link to="add-fact" className="card-wrapper__add-button">
            Добавить факт
          </Link>
        </div>
        <div className="card-wrapper__wrapper">
          {data && data.map((item) => (
            <Card
              key={item.id}
              name={item.name}
              id={item.id}
              createdDate={item.createdDate}
            />
          ))}
        </div>
      </div>
      <Pagination />
    </>
  );
};

export default FactCardWrapper;
