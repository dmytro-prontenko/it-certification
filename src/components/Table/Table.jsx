import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Chip, IconButton, MenuItem, Select, Tooltip } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import MUIDataTable, { TableFilterList } from "mui-datatables";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectOpenModal } from "../../redux/selectors/serviceSelectors";
import { setModalContent, setModalStatus } from "../../redux/slice/serviceSlice";
import { getSpecialtyThunk, getTeachersThunk } from "../../redux/thunk/mainInfoThunks";
import { tableTheme } from "../../services/MUI_themes/table_theme";
import {
  LinkWrapper,
  PageSelectWrapper,
  PaginationWrapper,
  StyledPagination,
  StyledWrapper,
  TableLink,
} from "./Table.styled";

const Table = ({ view, data, columns }) => {
  const dispatch = useDispatch();
  const modalStatus = useSelector(selectOpenModal);

  let dataArray = [];

  const [page, setPage] = useState(1);


  data.map((el) => dataArray.push(Object.values(el)));


  const handleChange = (e) => {
    setPage(Number(e.target.value));
  };

  const handleChangePage = (e) => {
    setPage(Number(e.target.textContent));
  };

  const handleModal = (action, recordData) => {
    dispatch(setModalStatus(!modalStatus));
    dispatch(setModalContent({ action, recordData }));
  };


  const CustomChip = ({ label, onDelete }) => {
    let customLabel = label;
    console.log(label);
    if (label === "" || label === null || label === undefined) {
      customLabel = "(пусто)";
    } else if (label.toString().toLocaleLowerCase().startsWith("hell"))
      customLabel = "Ознайомитись";

    return (
      <Chip
        variant="outlined"
        color="secondary"
        label={customLabel}
        onDelete={onDelete}
      />
    );
  };

  const CustomFilterList = (props) => {
    return <TableFilterList {...props} ItemComponent={CustomChip} />;
  };

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
          filterOptions: {
            renderValue: (val) => {
              if (val === "" || val === null || val === undefined) {
                return "(пусто)";
              } else if (val.toString().toLocaleLowerCase().startsWith("http"))
                return "Ознайомитись";
            },
          },
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
          filterType: "multiselect",
        },
      };
    }

    if (column.includes("Дія")) {
      return {
        name: column,
        label: column,
        options: {
          filter: false,
          setCellHeaderProps: () => {
            return { align: "center" };
          },
          setCellProps: () => {
            return { align: "center" };
          },
          customBodyRenderLite: (dataIndex) => (
            <>
              <IconButton
                style={{ color: "var(--edit-green)" }}
                onClick={() => handleModal("Edit", data[dataIndex])}
                // onClick={() => handleEditClick(data[dataIndex])}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                style={{ color: "var(--delete-red)" }}
                onClick={() => handleModal("Delete", data[dataIndex])}
                // onClick={() => handleDeleteClick(data[dataIndex])}
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
        filterType: "multiselect",
        filterOptions: {
          renderValue: (val) => {
            if (val === "" || val === null || val === undefined) {
              return "(пусто)";
            }
            return val;
          },
        },
      },
    };
  });

  const options = {
    exportButton: true,
    filterType: "dropdown",
    selectableRowsHeader: false,
    selectToolbarPlacement: "none",
    selectableRowsHideCheckboxes: true,
    draggableColumns: { enabled: true, transitionTime: 300 },
    rowsPerPage: 20,
    rowsPerPageOptions: [5, 6, 7, 8, 9, 10, 15, 20],
    downloadOptions: {
      filename: "specialty.csv",
    },
    pagination: false,

    customToolbar: () => {
      return (
        <>
          <Tooltip title="Додати запис">
            <IconButton style={{ order: 2 }} onClick={() => handleModal("Add", null)}>
              <AddIcon />
            </IconButton>
          </Tooltip>
        </>
      );
    },
  };

  useEffect(() => {
    switch (view) {
      case "specialty": {
        dispatch(getSpecialtyThunk());
        break;
      }
      case "teachers": {
        dispatch(getTeachersThunk());
        break;
      }
    }
  }, [page]);

  return (
    <StyledWrapper>
      <ThemeProvider theme={tableTheme()}>
        {/* <Suspense fallback={<Loader />}> */}
          <MUIDataTable
            title={"Спеціальності"}
            data={dataArray}
            columns={columnsToRender}
            options={options}
            components={{
              TableFilterList: CustomFilterList,
            }}
          />
          <PaginationWrapper>
            <PageSelectWrapper>
              <div>Показати сторінку</div>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={page}
                onChange={handleChange}
                size="small"
              >
                {[...Array(10)].map((_, index) => (
                  <MenuItem key={index} value={index + 1}>
                    {index + 1}
                  </MenuItem>
                ))}
              </Select>
            </PageSelectWrapper>
            <StyledPagination
              count={10}
              page={page}
              onChange={handleChangePage}
              size="large"
            />
          </PaginationWrapper>
        {/* </Suspense> */}
      </ThemeProvider>
    </StyledWrapper>
  );
};

export default Table;
