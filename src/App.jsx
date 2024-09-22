import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Main from './components/main.jsx';



function App() {
  return (
    <Router>
      <Routes>
        {/* Define your routes here, for example: */}
        <Route path="./" element={<Main />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}



export default App;
