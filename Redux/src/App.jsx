import React from 'react';
import Navbar from './Components/Navbar';
import Form from './Components/Form';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Read from './Components/Read';
import Welcome from './Components/Welcome';
import Update from './Components/Update';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/create" element={<Form />} />
          <Route path='/read' element={<Read/>} />
          <Route exect path='/' element={<Welcome/>} />
          <Route exect path='/edit/:id' element={<Update/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
