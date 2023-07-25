import axios from "axios";
import { resources } from "./api";

export const dimensionService = {
  getAllDimensions: async (searchValue, page) => {
    const query = `${resources.dimensionMeta}?page=${page}&search=${searchValue}`;
    const result = await axios.get(query);

    return result;
  },
  deleteDimensionByID: async (id) => {
    const result = await axios.delete(`${resources.dimensionMeta}/${id}`);
    return result;
  },
  getDimensionInfoByID: async (id) => {
    const result = await axios.get(`${resources.dimensionData}/${id}`);
    return result;
  },
  addDimension: async (formData) => {
    const result = await axios.post(
      `${resources.dimensionMeta}/upload`,
      formData,
      {
        headers: {
          "content-type": "multipart/form-data",
        },
      }
    );
    return result;
  },
};
