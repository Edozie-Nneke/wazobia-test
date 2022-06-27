import app from './css/app.module.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import CreateAccount from './pages/CreateAccount';
import Login from './pages/Login';
import VerifyEmail from './pages/VerifyEmail';

export default function App() {
  return (
    <div className={app.app}>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/create-account' element={<CreateAccount />} />
        <Route path='/login' element={<Login />} />
        <Route path='/verify-email' element={<VerifyEmail />} />
      </Routes>
    </div>
  );
}
