import React from "react";
import { useParams } from "react-router-dom";

// Import your service-specific pages
import MRIPage from "./pages/MRIPage";
import CTScanPage from "./pages/CTScanPage";
import XRAYPage from "./pages/XRAYPage";
import UTSoundPage from "./pages/UTSoundPage";
import TMTPage from "./pages/TMTPage";
import MammographyPage from "./pages/MammographyPage";
import Mammography2Page from "./pages/Mammography2Page";
import ECGPage from "./pages/ECGPage";
import BoneDensityPage from "./pages/BoneDensityPage";
import EEGPage from "./pages/EEGPage";
import PulmonaryFunctionTestPage from "./pages/PulmonaryFunctionTestPage";

const ServiceCategoryPage = () => {
  const { category, id } = useParams(); // Get category and id from the URL

  // Map of categories and their corresponding service pages
  const pages = {
    "radiology-test": {
      mri: <MRIPage />,
      "ct-scan": <CTScanPage />,
      "x-ray": <XRAYPage />,
      ultrasonography: <UTSoundPage />,
    },
    "special-test": {
      tmt: <TMTPage />,
      "mri-mammography": <MammographyPage />,
      mammography: <Mammography2Page />,
      ecg: <ECGPage />,
      "bone-density-test": <BoneDensityPage />,
      eeg: <EEGPage />,
      "pulmonary-function-test": <PulmonaryFunctionTestPage />,
    },
  };

  // Find the correct page component
  const categoryPages = pages[category];
  const PageComponent = categoryPages?.[id];

  if (!PageComponent) {
    return <div>Service not found</div>;
  }

  return PageComponent;
};

export default ServiceCategoryPage;
