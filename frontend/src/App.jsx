
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Error404 from './pages/Error404'
import Recetas from './pages/Recetas'
import RecetaUnitaria from './pages/RecetaUnitaria'
import Login from './pages/Login'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='*' element={<Error404/>}/>
      <Route path='/recetas' element={<Recetas/>}/>
      <Route path="/recetas/:id" element={<RecetaUnitaria/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    
  )
}

export default App
