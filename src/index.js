import React from "react"
import TodoContainer from "./functionBased/components/TodoContainer"
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom"
import "./functionBased/App.css"
const root = createRoot(document.getElementById('root'));
//component file
root.render(
  <React.StrictMode>
    <Router>
      <TodoContainer />
    </Router>
  </React.StrictMode>
);