import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Nutrition_home from '../pages/nutrition_pages/Nutrition_home';

export default function Nutrition_routes() {
  return (
    <Routes>
    <Route  path="/nutrition_home" element={<Nutrition_home/>}/>
    </Routes>
  )
}
