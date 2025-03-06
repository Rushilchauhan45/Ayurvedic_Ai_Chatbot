import React from 'react';

const Chatbot = () => {
  return (
    <div className="chatbot-div w-full h-screen">
      <iframe
        id="JotFormIFrame-01955fb99d387e4db0a41e298f5ebe24fade"
        title="Ayurvedic AI Assiatant"
        onLoad={() => window.scrollTo(0, 0)}
        allowTransparency={true}
        allow="geolocation; microphone; camera; fullscreen"
        src="https://agent.jotform.com/01955fb99d387e4db0a41e298f5ebe24fade?embedMode=iframe&background=1&shadow=1"
        frameBorder="0"
        style={{
          width: '100%',
          height: '100vh',
          border: 'none'
        }}
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default Chatbot;