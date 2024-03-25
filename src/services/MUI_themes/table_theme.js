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
              cursor:"not-allowed"
            },
            "&.Mui-disabled": {
              pointerEvents: "none",
            },
          },
        },
      },
    },
  });
