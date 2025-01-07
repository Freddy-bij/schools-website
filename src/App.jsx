import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./Pages/Home"
import CountriesUn from "./Pages/CountriesUn"
import Section from "./Components/Section"



const App = () => {
  return (
    <>
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/countries" element={<CountriesUn/>}/>
       </Routes>
       <Section />
       </BrowserRouter>
      
      </>
   
  )
}

export default App
