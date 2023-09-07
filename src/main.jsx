import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import './styles.css';
import Descripcion from './components/Descripcion';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route>
      <Route path="/" element={<Layout />}></Route>
      <Route path=":id" element={<Descripcion />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
