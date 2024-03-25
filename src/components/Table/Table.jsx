import AddIcon from "@mui/icons-material/Add";
import { Chip, IconButton, MenuItem, Select, Tooltip } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import MUIDataTable, { TableFilterList } from "mui-datatables";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectOpenModal } from "../../redux/selectors/serviceSelectors";
import {
  setModalContent,
  setModalStatus,
} from "../../redux/slice/serviceSlice";
import { tableTheme } from "../../services/MUI_themes/table_theme";
import Icon from "../Icon/Icon";
import {
  LinkWrapper,
  PageSelectWrapper,
  PaginationWrapper,
  StyledPagination,
  StyledWrapper,
  TableLink,
} from "./Table.styled";
import { getTableDataThunk } from "../../redux/thunk/mainInfoThunks";
import { SIZE } from "../../service/constant";

const Table = ({ view, data, columns }) => {
  const dispatch = useDispatch();
  const modalStatus = useSelector(selectOpenModal);

  let dataArray = [];

  const [page, setPage] = useState(1);

  data.data?.map((el) => dataArray.push(Object.values(el)));

  const handleChange = (e) => {
    setPage(Number(e.target.value));
  };

  const handleChangePage = (e) => {
    setPage(Number(e.target.textContent));
  };

  const handleModal = (action, recordData) => {
    // console.log(recordData)
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
              <Tooltip title="Редагувати">
                <IconButton
                  onClick={() => handleModal("Edit", data.data[dataIndex])}
                >
                  <Icon
                    styles={{ fill: "var(--edit-green)" }}
                    width={24}
                    height={24}
                    iconId={"pencil"}
                  />
                </IconButton>
              </Tooltip>
              <Tooltip title="Видалити">
                <IconButton
                  onClick={() => handleModal("Delete", data.data[dataIndex])}
                >
                  <Icon
                    styles={{ fill: "var( --delete-red)" }}
                    width={24}
                    height={24}
                    iconId={"trash"}
                  />
                </IconButton>
              </Tooltip>
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
            <IconButton
              style={{ order: 2 }}
              onClick={() => handleModal("Add", null)}
            >
              <AddIcon />
            </IconButton>
          </Tooltip>
        </>
      );
    },
  };

  useEffect(() => {
    switch (view) {
      case "Перелік викладачів": {
        dispatch(
          getTableDataThunk({
            endPoint: "teachers/",
            getParams: { page: 1, size: SIZE },
          })
        );
        break;
      }
      // =================
      case "Перелік ЗВО": {
        dispatch(
          getTableDataThunk({
            endPoint: "universities/",
            getParams: { page: 1, size: SIZE },
          })
        );
        break;
      }
      // =================
      case "Перелік спеціальностей": {
        dispatch(
          getTableDataThunk({
            endPoint: "specialty/",
            getParams: { page: 1, size: SIZE },
          })
        );
        break;
      }
      // =================
      case "Перелік рівнів освіти": {
        dispatch(
          getTableDataThunk({
            endPoint: "programs_levels/",
            getParams: { page: 1, size: SIZE },
          })
        );
        break;
      }
      // =================
      case "Перелік освітніх програм": {
        dispatch(
          getTableDataThunk({
            endPoint: "programs/",
            getParams: { page: 1, size: SIZE },
          })
        );
        break;
      }
      // =================
      case "Перелік кафедр": {
        dispatch(
          getTableDataThunk({
            endPoint: "school/",
            getParams: { page: 1, size: SIZE },
          })
        );
        break;
      }
      // =================
      case "Перелік блоків дисциплін": {
        dispatch(
          getTableDataThunk({
            endPoint: "course_blocks/",
            getParams: { page: 1, size: SIZE },
          })
        );
        break;
      }
      // =================
      case "Перелік дисциплін": {
        dispatch(
          getTableDataThunk({
            endPoint: "course/",
            getParams: { page: 1, size: SIZE },
          })
        );
        break;
      }
      // =================
      case "Перелік груп дисциплін": {
        dispatch(
          getTableDataThunk({
            endPoint: "course_groupes/",
            getParams: { page: 1, size: SIZE },
          })
        );
        break;
      }
      // =================
    }
  }, [page]);

  return (
    <StyledWrapper>
      <ThemeProvider theme={tableTheme()}>
        <MUIDataTable
          title={view}
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
      </ThemeProvider>
    </StyledWrapper>
  );
};

export default Table;
