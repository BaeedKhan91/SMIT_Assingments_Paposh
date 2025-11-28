import React from 'react'

function Followers() {
  return (
 <div className="flex justify-center gap-16 mt-4">
          <div>
            <p className="text-xl font-bold">20,160</p>
            <p className="text-gray-600 text-sm">Follower</p>
          </div>
          <div>
            <p className="text-xl font-bold">478,888</p>
            <p className="text-gray-600 text-sm">Following</p>
          </div>
        </div>
  )
}

export default Followers