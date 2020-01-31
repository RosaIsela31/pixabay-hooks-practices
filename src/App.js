import React from 'react';
import Container from './components/Container';
import { BrowserRouter, Route } from "react-router-dom";

 
function App() {
  return (
    <BrowserRouter>
      <Route path='/' component={Container} />
    </BrowserRouter>
  );
}

export default App;
