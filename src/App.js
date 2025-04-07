
import './App.css';
import { MainSection } from './components/mainsection/MainSection';
import { TechProjects } from './components/techprojects/TechProjects';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <>
        <Router basename="/MyPortfolioReact"> 
          <Routes>
            <Route path='/' element={<MainSection />}></Route>
            <Route path='/projects-technology/:id' element={<TechProjects />}></Route>
          </Routes>
        </Router>
    
      </>
  );
}

export default App;
