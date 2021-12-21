import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import "./ItemList.scss";
import moment from "moment";
import IconButton from "@mui/material/IconButton";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { useDispatch } from "react-redux";
import { itemAdded, itemUpdated, countAdded } from "../features/itemsSlice";
import { getTotalAmt } from "../features/totalAmtSlice";
import { useSelector } from "react-redux";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function ItemList(props) {
  const [data, setData] = useState(null);
  const [roboTypes, setroboTypes] = useState([]);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.items);

  const handleClick = (item) => {
    if (item.stock > 0) {
      setData((prevData) => [...prevData, (item.stock -= 1)]);
      const existingItem = cartItems.find((v) => v.name === item.name);
      if (existingItem) {
        dispatch(
          itemUpdated({
            name: item.name,
            image: item.image,
            price: item.price,
            stocks: item.stock,
          })
        );
      } else {
        dispatch(itemAdded(item.name, item.image, item.price, item.stock));
      }
      dispatch(countAdded(item.name));
      dispatch(getTotalAmt({ price: Number(item.price), sum: true }));
    }
    if (roboTypes.length < 5 && roboTypes.indexOf(item.name) === -1) {
      setroboTypes((prev) => [...prev, item.name]);
    } else if (roboTypes.length === 5) {
      alert("Robort Type is more than 5 now!");
    }
  };

  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  return (
    <Grid container spacing={2} className="itemList">
      {data &&
        data.map((item, index) => (
          <Grid item xs={12} lg={3} key={index}>
            <Item elevation={1}>
              <img src={item.image} alt={item.name} />
              <div className="content">
                <div className="desc">
                  <h4 className="title">{item.name}</h4>
                  <h5 className="price">฿{item.price}</h5>
                  <h5>Date: {moment(item.createdAt).format("DD-MM-YYYY")} </h5>
                  <h5>Material: {item.material}</h5>
                  <h5 className="stock">Stock: {item.stock}</h5>
                </div>
                <IconButton
                  className="addCart"
                  size="large"
                  onClick={() => handleClick(item)}
                  disabled={item.stock === 0}
                  aria-label="show items"
                  color="inherit"
                >
                  <AddOutlinedIcon />
                </IconButton>
              </div>
            </Item>
          </Grid>
        ))}
    </Grid>
  );
}
