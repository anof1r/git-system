import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import RepoCommits from './components/RepoCommits/RepoCommits';
import UserPage from './components/UserPage/UserPage';
import UserSearch from './components/UserSearch/UserSearch';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<UserSearch />} />
        <Route path="/profile" element={<UserPage />} />
        <Route path="/commits" element={<RepoCommits />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
