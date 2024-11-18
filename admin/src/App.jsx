import { useContext } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import DashBoard from './pages/Admin/DashBoard.jsx';
import UserManagement from './pages/Admin/UserManagement.jsx';
import AddItems from './pages/Admin/AddItems.jsx';
import Navbar from './components/Navbar.jsx';
import Login from './pages/Login.jsx';
import Sidebar from './components/Sidebar.jsx';
import AllItems from './pages/Admin/AllItems.jsx';

function App() {
  return (
    <div className="bg-[#F8F9FD]">
      <ToastContainer />
      <Navbar />
      <div className="flex items-start">
        <Sidebar />
        <div className="flex-grow ml-60">
          <Routes>
            {/* Admin Routes */}
            <Route path="/admin-dashboard" element={<DashBoard />} />
            <Route path="/user-management" element={<UserManagement />} />
            <Route path="/add-items" element={<AddItems />} />
            <Route path="/all-items" element={<AllItems />} />
            {/* Add any other routes you need here */}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
