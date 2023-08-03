import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function PromptMessage({ queriesData, save }) {
  return (
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
            Meet Azra Care - your companion built to support you through the
            journey of orthopaedic surgical recovery.
          </p>
          <p className="mb-2 mx-5 text-base">
            Consider me as your trusted ally, navigating the path to a speedy
            and seamless orthopedic recovery alongside you. You can ask me
          </p>
          <ul className="list-disc mx-20 ml-[4rem]">
            {queriesData?.map((query) => (
              <li className="text-gray-700 text-base" key={query}>
                {query}
              </li>
            ))}
          </ul>
          <p className="mt-2 mx-5 text-base">
            My mission is to pave an easier path for your recovery journey.
          </p>
        </div>
      </div>

      {/* Chatbot response and user questions */}
      {save?.map((ans, index) =>
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
            <div className=" rounded-b-xl rounded-tr-xl bg-slate-100 p-4 dark:bg-slate-100 sm:max-w-md md:max-w-2xl">
              {ans?.content?.split("\n").map((value, index) => (
                <p key={index}>{value}</p>
              ))}
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
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
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
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
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
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3"></path>
                </svg>
              </button>
            </div>
          </div>
        ) : (
          // Question By User

          <div key={index} className="flex flex-row-reverse items-start ">
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
              {ans?.content?.split("\n").map((value, index) => (
                <p className="text-white" key={index}>
                  {value}
                </p>
              ))}
              {/* <p className="text-white">{value?.length > 0 && value}</p> */}
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default PromptMessage;
