import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainLayout from './layouts/MainLayout.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  offset: 200,         
  delay: 300,          
  duration: 800,      
  easing: 'ease-in-out',
  once: false,          
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainLayout />
  </StrictMode>,
)
