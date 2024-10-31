"use client"
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import fonts from "@/utils/fonts";
import { Button, CardBody, CardHeader } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import React from "react";
import {Card as NextUICard} from '@nextui-org/react';

const LandingHeaderPage = () => {
  return (

    <div className="absolute  w-full h-full ">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <BackgroundBeamsWithCollision className="w-full h-full">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <div className="h-[40rem] pt-[1rem] absolute top-0 left-0 w-full  flex items-center justify-center ">
            <TextHoverEffect text="AgenFlow" />
          </div>
          <div className="w-full h-full flex justify-center items-center ">
            <div className="grid grid-cols-10  w-full h-full items-center justify-center  max-sm:grid-cols-1 max-sm:grid-rows-10">
              <div className="col-span-1 row-span-2 w-full h-screen overflow-hidden ">
              </div>
              <div className="col-span-8 row-span-6 z-20 px-4">
                <h1
                  className={` ${fonts.poppins.className} text-7xl  text-center font-medium m-auto max-lg:text-6xl max-lg:text-start max-sm:hidden`}
                >
                  Building ideas into attractive
                  <span className="flex flex-col text-center max-lg:text-start text-gradient-to-r ">
                    Stunning reality
                  </span>
                </h1>
                <h1 className="hidden max-sm:inline-block max-sm:text-6xl">
                  We are Agenflow studios
                </h1>
                <p className="mt-6 w-[70%] font-medium  m-auto text-center max-lg:text-start max-lg:m-4 max-sm:m-1 max-sm:py-4 max-sm:text-sm">
                  Expertise in video editing, dynamic motion graphics, and
                  cutting edge web development. We craft visuals that captivate
                  the needs for our clients.
                </p>
                <div className="flex items-center justify-center  mt-6">
                  <Button
                    className="text-sm rounded-full mx-4"
                    size="md"
                    color="secondary"
                  >
                    Get in touch
                  </Button>
                  <Button
                    className="text-sm rounded-full mx-4"
                    size="md"
                    color="secondary"
                  >
                    Contact us
                  </Button>
                </div>
              </div>
              <div className="col-span-1 row-span-2">
             
              </div>
            </div>
          </div>
        </BackgroundBeamsWithCollision>
      </div>
  );
};

const CardRevealing =()=>{
  return(
    <>
    <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
        <Card title="Sheetal is Nisha" icon={<AceternityIcon />}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card title="Nisha is Munni" icon={<AceternityIcon />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card title="Munni is Aditi" icon={<AceternityIcon />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </>
  )
}

const Card = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem] "
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
 
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
 
      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  );
};
 
const AceternityIcon = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
        style={{ mixBlendMode: "darken" }}
      />
    </svg>
  );
};
 
export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

const page = () => {
  return (
    <div className="transition-colors">
      <div className="bg-white transition-colors  text-black dark:bg-darkBackground dark:text-white w-full min-h-screen h-screen relative ">
        <LandingHeaderPage />
      </div>
      <div className="">
        <CardRevealing />
      </div>
    </div>
  );
};

export default page;
