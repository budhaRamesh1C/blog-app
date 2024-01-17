import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'

import Signup from './pages/Signup'
import Signin from './pages/Signin'
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/sign-in' element={<Signin/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App