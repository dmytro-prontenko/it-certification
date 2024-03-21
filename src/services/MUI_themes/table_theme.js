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
            padding: "10px 20px",
            borderRadius: "24px 24px 0px 0px",
          },
          body: {
            padding: "10px 20px",
          },
          footer: {},
        },
      },
    },
    styleOverrides: {
      MUIDataTableToolbar: {
        actions: {
          display: "flex",
          flexDirection: "row",
          flex: "initial",
        },
      },
    },
  });
