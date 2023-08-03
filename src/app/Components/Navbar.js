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
  // Define a state variable to control the visibility of the links
  const [showLinks, setShowLinks] = useState(false);

  // Function to toggle the visibility of the links
  const toggleLinks = () => {
    setShowLinks((prevShowLinks) => !prevShowLinks);
  };

  return (
    <header className="bg-[#60426c]  w-[100%]">
      <div className="flex items-center justify-between px-10 py-[20px]">
        <div className="w-[30%] md:w-[70%]">
          <Link href="/">
            <Image src={"/images/logo.png"} width={194} height={32} alt="" />
          </Link>
        </div>
        <nav>
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <button className="rounded-md" onClick={toggleLinks}>
              <FontAwesomeIcon
                icon={faBars}
                style={{ color: "white" }}
                width={20}
              />
            </button>
          </div>
          {/* Show the links when showLinks is true */}
          {showLinks && (
            <ul className="md:hidden flex flex-col items-center space-y-4 text-white semiboldfont">
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
          )}
          {/* Desktop Navigation */}
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
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
