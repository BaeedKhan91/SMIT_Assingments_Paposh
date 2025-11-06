import React from 'react'

function Popup({newTodo , handleInput , setShowPopup , handleApply , editedId}) {
  return (
              <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-10">
            <div className="bg-white p-7 shadow-lg w-[500px] rounded-2xl">
              <h2 className="text-lg font-semibold mb-3 text-center">
                Add New Todo
              </h2>

              <input
                type="text"
                placeholder="Enter todo..."
                value={newTodo}
                onChange={handleInput}
                className="border w-full p-2 mb-3 rounded outline-none"
              />

              <div className="flex justify-between mt-5">
                <button
                  onClick={() => setShowPopup(false)}
                  className="bg-white text-[#6c63ff] px-[22px] py-[8px] rounded border border-[#6c63ff]"
                >
                  Cancel
                </button>
                <button
                  onClick={handleApply}
                  className="bg-[#6c63ff] text-white px-[22px] py-[8px] rounded"
                >
                  {editedId ? "Edit" : "Apply"}
                </button>
              </div>
            </div>
          </div>
  )
}

export default Popup