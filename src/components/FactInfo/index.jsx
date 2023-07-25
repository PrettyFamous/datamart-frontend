import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { factService } from "../../services/FactService";

import "./FactInfo.scss";

const FactInfo = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [filteredRows, setFilteredRows] = useState(null);
  const [filters, setFilters] = useState({});
  const navigate = useNavigate();

  const handleSelectChange = (e) => {
    setFilters({ ...filters, [Number(e.target.id) + 1]: e.target.value });
    console.log(filters);
  };

  const handleUpdateData = (e) => {
    const targetColumn = e.target.id.split(" ")[0];
    const rowId = Number(e.target.id.split(" ")[1]) + 1;
    const availableValues = data.attrValues[targetColumn - 1];
    const newValue = e.target.value;
    const isFact = availableValues.length == 0;
    const dimensionName = data.factAttrs[targetColumn - 1];

    if (
      (availableValues.indexOf(newValue) != -1 ||
        (isFact && newValue.length > 0 && Number(newValue) != NaN)) &&
      newValue != e.target.placeholder
    ) {
      factService.updateFactValue(
        data.factId,
        dimensionName,
        isFact,
        newValue,
        rowId
      );
    }
  };

  const filterRows = () => {
    let filtered = data?.data;
    for (let key in filters) {
      filtered = filtered.filter(
        (row) => filters[key] === "default" || filters[key] === row[key]
      );
    }

    setFilteredRows(filtered);
  };

  useEffect(() => {
    factService.getFactInfoByID(id).then((res) => {
      setData(res.data);
      res.data.data.sort((a, b) => a[0] - b[0]);
      setFilteredRows(res.data.data);
    });
  }, []);

  useEffect(() => {
    filterRows();
  }, [filters]);

  return (
    <div className="main__container">
      <h2>Показатель – "{data && data.factName}"</h2>
      <span className="btn--back" onClick={() => navigate(-1)}>
        Назад
      </span>
      {filteredRows && (
        <>
          <h4></h4>
          <table className="preview__table">
            <thead>
              <tr>
                <th>
                  <select className="table__dropdown">
                    <option value="default">Номер</option>
                  </select>
                </th>
                {data.factAttrs.map((item, index) => (
                  <th key={item}>
                    <select
                      id={index}
                      className="table__dropdown"
                      onChange={handleSelectChange}
                    >
                      <option value="default">{item}</option>
                      {data.attrValues[index].map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredRows.map((row, index) => (
                <tr key={index}>
                  {row.map((item, i) => (
                    <td key={i + row.join("")}>
                      <input
                        id={`${i} ${index}`}
                        className="table__cell"
                        placeholder={item}
                        onBlur={handleUpdateData}
                      ></input>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default FactInfo;
