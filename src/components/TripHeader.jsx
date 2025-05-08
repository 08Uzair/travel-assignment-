import React from 'react'

const TripHeader = ({ userName = "Chhavi" }) => {
  return (
    <div className="flex justify-between items-center px-4 py-3">
    <div>
      <h2 className="text-white font-semibold text-lg">Hello {userName}!</h2>
      <p className="text-sm text-gray-400">Ready for the trip?</p>
    </div>
    <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
      C
    </div>
  </div>
  )
}

export default TripHeader