import React from 'react'

const UserMsg = ({msg}) => {
  return (
    <div className="flex justify-end">
      <div className="bg-green-500 text-white px-4 py-3 rounded-2xl rounded-tr-sm max-w-[75%]">
        <p className="text-sm">{msg}</p>
      </div>
    </div>
  );
}

export default UserMsg