import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { alpha, styled } from "@mui/material/styles";
import * as React from "react";
import Icon from "../Icon/Icon";
import {
  DropdownButtonWrapper,
  DropdownCaption,
} from "./DropdownUserMenu.styled";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "var(--accent-yellow-100"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="text"
        disableElevation
        onClick={handleClick}
        sx={{
          borderRadius: "50%",
          padding: 0,
          minWidth: 24,
          height: 24,
          placeSelf:"center",
        }}
      >
        <Icon width={24} height={24} iconId={"arrow-down"} />
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={handleClose}
          disableRipple
          sx={{ "&:hover": { backgroundColor: "var(--accent-yellow-200)" } }} // Цвет фона при наведении
        >
          <DropdownButtonWrapper>
            <Icon
              width={24}
              height={24}
              iconId={"setting"}
              styles={{ fill: "var(--accent-green-300)" }}
            />
            <DropdownCaption>Налаштування</DropdownCaption>
          </DropdownButtonWrapper>
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          disableRipple
          sx={{ "&:hover": { backgroundColor: "var(--accent-yellow-200)" } }} // Цвет фона при наведении
        >
          <DropdownButtonWrapper>
            <Icon
              width={24}
              height={24}
              iconId={"icon-Icon-Person"}
              styles={{ fill: "var(--accent-green-300)" }}
            />
            <DropdownCaption>Мій профіль</DropdownCaption>
          </DropdownButtonWrapper>
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem
          onClick={handleClose}
          disableRipple
          sx={{ "&:hover": { backgroundColor: "var(--accent-yellow-200)" } }} // Цвет фона при наведении
        >
          <DropdownButtonWrapper>
            <Icon
              width={24}
              height={24}
              iconId={"exit"}
              styles={{ fill: "var(--delete-red)" }}
            />
            <DropdownCaption>Вихід</DropdownCaption>
          </DropdownButtonWrapper>
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
