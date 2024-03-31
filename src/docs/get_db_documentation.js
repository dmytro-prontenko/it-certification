// Перелік викладачів
// /teachers

get
const teachers = {
  id: 100,
  name: "Петренко Петро Петрович",
  position:{
    id: 1,
    name:  "професор",
  },
  degree: {
    id: 1,
    name: "PhD",
  },
 university: {
    id: 100,
    name: "Харківський національний університет",
  },
  department: {
    id: 1,
    name: "Кафедра",
  },
  email: "test@test.ua",
  comments: "Хороший чувак",
};




// Перелік ЗВО
// /universities

const universities = {
  id: 100,
  name: "Харківський національний університет",
  abbr: "ХНУ",
  programs_list_url: "http://google.com",
  url: "http://google.com",
};

// Перелік спеціальностей
// /specialties

const specialty = {
  id: 100,
  code: "121",
  name: "Кібербезпека",
  standard_url: "http://google.com",
};

// Перелік рівнів освіти
// /education-levels

const education_levels = {
  id: 100,
  name: "Бакалавр",
};

// Перелік освітніх програм
// /education-programs

const education_programs = {
  id: 1,
  name: "Назва",
  university: {
    id: 100,
    name: "Харківський національний університет",
  },
  education_level: {
    id: 100,
    name: "Бакалавр",
  },
  guarantor: "Гарант",
  department: {
    id: 1,
    url: "http://google.com",
    name: "Кафедра",
  },
  program_url: "http://google.com",
  syllabus_url: "http://google.com",
};

// Перелік кафедр
// /department

const departments = {
  id: 1,
  name: "Кафедра",
  university: {
    id: 100,
    name: "Харківський національний університет",
  },
  description: "Опис кафедри",
  contacts: {
    address: "address",
    email: "",
    phone: ["+380...", "+380..."],
  },
  url: "http://google.com",
};

// Перелік блоків дисциплін
// /discipline-blocks

const discipline_blocks = {
  id: 1,
  name: "Назва",
  description: "Опис",
};

// Перелік дисциплін
// /disciplines

const disciplines = {
  id: 1,
  name: "Назва",
  teacher: {
    id: 1,
    name: "Петренко Петро Петрович",
  },
  discipline_block: {
    id: 1,
    name: "Назва",
  },
  discipline_group: {
    id: 1,
    name: "Назва",
  },
  education_program: {
    id: 1,
    name: "Назва",
  },
  syllabus_url: "http://google.com",
  education_plan__url: "http://google.com",
};


// Перелік груп дисциплін
// /discipline-groups

const discipline_groups = {
  id: 1,
  name: "Назва",
  description: "Опис",
  block: {
    id: 1,
    name: "Назва",
  },
  discipline_url:"http://google.com",
};

//Сервісна інформація
// /service_info

serviceInfo: {
    position: [
      {
        id: 1,
        name: "доцент",
      },
    ],
    degree: [
      {
        id: 1,
        name: "phd",
      },
    ],
    university: [
      {
        id: 1,
        name: "Харківський національний університет ім.Каразіна",
        abbr: "ХНУ",
        department: [
          {
            id: 1,
            name: "Інформаційні технології",
          },
        ],
      },
      {
        id: 2,
        name: "Харківський національний університет ім.Каразіна2",
        abbr: "ХНУ2",
        department: [
          {
            id: 1,
            name: "Інформаційні технології2",
          },
        ],
      },
    ],
    specialty: [
      {
        id: ,
        code: "",
        name: "",
      },
    ],
    educationLevels: [
      {
        id: ,
        name: "",
      },
    ],
    discipline: [
      {
        id: ,
        name: "",
      },
    ],
    disciplineGroups: [
      {
        id: ,
        name: "",
      },
    ],
    disciplineBlocks: [
      {
        id: ,
        name: "",
      },
    ],
  },