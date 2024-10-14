"use client";
import { Typewriter } from "react-simple-typewriter";

const TypeWritterEffect = () => {
  return (
    <h2 className="text-3xl">
      A Passionate{" "}
      <span style={{ fontWeight: "bold", fontSize: 35 }}>
        <Typewriter
          words={[
            "Web Developer!",
            "Fontend Developer!",
            "Coder!",
            "Freelancer!",
          ]}
          loop={5}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
    </h2>
  );
};

export default TypeWritterEffect;
