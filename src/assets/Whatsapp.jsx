import React from "react";
import Lottie from "lottie-react";
import whatsappAnimation from "../assets/whatsapp-animation.json"; // Import the animation file

function WhatsApp() {
  const whatsappURL = "https://wa.me/919176209914"; // Replace with your WhatsApp number

  return (
    <div
      className="chat-icon"
      onClick={() => window.open(whatsappURL, "_blank")}
      title="Chat with us on WhatsApp"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        cursor: "pointer",
        zIndex: "1000",
      }}
    >
      <Lottie
        animationData={whatsappAnimation}
        loop={true}
        autoplay={true}
        style={{ width: "80px", height: "80px" }} // Adjust size as needed
      />
    </div>
  );
}

export default WhatsApp;
