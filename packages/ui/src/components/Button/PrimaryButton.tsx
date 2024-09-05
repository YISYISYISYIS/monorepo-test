import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

export const PrimaryButton: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
  >
    {label}
  </button>
);
