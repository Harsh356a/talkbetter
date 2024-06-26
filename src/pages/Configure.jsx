import React, { useState, useEffect } from "react";
import axios from "axios";

const Configuration = () => {
  const [firstFiller, setFirstFiller] = useState("");
  const [voiceId, setVoiceId] = useState("");
  const [audioSpeed, setAudioSpeed] = useState(1);
  const [aiModels, setAiModels] = useState([]);
  const [selectedAiModel, setSelectedAiModel] = useState("");
  const [loading, setLoading] = useState(true);
  const [editable, setEditable] = useState(false); // State to track edit mode

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("Token");
        if (!token) {
          return;
        }
        
        const response = await axios.get("https://users.trainright.fit/api/configs/getConfigs", {
          headers: {
            Authorization: `${token}`,
          },
        });
        const data = response.data.data;
        setFirstFiller(data.firstFiller);
        setVoiceId(data.voiceId[0]);
        setAudioSpeed(parseFloat(data.audioSpeed?.$numberDecimal));
        setAiModels(data.aiModels);
        setSelectedAiModel(data.aiModels[0]?.name);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAiModelChange = (event) => {
    setSelectedAiModel(event.target.value);
  };

  const handleUpdate = async () => {
    if (editable) {
      try {
        const token = localStorage.getItem("Token");
        if (!token) {
          return;
        }

        const configData = {
          fillers: ["Great"],
          voiceId: voiceId,
          firstFiller: firstFiller,
          audioSpeed: audioSpeed.toString(), // Convert audioSpeed to string as per API requirements
        };

        const response = await axios.post(
          "https://users.trainright.fit/api/configs/createAndEditConfig",
          configData,
          {
            headers: {
              Authorization: `${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        console.log("Post success:", response.data);
        // Optionally, you can handle success message or any other action here
      } catch (error) {
        console.error("Error posting configuration:", error);
        // Optionally, you can handle error message or any other action here
      }
    }

    setEditable(!editable); // Toggle edit mode
  };

  const handleInputChange = (event, setter) => {
    setter(event.target.value);
  };

  const handleAudioSpeedChange = (event) => {
    setAudioSpeed(parseFloat(event.target.value));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-zinc-800 text-white font-sans h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-5">
          <div className="flex items-center space-x-4">
            <button onClick={handleUpdate} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              {editable ? "Post" : "Update"}
            </button>
          </div>
        </div>
        <div className="p-4 pb-6"></div>
      </div>
      <div className="text-white p-6 max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">Configuration Details</h1>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="p-4 bg-zinc-700 rounded">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">First Filler:</label>
              <input
                type="text"
                value={firstFiller}
                onChange={(e) => handleInputChange(e, setFirstFiller)}
                className={`w-full p-2 bg-zinc-800 rounded text-white ${editable ? "" : "pointer-events-none"}`}
                readOnly={!editable}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Voice ID:</label>
              <input
                type="text"
                value={voiceId}
                onChange={(e) => handleInputChange(e, setVoiceId)}
                className={`w-full p-2 bg-zinc-800 rounded text-white ${editable ? "" : "pointer-events-none"}`}
                readOnly={!editable}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Audio Speed:</label>
              <input
                type="number"
                value={audioSpeed}
                onChange={handleAudioSpeedChange}
                className={`w-full p-2 bg-zinc-800 rounded text-white ${editable ? "" : "pointer-events-none"}`}
                readOnly={!editable}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">AI Model:</label>
              <select
                value={selectedAiModel}
                onChange={handleAiModelChange}
                className={`w-full p-2 bg-zinc-800 rounded text-white ${editable ? "" : "pointer-events-none"}`}
                disabled={!editable}
              >
                {aiModels.map((model, index) => (
                  <option key={index} value={model.name}>
                    {model.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configuration;
