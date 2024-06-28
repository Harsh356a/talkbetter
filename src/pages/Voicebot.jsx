import React, { useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";

const Voicebot = () => {
  const [text, setText] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const recognitionRef = useRef(null);
  const socket = useRef(null);
  const audioContextRef = useRef(null);
  const audioBufferQueue = useRef([]);
  const isPlayingRef = useRef(false);
  const sourceNodeRef = useRef(null);

  useEffect(() => {
    let apikey = localStorage.getItem("APIKEY");
    socket.current = io("https://voicebots.trainright.fit");

    socket.current.on("connect", () => {
      setIsConnected(true);
    });

    socket.current.on("connected", () => {
      socket.current.emit("apiKey", apikey);
    });

    socket.current.on("disconnect", () => {
      setIsConnected(false);
    });

    socket.current.on("audio-chunk", async (chunk) => {
      try {
        setText(chunk);
        setIsLoading(false);
      } catch (error) {
        console.error("Error decoding audio data:", error);
      }
    });

    return () => {
      socket.current.disconnect();
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  const playAudioQueue = async () => {
    if (audioBufferQueue.current.length > 0) {
      setIsLoading(false);
      isPlayingRef.current = true;
      const audioBuffer = audioBufferQueue.current.shift();
      const sourceNode = audioContextRef.current.createBufferSource();
      sourceNode.buffer = audioBuffer;
      sourceNode.connect(audioContextRef.current.destination);
      sourceNode.onended = () => {
        playAudioQueue();
      };
      sourceNode.start();
      sourceNodeRef.current = sourceNode;
    } else {
      isPlayingRef.current = false;
    }
  };

  const stopPlaybackAndClearQueue = () => {
    if (sourceNodeRef.current) {
      sourceNodeRef.current.stop();
    }
    audioBufferQueue.current = [];
    isPlayingRef.current = false;
    setIsLoading(false);
  };

  const handleSpeech = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert(
        "Your browser does not support speech recognition. Please use Chrome."
      );
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
      stopPlaybackAndClearQueue();
      return;
    }

    if (isPlayingRef.current) {
      stopPlaybackAndClearQueue();
    }

    const recognition = new window.webkitSpeechRecognition();
    recognitionRef.current = recognition;
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onstart = () => {
      console.log("Speech recognition started");
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error", event);
      alert(`Speech recognition error: ${event.error}`);
      setIsListening(false);
    };

    recognition.onend = () => {
      console.log("Speech recognition ended");
      setIsListening(false);
      setIsLoading(true);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setText(transcript);
      console.log("Speech recognition result:", transcript);
      socket.current.emit("message", transcript);
    };

    recognition.start();
    setIsListening(true);
  };

  return (
    <div>
      <h1 style={{ fontSize: "20px" }}>Voice Assistant Application</h1>
      <div style={{ position: "fixed", top: "500px", right: "650px" }}>
        <div className="check">
          <h2>{text}</h2>
        </div>
        <button
          onClick={handleSpeech}
          disabled={isLoading}
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            backgroundColor: isListening
              ? "#FF5733"
              : isLoading
              ? "#FCA321"
              : "#4CAF50",
            color: "white",
            border: "none",
            fontSize: "16px",
            cursor: isLoading ? "not-allowed" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {isListening ? (
            "Stop"
          ) : isLoading ? (
            <div className="linear-spinner"></div>
          ) : (
            "Speak"
          )}
        </button>
      </div>
      <style>
        {`
        .linear-spinner {
          position: absolute;
          width: 100%;
          height: 4px;
          background: white;
          animation: load 1s linear infinite;
        }

        @keyframes load {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}
      </style>
    </div>
  );
};

export default Voicebot;
