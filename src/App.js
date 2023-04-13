import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './Pages/Home/Main/Main';
import About from './Pages/About/About';
import ContactUs from './Pages/ContactUs/ContactUs';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Main />}>
        </Route>
        <Route path='/about' element={<About />}>
        </Route>
        <Route path='/contact' element={<ContactUs />}>
        </Route>
      </Routes>
    </>
  );
}

export default App;
