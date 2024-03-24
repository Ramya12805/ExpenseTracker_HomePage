import React, { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import {Box,Drawer,ListItem,ListItemButton,ListItemIcon,ListItemText,List,Divider} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";   

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
      {
        text: "Home",
        link:"#home",
      },
      {
        text: "About",
        link:"#about",
      },
      {
        text: "User Guide",
        link: "/#testimonials",
      },
      {
        text: "Feedback",
        link: "/#contact",
      },
    ];
    return (
      <nav>
        <div className="nav-logo-container">
          { }
        </div>
        <div className="navbar-links-container">
          <a href="/">Home</a>
          <a href="About.js">About</a>
          <a href="/">User Guide</a>
          <a href="#contact">Feedback</a>
          <a href="">FAQ's</a>
          
          <button className="primary-button">Login</button>
        </div>
        
        <div className="navbar-menu-container">
          <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </div>
        <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}
          >
            <List>
              {menuOptions.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
          </Box>
        </Drawer>
      </nav>
    );
  };
  
  export default Navbar;