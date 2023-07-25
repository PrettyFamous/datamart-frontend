export const createCSVFormData = (file, tableName) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append(
    "name",
    tableName !== "" ? tableName : file.name.split(".")[0]
  );

  return formData;
};

export const createXLSFormData = (templateFile, dataFile) => {
  const formData = new FormData();
  formData.append("templateFile", templateFile);
  formData.append("templateFileName", templateFile.name.split(".")[0]);
  formData.append("dataFile", dataFile);
  formData.append("dataFileName", dataFile.name.split(".")[0]);

  return formData;
};
