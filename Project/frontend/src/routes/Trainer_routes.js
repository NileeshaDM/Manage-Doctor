import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Trainer_home from '../pages/trainer_pages/Trainer_home';

export default function Trainer_routes() {
  return (
    <Routes>
    <Route  path="/trainer_home" element={<Trainer_home/>}/>
    </Routes>
  )
}
