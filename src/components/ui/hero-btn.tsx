import React from "react";

const HeroButton = ({ children, className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button className={`ui-verse-hero-btn ${className}`} {...props}>
    {children}
  </button>
);

export default HeroButton;
