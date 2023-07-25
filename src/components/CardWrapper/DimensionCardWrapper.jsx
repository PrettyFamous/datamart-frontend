import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Card";
import { dimensionService } from "../../services/DimensionService";
import Pagination from "../Pagination";
import { useDispatch, useSelector } from "react-redux";

import "./CardWrapper.scss";
import { setTotalPages } from "../../redux/slices/filterSlice";

const DimensionCardWrapper = () => {
  const [data, setData] = useState([]);
  const { searchValue, page } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dimensionService.getAllDimensions(searchValue, page).then((res) => {
      console.log(res.data);
      setData(res.data.content);
      dispatch(setTotalPages(res.data.totalPages));
    }); //!!!!!!
  }, [searchValue]);

  return (
    <>
      <div className="main__container">
        <div className="card-wrapper__header">
          <h2 className="card-wrapper__title">Измерения</h2>
          <Link to="add-dimension" className="card-wrapper__add-button">
            Добавить измерение
          </Link>
        </div>
        <div className="card-wrapper__wrapper">
          {data &&
            data.map((item) => (
              <Card
                key={item.id}
                name={item.name}
                id={item.id}
                createdDate={item.createdDate}
                isDimension
              />
            ))}
        </div>
      </div>
      <Pagination />
    </>
  );
};

export default DimensionCardWrapper;
