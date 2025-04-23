import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Product from './components/Product'

function App() {


  return (
    <>
    <div>
      <h1>React Router</h1>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/products/:id' element={<Product/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
