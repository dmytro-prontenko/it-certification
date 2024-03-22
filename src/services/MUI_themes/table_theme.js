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
          root: {
            // "&:last-child": {
            //   width: "fit-content",
            //   padding: 0,
            // },
          },
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
            // "&:nth-child(1)": {
            //   width: "70px",
            //   outline: "1px solid tomato",
            //   // padding: 0,
            // },
            // "&:nth-child(2)": {
            //   maxWidth: "max-content",
            //   outline: "1px solid tomato",
            //   // padding: 0,
            // },
            // "&:last-child": {
            //   width: "100px",
            //   padding: 0,
            //   outline: "1px solid tomato",
            // },
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
