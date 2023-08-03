"use client";
import axios from "axios";
import React, { useState } from "react";
import { preprocessResponse } from "./function";
import ReactDOM from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faPaperPlane,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";
import { Menu, Transition } from "@headlessui/react";

// By Default Chatbot message listed items array
const queriesData = [
  "Queries about our comprehensive program",
  "Questions about your recovery pathway and exercises",
  "Tips on the most effective recovery exercises",
];

const pathway = ["English", "Spanish"];

const AzraChat = () => {
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

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleMessageSubmit(event);
    }
  };

  return (
    <div className="flex justify-center py-4 overflow-y-scroll scroll-smooth scrollbar-thin ">
      <div className="flex flex-col border-4 md:w-[70%] w-[96%] h-[100%] rounded-3xl border-white shadow-2xl ">
        {/* Dropdowns or Select fields available on left side */}
        <div
          className=" rounded-2xl w-full md:w-[100%] text-white flex flex-row md:px-8 md:py-4 px-2 py-2 justify-between items-center"
          style={{
            background: "linear-gradient(to left, #60426c 70%, #292626 100%)",
          }}
        >
          <div className="w-[50%]">
            <Link href="/" className=" flex ">
              <Image src={"/images/logo.png"} width={170} height={25} alt=" " />
            </Link>
          </div>

          <div className="flex flex-row justify-end items-center md:gap-2">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="flex justify-between items-center md:w-[100%] w-[10%]  rounded-xl border border-gray-300 bg-white px-1 py-1 mediumfont text-black shadow-sm hover:bg-gray-[#60426c] focus:outline-none focus:ring-2 focus:ring-[#60426c] focus:ring-offset-2 focus:ring-offset-[#60426c]">
                  <div>Pathway</div>
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    width={20}
                    height={20}
                    alt="arrow down"
                    className="-mr-1 flex justify-end"
                    aria-hidden="true"
                    style={{ color: "#60426c" }}
                  />
                </Menu.Button>
              </div>
              <Menu.Items className="absolute right-0 z-10 md:w-[100%] w-[10%] mediumfont origin-top-right rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  {pathway?.map((item, index) => (
                    <Menu.Item
                      key={index}
                      onClick={(e) =>
                        setMeta({ ...meta, language: e.target.value })
                      }
                    >
                      {console.log(item)}
                      {({ active }) => (
                        <div
                          className={
                            (active
                              ? "bg-black text-black rounded-lg"
                              : "text-black-700",
                            "block px-4 py-4 text-sm")
                          }
                        >
                          {item}
                        </div>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Menu>
            {/* <select
              className="w-full bg-gray-100 hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 rounded-2xl "
              onChange={(e) => setMeta({ ...meta, language: e.target.value })}
            >
              <option value="Pathway">Pathway</option>
              <option value="engish">Engish</option>
              <option value="spanish">Spnanish</option>
            </select> */}

            <select
              className="w-full bg-gray-100 hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 m-2 rounded-2xl"
              onChange={(e) => setMeta({ ...meta, language: e.target.value })}
            >
              <option value="Language">Language</option>
              <option value="engish">Engish</option>
              <option value="spanish">Spnanish</option>
            </select>

            <select
              className="w-full bg-gray-100 hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 rounded-2xl"
              onChange={(e) => setMeta({ ...meta, platform: e.target.value })}
            >
              <option value="Platform">Platform</option>
              <option value="web"> Web</option>
              <option value="sms">SMS</option>
            </select>
          </div>
        </div>

        <div className="flex-1 justify-center items-center ">
          <div className="container mx-auto">
            {/* Prompt Messages Container */}
            <div className="flex h-[81vh] w-full flex-col ">
              {/* Prompt Messages */}
              <div className="flex-1 space-y-6 overflow-y-auto rounded-xl bg-white-200 p-4 text-sm leading-6 text-slate-900 shadow-sm dark:bg-white-200 dark:text-slate-900 sm:text-base sm:leading-7">
                {/* By Default Message by Chatbot */}
                <div className="flex items-start">
                  <span>
                    <FontAwesomeIcon
                      icon={faRobot}
                      style={{
                        color: "#60426c",
                        width: "40px",
                        height: "30px",
                      }}
                      width={40}
                    />
                  </span>
                  <div className="rounded-b-xl rounded-tr-xl bg-slate-100 p-4 dark:bg-slate-100 sm:max-w-md md:max-w-2xl">
                    <p className="mb-2 mx-5 text-base">
                      Meet Azra Care - your companion built to support you
                      through the journey of orthopaedic surgical recovery.
                    </p>
                    <p className="mb-2 mx-5 text-base">
                      Consider me as your trusted ally, navigating the path to a
                      speedy and seamless orthopedic recovery alongside you. You
                      can ask me
                    </p>
                    <ul className="list-disc mx-20 ml-[4rem]">
                      {queriesData?.map((query) => (
                        <li className="text-gray-700 text-base" key={query}>
                          {query}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-2 mx-5 text-base">
                      My mission is to pave an easier path for your recovery
                      journey.
                    </p>
                  </div>
                </div>

                {/* Chatbot response and user questions */}
                {save?.map((ans) =>
                  ans?.content?.split("\n").map((value, index) =>
                    ans.role !== "user" ? (
                      // Response By Chatbot
                      <div key={index} className="flex items-start">
                        <span>
                          <FontAwesomeIcon
                            icon={faRobot}
                            style={{
                              color: "#60426c",
                              width: "40px",
                              height: "30px",
                            }}
                            width={40}
                          />
                        </span>
                        <div className="flex rounded-b-xl rounded-tr-xl bg-slate-100 p-4 dark:bg-slate-100 sm:max-w-md md:max-w-2xl">
                          {value?.length > 0 && <p>{value}</p>}
                        </div>

                        {/* copy,like and dislike icons here */}
                        <div className="mr-2 mt-1 flex flex-col-reverse gap-2 text-slate-500 sm:flex-row">
                          <button className="hover:text-blue-600" type="button">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              ></path>
                              <path d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"></path>
                              <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path>
                            </svg>
                          </button>
                          <button className="hover:text-blue-600" type="button">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              ></path>
                              <path d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3"></path>
                            </svg>
                          </button>
                          <button className="hover:text-blue-600">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              ></path>
                              <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    ) : (
                      // Question By User

                      <div
                        key={index}
                        className="flex flex-row-reverse items-start "
                      >
                        <div
                          className="text-center text-white border-4 ml-2 h-8 w-8 rounded-full "
                          style={{
                            borderColor: "#60426c",
                            backgroundColor: "#60426c",
                          }}
                        >
                          G
                        </div>

                        <div
                          className="flex min-h-[85px] rounded-b-xl rounded-tl-xl p-4  sm:min-h-0 sm:max-w-md md:max-w-2xl"
                          style={{
                            background:
                              "linear-gradient(to right, #60426c 50%, #292626 100%)",
                          }}
                        >
                          <p className="text-white">
                            {value?.length > 0 && value}
                          </p>
                        </div>
                      </div>
                    )
                  )
                )}
              </div>

              {/* Prompt message input */}
              <form className="mt-2 md:ml-[6rem] w-[90%]">
                <label htmlFor="chat-input" className="sr-only">
                  Type your question here
                </label>
                <div className="relative">
                  <textarea
                    id="chat-input"
                    className="block w-full resize-none rounded-full border-none bg-slate-100 p-4 pl-10 pr-20 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#60426c] dark:bg-slate-100 dark:text-slate-900  sm:text-base mb-2"
                    placeholder="Type your question here"
                    rows="1"
                    value={question?.content}
                    onChange={handleQuestionChange}
                    onKeyDown={handleKeyDown} // Add the onKeyDown event handler
                    required
                  ></textarea>
                  <button
                    type="submit"
                    onClick={handleMessageSubmit}
                    className="absolute bottom-2 right-2.5 rounded-full px-3 py-2 text-sm font-medium text-slate-200 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300  sm:text-base"
                    style={{ backgroundColor: "#60426c" }}
                  >
                    {loading ? (
                      <div className="custom-loader" />
                    ) : (
                      <FontAwesomeIcon
                        icon={faPaperPlane}
                        style={{ color: "white" }}
                      />
                    )}
                    <span className="sr-only">Send message</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AzraChat;
