import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";

const Chatbot = ({ data }) => {
  const [message, setMessage] = useState("");
  const [messagee, setMessagee] = useState("");
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
      setMessagee("");
      socket.emit("message", message);
      setMessage("");
    }
  };

  return (
    <div>
      <h1>Socket.io Chat</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

export default Chatbot;
