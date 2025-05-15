
import React, { useState } from "react";
import Hero from "@/components/Hero";
import ImageUpload from "@/components/ImageUpload";
import LoadingIndicator from "@/components/LoadingIndicator";
import DiseaseResults from "@/components/DiseaseResults";
import DiseaseSummary from "@/components/DiseaseSummary";
import { Button } from "@/components/ui/button";
import { mockDetectionResult } from "@/utils/diseaseData";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [step, setStep] = useState<"intro" | "upload" | "analyzing" | "results">("intro");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [detectionResult, setDetectionResult] = useState<any>(null);
  const { toast } = useToast();

  const handleGetStarted = () => {
    setStep("upload");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleImageSelected = (file: File) => {
    setSelectedImage(file);
    // In a real app, we would upload the image and get the diagnosis
    // For demo purposes, let's simulate the process
    simulateAnalysis();
  };

  const simulateAnalysis = () => {
    setStep("analyzing");
    // Simulate API call delay
    setTimeout(() => {
      setDetectionResult(mockDetectionResult);
      setStep("results");
      toast({
        title: "Analysis Complete",
        description: "We've analyzed your plant image.",
      });
    }, 3000);
  };

  const handleReset = () => {
    setSelectedImage(null);
    setDetectionResult(null);
    setStep("upload");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <header className="border-b border-border">
        <div className="container flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <span className="text-plant font-semibold text-xl">PlantDoc</span>
          </div>
          <nav>
            <Button variant="ghost">About</Button>
            <Button variant="ghost">Disease Library</Button>
            <Button variant="ghost">Help</Button>
          </nav>
        </div>
      </header>

      <main className="container py-8">
        {step === "intro" && <Hero onGetStarted={handleGetStarted} />}

        {step === "upload" && (
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h2 className="text-2xl font-bold mb-2">Upload a Plant Image</h2>
              <p className="text-muted-foreground">
                Take a clear photo of the affected plant part (leaf, stem, fruit) for the best diagnosis
              </p>
            </div>
            <ImageUpload onImageSelected={handleImageSelected} />
          </div>
        )}

        {step === "analyzing" && <LoadingIndicator />}

        {step === "results" && detectionResult && (
          <div className="space-y-10">
            <DiseaseResults 
              detections={detectionResult.detections} 
              processingTimeMs={detectionResult.processingTimeMs}
            />

            <DiseaseSummary 
              diseaseId={detectionResult.detections[0].disease} 
            />

            <div className="flex justify-center pt-6">
              <Button onClick={handleReset} className="bg-plant hover:bg-plant-dark">
                Analyze Another Image
              </Button>
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-border mt-16">
        <div className="container py-6 text-center text-sm text-muted-foreground">
          <p>PlantDoc &copy; {new Date().getFullYear()} — Plant Disease Detection Tool</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
