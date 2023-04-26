import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Fitness_home from '../pages/fitness_pages/Fitness_home';

export default function Fitness_routes() {
  return (
    <Routes>
    <Route  path="/fitness_home" element={<Fitness_home/>}/>
    </Routes>
  )
}
