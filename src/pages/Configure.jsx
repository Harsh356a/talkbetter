import React, { useState, useEffect } from "react";
import axios from "axios";

const Configuration = () => {
  const [firstMessage, setFirstMessage] = useState("");
  const [systemPrompt, setSystemPrompt] = useState("");
  const [provider, setProvider] = useState("");
  const [activeContent, setActiveContent] = useState("content1");
  const [prompts, setPrompts] = useState([]);
  const [aiModels, setAiModels] = useState([]);
  const [selectedPrompt, setSelectedPrompt] = useState(0);

  const handleButtonClick = (contentId) => {
    setActiveContent(contentId);
  };

  const handlePromptClick = (index) => {
    setSelectedPrompt(index);
    setFirstMessage(prompts[index].role);
    setSystemPrompt(prompts[index].content);
  };

  const handleSubmit = async () => {
    const data = {
      firstMessage,
      systemPrompt,
      provider,
    };

    console.log(data);

    try {
      const response = await fetch(
        "https://api.npoint.io/81798e3c202d98eb3bd0",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Success:", result);
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const fetchPrompts = async () => {
      try {
        const response = await axios.get(
          "https://api.npoint.io/c8ae468cf6daec0322e0"
        );
        setPrompts(response.data.prompt);
        if (response.data.prompt.length > 0) {
          setFirstMessage(response.data.prompt[0].role);
          setSystemPrompt(response.data.prompt[0].content);
        }
      } catch (error) {
        console.error("Error fetching prompts:", error);
      }
    };

    const fetchAiModels = async () => {
      try {
        const response = await axios.get(
          "https://api.npoint.io/d99ba9b6b481b0674464"
        );
        setAiModels(response.data.aiModels);
        if (response.data.aiModels.length > 0) {
          setProvider(response.data.aiModels[0].name);
        }
      } catch (error) {
        console.error("Error fetching AI models:", error);
      }
    };

    fetchPrompts();
    fetchAiModels();
  }, []);

  return (
    <>
      <div className="bg-zinc-800 text-white font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-5">
            <div className="flex items-center space-x-4">
              <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14.752 11.168l-9.4-9.4a1.25 1.25 0 011.768-1.768l9.4 9.4m0 0l4.2 4.2m-4.2-4.2L19.824 21.34a1.25 1.25 0 01-1.768 1.768L10.752 15.168m4-4L5.568 1.752A1.25 1.25 0 003.8 3.52l9.4 9.4"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="p-4 pb-6"></div>
        </div>
        <div className="text-white p-6 max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={() => handleButtonClick("content1")}
              className="text-xl font-semibold text-violet-500"
            >
              Model
            </button>
          </div>
        </div>
        {activeContent === "content1" && (
          <div>
            <div className="flex mb-4">
              {prompts.map((prompt, index) => (
                <button
                  key={index}
                  onClick={() => handlePromptClick(index)}
                  className={`p-2 mx-2 rounded ${
                    selectedPrompt === index ? "bg-violet-500" : "bg-zinc-700"
                  }`}
                >
                  Prompt {index + 1}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-8">
              <div className="col-span-2 p-4 bg-zinc-700 rounded">
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Role:</label>
                  <input
                    className="p-3 w-full bg-zinc-800 rounded"
                    value={firstMessage}
                    onChange={(e) => setFirstMessage(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Content:</label>
                  <textarea
                    className="p-3 h-96 w-full bg-zinc-800 rounded resize-none text-white"
                    value={systemPrompt}
                    onChange={(e) => setSystemPrompt(e.target.value)}
                  />
                </div>
              </div>
              <div className="p-4 bg-zinc-700 rounded">
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Provider</label>
                  <select
                    className="w-full p-2 bg-zinc-800 rounded text-white"
                    value={provider}
                    onChange={(e) => setProvider(e.target.value)}
                  >
                    {aiModels.map((model, index) => (
                      <option key={index} value={model.name}>
                        {model.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-4 flex justify-end">
                  <button
                    onClick={handleSubmit}
                    className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Configuration;
