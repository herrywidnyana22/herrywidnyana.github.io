import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home, About, Services, Portfolio, Contact } from './pages';
import { Title, Menu, Profile, Cuaca } from './components'
import Resume from './pages/Resume/Resume';
import './App.css';
import './mediaquery.css'

function App() {
  return (
    <BrowserRouter>
      <main className='container'>
        <div className="header">
          {/* <Title title = {"Services"}/> */}
          <Menu/>
          {/* <Profile/> */}
        </div>
        <div className="content">
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            {/* <Route path='/about' element={<Resume/>} /> */}
            <Route path='/services' element={<Services/>} />
            <Route path='/porto' element={<Portfolio/>} />
            <Route path='/contact' element={<Contact/>} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  )
}

export default App;
