import Header from "./components/header"
import About from "./components/About"
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {


  return (
    <>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={  <Header/>} />
        <Route path="/:about" element={<About/>} />
        
      </Routes>
    </BrowserRouter>


    </>
  )
}

export default App
