import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Homepage from './components/homepage';



function App() {
  return (
    <Router>
      <Routes>
        {/* Define your routes here, for example: */}
        <Route path="/" element={<Homepage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}



export default App;
