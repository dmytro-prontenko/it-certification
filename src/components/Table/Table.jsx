import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import MUIDataTable from "mui-datatables";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getSpecialtyThunk } from "../../redux/thunk/mainInfoThunks";
import { StyledWrapper } from "./Table.styled";

const Table = ({ view, data, columns }) => {
  const [page] = useState(1);
  const dispatch = useDispatch();

  const columnsToRender = columns.map((column) => {
    if (column.includes("Посилання")) {
      return {
        name: column,
        label: column,
        options: {
          customBodyRender: (value) =>
            value && (
              <a href={"https" + value} target="_blank">
                {"Ознайомитись"}
              </a>
            ),
        },
      };
    } else {
      return {
        name: column,
        label: column,
      };
    }
  });

  let dataArray = [];
  data.map((el) => dataArray.push(Object.values(el)));

  const options = {
    // elevation:0,
    filterType: "dropdown",
    rowsPerPage: 20,
    rowsPerPageOptions: [5, 6, 7, 8, 9, 10, 15, 20],
    customToolbar: () => {
      return (
        <IconButton style={{ order: -1 }}>
          <AddIcon />
        </IconButton>
      );
    },
  };

  const theme = () =>
    createTheme({
      typography: {
        fontFamily: "Montserrat, sans-serif",
        fontSize: 14,
      },
      palette: {
        background: {
          // paper: "transparent", // background тіла таблиці
          borderRadius: "24px 24px 0px 0px",
          // default: "green", //background фільтра
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
        MuiTableCell: {
          styleOverrides: {
            head: {
              padding: "10px 20px",
              borderRadius: "24px 24px 0px 0px",
              // borderBottom: "1px solid var(--Gray-200, #7F7F7F)",
            },
            body: {
              padding: "10px 20px",
              // borderBottom: "1px solid var(--Gray-200, #7F7F7F)",
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

  useEffect(() => {
    switch (view) {
      case "specialty": {
        dispatch(getSpecialtyThunk());
        break;
      }
      // case "teachers": {
      //   dispatch(getTeachersThunk());
      //   break;
      // }
    }
  }, [page]);

  return (
    <StyledWrapper>
      <ThemeProvider theme={theme()}>
        <MUIDataTable
          title={"Спеціальності"}
          data={dataArray}
          columns={columnsToRender}
          options={options}
        />
      </ThemeProvider>
    </StyledWrapper>
  );
};

export default Table;
