import React from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

type ParallaxHeroProps = {
  image: string;
  children?: React.ReactNode;
};

const ParallaxHero: React.FC<ParallaxHeroProps> = ({ image, children }) => (
  <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 w-full h-full">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95" />
    <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center fade-in">
        {children}
      </div>
    </div>
  </section>
);

export default ParallaxHero;
