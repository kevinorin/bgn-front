import { useContext } from "react";
import ColorModeContext from "../../utils/ColorModeContext";
import { useTheme } from "@mui/material/styles";

import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const ToggleButton = () => {
  const theme = useTheme();
  
  const { darkMode, setDarkMode } = useContext(ColorModeContext);
  console.log('Arun Jha theme.palette.mode', darkMode)
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "end"
      }}
    >
      <Tooltip
        title={`${
          darkMode ? 'Dark Mode' : 'Light Mode'}`}
      >
        <IconButton className='themeButton' onClick={() => setDarkMode(!darkMode)} color="inherit">
          {darkMode ? (
            <Brightness7Icon color="primary" />
          ) : (
            <Brightness4Icon color="primary" />
          )}
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default ToggleButton;
