'use client'

import { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const { aToken, setAToken } = useContext(AdminContext)

    const logout = () => {
        if (aToken) {
            setAToken('')
            localStorage.removeItem('aToken')
        }
    }

    return (
        <nav className="bg-gradient-to-r from-purple-300 to-indigo-400 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link to={'/admin-dashboard'}>
                        <img 
                            className="h-12 w-12 rounded-full border-2 border-white shadow-md transition-transform duration-300 hover:scale-110" 
                            src={assets.Logo}
                            alt="Logo" 
                        />
                        </Link>
                        <span className="ml-3 text-gray-600 font-semibold text-lg">Bikers Portal</span>
                        {aToken && (
                            <span className="ml-3 px-3 py-1 text-xs font-medium bg-indigo-800 text-white rounded-full shadow-inner">
                                Admin
                            </span>
                        )}
                    </div>
                    <div className="flex items-center">
                        <button 
                            onClick={logout}
                            className="bg-white text-indigo-600 px-4 py-2 rounded-full text-sm font-medium shadow-md transition-all duration-300 hover:bg-indigo-100 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar