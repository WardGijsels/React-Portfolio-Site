import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {NextUIProvider} from '@nextui-org/react'
import {BrowserRouter} from 'react-router-dom'
import Routing from './components/navigation/Routing.tsx'
import CustomNavBar from './components/navigation/CustomNavbar.tsx'
import Footer from './components/footer/Footer.tsx'
import {LanguageProvider} from './components/languageContext/LanguageContext.tsx'

createRoot(document.getElementById('root')!).render(
  <NextUIProvider>
    <StrictMode>
      <LanguageProvider>
        <BrowserRouter>
          <CustomNavBar />
          <Routing />
          <Footer />
        </BrowserRouter>
      </LanguageProvider>
    </StrictMode>
  </NextUIProvider>,
)
