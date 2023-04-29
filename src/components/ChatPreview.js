import React from 'react';

const ChatPreview = ({ title, content, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white border border-gray-300 rounded-md shadow-md w-64 h-48 relative cursor-pointer"
    >
      <div className="bg-gray-300 rounded-t-md px-2 py-1 flex justify-between items-center">
        <div className="flex space-x-1">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-xs text-gray-700">{title}</div>
      </div>
      <div className="text-sm text-gray-800 p-2 overflow-ellipsis overflow-hidden h-36">
        {content}
      </div> 
    </div>
  );
};

export default ChatPreview;
