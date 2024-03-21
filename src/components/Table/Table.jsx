import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getSpecialtyThunk } from "../../redux/thunk/mainInfoThunks";
import MUIDataTable from "mui-datatables";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { LinkWrapper, StyledWrapper, TableLink } from "./Table.styled";

const Table = ({ view, data, columns }) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [page] = useState(1);
  const dispatch = useDispatch();
  let dataArray = [];

  data.map((el) => dataArray.push(Object.values(el)));

  const columnsToRender = columns.map((column) => {
    if (column.includes("Посилання")) {
      return {
        name: column,
        label: column,
        options: {
          setCellHeaderProps: () => {
            return { align: "center" };
          },
          setCellProps: () => {
            return { align: "center" };
          },
          customBodyRender: (value) =>
            value && (
              <LinkWrapper>
                <TableLink href={"https" + value} target="_blank">
                  {"Ознайомитись"}
                </TableLink>
              </LinkWrapper>
            ),
        },
      };
    }

    if (column.includes("Номер")) {
      return {
        name: column,
        label: column,
        options: {
          setCellProps: () => {
            return { align: "center" };
          },
        },
      };
    }

    if (column.includes("Дія")) {
      return {
        name: column,
        label: column,
        options: {
          onRowSelectionChange: (currentSelect, allSelected) => {
            setSelectedRows(allSelected);
          },
          setCellHeaderProps: () => {
            return { align: "center" };
          },
          setCellProps: () => {
            return { align: "center" };
          },
          customBodyRenderLite: (dataIndex, rowIndex) => (
            <>
              <IconButton
                style={{ color: "var(--edit-green)" }}
                onClick={() => console.log(`Edit on ${dataArray[dataIndex][0]}`)}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                style={{ color: "var(--delete-red)" }}
                onClick={() => console.log(`Delete on ${rowIndex} `)}
              >
                <DeleteIcon />
              </IconButton>
            </>
          ),
        },
      };
    }

    return {
      name: column,
      label: column,
      options: {
        setCellHeaderProps: () => {
          return { align: "center" };
        },
        setCellProps: () => {
          return { align: "left" };
        },
      },
    };
  });

  const options = {
    filterType: "dropdown",
    selectableRowsHeader: false,
    selectToolbarPlacement: "none",
    selectableRowsHideCheckboxes: true,
    rowsPerPage: 20,
    rowsPerPageOptions: [5, 6, 7, 8, 9, 10, 15, 20],
    customToolbar: () => {
      return (
        <>
          <IconButton
            style={{ order: 2 }}
            onClick={(e) => console.log(`Add on ${e.target}`)}
          >
            <AddIcon />
          </IconButton>
        </>
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
      <>{selectedRows}</>
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
