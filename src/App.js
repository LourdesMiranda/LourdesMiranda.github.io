import React, { useState } from 'react';
import Header from './components/Header';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import ImageModal from './components/ImageModal';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (src, alt) => {
    setSelectedImage({ src: process.env.PUBLIC_URL + src, alt });
  };

  return (
    <div className="min-h-screen bg-space font-sans text-white">
      <div className="stars-bg pointer-events-none fixed inset-0 -z-20 animate-stars" />
      <div className="aurora-bg pointer-events-none fixed inset-0 -z-10" />
      <Header />
      <ProjectsSection onImageClick={openImage} />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
      <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  );
}

export default App;
