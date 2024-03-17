
import './App.css'
import Hero from './componentes/hero/Hero'
import Navber from './componentes/navber/Navber'
import Recipes from './componentes/recipes/Recipes'

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <>
      <Navber></Navber>
      <Hero></Hero>
      <Recipes></Recipes>
      <ToastContainer />
    </>
  )
}

export default App
