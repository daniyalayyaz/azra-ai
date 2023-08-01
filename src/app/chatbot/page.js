"use client";
import axios from "axios";
import React, { useState } from "react";
import { preprocessResponse } from "./function";
import ReactDOM from "react-dom";

// By Default Chatbot message listed items array
const queriesData = [
  "Queries about our comprehensive program",
  "Questions about your recovery pathway and exercises",
  "Tips on the most effective recovery exercises",
];

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
            content: preprocessResponse(response.data.answer),
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
    // <div>
    //   <h1 className="text-xl font-bold">Azra Chat</h1>

    //   <p className="text-gray-700">
    //     Welcome to Azra Chat! I am an experiment created to share Wellen's
    //     science backed knowledge base about osteoporosis and osteopenia
    //     management.
    //   </p>
    //   {/* <select
    //     multiple
    //     className="bg-blue-50 hover:bg-blue-100 text-gray-900 font-semibold py-2 px-5 rounded-md"
    //     id="my-select"
    //     data-multiselect
    //     onChange={(e)=>console.log(e.target.value)}
    //   >
    //     <option value="total_shoulder_replacement">
    //       total_shoulder_replacement
    //     </option>
    //     <option value="total_knee_replacement">total_knee_replacement</option>
    //     <option value="total_hip_replacement_pathway">
    //       total_hip_replacement_pathway
    //     </option>
    //     <option value="nonoperative_hip_and_knee">
    //       nonoperative_hip_and_knee
    //     </option>
    //   </select> */}
    //   <select
    //     className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-md"
    //     onChange={(e) => setMeta({ ...meta, language: e.target.value })}
    //   >
    //     <option value="engish">Engish</option>
    //     <option value="spanish">Spnanish</option>
    //   </select>

    //   <select
    //     className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-md"
    //     onChange={(e) => setMeta({ ...meta, platform: e.target.value })}
    //   >
    //     <option value="web"> Web</option>
    //     <option value="sms">SMS</option>
    //   </select>

    //   <ul className="list-style-none mt-4">
    //     {questions.map((question) => (
    //       <li className="text-gray-700">{question}</li>
    //     ))}
    //   </ul>
    //   <div className="chat-box">
    //     <ul className="list-style-none mt-4">
    //       {save.map((ans) =>
    //         ans?.content
    //           ?.split("\n")
    //           .map((value) => (
    //             <div
    //               className={
    //                 ans.role === "user"
    //                   ? "flex justify-end bg-gray-200 rounded-b p-3 shadow-md"
    //                   : "flex justify-start bg-gray-100 rounded-t p-1 shadow-md"
    //               }
    //             >
    //               {value}
    //             </div>
    //           ))
    //       )}
    //     </ul>
    //     <input
    //       type="text"
    //       placeholder="Type your question here"
    //       name="message"
    //       value={question?.content}
    //       onChange={handleQuestionChange}
    //     />
    //     <button
    //       className="mt-2 px-4 py-2 bg-gray-200 rounded-md shadow-md"
    //       onClick={handleMessageSubmit}
    //       disabled={loading}
    //     >
    //       {loading ? "PLease wait I am Thinking ...." : "Send"}
    //     </button>
    //   </div>
    // </div>

    <div className="flex flex-col md:flex-row h-screen">
      {/* Dropdowns or Select fields available on left side */}
      <div className="w-full md:w-1/5 bg-gray-800 text-white flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center mb-4">
          <select
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-md"
            onChange={(e) => setMeta({ ...meta, language: e.target.value })}
          >
            <option value="Pathway">Pathway</option>
            <option value="engish">Engish</option>
            <option value="spanish">Spnanish</option>
          </select>

          <select
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 m-2 rounded-md"
            onChange={(e) => setMeta({ ...meta, language: e.target.value })}
          >
            <option value="Language">Language</option>
            <option value="engish">Engish</option>
            <option value="spanish">Spnanish</option>
          </select>

          <select
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-md"
            onChange={(e) => setMeta({ ...meta, platform: e.target.value })}
          >
            <option value="Platform">Platform</option>
            <option value="web"> Web</option>
            <option value="sms">SMS</option>
          </select>
        </div>
      </div>

      <div className="flex-1 justify-center items-center">
        <div className="container mx-auto">
          {/* Prompt Messages Container */}
          <div className="flex h-[97vh] w-full flex-col">
            {/* Prompt Messages */}
            <div className="flex-1 space-y-6 overflow-y-auto rounded-xl bg-slate-200 p-4 text-sm leading-6 text-slate-900 shadow-sm dark:bg-slate-900 dark:text-slate-300 sm:text-base sm:leading-7">
              {/* By Default Message by Chatbot */}
              <div className="flex items-start">
                <img
                  className="mr-2 h-8 w-8 rounded-full"
                  src="https://dummyimage.com/128x128/363536/ffffff&text=J"
                />
                <div className="rounded-b-xl rounded-tr-xl bg-slate-50 p-4 dark:bg-slate-800 sm:max-w-md md:max-w-2xl">
                  <p className="mb-2 mx-5 text-base">
                    Meet Azra Care - your companion built to support you through
                    the journey of orthopaedic surgical recovery.
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
                      <img
                        className="mr-2 h-8 w-8 rounded-full"
                        src="https://dummyimage.com/128x128/363536/ffffff&text=J"
                      />
                      <div className="flex rounded-b-xl rounded-tr-xl bg-slate-50 p-4 dark:bg-slate-800 sm:max-w-md md:max-w-2xl">
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
                      className="flex flex-row-reverse items-start"
                    >
                      <img
                        className="ml-2 h-8 w-8 rounded-full"
                        src="https://dummyimage.com/128x128/354ea1/ffffff&text=G"
                      />

                      <div className="flex min-h-[85px] rounded-b-xl rounded-tl-xl bg-slate-50 p-4 dark:bg-slate-800 sm:min-h-0 sm:max-w-md md:max-w-2xl">
                        <p>{value?.length > 0 && value}</p>
                      </div>
                    </div>
                  )
                )
              )}
            </div>

            {/* Prompt message input */}
            <form className="mt-2 mx-auto w-[80%]">
              <label htmlFor="chat-input" className="sr-only">
                Type your question here
              </label>
              <div className="relative">
                <textarea
                  id="chat-input"
                  className="block w-full resize-none rounded-xl border-none bg-slate-200 p-4 pl-10 pr-20 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-slate-900 dark:text-slate-200 dark:placeholder-slate-400 dark:focus:ring-blue-600 sm:text-base"
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
                  className="absolute bottom-2 right-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:text-base"
                >
                  Send <span className="sr-only">Send message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AzraChat;
