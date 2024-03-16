const selectStyles = {
  select: (customStyles) => ({
    ...customStyles,
    "&:focus": { outline: "none" },
    "&:hover": { outline: "none" },
    border: "2px solid var(--hover-color)",
    borderRadius: 20,
    transition: "border-color 0.2s",
    padding: 10,
    width: 65,
    "&:focus, &:hover": {
      borderColor: "#42A652",
    },
  }),
  option: () => ({
    "&:hover": { background: "#474759", color: "#F6F7FB" },
    letterSpacing: "0.02em",
    fontSize: "12px",
    lineHeight: 1,
    padding: "12px 12px",
  }),
  // Сам Select
  control: (customStyles) => ({
    ...customStyles,
    "&:placeholder": {
      fontSize: "10px",
    },
    "&:focus": {},
    "&:hover": {
      outline: "none",
      boxShadow: "rgba(102, 204, 102, 0.5)",
    },

    //*
    borderRadius: 100,
    border: "1px solid var(--hover-color)",
    background: "#FFF",
    //*

    // padding: 8,

    //*
    width: 96,
    textAlign: "start",
    //*

    fontSize: "14px",
    fontWeight: 300,
    color: "var(--main-text)",

    "@media only screen and (min-width: 768px)": {
      height: "44px",
      width: "170px",
      borderLeft: "none",
      borderBottom: "none",
      borderRadius: "0",
    },
  }),
  valueContainer: (customStyles) => ({
    ...customStyles,
    fontSize: "11px",
    paddingTop: "4px",
    paddingLeft: "10px",
  }),
  indicatorSeparator: () => ({
    border: "none",
  }),
  dropdownIndicator: (customStyles) => ({
    ...customStyles,
    "&:focus": { color: "#C7CCDC80" },
    "&:hover": { color: "#C7CCDC80" },
    "&:active": { color: "#C7CCDC80" },
    color: "var(--main-text)",
  }),
  menu: (customStyles) => ({
    ...customStyles,
    background: "#FFFFFF",
    cursor: "pointer",
    color: "var(--main-text)",
    marginTop: "0px",
    width: "80%",
    left: "8%",
  }),
  singleValue: (customStyles) => ({
    ...customStyles,
    color: "var(--hover-color)",
  }),
  // container: (styles) => ({
  //   ...styles,
  //   outline: "none",
  //   marginBottom: "32px",
  //   marginLeft: "0",
  //   "@media only screen and (min-width: 768px)": {
  //     ...styles["@media only screen and (max-width: 768px)"],
  //     height: "44px",
  //     width: "170px",
  //     borderRadius: "30px",
  //     marginBottom: "0",
  //     marginLeft: "0",
  //   },
  //   "@media only screen and (min-width: 1280px)": {
  //     ...styles["@media only screen and (min-width: 1280px)"],
  //     width: "172px",
  //   },
  // }),
};

export default selectStyles;
