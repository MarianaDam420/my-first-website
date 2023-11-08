import{BrowserRouter, Routes, Route} from 'react-router-dom'
import{Home, About, Contact } from './pages';
function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path='/' element = {<About/>}/>
        <Route path='/' element = {<Contact/>}/>
        <Route path="*" element = {<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
