import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ApllePodCastLogo from "../images/ApplePodcastsLogo.png";
import File from "../images/File.png";
import Headset from "../images/Headset.png";
import Phone1 from "../images/Phone.png";
import PhoneCall from "../images/PhoneCall.png";
import SpeakerHign from "../images/SpeakerHigh.png";
import WebhooksLogo from "../images/WebhooksLogo.png";
import TalkBetter from "../images/TalkBetter.png";
import Assistant from "./Assistant";
import Phone from "./Phone";
import Documents from "./Documents";
import Voice from "./Voice";
import Api from "./Api";
import Call from "./Call";

const Sidebar = () => {
  const [response, setResponse] = useState("");
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let userDetails = JSON.parse(localStorage.getItem("UserDetails"));
    if (userDetails) {
      setResponse(userDetails.name);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("UserDetails");
    setResponse("");
    navigate("/");
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const [activeTab, setActiveTab] = useState("Logs");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabContents = {
    Logs: [
      {
        time: "13:33:41:121",
        type: "[CHECKPOINT]",
        message: "Assistant speech started",
      },
      {
        time: "13:33:44:162",
        type: "[CHECKPOINT]",
        message: "Assistant speech ended",
      },
    ],
    Transcripts: ["Transcripts content goes here..."],
    Analytics: ["Analytics content goes here..."],
  };

  useEffect(() => {
    const params = window.location;
    console.log(params.pathname);
  }, []);

  const hideSidebarPaths = [
    "/login",
    "/register",
    "/demo",
    "/assistants",
    "/assistantlist",
    "/configured"
  ];

  const hideSidebarRegex = /^\/(configure|assistant)\/.+$/;

  const shouldHideSidebar =
    hideSidebarPaths.includes(location.pathname) ||
    hideSidebarRegex.test(location.pathname);

  return (
    <div
      className={`h-screen fixed left-0 flex flex-col rounded w-full cursor-pointer ${
        shouldHideSidebar && "hidden"
      }`}
    >
      <div className="bg-gray-500 w-full py-3 lg:pl-10 flex justify-between items-center pl-2 flex-col sm:flex-row gap-5">
        <img src={TalkBetter} className="h-6 w-32" alt="TalkBetter"></img>
        <div className="flex gap-5 items-center pr-5 relative">
          <button
            className="rounded-md p-3 bg-[#5D5FEF] text-white text-xs"
            onClick={() => navigate("/assistants")}
          >
            Create Assistant
          </button>
          <button className="rounded-md text-xs p-3 bg-[#000000] text-white">
            + Add AI for help
          </button>
          <div className="relative">
            <button
              className={`${
                response ? "rounded-full text-xs" : "rounded-md text-xs"
              } px-5 p-3 bg-[#5D5FEF] text-white`}
              onClick={toggleDropdown}
            >
              {response ? (
                response.slice(0, 1).toUpperCase()
              ) : (
                <span onClick={() => navigate("/login")}>Login</span>
              )}
            </button>
            {response && dropdownOpen && (
              <div className="fixed right-3 mt-2 w-48 bg-[#5D5FEF] rounded-md shadow-lg py-2 z-10">
                <button
                  className={`block w-full px-4 py-2 text-sm text-white text-center`}
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {open ? (
        <div className="lg:bottom-[1.3rem] flex fixed justify-between flex-col h-[86vh] pt-12 w-42 bg-[#000000] text-[#989BAC] lg:mx-5 mx-2 text-xs rounded-3xl bottom-[-1.2rem] sm:text-sm lg:w-64 sm:bottom-4">
          <div
            className="flex flex-col gap-4 font-sans px-3"
            onClick={() => setOpen(false)}
          >
            <div
              className="flex gap-1 sm:gap-3 items-center hover:bg-[#383E5A] sm:p-2 p-1 rounded transition-all"
              onClick={() => navigate("/")}
            >
              <img
                src={ApllePodCastLogo}
                alt="Assistants"
                className="w-4 h-4 sm:w-9 sm:h-9"
              ></img>
              <h1>Assistants</h1>
            </div>
            <div
              className="flex gap-1 sm:gap-3 items-center hover:bg-[#383E5A] p-1 sm:p-2 rounded"
              onClick={() => navigate("/phone")}
            >
              <img
                src={Phone1}
                alt="Phone Numbers"
                className="w-4 h-4 sm:w-9 sm:h-9"
              ></img>
              <h1>Phone Numbers</h1>
            </div>
            <div
              className="flex gap-1 sm:gap-3 items-center hover:bg-[#383E5A] p-1 sm:p-2 rounded"
              onClick={() => navigate("/documents")}
            >
              <img
                src={File}
                alt="Documents"
                className="w-4 h-4 sm:w-9 sm:h-9"
              ></img>
              <h1>Documents</h1>
            </div>
            <div
              className="flex gap-1 sm:gap-3 items-center hover:bg-[#383E5A] p-1 sm:p-2 rounded"
              onClick={() => navigate("/voice")}
            >
              <img
                src={SpeakerHign}
                alt="Voice Library"
                className="w-4 h-4 sm:w-9 sm:h-9"
              ></img>
              <h1>Voice Library</h1>
            </div>
            <div
              className="flex gap-1 sm:gap-3 items-center hover:bg-[#383E5A] p-1 sm:p-2 rounded"
              onClick={() => navigate("/call")}
            >
              <img
                src={PhoneCall}
                alt="Call Logs"
                className="w-4 h-4 sm:w-10 sm:h-10"
              ></img>
              <h1>Call Logs</h1>
            </div>
            <div
              className="flex gap-1 sm:gap-3 items-center hover:bg-[#383E5A] p-1 sm:p-2 rounded"
              onClick={() => navigate("/api")}
            >
              <img
                src={WebhooksLogo}
                alt="Provider APIs"
                className="w-4 h-4 sm:w-10 sm:h-10"
              ></img>
              <h1>Provider APIs</h1>
            </div>
          </div>
          <div className="flex gap-1 sm:gap-3 items-center hover:bg-[#383E5A] p-1  rounded py-5 mx-6">
            <img
              src={Headset}
              alt="Feedback"
              className="w-4 h-4 sm:w-10 sm:h-10"
            ></img>
            <h1>Feedback</h1>
          </div>
        </div>
      ) : (
        <div
          className="flex flex-col rounded w-[101px] justify-between"
          onClick={() => setOpen(true)}
        >
          <div className="flex fixed flex-col bg-black h-[84vh] w-[72px] justify-between items-center mx-2 rounded-3xl pt-8 py-5 lg:bottom-12 transition-all top-[5rem] lg:top-[4.8rem] xxs:top-[7rem] sm:top-[5rem]">
            <div className="flex flex-col gap-4 items-center">
              <div className="flex gap-1 sm:gap-3 items-center hover:bg-[#383E5A] p-2 rounded">
                <img src={ApllePodCastLogo} alt="Assistants"></img>
              </div>
              <div className="flex gap-3 items-center hover:bg-[#383E5A] p-2 rounded">
                <img src={Phone1} alt="Phone Numbers"></img>
              </div>
              <div className="flex gap-3 items-center hover:bg-[#383E5A] p-2 rounded">
                <img src={File} alt="Documents"></img>
              </div>
              <div className="flex gap-3 items-center hover:bg-[#383E5A] p-2 rounded">
                <img src={SpeakerHign} alt="Voice Library"></img>
              </div>
              <div className="flex gap-3 items-center hover:bg-[#383E5A] p-2 rounded">
                <img src={PhoneCall} alt="Call Logs"></img>
              </div>
              <div className="flex gap-3 items-center hover:bg-[#383E5A] p-2 rounded">
                <img src={WebhooksLogo} alt="Provider APIs"></img>
              </div>
            </div>
            <div className="flex gap-3 items-center hover:bg-[#383E5A] p-2 rounded">
              <img src={Headset} alt="Feedback"></img>
            </div>
          </div>
        </div>
      )}
      {location.pathname === "/" ? (
        <Assistant open={open} />
      ) : location.pathname === "/phone" ? (
        <Phone open={open} />
      ) : location.pathname === "/documents" ? (
        <Documents open={open} />
      ) : location.pathname === "/voice" ? (
        <Voice open={open} />
      ) : location.pathname === "/call" ? (
        <Call open={open} />
      ) : (
        <Api open={open} />
      )}
    </div>
  );
};

export default Sidebar;
