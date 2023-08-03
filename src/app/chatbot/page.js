"use client";
import axios from "axios";
import React, { Fragment, useState } from "react";
import { preprocessResponse } from "./function";
import ReactDOM from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faBars,
  faPaperPlane,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";
import { Menu, Transition } from "@headlessui/react";
import { Pathwaydata } from "../Components/Utils/Pathway";
import { Platformdata } from "../Components/Utils/Platform";
import { Languagedata } from "../Components/Utils/Language";
import Dropdown from "../Components/Dropdown";
import PromptMessage from "./PromptMessage";
import SendMessage from "./SendMessage";
import MobileNavbar from "./MobileNavbar";

// By Default Chatbot message listed items array
const queriesData = [
  "Queries about our comprehensive program",
  "Questions about your recovery pathway and exercises",
  "Tips on the most effective recovery exercises",
];

const AzraChat = () => {
  const [LanguageSelected, setSelectedlanguage] = useState("Language");

  const [questions, setQuestions] = useState([]);
  const [messages, setMessages] = useState([]);
  const [question, setQuestion] = useState([]);
  const [loading, setLoading] = useState(false);
  const [meta, setMeta] = useState({
    pathway: [],
    language: "english",
    platform: "web",
  });
  const [save, setSave] = useState([]);
  const [platformSelected, setSelectedPlatform] = useState("Platform");
  const handlePlatformMenu = (e, option) => {
    setSelectedPlatform(option);
    setMeta({ ...meta, platform: e.target.value });
  };

  const handleQuestionChange = (event) => {
    setQuestion({
      role: "user",
      content: event.target.value,
      sources: [],
      images: [],
    });
  };

  const handleMessageSubmit = (event) => {
    setLoading(true);
    setSave([...save, question]);
    const data = {
      messages: [...save, question],
      metaData: {
        pathway: meta?.pathway,
        language: meta?.language,
        platform: meta?.platform,
      },
    };
    event.preventDefault();

    axios
      .post("https://azra-bot.herokuapp.com/asK_model", data)
      .then((response) => {
        setSave([
          ...save,
          question,
          {
            role: "assistant",
            content: response.data.answer,
          },
        ]);
        setQuestion({ role: "user", content: "", sources: [], images: [] });
        setLoading(false);
      })

      .catch((e) => {
        setSave([
          ...save,
          question,
          { role: "assistant", content: "I dont have idea about it" },
        ]);
        setQuestion({ role: "user", content: "", sources: [], images: [] });
        setLoading(false);
      });
  };

  const handleLanguageMenu = (e, option) => {
    setSelectedlanguage(option);
    setMeta({ ...meta, language: e.target.value });
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };
  return (
    <div className="flex justify-center py-4 overflow-y-scroll scroll-auto scrollbar-thin ">
      <div className="flex flex-col border-4 md:w-[70%] w-[96%] h-[100%] rounded-3xl border-white shadow-2xl ">
        {/* Dropdowns or Select fields available on left side 
        {/* <div
          className=" rounded-2xl w-full md:w-[100%] text-white flex flex-row md:px-8 md:py-4 px-2 py-2 justify-between items-center hidden"
          style={{
            background: "linear-gradient(to left, #60426c 70%, #292626 100%)",
          }}
        >
          <div className="w-[50%]">
            <Link href="/" className=" flex ">
              <Image src={"/images/logo.png"} width={170} height={25} alt=" " />
            </Link>
          </div>
          Mobile Navigation
          <div className="md:hidden">
            <button className="rounded-md" onClick={toggleLinks}>
              <FontAwesomeIcon
                icon={faBars}
                style={{ color: "white" }}
                width={20}
              />
            </button>
          </div>
          {/* Show the links when showLinks is true 
        {showLinks && (
          <div className="border-2 bg-white  w-[100%] h-[100%] ">
            <div className="flex flex-col justify-end items-center md:gap-2 "></div>
            {/* Platform DropDown
              <Dropdown
                data={Platformdata}
                platformSelected={platformSelected}
                handlePlatformMenu={handlePlatformMenu}
              />
              {/* Language Dropdown 
              <Dropdown
                data={Languagedata}
                platformSelected={LanguageSelected}
                handlePlatformMenu={handleLanguageMenu}
              /> 
          </div>
        )}
        <div className="md:flex flex-row justify-end items-center md:gap-2  hidden">
          {/* Platform DropDown 
          <Dropdown
            data={Platformdata}
            platformSelected={platformSelected}
            handlePlatformMenu={handlePlatformMenu}
          />
          {/* Language Dropdown 
          <Dropdown
            data={Languagedata}
            platformSelected={LanguageSelected}
            handlePlatformMenu={handleLanguageMenu}
          />

          <Dropdown
            data={Languagedata}
            platformSelected={LanguageSelected}
            handlePlatformMenu={handleLanguageMenu}
          />
        </div>
      </div>

      */}

        <nav
          className=" border-gray-200 dark:bg-gray-900"
          style={{
            background: "linear-gradient(to left, #60426c 70%, #292626 100%)",
          }}
        >
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div className="w-[50%]">
              <Link href="/" className=" flex ">
                <Image
                  src={"/images/logo.png"}
                  width={170}
                  height={25}
                  alt=" "
                />
              </Link>
            </div>
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded={isMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className={`w-full md:block md:w-auto ${
                isMenuOpen ? "block" : "hidden"
              }`}
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Dropdown
                    data={Platformdata}
                    platformSelected={platformSelected}
                    handlePlatformMenu={handlePlatformMenu}
                  />
                </li>
                <li>Azra</li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="flex-1 justify-center items-center ">
          <div className="container mx-auto">
            {/* Prompt Messages Container */}
            <div className="flex h-[81vh] w-full flex-col ">
              {/* Prompt Messages */}
              <PromptMessage {...{ queriesData, save }} />

              {/* Prompt message input */}
              <SendMessage
                {...{
                  question,
                  handleQuestionChange,
                  handleMessageSubmit,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AzraChat;
