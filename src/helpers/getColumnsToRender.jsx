import { IconButton, Tooltip } from "@mui/material";
import { LinkWrapper, TableLink } from "../components/Table/Table.styled";
import Icon from "../components/Icon/Icon";
import { useLocation } from "react-router-dom";

const GetColumnsToRender = (columns, data, handleModal) => {
  const location = useLocation();

  const getColumnWidth = () => {
    if (location.pathname === "/specialties") {
      return "550px";
    } else if (location.pathname === "/education-levels") {
      return "100%";
    }
  };

  const columnsToRender = columns.map((column) => {
    if (
      column.includes("Посилання") ||
      // column.includes("Сайт") ||
      column.includes("Блок")
    ) {
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
          customBodyRender: (value) =>
            value && (
              <LinkWrapper>
                <TableLink href={value} target="_blank">
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
            return { align: "center", padding: "none" };
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

    if (column.includes("Абревіатура")) {
      return {
        name: column,
        label: column,
        options: {
          setCellHeaderProps: () => {
            return { align: "left", width: "220px" };
          },
          setCellProps: () => {
            return { align: "left", width: "220px" };
          },
        },
      };
    }

    if (column.includes("Сайт")) {
      return {
        name: column,
        label: column,
        options: {
          setCellHeaderProps: () => {
            return { align: "left", width: "212px" };
          },
          setCellProps: () => {
            return { align: "left", width: "212px" };
          },
        },
      };
    }

    if (column.includes("Перелік програм")) {
      return {
        name: column,
        label: column,
        options: {
          setCellHeaderProps: () => {
            return { align: "left", width: "212px" };
          },
          setCellProps: () => {
            return { align: "left", width: "212px" };
          },
        },
      };
    }

    if (column.includes("Назва")) {
      return {
        name: column,
        label: column,
        options: {
          setCellHeaderProps: () => {
            return { align: "center", width: getColumnWidth() };
          },
          setCellProps: () => {
            return { align: "left", width: getColumnWidth() };
          },
          filterType: "multiselect",
        },
      };
    }

    if (column.includes("Стандарт")) {
      return {
        name: column,
        label: column,
        options: {
          setCellHeaderProps: () => {
            return { align: "center", width: "440px" };
          },
          setCellProps: () => {
            return { align: "left", width: "440px" };
          },
          filterType: "multiselect",
        },
      };
    }

    if (column.includes("Код")) {
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

    if (column.includes("Рівень")) {
      return {
        name: column,
        label: column,
        options: {
          setCellHeaderProps: () => {
            return { align: "left", width: "30px" };
          },
          setCellProps: () => {
            return { align: "left", width: "30px" };
          },
          filterType: "multiselect",
        },
      };
    }

    if (column.includes("№")) {
      return {
        name: column,
        label: column,
        options: {
          setCellHeaderProps: () => {
            return { width: "30px" };
          },
          filterType: "multiselect",
        },
      };
    }

    if (column.includes("Дія")) {
      const actionStyles = {
        existingStyles: {
          align: "right",
          width: "120px",
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
            return {
              style: actionStyles.noWrapCell,
            };
          },
          setCellProps: () => {
            return {
              style: actionStyles.noWrapCell,
            };
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

  return columnsToRender;
};
export default GetColumnsToRender;
