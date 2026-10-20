import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sobre-mi' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/experiencia' element={<Experience />} />
          <Route path='/proyectos' element={<Projects />} />
          <Route path='/contacto' element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
