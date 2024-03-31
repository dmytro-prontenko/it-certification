import AddIcon from "@mui/icons-material/Add";
import { Chip, IconButton, MenuItem, Select, Tooltip } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import MUIDataTable, { TableFilterList } from "mui-datatables";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  selectDictionary,
  tableData,
} from "../../redux/selectors/mainInfoSelectors";
import {
  selectCurrentPage,
  selectOpenModal,
} from "../../redux/selectors/serviceSelectors";
import {
  setCurrentPage,
  setModalContent,
  setModalStatus,
} from "../../redux/slice/serviceSlice";
import {
  getTableDataThunk,
  serviceInfoThunk,
} from "../../redux/thunk/mainInfoThunks";
import { SIZE } from "../../service/constant";
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

const Table = ({ view, data, columns }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const modalStatus = useSelector(selectOpenModal);
  const currentPage = useSelector(selectCurrentPage);
  const serviceInfo = useSelector(selectDictionary);
  const teachers = useSelector(tableData);

  console.log(teachers);

  const totalPages = Number(Math.ceil(teachers?.totalElements / SIZE));

  let dataArray = [];

  useEffect(() => {
    dispatch(
      getTableDataThunk({
        endPoint: `${location.pathname}`,
        getParams: { page: currentPage, size: SIZE },
      })
    );
    if (!serviceInfo) dispatch(serviceInfoThunk());
  }, [currentPage]);

  // Функція, що перетворює вхідні дані для рендеру таблиці в масив масивів
  // ======================================================================
  // #region
  data.content?.forEach((obj) => {
    let objValues = [];
    for (let key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        if (typeof obj[key] === "object" && "name" in obj[key]) {
          objValues.push(obj[key].name);
        } else {
          objValues.push(obj[key]);
        }
      }
    }
    dataArray.push(objValues);
  });
  // #endregion
  // ======================================================

  // Пагінація
  // ======================================================
  // #region pagination
  const handleChange = (e) => {
    dispatch(setCurrentPage(e.target.value));
  };

  const handleChangePage = (e) => {
    dispatch(setCurrentPage(e.target.textContent));
  };
  // #endregion
  // ======================================================

  const handleModal = (action, recordData) => {
    if (serviceInfo) {
      dispatch(setModalStatus(!modalStatus));
      dispatch(setModalContent({ action, recordData }));
    } else {
      console.log("Сервіс не відповідає. Спробуйте пізніше");
    }
  };

  // Підміна посилань на лінк "Ознайомитись"
  // ======================================================
  // #region replace

  const CustomChip = ({ label, onDelete }) => {
    let customLabel = label;
    if (label === "" || label === null || label === undefined) {
      customLabel = "(пусто)";
    } else if (label.toString().toLocaleLowerCase().startsWith("http"))
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

  // #endregion
  // ======================================================

  // Налаштування колонок таблиці
  // ======================================================
  // #region columns
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
            return { align: "center", padding: "0" };
          },
          filterType: "multiselect",
        },
      };
    }
    if (column.includes("Посада")) {
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
          filterType: "multiselect",
        },
      };
    }
    if (column.includes("Імʼя викладача")) {
      return {
        name: column,
        label: column,
        options: {
          setCellHeaderProps: () => {
            return { align: "center", width: "230px" };
          },
          setCellProps: () => {
            return { align: "left", width: "230px" };
          },
          filterType: "multiselect",
        },
      };
    }
    if (column.includes("Наукова ступінь")) {
      return {
        name: column,
        label: column,
        options: {
          setCellHeaderProps: () => {
            return { align: "center", width: "170px" };
          },
          setCellProps: () => {
            return { align: "center", width: "170px" };
          },
          filterType: "multiselect",
        },
      };
    }

    if (column.includes("Дія")) {
      const actionStyles = {
        existingStyles: {
          align: "center",
          width: "130px",
        },
      };

      actionStyles.noWrapCell = {
        ...actionStyles.existingStyles,
        whiteSpace: "nowrap",
      };
      return {
        name: column,
        label: column,
        options: {
          filter: false,
          setCellHeaderProps: () => {
            return { style: actionStyles.noWrapCell };
          },
          setCellProps: () => {
            return { style: actionStyles.noWrapCell };
          },
          customBodyRenderLite: (dataIndex) => (
            <>
              <Tooltip title="Редагувати">
                <IconButton
                  onClick={() => handleModal("Edit", data.content[dataIndex])}
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
                  onClick={() => handleModal("Delete", data.content[dataIndex])}
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
  // #endregion
  // ======================================================

  // Налаштування таблиці
  // ======================================================
  // #region options
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
      filename: `${location.pathname}.csv`,
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
  // #endregion
  // ======================================================

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
          {totalPages ? (
            <>
              <PageSelectWrapper>
                <div>Показати сторінку</div>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={currentPage}
                  onChange={handleChange}
                  size="small"
                >
                  {totalPages
                    ? [...Array(totalPages)].map((_, index) => (
                        <MenuItem key={index} value={index + 1}>
                          {index + 1}
                        </MenuItem>
                      ))
                    : null}
                </Select>
              </PageSelectWrapper>
              <StyledPagination
                count={totalPages}
                page={currentPage}
                onChange={handleChangePage}
                size="large"
              />
            </>
          ) : null}
        </PaginationWrapper>
      </ThemeProvider>
    </StyledWrapper>
  );
};

export default Table;
