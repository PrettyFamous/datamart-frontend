import { useEffect, useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import { Link } from "react-router-dom";
import { remove } from "../../assets/img";
import { dimensionService } from "../../services/DimensionService";

import "react-confirm-alert/src/react-confirm-alert.css";
import "./Card.scss";
import { factService } from "../../services/FactService";

const Card = ({ name, id, isDimension, createdDate }) => {
  const [isVisible, setIsVisibe] = useState(true);
  const [shownDate, setShownDate] = useState();

  const handleRemoveClick = () => {
    confirmAlert({
      title: `Удаление "${name}"`,
      message: "Вы действительно хотите удалить измерение?",
      buttons: [
        {
          label: "Удалить",
          onClick: () => {
            isDimension
              ? dimensionService.deleteDimensionByID(id)
              : factService.deleteFactByID(id);
            setIsVisibe(false);
          },
        },
        {
          label: "Отмена",
        },
      ],
    });
  };

  useEffect(() => {
    setShownDate(new Date(createdDate).toLocaleString("en-GB").split(",")[0]);
  }, []);

  return (
    <>
      {isVisible && (
        <div className="card">
          <h3>{name}</h3>
          <div>
            <p className="card__field">
              Тип: {isDimension ? "Измерение" : "Факт"}
            </p>
            <p className="card__field">Дата создания: {shownDate}</p>
            <div className="card__buttons">
              <Link
                to={`/${(isDimension ? "dimension/" : "fact/") + id}`}
                className="card__button--edit"
              >
                Просмотр
              </Link>
            </div>
            <img
              className="card__remove-icon"
              src={remove}
              onClick={handleRemoveClick}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
