import React from "react";
import { useLocation } from "react-router-dom";

const GameScreen = () => {
  const location = useLocation();
  const difficulty = location.state?.difficulty || "Unknown";

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(145deg, #141e30, #35577d)",
        fontFamily: " 'Irish Grover' , sans-serif",
        color: "#f5f5f5",
      }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.12)",
          backdropFilter: "blur(12px)",
          borderRadius: "20px",
          padding: "3rem 4rem",
          textAlign: "center",
          boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
          maxWidth: "420px",
          width: "90%",
        }}
      >
        <h1
          style={{
            fontSize: "2.6rem",
            marginBottom: "1.2rem",
            letterSpacing: "2px",
            fontWeight: "400",
            textShadow: "0 3px 8px rgba(0,0,0,0.35)",
          }}
        >
          🎮 Game Page
        </h1>

        <p
          style={{
            fontSize: "1.15rem",
            marginBottom: "0.6rem",
            color: "#e5e5e5",
            letterSpacing: "0.5px",
          }}
        >
          Selected Difficulty
        </p>

        <div
          style={{
            marginTop: "0.7rem",
            padding: "0.5rem 1.4rem",
            borderRadius: "28px",
            display: "inline-block",
            background: "linear-gradient(135deg, #716d8524, #3e3a4ca7)",
            fontSize: "1.25rem",
            fontWeight: "400",
            letterSpacing: "1px",
          }}
        >
          {difficulty}
        </div>
      </div>
    </div>
  );
};

export default GameScreen;
