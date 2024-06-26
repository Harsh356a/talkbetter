import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BlankTemplatePopup = ({ onClose }) => {
  const [name, setName] = useState("");
  const [instruction, setInstruction] = useState("");
  const navigate = useNavigate();

  const handleCreateAssistant = async () => {
    const token = localStorage.getItem("Token");
    if (!token) {
      console.error("No token found");
      return;
    }

    try {
      const response = await axios.post(
        "https://users.trainright.fit/api/configs/createAssistant",
        {
          name: name,
          instructions: instruction,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log("Assistant created successfully:", response.data);
      // Handle success - maybe show a success message to the user
    } catch (error) {
      console.error("Error creating assistant:", error);
      // Handle error - maybe show an error message to the user
    }
  };

  return (
    <div
      role="dialog"
      className="fixed left-[50%] top-[50%] z-50 bg-black flex flex-col text-white w-full max-w-4xl translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background shadow-lg duration-200 animate-in fade-in-0 zoom-in-95 slide-in-from-left-1/2 slide-in-from-top-[48%] sm:rounded-lg sm:max-w-[600px] p-10 space-y-0 max-h-screen overflow-auto"
      tabIndex="-1"
      style={{ pointerEvents: "auto" }}
    >
      <div className="flex flex-col gap-2 mb-2">
        <p>Voicebot Customization</p>
        <p>
          Let's customize your Voicebot! You can start by giving it a unique
          name
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex items-center justify-center border-2 h-full">
          <p className="text-4xl">+</p>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Voicebot Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 w-full border outline-none rounded-md placeholder:text-black text-black"
            placeholder="Enter the Name"
          />
          <label htmlFor="instruction">Voicebot Instructions</label>
          <input
            type="text"
            id="instruction"
            value={instruction}
            onChange={(e) => setInstruction(e.target.value)}
            className="p-2 w-full border outline-none rounded-md placeholder:text-black text-black"
            placeholder="Enter the Instructions"
          />
          <p className="text-sm">
            This is a basic AI assistant template with minimal configurations.
            It's designed to serve as a starting point for creating your custom
            voicebot.
          </p>
        </div>
      </div>

      <div className="flex justify-between">
        <button className="text-white" onClick={onClose}>
          Back
        </button>
        <button
          className="px-5 py-2 bg-green-400 rounded-md text-white"
          onClick={handleCreateAssistant}
        >
          Create New Assistant
        </button>
      </div>
    </div>
  );
};

export default BlankTemplatePopup;
