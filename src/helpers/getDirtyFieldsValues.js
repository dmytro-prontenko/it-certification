const getDirtyFieldsValues = (dirtyFields, getValues) => {
  const dirtyFieldsArray = [];
  Object.keys(dirtyFields).forEach((field) => {
    if (dirtyFields[field]) {
      const value = getValues(field);
      dirtyFieldsArray.push({ field, value });
    }
  });
  return dirtyFieldsArray;
};

export default getDirtyFieldsValues;
