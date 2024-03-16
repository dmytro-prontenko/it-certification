import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";

import SpeedDialAction from "@mui/material/SpeedDialAction";
import Telegram from "../Icons/Telegram";
import Viber from "../Icons/Viber";
import Instagram from "../Icons/Instagram";

const actions = [
  { icon: <Telegram />, name: "Telegram" },
  { icon: <Viber />, name: "Viber" },
  { icon: <Instagram />, name: "Instagram" },
];

const SpeedDialSocial = () => {
  return (
    <Box
      sx={{
        height: "auto",
        transform: "translateZ(0px)",
        flexGrow: 1,
      }}
    >
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{
          position: "absolute",
          bottom: 16,
          right: 16,
          "& .MuiButtonBase-root": {
            width: "40px",
            height: "40px",
            backgroundColor: "none",
          },
          "& .MuiSpeedDial-fab ": {
            backgroundColor: "transparent",
            minHeight: "32px",
          },
        }}
        icon={<Telegram />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};

export default SpeedDialSocial;
