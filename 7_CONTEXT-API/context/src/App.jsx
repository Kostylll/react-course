import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Page1Component from './components/Page1Component'
import Page2Component from './components/Page2Component'
import Page3Component from './components/Page3Component'
 
 
function App() {

  return (
    <>
     <div>
        <BrowserRouter>
        <NavBar/>
          <Routes>
          <Route path='/page1' element={<Page1Component/>}></Route>
          <Route path='/page2' element={<Page2Component/>}></Route>
          <Route path='/page3' element={<Page3Component/>}></Route>
          </Routes> 
        </BrowserRouter>
     </div>
    </>
  )
}

export default App
