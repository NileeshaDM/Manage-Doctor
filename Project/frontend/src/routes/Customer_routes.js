import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Customer_home from '../pages/customer_pages/Customer_home';

export default function Customer_routes() {
  return (
    <Routes>
    <Route  path="/customer_home" element={<Customer_home/>}/>
    </Routes>
  )
}
