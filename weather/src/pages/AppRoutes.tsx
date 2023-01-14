import React from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './Home'
import HomeElements from '../components/HomeElements'

type Props = {}

export default function AppRoutes({}: Props) {
  return (
    <>
        
        <Routes>
          <Route path='' element={<Navigate to="/home" />} />
          <Route path='/' element={<Home />}>
            <Route path='/home' element={<HomeElements />} />
            <Route path="*" element={<h1>w</h1>}/>
          </Route>
        </Routes>
    </>
  )
}