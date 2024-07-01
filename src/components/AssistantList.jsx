import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import BlankTemplatePopup1 from "./Blankpopup1";

const AssistantsList = () => {
  const [assistants, setAssistants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAssistantId, setSelectedAssistantId] = useState(null);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAssistants = async () => {
      const token = localStorage.getItem("Token");
      if (!token) {
        console.error("No token found");
        return;
      }

      try {
        const response = await axios.get(
          "https://users.trainright.fit/api/configs/findAllAssistants",
          {
            headers: {
              Authorization: ` ${token}`,
            },
          }
        );
        setAssistants(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching assistants", error);
        setLoading(false);
      }
    };

    fetchAssistants();
  }, []);

  const handleEditButtonClick = (id) => {
    setSelectedAssistantId(id);
    setShowEditPopup(true);
  };

  const handleCloseEditPopup = () => {
    setShowEditPopup(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8 min-h-screen h-fit bg-gray-600">
      <h1 className="text-3xl font-bold mb-4 text-center text-white">
        Assistants
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {assistants.map((assistant) => (
          <div
            key={assistant._id}
            className="assistant-card"
          >
            <div
              className={`bg-zinc-900 rounded-lg p-4 relative cursor-pointer ${
                selectedAssistantId === assistant._id
                  ? "border-2 border-green-500"
                  : ""
              }`}
              style={{ height: "300px" }}
            >
              <div className="overflow-y-auto h-full ">
                <h2 className="text-xl text-white font-semibold mb-2">
                  {assistant.name}
                </h2>
                <p className="text-white mb-2">{assistant.instructions}</p>
                <div className="text-white text-sm">
                  <p>
                    <strong>Assistant ID:</strong> {assistant.assistantId}
                  </p>
                  <p>
                    <strong>Twilio Number:</strong> {assistant.twilioNumber}
                  </p>
                  <p>
                    <strong>Created At:</strong>{" "}
                    {new Date(assistant.createdAt).toLocaleString()}
                  </p>
                  <p>
                    <strong>Updated At:</strong>{" "}
                    {new Date(assistant.updatedAt).toLocaleString()}
                  </p>
                  <div>
                    <button
                      className="bg-green-400 px-3 py-1 rounded absolute bottom-5 right-10"
                      onClick={() => handleEditButtonClick(assistant._id)}
                    >
                      Edit Assistant
                    </button>
                  </div>
                </div>
                {selectedAssistantId === assistant._id && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                    <span className="text-3xl text-white">✓</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-4 space-x-4">
        <Link to="/">
          <button className="bg-red-700 text-white px-4 py-2 rounded-lg">
            Back
          </button>
        </Link>
      </div>

      {showEditPopup && (
        <BlankTemplatePopup1
          assistant={assistants.find(
            (assistant) => assistant._id === selectedAssistantId
          )}
          onClose={handleCloseEditPopup}
        />
      )}
    </div>
  );
};

export default AssistantsList;
