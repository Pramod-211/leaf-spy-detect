
import React from "react";
import { Sprout } from "lucide-react";

interface LoadingIndicatorProps {
  message?: string;
}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ 
  message = "Analyzing your plant..." 
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-10 w-10 rounded-full border-4 border-plant-light border-t-plant animate-spin"></div>
        </div>
        <Sprout className="w-8 h-8 text-plant animate-pulse" />
      </div>
      <p className="mt-4 text-muted-foreground">{message}</p>
    </div>
  );
};

export default LoadingIndicator;
