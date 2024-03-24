import { Button } from "@mui/material";

const CommonButton = ({ children, buttonType }) => {
  return (
    <Button
      variant="contained"
      disableElevation
      sx={{
        display: "inline-flex",
        justifyContent: "center",
        padding: "16px 24px",
        alignItems: "center",
        gap: 20,

        width: "fit-content",
        margin: "0 auto",

        backgroundColor: "var(--accent-yellow-200)",
        color: "var(--basic-black)",

        fontFamily: "Montserrat",
        fonSize: 20,
        fontWeight: 500,
        lineHeight: "150%",

        borderRadius: "8px",
        border: "1px solid var(--accent-green-300)",
        background: "var(--accent-yellow-200)",
        "&:hover": {
          backgroundColor: "var(--accent-yellow-100)",
        },
        "& .MuiTouchRipple-root": {
          color: "var(--logo-yellow-400)",
        },
      }}
      type={buttonType}
    >
      {children}
    </Button>
  );
};

export default CommonButton;
