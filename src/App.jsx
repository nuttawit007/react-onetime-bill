import './App.css'
import { useState } from 'react';

import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar'
import MenuList from './components/MenuList/MenuList'
import PeopleList from './components/PeopleList/PeopleList'


function App() {
  const [menuListData, setMenuListData] = useState({
    basePeople: [],
    menuItems: []
  });

  return (
    <>
      <BrowserRouter>
        {/* Navigation */}
        <Navbar/>

        {/* Routes */}
        <Routes>
          {/* เข้า / redirect ไป /menu */}
          <Route path="/" element={<Navigate to="/menu" replace />} />

          <Route path="/menu" element={<MenuList value={menuListData} onChange={setMenuListData} />} />
          <Route path="/people" element={<PeopleList/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
