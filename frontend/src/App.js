import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import NavMenu from "./nav/NavMenu";
import ItemList from "./itemList/ItemList";
import axios from "axios";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./App.scss";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orgData: null,
      data: null,
      materials: [],
      selectedMaterial: '',
      total: 0
    };
  }
  componentDidMount() {
    axios.get("http://localhost:8000/api/robots").then((res) => {
      // console.log(res);
      if(res.data.data){
        const tempMaterials = [];
        res.data.data.forEach(element => {
          if(tempMaterials.indexOf(element.material) === -1){
            tempMaterials.push(element.material)
          }
        });
        this.setState({ orgData: res.data.data, data: res.data.data, materials: tempMaterials, total: res.data.data.length });
      }
    });
  }
  handleChange = (event) => {
    if(event.target.value){
      const filterData = this.state.orgData.filter(v=> v.material === event.target.value);
      this.setState({data: filterData, selectedMaterial: event.target.value, total:filterData.length})
    }
  };
  render() {
    return (
      <div className="App">
        <NavMenu />
        <Container maxWidth="lg">
        <div className="filter">
          <FormControl fullWidth className="form">
            <InputLabel id="simple-select-label">Material</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="simple-select"
              value={this.state.selectedMaterial}
              label="Material"
              onChange={this.handleChange}
            >
              {this.state.materials && this.state.materials.map((item, index)=>
                <MenuItem value={item} key={index}>{item}</MenuItem>
              )}
            </Select>
          </FormControl>
          <div className="total">Total: {this.state.total} </div>
        </div>
          <ItemList data={this.state.data} />
        </Container>
      </div>
    );
  }
}
