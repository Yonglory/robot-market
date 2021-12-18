import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import "./NavMenu.scss";
export default function NavMenu() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Robot Market
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box className="box">
            <IconButton size="large" aria-label="show items" color="inherit">
              <Badge badgeContent={17} color="error">
                <LocalGroceryStoreIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
