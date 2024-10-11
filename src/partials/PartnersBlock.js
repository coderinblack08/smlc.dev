import React from "react";

function ResourcesBlock() {
  const locations = [
    "Berryessa",
    "Seven Trees",
    "Joyce Ellington",
    "Hillview",
    "Alum Rock",
    "Willow Glen",
    "Mt Pleasant",
    "Calabazas",
    "Santa Teresa",
    "Almaden",
    "Bascom",
    "Cambrian",
  ];

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-transparent dark:border-gray-800">
          {/* Locations Section */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-red-hat-display mb-4">Locations</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Explore our partner locations across the community.
            </p>
          </div>

          {/* Locations grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
            {locations.map((location, index) => (
              <div key={index} className="text-center">
                <div className="relative inline-flex flex-col mb-4">
                  <img
                    src={
                      require(`../images/${location
                        .toLowerCase()
                        .replace(" ", "-")}.jpg`).default
                    }
                    width="200"
                    height="200"
                    alt={`${location} Location`}
                    className="rounded-lg shadow-md object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {location}
                </h3>
              </div>
            ))}
          </div>

          {/* Partners Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-red-hat-display mb-4">Partners</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              The goal of SMLC's partnerships is to engage in collaboration on
              projects and use social networking to spread the message about the
              importance of Machine Learning.
            </p>
          </div>

          {/* Partners grid */}
          <div className="max-w-sm mx-auto grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:gap-12 items-start sm:max-w-none md:max-w-2xl lg:max-w-none">
            {/* 1st partner */}
            <div className="text-center">
              <div className="relative inline-flex flex-col mb-4">
                <img
                  src={require("../images/c4t.png").default}
                  width="200"
                  height="200"
                  alt="Testimonial 04"
                />
              </div>
              <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                Code 4 Tomorrow is a non-profit organization that aims to serve
                low-income students across the world by enlisting the help of
                Bay Area high schoolers and industry professionals. C4T hopes to
                jumpstart the careers of disadvantaged youth into the computer
                science industry and is cultivating the brightest minds of
                tomorrow.
              </blockquote>
              <div className="font-red-hat-display font-bold mt-2">
                <a
                  className="text-teal-500 hover:underline transition duration-150 ease-in-out"
                  href="https://code4tomorrow.org/contact"
                >
                  Contact
                </a>
              </div>
              <div className="font-red-hat-display font-bold mt-2">
                <a
                  className="text-teal-500 hover:underline transition duration-150 ease-in-out"
                  href="https://code4tomorrow.org/about"
                >
                  Learn more
                </a>
              </div>
            </div>

            {/* 2nd partner */}
            <div className="text-center">
              <div className="relative inline-flex flex-col mb-4">
                <img
                  src={require("../images/aispectra.png").default}
                  width="200"
                  height="200"
                  alt="Testimonial 04"
                />
              </div>
              <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                AI Spectra is a STEAM outreach program that focuses on
                diversity, inclusion, and teaching applicable skills to youth
                across the country. In order to solve for the increasing lack of
                diversity in computer science, AISpectra aims to inspire young
                women and non-binary students to pursue a CS career by
                recruiting industry professionals, building community
                partnerships, and teaching real-world applicable skills to youth
                across the country.
              </blockquote>
              <div className="font-red-hat-display font-bold mt-2">
                <a
                  className="text-teal-500 hover:underline transition duration-150 ease-in-out"
                  href="https://aispectra.weebly.com/contact.html"
                >
                  Contact
                </a>
              </div>
              <div className="font-red-hat-display font-bold mt-2">
                <a
                  className="text-teal-500 hover:underline transition duration-150 ease-in-out"
                  href="https://aispectra.weebly.com/what-is-ai-spectra.html"
                >
                  Learn more
                </a>
              </div>
            </div>

            {/* 3rd partner */}
            <div className="text-center">
              <div className="relative inline-flex flex-col mb-4">
                <img
                  src={require("../images/streetcode.png").default}
                  width="200"
                  height="200"
                  alt="Testimonial 04"
                />
              </div>
              <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                StreetCode Academy aims to bridge the digital divide, empowering
                communities of color to achieve their full potential by teaching
                and sharing the skills, mindsets, and networks they need to
                embrace technology and innovation.
              </blockquote>
              <div className="font-red-hat-display font-bold mt-2">
                <a
                  className="text-teal-500 hover:underline transition duration-150 ease-in-out"
                  href="https://streetcode.org/contact/"
                >
                  Contact
                </a>
              </div>
              <div className="font-red-hat-display font-bold mt-2">
                <a
                  className="text-teal-500 hover:underline transition duration-150 ease-in-out"
                  href="https://streetcode.org/about/"
                >
                  Learn more
                </a>
              </div>
            </div>

            {/* 4th partner */}
            <div className="text-center">
              <div className="relative inline-flex flex-col mb-4">
                <img
                  src={require("../images/sjpl.png").default}
                  width="200"
                  height="200"
                  alt="Testimonial 04"
                />
              </div>
              <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                San José Public Library enriches lives by fostering lifelong
                learning and by ensuring that every member of the community has
                access to a vast array of ideas and information.
              </blockquote>
              <div className="font-red-hat-display font-bold mt-2">
                <a
                  className="text-teal-500 hover:underline transition duration-150 ease-in-out"
                  href="https://sjpl.bibliocommons.com/"
                >
                  Contact
                </a>
              </div>
              <div className="font-red-hat-display font-bold mt-2">
                <a
                  className="text-teal-500 hover:underline transition duration-150 ease-in-out"
                  href="https://sjpl.bibliocommons.com/"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResourcesBlock;
