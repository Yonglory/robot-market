import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import "./ItemList.scss";
import moment from 'moment';
import IconButton from "@mui/material/IconButton";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function ItemList(props) {
  return (
    <Grid container spacing={2} className="itemList">
      {props.data && props.data.map((item, index )=>
        <Grid item xs={12} lg={3} key={index}>
          <Item elevation={1}>
            <img src={item.image} alt={item.name}/>
            <div className="content">
              <div className="desc">
                <h4 className="title">{item.name}</h4>
                <h5 className="price">฿{item.price}</h5>
                <h5>Date: {moment(item.createdAt).format('DD-MM-YYYY')} </h5>
                <h5>Material: {item.material}</h5>
                <h5 className="stock">Stock: {item.stock}</h5>
              </div>
              <IconButton className="addCart" size="large" aria-label="show items" color="inherit">
                <AddOutlinedIcon />
            </IconButton>
            </div>
          </Item>
        </Grid>
      )}
    </Grid>
  );
}
