
import React from "react";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Leaf } from "lucide-react";
import { diseaseLibrary } from "@/utils/diseaseData";

interface Detection {
  disease: string;
  confidence: number;
}

interface DiseaseResultsProps {
  detections: Detection[];
  processingTimeMs?: number;
}

const DiseaseResults: React.FC<DiseaseResultsProps> = ({ 
  detections, 
  processingTimeMs 
}) => {
  if (!detections || detections.length === 0) {
    return null;
  }

  // Sort detections by confidence (highest first)
  const sortedDetections = [...detections].sort((a, b) => b.confidence - a.confidence);
  
  // Get the primary detection (highest confidence)
  const primaryDetection = sortedDetections[0];
  const diseaseInfo = primaryDetection ? diseaseLibrary[primaryDetection.disease] : null;

  // Format the confidence as a percentage
  const formatConfidence = (confidence: number): string => {
    return `${(confidence * 100).toFixed(1)}%`;
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <Alert className={
        primaryDetection.disease === "healthy" 
          ? "border-plant bg-plant/5" 
          : "border-amber-500 bg-amber-50 dark:bg-amber-950/20"
      }>
        <Leaf className={
          primaryDetection.disease === "healthy" 
            ? "h-4 w-4 text-plant" 
            : "h-4 w-4 text-amber-500"
        } />
        <AlertTitle>Detection Results</AlertTitle>
        <AlertDescription className="text-sm">
          {primaryDetection.disease === "healthy" 
            ? "Good news! Your plant appears to be healthy." 
            : `We've detected signs of ${diseaseInfo?.name} on your plant.`
          }
          {processingTimeMs && (
            <span className="text-xs text-muted-foreground block mt-1">
              Processed in {(processingTimeMs / 1000).toFixed(2)} seconds
            </span>
          )}
        </AlertDescription>
      </Alert>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Confidence Scores</h3>
        
        <div className="space-y-3">
          {sortedDetections.map((detection) => (
            <div key={detection.disease} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="font-medium">
                  {diseaseLibrary[detection.disease]?.name || detection.disease}
                </span>
                <span className="text-muted-foreground">
                  {formatConfidence(detection.confidence)}
                </span>
              </div>
              <Progress 
                value={detection.confidence * 100} 
                className={detection.disease === "healthy" ? "bg-muted" : "bg-muted"}
                indicatorClassName={
                  detection.disease === "healthy" 
                    ? "bg-plant" 
                    : detection.confidence > 0.5 
                      ? "bg-amber-500" 
                      : "bg-muted-foreground"
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiseaseResults;
