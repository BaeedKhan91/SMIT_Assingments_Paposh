import React from 'react'

function Profile() {
  return (
     <div className="mt-10 grid grid-cols-2 gap-10">
        <div>
          <h2 className="text-xl font-semibold mb-3">About Me</h2>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            dignissimos in repellendus debitis ipsum!
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Social Media Link</h2>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>• Facebook</li>
            <li>• Instagram</li>
            <li>• Dribbble</li>
            <li>• Behance</li>
          </ul>
        </div>
      </div>
  )
}

export default Profile