import './App.css';
import { BrowserRouter, Routes, Route , link} from 'react-router-dom';
import { Home } from './component/Home';
import { Add_ex } from './component/Add_ex';
import { Edit_ex } from './component/Edit_ex';
import { GlobalProvider } from './context/GlobalContext'

function App() {

  return (
    <div className="App">
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element = {<Home/>}/>
          <Route path="/add" element = {<Add_ex/>}/>
          <Route path="/edit/:id" element = {<Edit_ex/>}/>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
    </div>
  );
}

export default App;
