import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { factService } from "../../services/FactService";
import { createXLSFormData } from "../../utils/tools";

import "../AddDimension/AddDimension.scss";

const AddFacts = () => {
  const [dataFile, setDataFile] = useState(null);
  const [templateFile, setTemplateFile] = useState(null);
  const navigate = useNavigate();

  const changeDataHandler = (event) => {
    setDataFile(event.target.files[0]);
  };

  const changeTemplateHandler = (event) => {
    setTemplateFile(event.target.files[0]);
  };

  const handleAddButtonClick = () => {
    const formData = createXLSFormData(templateFile, dataFile);
    factService.addFact(formData).then(() => navigate("/fact"));
  };

  return (
    <div className="main__container">
      <h2>Добавление фактов</h2>
      <span className="btn--back" onClick={() => navigate(-1)}>
        Назад
      </span>
      <div className="add-file-row">
        <label className="input-file">
          <input
            className="file__input"
            type="file"
            name="file"
            onChange={changeTemplateHandler}
            accept=".xlsx,.xls"
          />
          <span className="input-file-btn">Выберите шаблон</span>
          <span className="input-file-text">{templateFile?.name}</span>
        </label>
      </div>
      <div className="add-file-row">
        <label className="input-file">
          <input
            className="file__input"
            type="file"
            name="file"
            onChange={changeDataHandler}
            accept=".xlsx,.xls"
          />
          <span className="input-file-btn">Выберите файл данных</span>
          <span className="input-file-text">{dataFile?.name}</span>
        </label>
      </div>
      {dataFile && (
        <button
          className="input-file-btn confirm-btn"
          onClick={handleAddButtonClick}
        >
          Добавить
        </button>
      )}
    </div>
  );
};

export default AddFacts;
