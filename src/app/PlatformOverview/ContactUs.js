import React from "react";

function ContactUs() {
  return (
    <>
      <div
        className="flex flex-col mt-20 h-[800px]"
        style={{ backgroundColor: "#d0eae1" }}
      >
        <div className="grid grid-cols-2 text-left  h-full w-full  ">
          <div className=" w-full px-4 px-6 px-0  mt-[4rem]">
            <div className="mx-auto max-w-lg ">
              <h1 className="text-2xl  sm:text-3xl font-semibold md:ml-6">
                Get in touch with us
              </h1>
            </div>

            <form
              action=""
              className="mx-auto mt-4 mb-0 max-w-md space-y-4 font-normal text-base"
            >
              <div>
                <label for="fullname" className="text-[16px]">
                  Full Name
                </label>

                <div className="relative">
                  <input
                    type="name"
                    name="full_name"
                    className="w-full rounded-lg border p-3 pr-12 text-sm border-gray-300 shadow-sm"
                    placeholder="First Name, Last Name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="number" className="text-[16px]">
                  Phone Number
                </label>
                <div className="relative">
                  <input
                    type="name"
                    name="phone num"
                    className="w-full rounded-lg border p-3 pr-12 text-sm border-gray-300 shadow-sm"
                    placeholder="First Name, Last Name"
                  />
                </div>
              </div>
              <div>
                <label for="email" className="text-[16px]">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    className="w-full rounded-lg border p-3 pr-12 text-sm border-gray-300 shadow-sm"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div>
                <label className="text-[16px]" for="message">
                  Message
                </label>
                <textarea
                  className="w-full rounded-lg border p-3 text-sm border-gray-300"
                  placeholder="Please write your messages here"
                  rows="3"
                  id="message"
                  name="message"
                ></textarea>
              </div>

              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="w-full inline-block rounded-full bg-black md:mt-4  py-3 text-sm font-medium text-white"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className=" w-[35rem] mt-[12rem]">
            <div className="font-semibold">We respond within 24 hours</div>
            <div className="font-[16px] mt-[2rem]">
              Our tech-enabled care pathways support families, friends,
              caregivers, and community health workers to provide culturally
              sensitive care navigation, thereby improving quality scores,
              patient experience, and clinical and financial outcomes.
            </div>
            <div className="font-semibold mt-[2rem]">
              4.9 out of 5 stars from 47 reviews
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
