import { useState } from 'react';
import { ArrowLeft, ArrowRight, UserCheck, GraduationCap, Sparkles } from "lucide-react";

export default function Services({ theme }) {
  const [role, setRole] = useState(null);
  
  // Student and staff form URLs
  const studentFormUrl = "https://forms.gle/rdhNJE4pbMGh3KMV9";
  const staffFormUrl = "https://forms.gle/NqcP5WyMpjyYphQy6";
  
  // Color scheme based on provided colors in Home.js
  const colors = {
    dark: {
      primary: "#14846f",       // Main color
      secondary: "#29ba8e",     // Secondary color
      accent1: "#ff8667",       // Accent color 1
      accent2: "#ffa400",       // Accent color 2
      highlight: "#47e5b5",     // Highlight color
      neutral1: "#ffffff",      // White
      neutral2: "#ffd8a2",      // Light cream
      neutral3: "#4a403b",      // Dark brown
      background: "#004548",    // Dark teal background
      secondaryBg: "#00363a",   // Darker teal (secondary background)
    },
    light: {
      primary: "#14846f",       // Main color
      secondary: "#29ba8e",     // Secondary color
      accent1: "#ff8667",       // Accent color 1
      accent2: "#ffa400",       // Accent color 2
      highlight: "#47e5b5",     // Highlight color
      neutral1: "#ffffff",      // White
      neutral2: "#ffd8a2",      // Light cream
      neutral3: "#4a403b",      // Dark brown
      background: "#ffffff",    // White background
    }
  };

  const currentColors = theme === "dark" ? colors.dark : colors.light;
  
  // Function to handle role selection
  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
  };
  
  // Function to reset selection
  const handleReset = () => {
    setRole(null);
  };
  
  return (
    <main className="min-h-screen transition-all duration-500 m-0 p-0 pt-16 bg-white dark:bg-[#004548] text-[#004548] dark:text-[#ffd8a2]">
      {/* Hero Section with Animated Elements */}
      <section className="relative overflow-hidden min-h-[650px] m-0 p-0 pt-12 bg-white dark:bg-[#004548]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 animate-pulse">
            <Sparkles size={24} color={currentColors.accent2} />
          </div>
          <div className="absolute bottom-20 left-14 animate-bounce">
            <Sparkles size={28} color={currentColors.accent1} />
          </div>
          <div className="absolute top-40 left-20 animate-pulse">
            <Sparkles size={20} color={currentColors.highlight} />
          </div>
        </div>
        
        <div className="container mx-auto px-4 pt-12 pb-16 relative z-10">
          <div className="flex flex-col items-center">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                <span className="block">Our</span>
                <span className="block text-[#14846f] dark:text-[#ffa400]">Services</span>
              </h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Please select your role below to access the appropriate services and forms.
              </p>
            </div>
            
            {/* Role selection section */}
            {!role && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
                <button
                  onClick={() => handleRoleSelect('student')}
                  className="group p-8 rounded-2xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl bg-white border-2 border-[#ffd8a2] dark:bg-[#00363a] dark:hover:shadow-[0_0_15px_rgba(255,168,0,0.3)]"
                >
                  <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 bg-[#ffd8a2] text-[#14846f] dark:bg-[#004548] dark:text-[#ffa400] group-hover:bg-[#14846f] group-hover:text-white dark:group-hover:bg-[#ffa400] dark:group-hover:text-[#004548] transition-all duration-300">
                    <GraduationCap size={40} />
                  </div>
                  <h2 className="text-2xl font-bold mb-4 text-center text-[#004548] dark:text-[#ffd8a2]">Student</h2>
                  <p className="text-center text-lg text-[#004548] dark:text-[#ffd8a2]">
                    Access student-specific services and submit student forms
                  </p>
                  <div className="flex justify-center mt-6">
                    <span className="inline-flex items-center text-sm font-bold text-[#29ba8e] dark:text-[#47e5b5]">
                      Continue <ArrowRight size={16} className="ml-2" />
                    </span>
                  </div>
                </button>
                
                <button
                  onClick={() => handleRoleSelect('staff')}
                  className="group p-8 rounded-2xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl bg-white border-2 border-[#ffd8a2] dark:bg-[#00363a] dark:hover:shadow-[0_0_15px_rgba(255,168,0,0.3)]"
                >
                  <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 bg-[#ffd8a2] text-[#14846f] dark:bg-[#004548] dark:text-[#ffa400] group-hover:bg-[#14846f] group-hover:text-white dark:group-hover:bg-[#ffa400] dark:group-hover:text-[#004548] transition-all duration-300">
                    <UserCheck size={40} />
                  </div>
                  <h2 className="text-2xl font-bold mb-4 text-center text-[#004548] dark:text-[#ffd8a2]">Staff</h2>
                  <p className="text-center text-lg text-[#004548] dark:text-[#ffd8a2]">
                    Access staff-specific resources and submit staff forms
                  </p>
                  <div className="flex justify-center mt-6">
                    <span className="inline-flex items-center text-sm font-bold text-[#29ba8e] dark:text-[#47e5b5]">
                      Continue <ArrowRight size={16} className="ml-2" />
                    </span>
                  </div>
                </button>
              </div>
            )}
            
            {/* Display the appropriate form based on role selection */}
            {role && (
              <div className="w-full max-w-5xl">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-3xl font-bold text-[#004548] dark:text-[#ffd8a2]">
                    {role === 'student' ? 'Student Services Form' : 'Staff Services Form'}
                  </h2>
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 transform hover:scale-105 border-2 border-[#14846f] text-[#14846f] hover:bg-[#ffd8a2] dark:border-[#ffd8a2] dark:text-[#ffd8a2] dark:hover:bg-[#00363a]"
                  >
                    <ArrowLeft size={18} />
                    Back to Selection
                  </button>
                </div>
                
                <div className="p-4 rounded-2xl shadow-xl bg-[#ffd8a2] dark:bg-[#00363a]">
                  <div className="relative overflow-hidden rounded-xl">
                    <iframe 
                      src={role === 'student' ? studentFormUrl : staffFormUrl}
                      className="w-full h-screen border-0 bg-white dark:bg-white"
                      title={role === 'student' ? 'Student Form' : 'Staff Form'}
                    />
                  </div>
                </div>
                
                <div className="mt-8 text-center text-lg text-[#004548] dark:text-[#ffd8a2]">
                  <p>If you have any issues accessing this form, please contact support.</p>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Subtle gradient transition */}
        <div className="h-16 bg-gradient-to-b from-[#004548] to-[#00363a] hidden dark:block"></div>
      </section>
    </main>
  );
}