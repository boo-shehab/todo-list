import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import TodoContainer from './components/TodoContainer';
import './App.css';

const root = createRoot(document.getElementById('root'));
// component file
root.render(
  <React.StrictMode>
    <Router>
      <TodoContainer />
    </Router>
  </React.StrictMode>,
);
