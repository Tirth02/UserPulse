import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Users from './pages/Users'
import UserDetails from './pages/UserDetails'
import RandomUser from './pages/RandomUser'
function App() {
  

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Users/>}/>
          <Route path='/users/:id' element={<UserDetails/>}/>
          <Route path='/random' element={<RandomUser/>}/>
          <Route/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
