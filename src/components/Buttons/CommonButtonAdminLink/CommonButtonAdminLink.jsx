import { Button } from "@mui/material";

const CommonButtonAdminLink = ({ children, ...props }) => {
  return (
    <Button
      {...props}
      disableElevation
      sx={{
        padding: "4px 16px",
        backgroundColor: "var(--basic-white)",
        color: "var(--basic-black)",
        lineHeight: "150%",
        borderRadius: "8px",
        border: "1px solid var(--accent-green-300)",
        "&:hover": {
          backgroundColor: "var(--accent-yellow-200)",
          border: "1px solid var(--accent-green-300)",
        },
        "& .MuiTouchRipple-root": {
          color: "var(--link-yellow-500)",
        },
      }}
    >
      {children}
    </Button>
  );
};

export default CommonButtonAdminLink;
