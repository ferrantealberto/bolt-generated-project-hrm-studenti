import { Routes, Route } from 'react-router-dom';
import AdminPanel from './components/AdminPanel';
import StudentArea from './components/StudentArea';
import ResultsPage from './components/ResultsPage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/student/:id" element={<StudentArea />} />
      <Route path="/results/:testId" element={<ResultsPage />} />
    </Routes>
  );
}

export default App;
