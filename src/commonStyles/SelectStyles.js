const selectStyles = {
  select: (customStyles) => ({
    ...customStyles,
    "&:focus": { outline: "none" },
    "&:hover": { outline: "none" },
    border: "none",
    outline: "none",
    boxShadow: "none",
    transition: "border-color 0.2s",
    color: "var(--basic-black)",
    "&:focus, &:hover": {
      outline: "none",
      border: "none",
      boxShadow: "none",
    },
  }),
  option: () => ({
    marginTop: 10,
    "&:hover": {
      background: "var(--accent-yellow-100);",
      color: "var(--basic-grey)",
    },
    fontSize: "14px",
  }),
  control: (customStyles) => ({
    ...customStyles,
    boxShadow: "none",

    "&:focus": {},
    "&:hover": {
      border: "none",
      boxShadow: "var(--basic-grey)",
      outline: "none",
    },

    border: "none",
    background: "transparent",

    width: "100%",
    // minHeight: 102,
    padding: "0 12px",
    textAlign: "start",

    color: "green",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "150%",
  }),

  valueContainer: (customStyles) => ({
    ...customStyles,
    padding: 0,
    margin: 0,
  }),
  indicatorSeparator: () => ({
    border: "none",
  }),
  dropdownIndicator: (customStyles) => ({
    ...customStyles,
    "&:focus": { color: "green" },
    "&:hover": { color: "green", cursor: "pointer" },
    "&:active": { color: "green" },
    color: "var(--accent-green-300)",
  }),
  menu: (customStyles) => ({
    ...customStyles,
    
    background: "white",
    cursor: "pointer",
    color: "var(--basic-grey)",
    padding: "10px 20px",
    marginTop: 0,
  }),
  singleValue: (customStyles) => ({
    ...customStyles,

    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "150%",
    color: "var(--basic-black)",
  }),
  container: (styles) => ({
    ...styles,
    outline: "none",
    marginLeft: "0",
    width: "calc(100% - 288px)",
    display: "flex",
    justifyContent: "space-between",
  }),
};

export default selectStyles;
