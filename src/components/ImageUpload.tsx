
import React, { useState, useRef } from "react";
import { Upload, X, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface ImageUploadProps {
  onImageSelected: (file: File) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageSelected }) => {
  const [dragActive, setDragActive] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    // Check if file is an image
    if (!file.type.match('image.*')) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file (JPEG, PNG, etc.)",
        variant: "destructive",
      });
      return;
    }

    // Check file size (limit to 10MB)
    if (file.size > 10 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please upload an image smaller than 10MB",
        variant: "destructive",
      });
      return;
    }

    // Create preview URL
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);

    // Pass file to parent component
    onImageSelected(file);
  };

  const clearImage = () => {
    setPreviewUrl(null);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const openFileDialog = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {previewUrl ? (
        <div className="relative rounded-lg overflow-hidden border border-border">
          <img 
            src={previewUrl} 
            alt="Plant preview" 
            className="w-full object-cover max-h-96"
          />
          <Button
            variant="destructive"
            size="icon"
            className="absolute top-2 right-2 opacity-80 hover:opacity-100"
            onClick={clearImage}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <div
          onDragEnter={handleDrag}
          onDragOver={handleDrag}
          onDragLeave={handleDrag}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-lg p-12 transition-colors cursor-pointer flex flex-col items-center justify-center 
            ${dragActive ? 'border-plant bg-plant/5' : 'border-border hover:border-plant/50 hover:bg-muted/50'}`}
          onClick={openFileDialog}
        >
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="hidden"
          />
          <div className="p-3 bg-plant/10 rounded-full mb-4">
            <Upload className="h-6 w-6 text-plant" />
          </div>
          <p className="font-medium mb-1">
            <span className="text-plant">Upload</span> an image or drag and drop
          </p>
          <p className="text-sm text-muted-foreground">
            PNG, JPG or WEBP (max. 10MB)
          </p>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
