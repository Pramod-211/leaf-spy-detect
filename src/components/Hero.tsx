
import React from "react";
import { Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  onGetStarted: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  return (
    <div className="flex flex-col items-center text-center px-4 py-16 md:py-24 max-w-4xl mx-auto">
      <div className="inline-block p-3 bg-plant-light/20 rounded-full mb-6">
        <Leaf className="w-8 h-8 text-plant-dark animate-leaf-sway" />
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
        Plant Disease Detection
      </h1>
      
      <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
        Upload a photo of your plant and get instant diagnosis of common diseases.
        Help your plants stay healthy with accurate detection and treatment advice.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          onClick={onGetStarted}
          size="lg" 
          className="bg-plant hover:bg-plant-dark text-white"
        >
          Get Started
        </Button>
        <Button 
          variant="outline" 
          size="lg" 
          className="border-plant text-plant hover:bg-plant/10"
        >
          Learn More
        </Button>
      </div>
      
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
        <div className="flex flex-col items-center p-4">
          <div className="bg-plant/10 rounded-full p-3 mb-3">
            <Leaf className="w-5 h-5 text-plant" />
          </div>
          <h3 className="font-medium mb-2">Easy Detection</h3>
          <p className="text-muted-foreground text-sm">Upload an image and get results in seconds</p>
        </div>
        <div className="flex flex-col items-center p-4">
          <div className="bg-plant/10 rounded-full p-3 mb-3">
            <Leaf className="w-5 h-5 text-plant" />
          </div>
          <h3 className="font-medium mb-2">Accurate Results</h3>
          <p className="text-muted-foreground text-sm">Powered by advanced plant pathology models</p>
        </div>
        <div className="flex flex-col items-center p-4">
          <div className="bg-plant/10 rounded-full p-3 mb-3">
            <Leaf className="w-5 h-5 text-plant" />
          </div>
          <h3 className="font-medium mb-2">Treatment Advice</h3>
          <p className="text-muted-foreground text-sm">Get actionable tips to treat and prevent diseases</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
