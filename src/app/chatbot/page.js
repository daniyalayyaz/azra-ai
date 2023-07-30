"use client";
import axios from "axios";
import React, { useState } from "react";
import ReactDOM from "react-dom";

const AzraChat = () => {
  const [questions, setQuestions] = useState([
    "Can osteoporosis be reversed?",
    "Does vitamin K help strengthen bones?",
    "What are the best exercises for osteopenia?",
  ]);
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
          { role: "assistant", content: response.data.answer },
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

  return (
    <div>
      <h1 class="text-xl font-bold">Azra Chat</h1>

      <p class="text-gray-700">
        Welcome to Azra Chat! I am an experiment created to share Wellen's
        science backed knowledge base about osteoporosis and osteopenia
        management.
      </p>
      {/* <select
        multiple
        class="bg-blue-50 hover:bg-blue-100 text-gray-900 font-semibold py-2 px-5 rounded-md"
        id="my-select"
        data-multiselect
        onChange={(e)=>console.log(e.target.value)}
      >
        <option value="total_shoulder_replacement">
          total_shoulder_replacement
        </option>
        <option value="total_knee_replacement">total_knee_replacement</option>
        <option value="total_hip_replacement_pathway">
          total_hip_replacement_pathway
        </option>
        <option value="nonoperative_hip_and_knee">
          nonoperative_hip_and_knee
        </option>
      </select> */}
      <select
        class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-md"
        onChange={(e) => setMeta({ ...meta, language: e.target.value })}
      >
        <option value="engish">Engish</option>
        <option value="spanish">Spnanish</option>
      </select>

      <select
        class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-md"
        onChange={(e) => setMeta({ ...meta, platform: e.target.value })}
      >
        <option value="web"> Web</option>
        <option value="sms">SMS</option>
      </select>

      <ul class="list-style-none mt-4">
        {questions.map((question) => (
          <li class="text-gray-700">{question}</li>
        ))}
      </ul>
      <div class="chat-box">
        <ul class="list-style-none mt-4">
          {save.map((ans) =>
            ans?.content
              ?.split("\n")
              .map((value) => (
                <div
                  class={
                    ans.role === "user"
                      ? "flex justify-end bg-gray-200 rounded-b p-3 shadow-md"
                      : "flex justify-start bg-gray-100 rounded-t p-1 shadow-md"
                  }
                >
                  {value}
                </div>
              ))
          )}
        </ul>
        <input
          type="text"
          placeholder="Type your question here"
          name="message"
          value={question?.content}
          onChange={handleQuestionChange}
        />
        <button
          class="mt-2 px-4 py-2 bg-gray-200 rounded-md shadow-md"
          onClick={handleMessageSubmit}
          disabled={loading}
        >
          {loading ? "PLease wait I am Thinking ...." : "Send"}
        </button>
      </div>
    </div>
  );
};
export default AzraChat;
