import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import UserPage from './components/UserPage/UserPage';
import UserSearch from './components/UserPage/UserSearch/UserSearch';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<UserSearch />} />
        <Route path="/profile" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
