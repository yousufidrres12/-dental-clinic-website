import React from "react";

const HeroButtonOutline = ({ children, className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button className={`ui-verse-hero-btn-outline ${className}`} {...props}>
    {children}
  </button>
);

export default HeroButtonOutline;
