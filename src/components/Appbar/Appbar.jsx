import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import InfoIcon from "@mui/icons-material/Info";
import CableIcon from "@mui/icons-material/Cable";
import { Link } from "react-router-dom";

const Appbar = () => {
  const { collapseSidebar } = useProSidebar();

  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        minHeight: "400px",
        overflow: "hidden",
      }}
    >
      <Sidebar
        style={{
          display: "flex",
          height: "100%",
          marginRight: "20px",
        }}
      >
        <Menu>
          <MenuItem
            onClick={() => collapseSidebar()}
            icon={<SortIcon />}
            style={{
              margin: "10px 0 20px 0",
            }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              ml="15px"
            >
              <Typography
                variant="h5"
                sx={{ fontFamily: "Montserrat", fontWeight: 600 }}
              >
                Spicebox
              </Typography>
            </Box>
          </MenuItem>
          <Box>
            <MenuItem
              component={<Link to="/" className="link" />}
              icon={<RestaurantIcon />}
            >
              Recipes
            </MenuItem>

            <MenuItem
              component={<Link to="/about" className="link" />}
              icon={<InfoIcon />}
            >
              About
            </MenuItem>
            <MenuItem
              component={<Link to="/contact" className="link" />}
              icon={<CableIcon />}
            >
              Contact Us
            </MenuItem>
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default Appbar;
