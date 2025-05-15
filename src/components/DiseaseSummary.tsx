
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, AlertCircle, Info, Sprout } from "lucide-react";
import { getDiseaseInfo } from "@/utils/diseaseData";

interface DiseaseSummaryProps {
  diseaseId: string;
}

const DiseaseSummary: React.FC<DiseaseSummaryProps> = ({ diseaseId }) => {
  const diseaseInfo = getDiseaseInfo(diseaseId);
  const isHealthy = diseaseId === "healthy";

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {isHealthy ? (
              <Sprout className="h-5 w-5 text-plant" />
            ) : (
              <Info className="h-5 w-5 text-amber-500" />
            )}
            {diseaseInfo.name}
          </CardTitle>
          <CardDescription>{diseaseInfo.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-medium flex items-center gap-1 mb-2">
              {isHealthy ? (
                <CheckCircle className="h-4 w-4 text-plant" />
              ) : (
                <AlertCircle className="h-4 w-4 text-amber-500" />
              )}
              {isHealthy ? "Healthy Signs" : "Symptoms"}
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              {diseaseInfo.symptoms.map((symptom, index) => (
                <li key={index}>{symptom}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium flex items-center gap-1 mb-2">
              <CheckCircle className="h-4 w-4 text-plant" />
              {isHealthy ? "Maintenance" : "Treatment"}
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              {diseaseInfo.treatment.map((treatment, index) => (
                <li key={index}>{treatment}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium flex items-center gap-1 mb-2">
              <Info className="h-4 w-4 text-muted-foreground" />
              {isHealthy ? "Keeping Plants Healthy" : "Prevention"}
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              {diseaseInfo.preventionTips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DiseaseSummary;
