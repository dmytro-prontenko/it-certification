import { IconButton, Tooltip } from "@mui/material";
import { LinkWrapper, TableLink } from "../components/Table/Table.styled";
import Icon from "../components/Icon/Icon";

const getColumnsToRender = (columns, data, handleModal) => {
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

    if (column.includes("Назва блоку дисципліни")) {
      return {
        name: column,
        label: column,
        options: {
          setCellHeaderProps: () => {
            return { align: "left", width: "568px" };
          },
          setCellProps: () => {
            return { align: "left", width: "568px" };
          },
          filterType: "multiselect",
        },
      };
    }

    if (column.includes("Опис")) {
      return {
        name: column,
        label: column,
        options: {
          setCellHeaderProps: () => {
            return { align: "left", width: "628px" };
          },
          setCellProps: () => {
            return { align: "left", width: "628px" };
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

  return columnsToRender;
};
export default getColumnsToRender;
