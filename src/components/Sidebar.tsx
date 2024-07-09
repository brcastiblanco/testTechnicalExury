import { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Box,
  Button,
  Divider,
  Typography,
} from "@mui/material";
import {
  HomeOutlined,
  ArticleOutlined,
  Business,
  TravelExplore,
  CurrencyExchange,
  GroupOutlined,
  ForumOutlined,
  ContactPageOutlined,
  ShoppingCartOutlined,
  Menu,
  FirstPage,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(true);
  const location = useLocation();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const menuItems = [
    { text: "Home", icon: <HomeOutlined />, path: "/" },
    { text: "Discover Us", icon: <TravelExplore />, path: "/discover-us" },
    { text: "How It Works", icon: <CurrencyExchange />, path: "/how-it-works" },
    { text: "Community", icon: <GroupOutlined />, path: "/community" },
    { text: "Blog", icon: <ArticleOutlined />, path: "/blog" },
    { text: "FAQ", icon: <ForumOutlined />, path: "/faq" },
    { text: "Company", icon: <Business />, path: "/company" },
    { text: "Contact", icon: <ContactPageOutlined />, path: "/contact" },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: open ? 270 : 97,
          transition: "width 0.5s ease",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: open ? 270 : 97,
            transition: "width 0.5s ease",
            overflowX: "hidden",
            backgroundColor: "secondary.light",
            boxShadow: 4
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: open ? "end" : "center",
            padding: 1,
            paddingBottom: 0,
          }}
        >
          <IconButton onClick={toggleDrawer}>
            {open ? <FirstPage /> : <Menu />}
          </IconButton>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            paddingTop: 1,
            paddingY: 2,
            paddingX: open ? 2 : 3.5,
          }}
        >
          <Button
            sx={{
              borderRadius: 15,
              minWidth: 0,
              padding: 1.1,
              textTransform: "none",
            }}
            variant="contained"
            color="primary"
            startIcon={
              <ShoppingCartOutlined sx={{ marginRight: open ? 0 : -1.3 }} />
            }
            fullWidth
          >
            <Typography
              sx={{
                display: open ? "block" : "none",
                minWidth: "max-content",
              }}
            >
              Buy Crypto
            </Typography>
          </Button>
        </Box>
        <List>
          {menuItems.map((item, index) => (
            <Box key={item.path}>
              <Box
                sx={{
                  paddingX: 3.2,
                  position: "relative",
                }}
              >
                {location.pathname === item.path && (
                  <Box
                    sx={{
                      borderLeft: 4,
                      borderColor: "primary.main",
                      position: "absolute",
                      height: "100%",
                      left: 16,
                      borderRadius: "0 32px 32px 0",
                    }}
                  />
                )}
                <ListItem
                  component={Link}
                  to={item.path}
                  sx={{
                    borderRadius: 1,
                    paddingY: 1.5,
                    paddingX: 1.2,
                    backgroundColor:
                      location.pathname === item.path ? "white" : "transparent",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 42,
                      color:
                        location.pathname === item.path ? "primary.main" : "secondary.main",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    sx={{
                      margin: 0,
                      color:
                        location.pathname === item.path ? "primary.main" : "secondary.main",
                      opacity: open ? 1 : 0,
                      visibility: open ? "visible" : "hidden",
                      transition: "opacity 0.3s ease, visibility 0.3s ease",
                      minWidth: "max-content",
                    }}
                  />
                </ListItem>
              </Box>
              {index === 0 && <Divider sx={{ marginY: 1, marginX: 5 }} />}
            </Box>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          backgroundColor: "secondary.light",
          transition: "margin-left 0.5s ease",
          padding: 3
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Sidebar;
