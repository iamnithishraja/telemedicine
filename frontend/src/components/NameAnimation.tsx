import React, { useState, useEffect } from "react";

const NameAnimation = () => {
  const [currentLetter, setCurrentLetter] = useState(0);
  const [isWriting, setIsWriting] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isWriting) {
        if (currentLetter < name.length) {
          setCurrentLetter((prevLetter) => prevLetter + 1);
        } else {
          setIsWriting(false);
        }
      } else {
        if (currentLetter > 0) {
          setCurrentLetter((prevLetter) => prevLetter - 1);
        } else {
          setIsWriting(true);
        }
      }
    }, 200); // Adjust speed as needed

    return () => clearInterval(interval);
  }, [currentLetter, isWriting]);

  const name = "AI assocaited telemedicine kiosk for rural india";

  return (
    <div className=" p-10 name-container text-7xl ">
      <span>
        {name.substring(0, currentLetter)}
        <span className="cursor-animation">|</span>
      </span>
    </div>
  );
};

export default NameAnimation;
