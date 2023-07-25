import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { dimensionService } from "../../services/DimensionService";
import { createCSVFormData } from "../../utils/tools";
import Papa from "papaparse";

import "./AddDimension.scss";

const AddDimension = () => {
  const [tableRows, setTableRows] = useState([]);
  const [tableName, setTableName] = useState("");
  const [values, setValues] = useState([]);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);

    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const rowsArray = [];
        const valuesArray = [];

        // Iterating data to get column name and their values
        results.data.map((d) => {
          rowsArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
        });

        // Filtered Column Names
        setTableRows(rowsArray[0]);

        // Filtered Values
        setValues(valuesArray);
      },
    });
  };

  const handleTableNameChange = (event) => {
    setTableName(event.target.value);
  };

  const handleAddButtonClick = () => {
    const formData = createCSVFormData(file, tableName);
    dimensionService.addDimension(formData).then(() => navigate("/dimension"));
  };

  return (
    <div className="main__container">
      <h2>Добавление измерения</h2>
      <span className="btn--back" onClick={() => navigate(-1)}>
        Назад
      </span>
      <label className="input-file">
        <input
          className="file__input"
          type="file"
          name="file"
          onChange={handleFileChange}
          accept=".csv"
        />
        <span className="input-file-btn">Выберите файл</span>
        <span className="input-file-text">{file?.name}</span>
      </label>
      {file && (
        <button
          className="input-file-btn approve-btn"
          onClick={handleAddButtonClick}
        >
          Добавить
        </button>
      )}

      <input
        className="preview__table-name"
        onChange={handleTableNameChange}
        placeholder={file?.name.split(".")[0].replace(" ", "_")}
      />

      {tableRows.length > 0 && (
        <table className="preview__table">
          <thead>
            <tr>
              <th key={-1}>ID</th>
              {tableRows.map((rows, index) => {
                return <th key={index}>{rows}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {values.map((value, index) => {
              return (
                <tr key={index}>
                  {value.map((val, i) => {
                    return (
                      <>
                        <td>{index + 1}</td>
                        <td key={i}>
                          {val
                            .split("")
                            .filter((elem) => elem !== "'")
                            .join("")}
                        </td>
                      </>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AddDimension;
