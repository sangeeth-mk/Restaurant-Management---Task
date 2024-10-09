import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SideBar from './components/SideBar/SideBar'
import CreateOrder from './pages/CreateOrder';
import Order from './pages/order';

function App() {

  return (
    <div className='grid-container'>
      <Header/>
      <SideBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<CreateOrder/>}/>
        <Route path='/order' element={<Order/>}/>
      </Routes>
    </div>
  )
}

export default App
