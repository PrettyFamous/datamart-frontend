import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Card";
import { dimensionService } from "../../services/DimensionService";
import { factService } from "../../services/FactService";
import Pagination from "../Pagination";
import { useSelector } from "react-redux";

import "./CardWrapper.scss";

const AllTypeWrapper = () => {
  const [dataDimensons, setDataDimensons] = useState([]);
  const [dataFacts, setDataFacts] = useState([]);
  const { searchValue, page } = useSelector((state) => state.filter);

  useEffect(() => {
    dimensionService
      .getAllDimensions(searchValue, page)
      .then((res) => setDataDimensons(res.data.content));
    factService
      .getAllFacts(searchValue, page)
      .then((res) => setDataFacts(res.data.content));
  }, [searchValue]);

  return (
    <>
      <div className="main__container">
        <div className="card-wrapper__header">
          <h2 className="card-wrapper__title">Главная</h2>
          <div className="card-wrapper__title-buttons">
            <Link
              to="dimension/add-dimension"
              className="card-wrapper__add-button"
            >
              Добавить измерение
            </Link>
            <Link to="fact/add-fact" className="card-wrapper__add-button">
              Добавить факт
            </Link>
          </div>
        </div>
        <div className="card-wrapper__wrapper">
          {dataFacts.map((item) => (
            <Card
              key={item.id + item.name}
              name={item.name}
              id={item.id}
              createdDate={item.createdDate}
            />
          ))}
          {dataDimensons.map((item) => (
            <Card
              key={item.id + item.name}
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

export default AllTypeWrapper;
