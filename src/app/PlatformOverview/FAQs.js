import Image from "next/image";
import { useState, Fragment } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { FAQsdata } from "../Components/Utils/Questions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faRobot } from "@fortawesome/free-solid-svg-icons";

function FAQs({ data }) {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };
  return (
    <>
      <div className="absolute  md:-mt-[8.5em]  z-0 opacity-30">
        <Image src={"/faqbg.png"} width={1350} height={390} />
      </div>
      <div className=" text-center md:mt-40 mt-8 relative z-10">
        <div className="text-center w-full">
          <div className="mx-auto flex justify-center">
            <FontAwesomeIcon icon={faRobot} width={90} height={38} alt="" />
          </div>
          <h1 className="text-6xl SEMIBF p-5">FAQs</h1>
          <div className="flex justify-center">
            <p className="text-gray-700 text-xl REGULARF pb-5 w-1/2">
              We are here to answer your queries
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="  md:p-12 p-4  md:w-[60rem]">
          <Fragment>
            {FAQsdata?.map((item, index) => {
              const isOpen = open === index + 1;
              const Icon = !isOpen ? (
                <FontAwesomeIcon icon={faPlus} width={20} height={20} />
              ) : (
                <FontAwesomeIcon icon={faMinus} height={20} width={20} />
              );
              return (
                <Fragment key={index + 1}>
                  <Accordion
                    open={open === index + 1}
                    icon={Icon}
                    animate={customAnimation}
                    className="p-2"
                  >
                    <AccordionHeader
                      onClick={() => handleOpen(index + 1)}
                      className="text-black text-xl font-medium border-0"
                    >
                      {item?.question}
                    </AccordionHeader>
                    {isOpen && (
                      <AccordionBody className="text-gray-400 text-start text-[16px] REGULARF md:w-[43em] w-[20rem] py-1 mb-5">
                        {item?.answer}
                      </AccordionBody>
                    )}
                  </Accordion>
                  <div className="border-b border-gray-300 my-1" />{" "}
                  {/* Line below the description */}
                </Fragment>
              );
            })}
          </Fragment>
        </div>
      </div>
    </>
  );
}

export default FAQs;
