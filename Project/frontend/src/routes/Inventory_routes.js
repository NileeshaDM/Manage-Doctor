import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Inventory_home from "../pages/inventory_mgt/Inventory_home"

export default function Inventory_routes() {
  return (
    <Routes>
    <Route  path="/inventory_home" element={<Inventory_home/>}/>
    </Routes>
  )
}
