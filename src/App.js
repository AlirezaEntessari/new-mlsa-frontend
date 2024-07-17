import './App.css';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import MembershipPlanPage from './pages/MembershipPlanPage/MembershipPlanPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/sign-up-page" element={<SignUpPage />} />
        <Route path="/membership-plan-page" element={<MembershipPlanPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
