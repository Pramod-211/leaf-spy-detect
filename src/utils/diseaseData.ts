
interface DiseaseInfo {
  id: string;
  name: string;
  description: string;
  symptoms: string[];
  treatment: string[];
  preventionTips: string[];
}

export const diseaseLibrary: Record<string, DiseaseInfo> = {
  "apple_scab": {
    id: "apple_scab",
    name: "Apple Scab",
    description: "Apple scab is a common disease of apple trees caused by the fungus Venturia inaequalis. It affects leaves, fruits, and sometimes young shoots and buds.",
    symptoms: [
      "Olive-green to brown spots on leaves",
      "Infected fruits develop dark, scabby lesions",
      "Severely infected leaves may yellow and fall prematurely"
    ],
    treatment: [
      "Apply fungicides early in the growing season",
      "Remove and destroy fallen leaves in autumn",
      "Prune trees to improve air circulation"
    ],
    preventionTips: [
      "Plant resistant apple varieties",
      "Ensure proper spacing between trees for good airflow",
      "Avoid overhead irrigation to keep leaves dry"
    ]
  },
  "black_rot": {
    id: "black_rot",
    name: "Black Rot",
    description: "Black rot is a fungal disease that affects various fruits, particularly grapes and apples, caused by Guignardia bidwellii.",
    symptoms: [
      "Small light brown spots that enlarge and turn black",
      "Rotting fruit with concentric ring patterns",
      "Leaf spots with yellow margins"
    ],
    treatment: [
      "Apply appropriate fungicides during the growing season",
      "Remove mummified fruits and cankers from trees",
      "Prune infected branches in dry weather"
    ],
    preventionTips: [
      "Maintain good orchard sanitation",
      "Ensure adequate spacing for air circulation",
      "Apply dormant sprays before bud break"
    ]
  },
  "powdery_mildew": {
    id: "powdery_mildew",
    name: "Powdery Mildew",
    description: "Powdery mildew is a fungal disease that affects a wide range of plants, appearing as a white to gray powdery coating on leaves, stems, and sometimes fruit.",
    symptoms: [
      "White powdery coating on leaf surfaces",
      "Curled or distorted leaves",
      "Stunted growth and reduced yield"
    ],
    treatment: [
      "Apply sulfur-based fungicides or neem oil",
      "Remove and destroy heavily infected plant parts",
      "Increase air circulation around plants"
    ],
    preventionTips: [
      "Plant resistant varieties when available",
      "Avoid overhead watering",
      "Space plants properly for good air circulation"
    ]
  },
  "leaf_rust": {
    id: "leaf_rust",
    name: "Leaf Rust",
    description: "Leaf rust is caused by various fungi in the Puccinia genus and affects many plants including wheat, coffee, and ornamentals.",
    symptoms: [
      "Orange-brown pustules on leaf undersides",
      "Yellow spots on upper leaf surfaces",
      "Premature leaf drop in severe cases"
    ],
    treatment: [
      "Apply appropriate fungicides",
      "Remove and destroy infected plant material",
      "Improve air circulation"
    ],
    preventionTips: [
      "Plant resistant varieties",
      "Rotate crops to break the disease cycle",
      "Avoid overhead irrigation"
    ]
  },
  "healthy": {
    id: "healthy",
    name: "Healthy Plant",
    description: "This plant appears to be healthy with no visible signs of disease.",
    symptoms: [
      "No visible symptoms of disease",
      "Vibrant color typical for the species",
      "Normal growth pattern"
    ],
    treatment: [
      "Continue regular plant care",
      "Monitor for any changes in appearance",
      "Maintain regular feeding and watering schedule"
    ],
    preventionTips: [
      "Practice good garden hygiene",
      "Ensure proper spacing between plants",
      "Regular monitoring for early detection of issues"
    ]
  }
};

export const mockDetectionResult = {
  detections: [
    { disease: "apple_scab", confidence: 0.82 },
    { disease: "black_rot", confidence: 0.15 },
    { disease: "healthy", confidence: 0.03 }
  ],
  processingTimeMs: 1240
};

export function getDiseaseInfo(diseaseId: string): DiseaseInfo {
  return diseaseLibrary[diseaseId] || {
    id: "unknown",
    name: "Unknown Disease",
    description: "We couldn't identify this specific disease pattern.",
    symptoms: ["Various symptoms may be present"],
    treatment: ["Consult with a plant pathologist for proper identification"],
    preventionTips: ["Practice good plant hygiene and regular monitoring"]
  };
}
