// table_theme.js

import { createTheme } from "@mui/material";

export const tableTheme = () =>
  createTheme({
    typography: {
      fontFamily: "Montserrat, sans-serif",
      fontSize: 14,
    },
    palette: {
      background: {
        borderRadius: "24px 24px 0px 0px",
      },
      mode: "light",
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: "24px",
            padding: 20,
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            color: "var(--accent-green-300)",
          },
        },
      },
      MUIDataTableHeadCell: {
        styleOverrides: {
          root: {},
          contentWrapper: {
            justifyContent: "center",
          },
          toolButton: {
            margin: 0,
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          head: {
            padding: "10px 0",
            borderRadius: "24px 24px 0px 0px",
          },
          body: {
            padding: "15px 20px",
          },
          footer: {},
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            "&:hover": {
              backgroundColor: "var(--accent-yellow-100)",
            },
            "&:hover .MuiSvgIcon-root": {
              fill: "green",
            },
          },
        },
      },
      MuiPaginationItem: {
        styleOverrides: {
          page: {
            "&:not(.Mui-selected):hover": {
              backgroundColor: "var(--accent-yellow-200)",
            },
            "&:(.Mui-selected):hover": {
              backgroundColor: "red",
            },
            "&.Mui-selected": {
              backgroundColor: "var(--accent-yellow-100)",
              color: "var(--accent-green-300)",
            },
            "&.Mui-disabled": {
              pointerEvents: "none",
            },
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            justifyContent: "center",
            borderRadius: "50%",
            "&.Mui-selected": {
              backgroundColor: "var(--accent-yellow-200)",
              color: "var(--accent-green-300)",

              // padding:0,
            },
            // "&:hover": {
            //   backgroundColor: "var(--accent-yellow-200)",
            //   "& svg": {
            //     transform: "rotate(180deg)", // Вращение на 360 градусов при наведении
            //   },
            // },
            // "& svg": {
            //   transform: "rotate(0deg)", // Изначальное значение - нет вращения
            //   transition: "transform 0.5s ease-in-out", // Плавный переход
            // },
          },
        },
      },
    },
  });
