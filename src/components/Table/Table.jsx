import AddIcon from "@mui/icons-material/Add";
import { Chip, IconButton, MenuItem, Select, Tooltip } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import MUIDataTable, { TableFilterList } from "mui-datatables";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentPage,
  selectOpenModal,
} from "../../redux/selectors/serviceSelectors";
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
import {
  getTableDataThunk,
  serviceInfoThunk,
} from "../../redux/thunk/mainInfoThunks";
import { SIZE } from "../../service/constant";
import { useLocation } from "react-router-dom";
import { selectDictionary } from "../../redux/selectors/mainInfoSelectors";

const Table = ({ view, data, columns }) => {
  const dispatch = useDispatch();
  const modalStatus = useSelector(selectOpenModal);
  const location = useLocation();
  const currentPage = useSelector(selectCurrentPage);
  const serviceInfo = useSelector(selectDictionary);

  let dataArray = [];

  const [page, setPage] = useState(1);

  data.content?.map((el) => dataArray.push(Object.values(el)));

  const handleChange = (e) => {
    setPage(Number(e.target.value));
  };

  const handleChangePage = (e) => {
    setPage(Number(e.target.textContent));
  };

  const handleModal = (action, recordData) => {
    if (serviceInfo) {
      dispatch(setModalStatus(!modalStatus));
      dispatch(setModalContent({ action, recordData }));
    } else {
      console.log("Сервіс не відповідає. Спробуйте пізніше");
    }
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
    dispatch(
      getTableDataThunk({
        endPoint: `${location.pathname}`,
        getParams: { page: currentPage, size: SIZE },
      })
    );
    if (!serviceInfo) dispatch(serviceInfoThunk());
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
