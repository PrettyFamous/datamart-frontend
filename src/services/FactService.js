import axios from "axios";
import { resources } from "./api";

export const factService = {
  getAllFacts: async (searchValue, page) => {
    const query = `${resources.factMeta}?page=${page}&search=${searchValue}`;
    const result = await axios.get(query);

    return result;
  },
  deleteFactByID: async (id) => {
    const result = await axios.delete(`${resources.factMeta}/${id}`);
    return result;
  },
  addFact: async (formData) => {
    const result = await axios.post(`${resources.factMeta}/upload`, formData, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    return result;
  },
  getFactInfoByID: async (id) => {
    const result = await axios.get(`${resources.factData}/${id}`);
    return result;
  },
  updateFactValue: async (factId, dimensionName, isFact, newValue, rowId) => {
    const query = `${resources.factData}/${factId}?dimensionName=${dimensionName}&isFact=${isFact}&newValue=${newValue}&rowId=${rowId}`;
    const result = await axios.put(query);

    return result;
  },
};
