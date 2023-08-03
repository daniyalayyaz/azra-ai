"use client";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function SendMessage({ question, handleQuestionChange, handleMessageSubmit }) {
  const [loading, setLoading] = useState(false);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleMessageSubmit(event);
    }
  };
  return (
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
            <FontAwesomeIcon icon={faPaperPlane} style={{ color: "white" }} />
          )}
          <span className="sr-only">Send message</span>
        </button>
      </div>
    </form>
  );
}

export default SendMessage;
