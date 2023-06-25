import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Layout from './components/Layout';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import NewContact from './pages/NewContact';
import Error404 from './pages/Error404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="new-contact" element={<NewContact />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
