import {FunctionComponent} from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from '../../pages/home/Home.tsx'
import Ervaring from '../../pages/ervaring/Ervaring.tsx'
import PageNotFound from '../../pages/pageNotFound/PageNotFound.tsx'
import Hobby from '../../pages/hobby/Hobby.tsx'

const Routing: FunctionComponent = () => {
  return (
    <Routes>
      <Route path='/ervaring' element={<Ervaring />} />
      <Route path='/' element={<Home />} />
      <Route path='/hobby' element={<Hobby />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}

export default Routing
