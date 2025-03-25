import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Registration from './Register';
import TDClassSummary from './TDClassSummary';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration/>} />
        <Route path="/teacher-dashboard-class-summary" element={<TDClassSummary/>} />
      </Routes>
    </Router>
  );
}

export default App;
