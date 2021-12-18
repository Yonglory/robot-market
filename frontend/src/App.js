import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import NavMenu from "./nav/NavMenu";
import ItemList from "./itemList/ItemList";
import axios from "axios";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  componentDidMount() {
    axios.get("http://localhost:8000/api/robots").then((res) => {
      // console.log(res);
      this.setState({ data: res.data.data });
    });
  }
  render() {
    return (
      <div className="App">
        <NavMenu />
        <Container maxWidth="lg">
          <ItemList data={this.state.data} />
        </Container>
      </div>
    );
  }
}
