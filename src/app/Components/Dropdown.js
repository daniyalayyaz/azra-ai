import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { Platformdata } from "./Utils/Platform";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
function classNames(...classes) {
  return classes?.filter(Boolean).join(" ");
}
function Dropdown({ data, platformSelected, handlePlatformMenu }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex justify-between items-center md:w-[95%] w-[100%]  rounded-xl md:border md:border-gray-300 bg-white px-2 py-2 text-[18px] mediumfont text-black shadow-sm hover:bg-gray-50 md:focus:outline-none md:focus:ring-2 md:focus:ring-[#60426c] md:focus:ring-offset-2 md:focus:ring-offset-gray-100">
          <div>{platformSelected}</div>
          <FontAwesomeIcon
            icon={faAngleDown}
            width={24}
            height={24}
            alt="arrow down"
            className="-mr-1 flex justify-end "
            aria-hidden="true"
            style={{ color: "#60426c" }}
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 md:w-[95%] w-[70%] text-[18px] mediumfont origin-top-right rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {data?.map((item, index) => (
              <Menu.Item
                key={index}
                onClick={(e) => handlePlatformMenu(e, item)}
              >
                {({ active }) => (
                  <div
                    className={classNames(
                      active
                        ? "bg-black text-white rounded-xl"
                        : "text-black bg-white ",
                      " px-4 py-4 text-sm"
                    )}
                  >
                    {item}
                  </div>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default Dropdown;
