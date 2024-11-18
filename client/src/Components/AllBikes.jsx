import React, { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { portal_list, specialityData } from "../assets/assets"

export default function AllItems() {
  const { category } = useParams()
  const navigate = useNavigate()
  const [filterItems, setFilterItems] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(category || "")

  const applyFilter = (selectedCategory) => {
    if (selectedCategory) {
      setFilterItems(portal_list.filter((item) => item.category.toLowerCase() === selectedCategory.toLowerCase()))
    } else {
      setFilterItems(portal_list)
    }
  }

  useEffect(() => {
    setSelectedCategory(category || "")
    applyFilter(category)
  }, [category])

  const handleCategoryClick = (speciality) => {
    setSelectedCategory(speciality)
    applyFilter(speciality)
    navigate(`/all-bikes/${speciality}`)
  }

  const handleAllBikesClick = () => {
    setSelectedCategory("")
    applyFilter("")
    navigate("/all-bikes") 
  }

  const renderItemDetails = (item) => {
    const commonDetails = (
      <>
        <h2 className="text-xl font-semibold mb-2 text-gray-700">{item[`${item.category.toLowerCase()}_name`]}</h2>
        <p className="text-gray-500 text-sm mb-4">{item.description}</p>
        <div className="flex justify-between items-center text-sm mt-3">
          <span className="text-blue-700 font-bold text-sm"><span className="text-gray-600">price:</span> ₹{item[`${item.category.toLowerCase()}_price`]}</span>
          {item.bike_mileage && <span className="text-green-600"><span className="text-gray-600">mileage:</span> {item.bike_mileage} </span>}
        </div>
      </>
    )

    return commonDetails
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 lg:ml-20 text-gray-500">Browse Your Collection</h1>
      <p className="text-gray-600 font-medium mb-6 lg:ml-20 font-sans text-sm ">Explore our wide range of products  across different categories.</p>

      <div className="flex flex-col sm:flex-row items-start gap-6">
        <div className="w-full sm:w-1/4">
          <div className="space-y-2 lg:w-[70%] justify-center lg:ml-20">
            {/* Button to show All Bikes */}
            <button
              className={`w-full justify-start border border-gray-300 p-2 mb-2 text-sm rounded-md ${
                selectedCategory === "" ? "bg-blue-600 text-white first-letter:capitalize" : "bg-white text-gray-700 first-letter:capitalize"
              }`}
              onClick={handleAllBikesClick}
            >
              All Collections
            </button>

            {/* Buttons for each category */}
            {specialityData.map((item) => (
              <button
                key={item.speciality}
                className={`w-full justify-start border border-gray-300 p-2 mb-2 text-sm rounded-md ${
                  selectedCategory === item.speciality
                    ? "bg-blue-600 text-white first-letter:capitalize"
                    : "bg-white text-gray-700 first-letter:capitalize"
                }`}
                onClick={() => handleCategoryClick(item.speciality)}
              >
                {item.speciality.split(" ").map((word, index, arr) => {
                  if (index === arr.length - 1) {
                    return `${word}s`;
                  }
                  return word;
                }).join(" ")}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full sm:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterItems.map((item) => (
              <div
                key={item._id}
                onClick={() => {
                  navigate(`/item-details/${item._id}`)
                  window.scrollTo(0, 0)
                }}
                className="border border-gray-200 rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                <img
                  src={item[`${item.category.toLowerCase()}_image`]}
                  alt={item[`${item.category.toLowerCase()}_name`]}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">{renderItemDetails(item)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
