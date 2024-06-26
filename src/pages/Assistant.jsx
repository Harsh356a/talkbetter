import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BlankTemplatePopup from "../components/BlankPopUp";

const Assistant = ({ showAsisFn }) => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleBlankTemplateClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="fixed inset-0 bg-black flex justify-center items-center">
      <div className="bg-zinc-900 rounded-lg p-8 max-w-4xl w-full mx-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl text-white font-semibold">
            Let's create your first assistant!
          </h2>
          <p className="text-white">
            Here's a template to get you started:
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={handleBlankTemplateClick}
          >
            <div className="w-24 h-24 flex items-center justify-center border-2 border-dashed border-zinc-400 rounded-lg">
              <span className="text-3xl text-zinc-400">+</span>
            </div>
            <span className="text-sm text-white mt-2">Create Assistant</span>
          </div>
        </div>
        <div className="text-white mb-4">
          <h3 className="text-lg font-semibold">Appointment Setter</h3>
          <p className="text-sm">
            This template is designed for dental practices to demonstrate
            appointment setting. It streamlines appointment scheduling, answers
            common queries, and provides service information, making it easier
            for patients and staff.
          </p>
        </div>
        <div className="flex justify-end">
          <Link to="/">
            <button className="text-white px-4 py-2 rounded-lg">Back</button>
          </Link>
          <Link to="/assistantlist">
          <button
            className="bg-green-700 text-white px-4 py-2 rounded-lg ml-2"
            
          >
            Continue
          </button>
          
          </Link>
        </div>
        {showPopup && <BlankTemplatePopup onClose={handleClosePopup} />}
      </div>
    </div>
  );
};

export default Assistant;
