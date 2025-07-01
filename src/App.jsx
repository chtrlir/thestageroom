
import { Routes, Route, Outlet } from 'react-router-dom'
import './App.css'
import Header from './component/Header'
import Hero from './component/Hero'
import About from './component/About'
import Login from './component/Login'
import NotFound from './component/NotFound'

function App() {
 

  function MainLayout (){
    return (
      <>
      <Header />
      <Outlet />
      </>
    )
  }

  return (
    <div>
    <Routes>
  <Route path='/' element={<MainLayout />}>
 <Route path='/' element={<Hero />}/>
 <Route path='/about' element={<About />}/>
 <Route path='/login' element={<Login />}/> 
  
 </Route>
 <Route path='*' element={<NotFound />}/> 
   </Routes>
  


    </div>
  )
}

export default App
