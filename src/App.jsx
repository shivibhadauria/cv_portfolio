import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/main';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* Add more routes here if needed */}
      </Routes>
    </Router>
  );
}

export default App;
