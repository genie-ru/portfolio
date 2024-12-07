import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      style={{
        padding: "10px 20px",
        backgroundColor: "#1ea7fd",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
