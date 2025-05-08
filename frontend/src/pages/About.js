import React from 'react';
import { Package, Palette, Heart, Star } from "lucide-react";

export default function About({ theme }) {
  // Color scheme based on Home page
  const colors = {
    dark: {
      primary: "#14846f",
      secondary: "#29ba8e",
      accent1: "#ff8667",
      accent2: "#ffa400",
      highlight: "#47e5b5",
      neutral1: "#ffffff",
      neutral2: "#ffd8a2",
      neutral3: "#4a403b",
      background: "#004548",
      secondaryBg: "#00363a",
    },
    light: {
      primary: "#14846f",
      secondary: "#29ba8e",
      accent1: "#ff8667",
      accent2: "#ffa400",
      highlight: "#47e5b5",
      neutral1: "#ffffff",
      neutral2: "#ffd8a2",
      neutral3: "#4a403b",
      background: "#ffffff",
    }
  };

  const currentColors = theme === "dark" ? colors.dark : colors.light;

  // Team members by department
  const teamMembers = {
    Coach: [
      {name: "Mrs. Vanessa Calhoun"}
    ],
    Design: [
      { name: "Sepehr Kochesfahani", position: "Lead Designer" },
      { name: "Ava Finney", position: "Lead Designer" },
      { name: "Nick Nguyen", position: "Graphic Design Specialist" },
      { name: "Jason Rivard", position: "Lead Designer" }
    ],
    Marketing: [
      { name: "Neal Joshi", position: "Marketing Director" },
      { name: "Aiden Mendoza", position: "Marketing Director" },
      { name: "Favour Gbadegesin", position: "Marketing Director" }
    ],
    Business: [
      { name: "Michael Wong", position: "Production Manager" },
      { name: "Ryan Patel", position: "Manufacturing Lead" }
    ],
    Fabrication: [
      { name: "Olivia Martinez", position: "Sales Lead" },
      { name: "Ethan Nguyen", position: "Customer Relations Specialist" }
    ]
  };

  return (
    <main className="min-h-screen transition-all duration-500 m-0 p-0 pt-16 bg-white dark:bg-[#004548] text-[#004548] dark:text-[#ffd8a2]">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#004548] dark:text-[#ffd8a2] sm:text-4xl lg:text-5xl">
            About Apeiron
          </h2>
          <p className="mt-4 text-xl text-[#14846f] dark:text-[#47e5b5]">
            Innovating Accessories for GSMST Students Since 2023
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-[#004548] dark:text-[#ffd8a2] mb-4">
              Our Story
            </h3>
            <p className="text-[#004548] text-opacity-80 dark:text-[#ffd8a2] dark:text-opacity-80 mb-4">
              Founded in 2023 at the Georgia School of Science and Technology (GSMST), Apeiron emerged from a passion to provide students with unique, high-quality accessories that reflect their creativity and school spirit.
            </p>
            <p className="text-[#004548] text-opacity-80 dark:text-[#ffd8a2] dark:text-opacity-80">
              What started as a small student-driven initiative has quickly grown into a beloved campus brand, offering everything from custom stickers and keychains to personalized t-shirts and innovative accessories.
            </p>
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: "url('/api/placeholder/600/400')",
                filter: theme === 'dark' ? 'brightness(0.7)' : 'none'
              }}
            />
          </div>
        </div>

        <div className="rounded-xl p-8 mb-16 bg-gray-50 dark:bg-[#00363a]">
          <h3 className="text-2xl font-semibold text-[#004548] dark:text-[#ffd8a2] mb-6 text-center">
            Our Mission & Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Star size={40} color={currentColors.accent2} />,
                title: "Quality",
                description: "Delivering exceptional products that exceed student expectations."
              },
              {
                icon: <Palette size={40} color={currentColors.highlight} />,
                title: "Creativity",
                description: "Empowering students to express their unique personalities through custom designs."
              },
              {
                icon: <Package size={40} color={currentColors.accent1} />,
                title: "Innovation",
                description: "Continuously exploring new design techniques and product offerings."
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="p-6 rounded-lg shadow-md bg-white dark:bg-[#004548]"
              >
                <div className="flex items-center mb-3">
                  <div className="mr-4">{item.icon}</div>
                  <h4 className="text-xl font-medium text-[#004548] dark:text-[#ffd8a2]">
                    {item.title}
                  </h4>
                </div>
                <p className="text-[#004548] text-opacity-80 dark:text-[#ffd8a2] dark:text-opacity-80">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-[#004548] dark:text-[#ffd8a2] mb-8 text-center">
            Meet Our Team
          </h3>
          {Object.entries(teamMembers).map(([department, members]) => (
            <div key={department} className="mb-10">
              <h4 className="text-xl font-semibold text-[#14846f] dark:text-[#47e5b5] mb-6">
                {department} Department
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {members.map((member, index) => (
                  <div 
                    key={index} 
                    className="text-center p-4 rounded-lg bg-gray-50 dark:bg-[#00363a]"
                  >
                    <div className="w-40 h-40 rounded-full bg-gray-300 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-gray-500 dark:text-[#ffd8a2]">
                        Photo
                      </span>
                    </div>
                    <h4 className="text-xl font-medium text-[#004548] dark:text-[#ffd8a2]">
                      {member.name}
                    </h4>
                    <p className="text-[#14846f] dark:text-[#47e5b5]">
                      {member.position}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-xl p-8 text-center bg-gray-50 dark:bg-[#00363a]">
          <h3 className="text-2xl font-semibold text-[#004548] dark:text-[#ffd8a2] mb-4">
            Ready to Explore Our Products?
          </h3>
          <p className="text-[#004548] text-opacity-80 dark:text-[#ffd8a2] dark:text-opacity-80 mb-6 max-w-2xl mx-auto">
            From custom stickers to personalized accessories, we're here to bring your creative vision to life. Check out our latest collections!
          </p>
          <button 
            className="font-semibold py-3 px-6 rounded-full transition duration-300 bg-[#14846f] text-white hover:bg-[#29ba8e] dark:bg-[#ffa400] dark:text-[#004548] dark:hover:bg-[#ff8667]"
          >
            View Products
          </button>
        </div>
      </div>
    </main>
  );
}