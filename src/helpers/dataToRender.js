export const teacherTableData = (columns, data) => {
  function objectToArray(index, columns, data) {
    const dataArray = [index + 1];
    for (let key of columns) {
      switch (key) {
        case "Ім`я викладача":
          dataArray.push(data.name);
          break;
        case "Посада":
          dataArray.push(data.position.name);
          break;
        case "Наукова ступінь":
          dataArray.push(data.degree.name);
          break;
        case "ЗВО":
          dataArray.push(data.university.name);
          break;
        case "Кафедра":
          dataArray.push(data.department.name);
          break;
        case "Email":
          dataArray.push(data.email);
          break;
        case "Коментарі":
          dataArray.push(data.comments);
          break;
        default:
          break;
      }
    }
    return dataArray;
  }

  const dataArrays = [];
  data?.forEach((obj, index) => {
    dataArrays.push(objectToArray(index, columns, obj));
  });
  return dataArrays;
};

export const universityTableData = (columns, data) => {
  function objectToArray(index, columns, data) {
    const dataArray = [index + 1];
    for (let key of columns) {
      switch (key) {
        case "ЗВО":
          dataArray.push(data.name);
          break;
        case "Абревіатура":
          dataArray.push(data.abbr);
          break;
        case "Перелік програм":
          dataArray.push(data.programs_list_url);
          break;
        case "Сайт":
          dataArray.push(data.url);
          break;
        default:
          break;
      }
    }
    return dataArray;
  }

  const dataArrays = [];
  data?.forEach((obj, index) => {
    dataArrays.push(objectToArray(index, columns, obj));
  });
  return dataArrays;
};

export const specialtyTableData = (columns, data) => {
  function objectToArray(index, columns, data) {
    const dataArray = [index + 1];
    for (let key of columns) {
      switch (key) {
        case "Назва":
          dataArray.push(data.name);
          break;
        case "Код спеціальності":
          dataArray.push(data.code);
          break;
        case "Посилання на стандарт":
          dataArray.push(data.standard_url);
          break;
        default:
          break;
      }
    }
    return dataArray;
  }

  const dataArrays = [];
  data?.forEach((obj, index) => {
    dataArrays.push(objectToArray(index, columns, obj));
  });
  return dataArrays;
};

export const educationLevelTableData = (columns, data) => {
  function objectToArray(index, columns, data) {
    const dataArray = [index + 1];
    for (let key of columns) {
      switch (key) {
        case "Рівень":
          dataArray.push(data.education_level);
          break;
        case "Назва":
          dataArray.push(data.name);
          break;
        default:
          break;
      }
    }
    return dataArray;
  }

  const dataArrays = [];
  data?.forEach((obj, index) => {
    dataArrays.push(objectToArray(index, columns, obj));
  });
  return dataArrays;
};

export const programsTableData = (columns, data) => {
  function objectToArray(index, columns, data) {
    const dataArray = [index + 1];
    for (let key of columns) {
      switch (key) {
        case "Код":
          dataArray.push(data.specialty.code);
          break;
        case "Назва програми":
          dataArray.push(data.name);
          break;
        case "ЗВО":
          dataArray.push(data.university.name);
          break;
        case "Рівень освіти":
          dataArray.push(data.education_level.education_level);
          break;
        case "Гарант":
          dataArray.push(data.guarantor);
          break;
        case "Кафедра":
          dataArray.push(data.department.name);
          break;
        case "Програма":
          dataArray.push(data.program_url);
          break;
        case "Сілабус":
          dataArray.push(data.syllabus_url);
          break;
        default:
          break;
      }
    }
    return dataArray;
  }

  const dataArrays = [];
  data?.forEach((obj, index) => {
    dataArrays.push(objectToArray(index, columns, obj));
  });
  return dataArrays;
};

export const departmentTableData = (columns, data) => {
  function objectToArray(index, columns, data) {
    const dataArray = [index + 1];
    for (let key of columns) {
      switch (key) {
        case "Назва кафедри":
          dataArray.push(data.name);
          break;
        case "ЗВО":
          dataArray.push(data.university.name);
          break;
        case "Опис":
          dataArray.push(data.description);
          break;
        case "Контакт":
          dataArray.push("contact");
          break;
        case "Кафедра":
          dataArray.push(data.url);
          break;
        default:
          break;
      }
    }
    return dataArray;
  }

  const dataArrays = [];
  data?.forEach((obj, index) => {
    dataArrays.push(objectToArray(index, columns, obj));
  });
  return dataArrays;
};
