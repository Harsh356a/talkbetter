import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";

const Chatbot = ({ data }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);

  console.log(data);

  useEffect(() => {
    let apikey = localStorage.getItem("APIKEY");
    const newSocket = socketIOClient("https://voicebots.trainright.fit", {
      transports: ["websocket"],
    });
    setSocket(newSocket);

    // handle incoming messages from the server
    newSocket.on("connected", () => {
      newSocket.emit("apiKey", apikey);
    });

    newSocket.on("audio-chunk", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Cleanup on unmount
    return () => {
      newSocket.disconnect();
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // send a message to the server
    if (socket) {
      socket.emit("message", message);
      setMessage("");
    }
  };

  return (
    <div className="chatbot-container overflow-scroll">
      <h1>Socket.io Chat</h1>
      <form onSubmit={handleSubmit} className="chat-form">
        <input
          type="text"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Type a message..."
          className="chat-input placeholder:text-black text-black"

        />
        <button type="submit" className="chat-button">
          Send
        </button>
      </form>
      <ul className="chat-messages overflow-scroll">
        {messages.map((message, index) => (
          <li key={index} className="chat-message">
            {message}
          </li>
        ))}
      </ul>
      <style>
        {`
          .chatbot-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: fit;
            width:1000px;
            background: linear-gradient(to right, #f8cdda, #1d2b64);
            overflow:scroll;
            color: white;
            font-family: 'Arial', sans-serif;
          }

          .chatbot-container h1 {
            font-size: 2.5rem;
            margin-bottom: 2rem;
          }

          .chat-form {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            max-width: 600px;
            margin-bottom: 2rem;
          }

          .chat-input {
            flex: 1;
            padding: 0.5rem;
            border-radius: 5px;
            border: none;
            margin-right: 0.5rem;
            font-size: 1rem;
          }

          .chat-button {
            padding: 0.5rem 1rem;
            border-radius: 5px;
            border: none;
            background-color: #4CAF50;
            color: white;
            font-size: 1rem;
            cursor: pointer;
            transition: background 0.3s;
          }

          .chat-button:hover {
            background-color: #45a049;
          }

          .chat-messages {
            list-style: none;
            padding: 0;
            width: 80%;
            max-width: 600px;
            max-height: 50vh;
            overflow-y: auto;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            padding: 1rem;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          }

          .chat-message {
            background: rgba(255, 255, 255, 0.2);
            padding: 0.5rem 1rem;
            border-radius: 5px;
            margin-bottom: 0.5rem;
            word-wrap: break-word;
          }
        `}
      </style>
    </div>
  );
};

export default Chatbot;
