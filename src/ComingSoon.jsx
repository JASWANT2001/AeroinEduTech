import React, { useState, useEffect } from "react";

const ComingSoon = () => {
  const calculateTimeLeft = () => {
    const launchDate = new Date("2024-11-26T00:00:00"); // Set your launch date here
    const now = new Date();
    const difference = launchDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval on unmount
  }, []);

  return (
    <div className="launching-soon-container">
      <div className="background-animation"></div>
      <div className="content">
        <div className="logo">
          {/* <img src="https://ik.imagekit.io/cjh0dpnmu/Aeroin%20Logo.png" alt="Aeroin SpaceTech" /> */}
        </div>
        <h1 className="title">Preparing for Launch</h1>
        <p className="tagline">Pioneering Space Education and Innovation</p>
        <div className="countdown">
          <div className="countdown-timer">
            {Object.keys(timeLeft).length > 0 ? (
              <>
                <div className="time-box">
                  <span className="time">{timeLeft.days}</span>
                  <span className="label"> Days</span>
                </div>
                <div className="time-box">
                  <span className="time">{timeLeft.hours}</span>
                  <span className="label"> Hours</span>
                </div>
                <div className="time-box">
                  <span className="time">{timeLeft.minutes}</span>
                  <span className="label"> Minutes</span>
                </div>
                <div className="time-box">
                  <span className="time">{timeLeft.seconds}</span>
                  <span className="label"> Seconds</span>
                </div>
              </>
            ) : (
              <p className="launch-message">We're live now!</p>
            )}
          </div>
        </div>
        <button className="notify-button">Notify Me</button>
      </div>
    </div>
  );
};

export default ComingSoon;
