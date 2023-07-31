"use client";
import axios from "axios";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { preprocessResponse } from "./function";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import SendLoading from "./SendLoading";

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
        console.log(response.data.answer, "response");
        console.log(preprocessResponse(response.data.answer), "The replace");
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

      <div
        className="flex-1 justify-center items-center"
      >
        <div className="container mx-auto">
        <div className="flex flex-col mx-6 my-6 overflow-y-scroll md:h-[38rem]">
            <div className="bg-gray-200 p-3 rounded-md shadow-md max-w-[50%]">
              <p className="mb-2 mx-5 text-base">
                Meet Azra Care - your companion built to support you through the
                journey of orthopaedic surgical recovery.
              </p>
              <p className="mb-2 mx-5 text-base">
                Consider me as your trusted ally, navigating the path to a
                speedy and seamless orthopedic recovery alongside you. You can
                ask me
              </p>
              <ul className="list-disc mx-20 ml-[8rem]">
                {queriesData.map((query) => (
                  <li className="text-gray-700 text-base" key={query}>
                    {query}
                  </li>
                ))}
              </ul>
              <p className="mt-2 mx-5 text-base">
                My mission is to pave an easier path for your recovery journey.
              </p>
            </div>
            <div className="chat-box">
              <div>
                {save.map((ans) =>
                  ans?.content?.split("\n").map((value, index) => (
                    <div
                      key={index}
                      className={
                        ans.role === "user"
                          ? "flex justify-end items-end "
                          : "flex justify-start "
                      }
                    >
                      {value?.length > 0 && (
                        <p
                          className={
                            ans.role === "user"
                              ? "max-w-[50%] bg-cyan-400 rounded-md p-3 my-6 shadow-md"
                              : "bg-gray-200 rounded-md p-3 shadow-md max-w-[50%]"
                          }
                        >
                          {value}
                        </p>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
          {/* Make input field which have send button and this should be placed at end of main div */}
          <div className="w-[80%] flex mt-4 mx-auto">
            <input
              type="text"
              placeholder="Type your question here"
              className="flex-1 bg-white border border-gray-300 rounded-md py-2 px-4 mr-2 focus:border-transparent focus:outline-none focus:ring-0"
              value={question?.content}
              onChange={handleQuestionChange}
              onKeyDown={handleKeyDown} // Add the onKeyDown event handler
            />
            <button
              className="bg-blue-500 text-white rounded-md py-2 px-4"
              onClick={handleMessageSubmit}
              disabled={loading}
            >
              {loading ? (
                <SendLoading />
              ) : (
                <FontAwesomeIcon icon={faPaperPlane} />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AzraChat;
