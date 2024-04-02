import { Button } from "@mui/material";

const CommonButtonLink = ({ children, ...props }) => {
  return (
    <Button
      {...props}
      disableElevation
      sx={{
        width: "150px",
        padding: "10px 24px",
        backgroundColor: "var(--basic-white)",
        color: "var(--basic-black)",
        fontSize: 16,
        lineHeight: "150%",
        borderRadius: "8px",
        border: "1px solid var(--accent-green-300)",
        "&:hover": {
          backgroundColor: "var(--accent-yellow-300)",
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

export default CommonButtonLink;
