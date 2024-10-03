import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import About from './components/About.jsx'
import NavigationContent from './components/NavigationContent.jsx'
import NavigationBar from './components/NavigationBar.jsx'
import './assets/index.css'



createRoot(document.getElementById('navigation-content')).render(
  <StrictMode>
    <NavigationContent/>
  </StrictMode>,
)

createRoot(document.getElementById('navigation-bar')).render(
  <StrictMode>
    <NavigationBar/>
  </StrictMode>,
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

createRoot(document.getElementById('about')).render(
  <StrictMode>
    <About/>
  </StrictMode>,
)
