import './App.css';
import NavBar from './components/NavBar';

import {BrowserRouter} from 'react-router-dom';
import Rotas from './Rotas'
import FooterPage from './components/FooterPage';

function App() {
  return (
    
    <BrowserRouter>
     <header>
        <NavBar/>
     </header>
     <main>
        <Rotas/>
     </main>
     <footer>
       <FooterPage/>
     </footer>
    </BrowserRouter>
  );
}

export default App;
