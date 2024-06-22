import { BrowserRouter, Routes, Route } from "react-router-dom"
//pages
import Home from "./pages/Home/Home";
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Projects from './pages/Projects/Projects'
import Page404 from "./pages/Page404/Page404";
import PageBase from './pages/PaseBase/PageBase'

const AppRoutes = () => {
  return (
    <BrowserRouter>     
        <Routes>      
            <Route path='/' element={<PageBase/>}>
                <Route index element={<Home/>} />
                <Route path='/about' element={< About/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='/Projects' element={<Projects/>} />
                <Route path='*' element={<Page404/>} />
            </Route>
        </Routes>        
    </BrowserRouter>

  )
}

export default AppRoutes;
