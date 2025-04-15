

import Navbar from './components/Navbar';
import TextInput from './components/TextInput';
import Footer from './components/Footer';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>  {/* Ensure Router wraps the entire app */}
      <>
        <Navbar AppName="Text-C" />

        <Routes>

          <Route path='/' element={<TextInput title="Enter The Text" />} />

          <Route path='/about' element={<About />} />

        </Routes>
        <br />
        <br />
        <Footer />
      </>
    </Router>
  );
}

export default App;


