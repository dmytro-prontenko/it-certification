import AddIcon from "@mui/icons-material/Add";
import { Chip, IconButton, MenuItem, Select, Tooltip } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import MUIDataTable, { TableFilterList } from "mui-datatables";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { tableTheme } from "../../helpers/MUI_themes/table_theme";
import getColumnsToRender from "../../helpers/getColumnsToRender.jsx";
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
  // getTableDataThunk,
  serviceInfoThunk,
} from "../../redux/thunk/mainInfoThunks";
import { SIZE } from "../../service/constant";
import {
  PageSelectWrapper,
  PaginationWrapper,
  StyledPagination,
  StyledWrapper,
} from "./Table.styled";

const Table = ({ view, data, columns }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const modalStatus = useSelector(selectOpenModal);
  const currentPage = useSelector(selectCurrentPage);
  const serviceInfo = useSelector(selectDictionary);
  const dataToTable = useSelector(tableData);

  const totalPages = Number(Math.ceil(dataToTable?.totalElements / SIZE));

  useEffect(() => {
    if (currentPage > 1) {
      dispatch(
        getTableDataThunk({
          endPoint: `${location.pathname}`,
          getParams: { page: currentPage, size: SIZE },
        })
      );
    }
    if (!serviceInfo) dispatch(serviceInfoThunk());
  }, [currentPage]);

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

  const handleModal = (action, recordDataEdit) => {
    if (serviceInfo) {
      dispatch(setModalStatus(!modalStatus));
      dispatch(
        setModalContent({
          action,
          recordDataEdit,
          recordDataAdd: null,
          editedData: null,
        })
      );
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

  const columnsToRender = getColumnsToRender(columns, dataToTable, handleModal);

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
          data={data}
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
