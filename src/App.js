import './App.css';
import { Routes, Route} from 'react-router-dom'
import Testimonials from './components/Testimonials'
import Configurator from './components/Configurator';
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Routes>

        <Route exact path ="/" element={<Testimonials/>}/>
          
        <Route path="/configurator" element={<Configurator/>}/>

        </Routes>

    </div>
  );
}

export default App;
