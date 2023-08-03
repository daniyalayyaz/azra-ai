import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { Platformdata } from "./Utils/Platform";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
function classNames(...classes) {
  return classes?.filter(Boolean).join(" ");
}
function Dropdown({
  data,
  platformSelected,
  handlePlatformMenu,
  checkbox,
  pathwaySelected,
  setSelectedPathway,
}) {
  const togglePathwaySelection = (value) => {
    if (pathwaySelected?.includes(value)) {
      setSelectedPathway(pathwaySelected?.filter((item) => item !== value));
    } else {
      setSelectedPathway([...pathwaySelected, value]);
    }
  };
  return (
    <Menu as="div" className="relative inline-block text-left w-[60%]">
      <div>
        <Menu.Button className="flex justify-between items-center md:w-[12rem] w-[100%]  rounded-xl md:border md:border-gray-300 bg-white px-2 py-2 text-[18px] mediumfont text-black shadow-sm hover:bg-gray-50 md:focus:outline-none md:focus:ring-2 md:focus:ring-[#60426c] md:focus:ring-offset-2 md:focus:ring-offset-gray-100">
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
        <Menu.Items className="absolute right-0 z-10 md:w-[12rem] w-[100%] text-[18px] mediumfont origin-top-right rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none max-h-[26rem] overflow-y-auto">
          <div className="py-1">
            {data?.map((item, index) => (
              <Menu.Item
                key={index}
                onClick={
                  checkbox
                    ? (e) => handlePlatformMenu(e, item?.value)
                    : (e) => handlePlatformMenu(e, item)
                }
              >
                {({ active }) => (
                  <div
                    className={classNames(
                      active ? "bg-black text-white rounded-xl" : "text-black ",
                      " px-4 py-4 text-sm"
                    )}
                  >
                    {checkbox && (
                      <input
                        type="checkbox"
                        className="mr-2 "
                        checked={pathwaySelected?.includes(item?.value)}
                        onChange={() => togglePathwaySelection(item?.value)}
                        readOnly
                      />
                    )}
                    {checkbox ? item?.label : item}
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
