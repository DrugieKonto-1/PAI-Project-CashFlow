import React, { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { Router } from './components/Router';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
    <Router />
    </>
  );
}

export default App;
