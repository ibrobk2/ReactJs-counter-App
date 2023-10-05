import React from "react";
import ReactDOM from 'react-dom';
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./components/counter";

// const element = <h2>Welcome to ReactJS Course</h2>

ReactDOM.render(<Counter />, document.getElementById("root"));