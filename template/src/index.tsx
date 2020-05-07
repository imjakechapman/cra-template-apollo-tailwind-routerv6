import React from "react";
import ReactDOM from "react-dom";

// Styles
import "./styles/main.css";

import { App } from "./App";

const MOUNT_NODE = document.getElementById("root");

ReactDOM.render(<App />, MOUNT_NODE);
