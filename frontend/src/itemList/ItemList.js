import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function ItemList(props) {
  console.log(props);
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>xs=8</Item>
      </Grid>
    </Grid>
  );
}
