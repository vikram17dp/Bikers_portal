'use client'

import React, { useContext, useState } from "react"
import { AppContext } from "../context/AppContext"
import { toast } from "react-toastify"
import axios from "axios"
import { Camera, Mail, Phone, MapPin, User, Calendar, Loader2 } from 'lucide-react'

export default function ProfilePage() {
  const {
    userData,
    setUserData,
    loadUserProfileData,
    backendUrl,
    token,
  } = useContext(AppContext)
  const [isEdit, setIsEdit] = useState(false)
  const [image, setImage] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const updateUserProfileData = async () => {
    setIsLoading(true)
    try {
      const formData = new FormData()
      formData.append("userId", userData?._id || '')
      formData.append("name", userData?.name || '')
      formData.append("phone", userData?.phone || '')
      formData.append('address', userData?.address || '')
      formData.append('gender', userData?.gender || '')
      formData.append('dob', userData?.dob || '')

      if (image) {
        formData.append('image', image)
      }

      const { data } = await axios.post(`${backendUrl}/api/user/update-profile`, formData, {
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      })

      if (data.success) {
        toast.success(data.message)
        await loadUserProfileData()
        setImage(null)
        setIsEdit(false)
      } else {
        toast.error(data.error)
      }
    } catch (error) {
      console.error(error)
      toast.error(error.response?.data?.message || "Network error")
    } finally {
      setIsLoading(false)
    }
  }

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }

  if (!userData) {
    return <div className="text-center py-10">Loading user data...</div>
  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-2xl rounded-3xl transition-all duration-300 ease-in-out">
      <div className="flex flex-col md:flex-row items-center md:items-start mb-12 space-y-6 md:space-y-0 md:space-x-12">
        <div className="relative group">
          <img
            src={image ? URL.createObjectURL(image) : userData?.image || "/placeholder.svg"}
            alt="Profile"
            className="w-48 h-48 rounded-full object-cover border-4 border-blue-200 transition-all duration-300 ease-in-out group-hover:border-blue-400 shadow-lg"
          />
          {isEdit && (
            <label htmlFor="image-upload" className="absolute bottom-2 right-2 bg-blue-500 text-white p-3 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-600 shadow-md">
              <Camera className="h-6 w-6" />
              <input
                id="image-upload"
                type="file"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          )}
        </div>
        <div className="flex-1 text-center md:text-left">
          {isEdit ? (
            <input
              type="text"
              value={userData.name || ''}
              onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))}
              className="text-4xl font-bold w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
            />
          ) : (
            <h2 className="text-4xl font-bold">{userData.name || 'No Name'}</h2>
          )}
          <p className="text-xl text-gray-600 mt-2">{userData.email || 'No Email'}</p>
        </div>
      </div>

      <div className="space-y-10">
        <div className="bg-gray-50 p-8 rounded-2xl shadow-inner">
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <User className="mr-3 text-blue-500" /> Contact Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Mail className="inline mr-2 text-blue-500" /> Email
              </label>
              <p className="text-lg text-gray-900">{userData.email || 'No Email'}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Phone className="inline mr-2 text-blue-500" /> Phone
              </label>
              {isEdit ? (
                <input
                  type="text"
                  value={userData.phone || ''}
                  onChange={(e) => setUserData(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
                />
              ) : (
                <p className="text-lg text-gray-900">{userData.phone || 'No Phone'}</p>
              )}
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-2xl shadow-inner">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <MapPin className="inline mr-2 text-blue-500" /> Address
          </label>
          {isEdit ? (
            <textarea
              value={userData.address || ''}
              onChange={(e) => setUserData(prev => ({ ...prev, address: e.target.value }))}
              rows={3}
              className="w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
            />
          ) : (
            <p className="text-lg text-gray-900">{userData.address || 'No Address'}</p>
          )}
        </div>

        <div className="bg-gray-50 p-8 rounded-2xl shadow-inner">
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <User className="mr-3 text-blue-500" /> Basic Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
              {isEdit ? (
                <select
                  value={userData.gender || ''}
                  onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))}
                  className="w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              ) : (
                <p className="text-lg text-gray-900">{userData.gender || 'Not Specified'}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="inline mr-2 text-blue-500" /> Date of Birth
              </label>
              {isEdit ? (
                <input
                  type="date"
                  value={userData.dob || ''}
                  onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))}
                  className="w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
                />
              ) : (
                <p className="text-lg text-gray-900">{userData.dob || 'Not Specified'}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-end">
        {isEdit ? (
          <button
            onClick={updateUserProfileData}
            disabled={isLoading}
            className="inline-flex items-center justify-center py-3 px-6 border border-transparent shadow-sm text-lg font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                Saving...
              </>
            ) : (
              'Save Information'
            )}
          </button>
        ) : (
          <button
            onClick={() => setIsEdit(true)}
            className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-lg font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  )
}