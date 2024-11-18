import { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AdminContext = createContext();

const AdminContextProvider = ({ children }) => {
  const [aToken, setAToken] = useState(localStorage.getItem("aToken") || "");
  const [bikes, setBikes] = useState([]);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  // Fetch all bikes
  const getAllBikes = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/admin/all-bikes`, {
        headers: {
          Authorization: `Bearer ${aToken}`,
        },
      });
      if (response.data.success) {
        setBikes(response.data.bikes);
      } else {
        toast.error(response.data.message || "Failed to fetch bikes");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Add a new bike
  const addBike = async (bikeData) => {
    try {
      const { data } = await axios.post(`${backendUrl}/api/admin/add-bike`, bikeData, {
        headers: {
          Authorization: `Bearer ${aToken}`,
        },
      });
      if (data.success) {
        toast.success(data.message);
        getAllBikes();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Delete a bike
  const deleteBike = async (bikeId) => {
    try {
      const { data } = await axios.delete(`${backendUrl}/api/admin/delete-bike/${bikeId}`, {
        headers: {
          Authorization: `Bearer ${aToken}`,
        },
      });
      if (data.success) {
        toast.success(data.message);
        getAllBikes();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const value = {
    aToken,
    setAToken,
    bikes,
    getAllBikes,
    addBike,
    deleteBike,
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
