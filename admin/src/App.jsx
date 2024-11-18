import { useContext } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import DashBoard from './pages/Admin/DashBoard.jsx';
import UserManagement from './pages/Admin/UserManagement.jsx';
import AddItems from './pages/Admin/AddItems.jsx';
import AllItems from './pages/Admin/AllItems.jsx';
import ParticularItem from './pages/ParticularItem.jsx';
import Login from './pages/Login.jsx';
import { AdminContext } from './context/AdminContext';

function App() {
  const { aToken } = useContext(AdminContext);

  return aToken ? (
    <div className="bg-[#F8F9FD]">
      <ToastContainer />
      <Navbar />
      <div className="flex items-start">
        <Sidebar />
        <div className="flex-grow">
          <Routes>
            {/* Admin Routes */}
            <Route path="/admin-dashboard" element={<DashBoard />} />
            <Route path="/user-management" element={<UserManagement />} />
            <Route path="/add-items" element={<AddItems />} />
            <Route path="/all-items" element={<AllItems />} />
            <Route path="/all-items/:id" element={<ParticularItem />} />
          </Routes>
        </div>
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  );
}

export default App;
