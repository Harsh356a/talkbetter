import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BlankTemplatePopup = ({ onClose }) => {
  const [name, setName] = useState("");
  const [instruction, setInstruction] = useState("");
  const [configs, setConfigs] = useState([]);
  const [selectedConfig, setSelectedConfig] = useState(null);
  const [showDetailsPopup, setShowDetailsPopup] = useState(false);
  const twilioNumber = "+12176730597"; // Default Twilio number
  const navigate = useNavigate();

  useEffect(() => {
    const fetchConfigs = async () => {
      try {
        const token = localStorage.getItem("Token");
        if (!token) {
          console.error("No token found");
          return;
        }
        const response = await axios.get(
          "https://users.trainright.fit/api/configs/getConfigs",
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );
        setConfigs(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching configs:", error);
      }
    };

    fetchConfigs();
  }, []);

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
          configId: selectedConfig._id,
          twilioNumber: twilioNumber,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log("Assistant created successfully:", response.data);
      // Optionally, you can handle success message or any other action here
      // For example, navigate to a different page
      navigate("/assistantlist"); // Navigate to dashboard or any other route after successful creation
    } catch (error) {
      console.error("Error creating assistant:", error);
      // Optionally, you can handle error message or any other action here
    }
  };

  const handleReadMore = (config) => {
    setSelectedConfig(config);
    setShowDetailsPopup(true);
  };

  const handleCloseDetailsPopup = () => {
    setShowDetailsPopup(false);
    setSelectedConfig(null);
  };

  return (
    <>
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
            <textarea
              id="instruction"
              value={instruction}
              onChange={(e) => setInstruction(e.target.value)}
              className="p-2 w-full border outline-none rounded-md placeholder:text-black text-black"
              placeholder="Enter the Instructions"
              rows="5" // Set the number of rows to control the height
            />
            <label htmlFor="config">Select Configuration</label>
            <div className="flex flex-col gap-2">
              <select
                id="config"
                onChange={(e) =>
                  setSelectedConfig(
                    configs.find((config) => config._id === e.target.value)
                  )
                }
                className="p-2 w-full border outline-none rounded-md text-black"
              >
                <option value="">Select a Configuration</option>
                {configs.map((config) => (
                  <option key={config._id} value={config._id}>
                    {config._id}
                  </option>
                ))}
              </select>
              <button
                className="mt-2 px-5 py-2 bg-blue-400 rounded-md text-white"
                onClick={() => handleReadMore(selectedConfig)}
                disabled={!selectedConfig}
              >
                Read More
              </button>
            </div>
            <p className="text-sm">
              This is a basic AI assistant template with minimal configurations.
              It's designed to serve as a starting point for creating your
              custom voicebot.
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

      {showDetailsPopup && (
        <div
          role="dialog"
          className="fixed left-[50%] top-[50%] z-50 bg-black flex flex-col text-white w-full max-w-4xl translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background shadow-lg duration-200 animate-in fade-in-0 zoom-in-95 slide-in-from-left-1/2 slide-in-from-top-[48%] sm:rounded-lg sm:max-w-[600px] p-10 space-y-0 max-h-screen overflow-auto"
          tabIndex="-1"
          style={{ pointerEvents: "auto" }}
        >
          <div className="flex flex-col gap-2 mb-2">
            <p>Configuration Details</p>
          </div>
          <div className="flex flex-col gap-2">
            <p>
              <strong>ID:</strong> {selectedConfig._id}
            </p>
            <p>
              <strong>AI Models:</strong>
            </p>
            <ul>
              {selectedConfig.aiModels.map((model) => (
                <li key={model.name}>
                  {model.name} (Status: {model.status ? "Active" : "Inactive"})
                </li>
              ))}
            </ul>
            <p>
              <strong>Fillers:</strong> {selectedConfig.fillers.join(", ")}
            </p>
            <p>
              <strong>Voice ID:</strong> {selectedConfig.voiceId}
            </p>
            <p>
              <strong>First Filler:</strong> {selectedConfig.firstFiller}
            </p>
            <p>
              <strong>Audio Speed:</strong>{" "}
              {selectedConfig.audioSpeed.$numberDecimal}
            </p>
            <p>
              <strong>User ID:</strong> {selectedConfig.userId}
            </p>
            <p>
              <strong>Created At:</strong>{" "}
              {new Date(selectedConfig.createdAt).toLocaleString()}
            </p>
            <p>
              <strong>Updated At:</strong>{" "}
              {new Date(selectedConfig.updatedAt).toLocaleString()}
            </p>
          </div>
          <div className="flex justify-between">
            <button
              className="text-white bg-red-500 px-3 py-2"
              onClick={handleCloseDetailsPopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BlankTemplatePopup;
