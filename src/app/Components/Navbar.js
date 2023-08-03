// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Image from "next/image";
// import Link from "next/link";

// const Navbar = () => (
//   <header className="bg-transparent border-white-200 md:mx-[6rem] px-4">
//     <div className="container mx-auto">
//       <div className=" flex items-center justify-between py-[50px] ">
//         <div className="w-[30%] md:w-[70%]">
//           <Link href="/">
//             <Image
//               src={"/images/logo.png"}
//               width={194}
//               height={32}
//               alt=""
//             ></Image>
//           </Link>
//         </div>
//         <nav>
//           <ul className="hidden flex items-center space-x-8 pt-[13px] pb-[20px] text-white semiboldfont">
//             <li>
//               <Link href="/">
//                 <p>Home</p>
//               </Link>
//             </li>

//             <li>
//               <Link href="/chatbot">
//                 <p>Chat</p>
//               </Link>
//             </li>
//           </ul>
//           <div className="md:hidden">
//             <button
//               className="rounded-md"
//               //  onClick={togglebars(true)}
//             >
//               <FontAwesomeIcon
//                 icon={faBars}
//                 style={{ color: "white" }}
//                 width={20}
//               />
//             </button>
//           </div>
//           {/* <ul className="nav-links md:flex md:items-center md:justify-between md:hidden">
//             <li>
//               <Link href="/">
//                 <p>Home</p>
//               </Link>
//             </li>

//             <li>
//               <Link href="/chatbot">
//                 <p>Chat</p>
//               </Link>
//             </li>
//           </ul> */}
//         </nav>
//       </div>
//     </div>
//   </header>
// );

// export default Navbar;
"use client";
import { useState } from "react"; // Import the useState hook
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };
  // Define a state variable to control the visibility of the links
  const [showLinks, setShowLinks] = useState(false);

  // Function to toggle the visibility of the links
  const toggleLinks = () => {
    setShowLinks((prevShowLinks) => !prevShowLinks);
  };

  return (
    <>
      <div
        className="flex rounded-2xl   text-white  md:px-8 md:py-4 px-2 py-2  items-center md:block hidden"
        style={{
          background: "linear-gradient(to left, #60426c 70%, #292626 100%)",
        }}
      >
        <div className="flex justify-between">
          <div className="">
            <Link href="/" className=" flex ">
              <Image src={"/images/logo.png"} width={170} height={25} alt=" " />
            </Link>
          </div>

          <div className="flex items-center space-x-2 ">
            <ul className="hidden md:flex items-center space-x-8 pt-[13px] pb-[20px] text-white semiboldfont">
              <li>
                <Link href="/">
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link href="/chatbot">
                  <p>Chat</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <nav
        className=" block md:hidden border-gray-200 dark:bg-gray-900"
        style={{
          background: "linear-gradient(to left, #60426c 70%, #292626 100%)",
        }}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="w-[50%]">
            <Link href="/" className=" flex ">
              <Image src={"/images/logo.png"} width={170} height={25} alt=" " />
            </Link>
          </div>
          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
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
            <ul className="mediumfont flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className="py-4">
                <Link href="/">
                  <p>Home</p>
                </Link>
              </li>
              {/* <div className="border border-slate-300"></div> */}
              <li>
                <Link href="/chatbot">
                  <p>Chat</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
