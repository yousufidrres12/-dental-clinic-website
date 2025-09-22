import React from "react";

const CustomButton = ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button className="custom-ui-verse-btn" {...props}>
    {children}
  </button>
);

export default CustomButton;
