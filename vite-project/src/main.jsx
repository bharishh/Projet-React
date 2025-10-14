import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Card from './Components/Card.jsx'
import logo from './assets/montagne.jpg'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Card  title ="Nature " image = {logo}/>
    <Card  image = {logo}/>

  </StrictMode>,
)
