"use client";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import TypeWritterEffect from "./TypeWritterEffect";

interface IProps {
  className?: string;
}
const Banner: React.FC<IProps> = ({ className }) => {
  return (
    <div className={`banner ${className}`}>
      <div className="container">
        <div className="h-screen w-full">
          <div className="flex h-full flex-col items-center justify-center">
            <h2 className="text-5xl">Hello I&apos;m</h2>
            <div className="full_name">
              <motion.div
                // animate={{ rotate: 180 }}
                transition={{ type: "spring" }}
              >
                <h1 className="text-9xl stroke_font">
                  <span className="stroke_font_1">Minhazur </span>
                  <span className="stroke_font_2">Akash</span>
                </h1>
              </motion.div>
            </div>
            <div className="flex justify-center my-10 pb-5">
              <TypeWritterEffect />
            </div>
            <div className="flex gap-5 justify-center">
              <Button
                variant="contained"
                color="inherit"
                className="text-black text-xl"
                size="large"
              >
                Say Hello
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                className="text-xl"
                size="large"
              >
                About Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
