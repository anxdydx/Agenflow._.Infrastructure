import ThemeToggle from "@/components/DarkModeToggle";
import fonts from "@/utils/fonts";
import React from "react";

const LandingHeaderPage = () => {
  return (
    <>
      <div className="absolute  w-full h-full">
        <div className="w-full h-full flex justify-center items-center">
          <h1 className={`${fonts.poppins.className} text-7xl font-medium`}>
            Building ideas into attractive
            <span className="flex flex-col text-center">Stunning reality</span>
          </h1>
        </div>
      </div>
    </>
  );
};

const page = () => {
  return (
    <div className="bg-white transition-colors  text-black dark:bg-darkBackground dark:text-white w-full min-h-screen relative ">
      <LandingHeaderPage />
    </div>
  );
};

export default page;
