import React from "react";

function ContactUs() {
  return (
    <>
      <div
        className="md:flex flex-col mt-20 "
        style={{ backgroundColor: "#d0eae1" }}
      >
        <div className="mx-auto container">
          <div className="md:grid grid-cols-2 md:text-left  text-center h-full w-[100%]  px-6">
            <div className=" pt-[104px] pb-[104px]">
              <div className="mx-auto max-w-lg ">
                <h1 className="text-[2.5rem]  text-3xl semiboldfont md:ml-6">
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
                      className="md:w-[100%] rounded-lg border p-3 pr-12 text-sm border-gray-300 shadow-sm"
                      placeholder="e.g. Kelly Sullivan"
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
                      className="md:w-[100%] rounded-lg border p-3 pr-12 text-sm border-gray-300 shadow-sm"
                      placeholder="e.g. +1-912-345-6789"
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
                      className="md:w-[100%] rounded-lg border p-3 pr-12 text-sm border-gray-300 shadow-sm"
                      placeholder="e.g. example@gmail.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[16px]" for="message">
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      className="md:w-[100%]  w-[80%] rounded-lg border p-3 text-sm border-gray-300"
                      rows="3"
                      id="message"
                      name="message"
                    ></textarea>
                  </div>
                </div>

                <div className="relative">
                  <button
                    style={{ backgroundColor: "#60426c" }}
                    type="submit"
                    className="w-[11rem] inline-block rounded-xl bg-black mt-4  py-3 mediumfont text-center text-white"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            <div className=" md:w-[75%] md:mt-[12rem] regularfont  ">
              <h4 className="text-[1.5rem]">We respond within 24 hours</h4>
              <div className="text-base mt-[1rem] leading-loose" data-aos="fade-in" data-aos-delay="200">
                Our tech-enabled care pathways support families, friends,
                caregivers, and community health workers to provide culturally
                sensitive care navigation, thereby improving quality scores,
                patient experience, and clinical and financial outcomes.
              </div>
              <h6 className="semiboldfont text-[1rem] mt-[2rem]" data-aos="fade-in" data-aos-delay="400">
                4.9 out of 5 stars from 47 reviews
              </h6>
              <div data-aos="fade-in" data-aos-delay="500">
                Starts
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
