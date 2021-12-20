import React , {useEffect, useState} from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { countAdded, countReduced, itemRemove } from '../features/itemsSlice';
import "./NavMenu.scss";

export default function NavMenu() {
  const cartItems = useSelector(state => state.items);
  const [state, setState] = React.useState({
    right: false
  });
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, right: open });
  };
  const increaseItem = (item) => {
    dispatch(countAdded(item.name))
    toggleDrawer(true);
  }
  const reduceItem = (item) => {
    dispatch(countReduced(item.name))
    toggleDrawer(true);

  }
  const removeItem = (item) => {
    dispatch(itemRemove(item.name))   
    toggleDrawer(true);

  }
  const list = () => (
    <Box
      role="presentation"
    >
      <Box className="title">
        <ShoppingBagOutlinedIcon/> 
        <span> {cartItems.length} {cartItems.length <2 ? 'Item': 'Items'} </span>
      </Box>
      <Divider />
        {cartItems && cartItems.map((item, index) => (
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} key={index} className="cartList">
            <ListItem alignItems="flex-start">
              <Box className="action">
                <IconButton onClick={()=>increaseItem(item)} className="add" size="small">
                    <AddOutlinedIcon />
                </IconButton>
                <span> {item.count} </span>
                <IconButton onClick={()=>reduceItem(item)} className="remove" size="small">
                    <RemoveOutlinedIcon />
                </IconButton> 
              </Box>
              <img alt={item.name} src={item.image} />
              <ListItemText
                primary={item.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                    ฿{item.price}
                    </Typography>
                    <IconButton onClick={()=>removeItem(item)} className="delete" size="large">
                      <DeleteForeverOutlinedIcon />
                    </IconButton>
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        ))}
      <Divider />
      <Button className="checkOut" size="large" variant="contained">
        {`Check Out Now (฿${totalPrice})`}
      </Button>
    </Box>
  );

  useEffect(() => {
    const total = cartItems.reduce((a,v) =>  a = a + v.price , 0 )
    setTotalPrice(total);
  }, [cartItems])
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Robot Market
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box className="box">
          <React.Fragment key={'right'}>
            <IconButton onClick={toggleDrawer(true)} size="large" aria-label="show items" color="inherit">
              <Badge badgeContent={cartItems.length} color="error">
                <LocalGroceryStoreIcon />
              </Badge>
            </IconButton>
            <Drawer
            anchor="right"
            open={state.right}
            onClose={toggleDrawer(false)}
            >
             {list('right')}
            </Drawer>
            </React.Fragment>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>  
  );
}
