import React from 'react';
import ChatPreview from '../components/ChatPreview';

const Home = () => {
  const handleClick = () => {
    console.log('Chat window clicked');
  };

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      <ChatPreview
        title="Chat 1"
        content="This is a preview of the chat content."
        onClick={handleClick}
      />
      {/* Add more ChatWindow components as needed */}
    </div>
  );
};

export default Home;
