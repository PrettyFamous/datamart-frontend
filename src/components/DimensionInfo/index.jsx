import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { dimensionService } from "../../services/DimensionService";

const DimensionInfo = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dimensionService.getDimensionInfoByID(id).then((res) => setData(res.data));
  }, []);

  return (
    <div className="main__container">
      <h2>Просмотр измерения</h2>
      <span className="btn--back" onClick={() => navigate(-1)}>
        Назад
      </span>
      {data && (
        <>
          <h4>{data.name}</h4>
          <table className="preview__table">
            <thead>
              <tr>
                {data.columnNames.map((column, index) => {
                  return <th key={index}>{column}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {data.rows.map((value, index) => {
                return (
                  <tr key={index}>
                    {value.map((val, i) => {
                      return (
                        <td key={i}>
                          {val
                            .split("")
                            .filter((elem) => elem !== "'")
                            .join("")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default DimensionInfo;
