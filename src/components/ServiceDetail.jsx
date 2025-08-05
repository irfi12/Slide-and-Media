import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import assignments from '../assets/assignments.jpg';
import pdf from '../assets/pdf-formating.jpg';
import photeding from '../assets/photeding.jpg';
import powerpoint from '../assets/power-point.jpg';
import propresenting from '../assets/pro-presentation.jpg';
import videocuts from '../assets/video-cutes.jpg';
import videoediting from '../assets/video-edating.jpg';

const services = [
    {
      id: 1,
      title: "Assignment Writing",
      description: "Professional academic writing services with research-backed content and proper formatting.",
      image: assignments,
      features: ["Research & Analysis", "Proper Citations", "Original Content", "Timely Delivery", "Plagiarism-Free Guarantee", "Customized to Your Needs"],
      details: "Our assignment writing service is designed to alleviate the academic burden by providing meticulously researched and expertly crafted assignments. We cover a vast array of subjects and academic levels, ensuring that each piece of work is original, well-structured, and adheres to the highest academic standards. Our team of experienced writers is dedicated to delivering high-quality content that meets your specific requirements and deadlines, helping you achieve academic excellence."
    },
    {
      id: 2,
      title: "PDF Formatting",
      description: "Transform your documents into professionally formatted PDFs with consistent styling.",
      image: pdf,
      features: ["Layout Design", "Typography", "Interactive Elements", "Print Ready", "Brand Consistency", "Optimized for Digital & Print"],
      details: "Elevate your documents with our professional PDF formatting services. We specialize in transforming raw content into polished, visually appealing, and highly functional PDF files. Whether it's a report, e-book, or presentation, we ensure consistent branding, optimal readability, and interactive elements where needed. Our service guarantees a professional look that enhances your document's impact, suitable for both digital distribution and high-quality printing."
    },
    {
      id: 3,
      title: "Photo Editing",
      description: "Enhance your images with professional photo editing and retouching services.",
      image: photeding,
      features: ["Color Correction", "Background Removal", "Retouching", "Creative Effects", "Image Restoration", "Product Photo Enhancement"],
      details: "Unleash the full potential of your images with our comprehensive photo editing and retouching services. From subtle enhancements like color correction and exposure adjustments to complex tasks such as background removal and detailed retouching, we bring your photos to life. Our experts use industry-leading software to ensure every image is perfected, whether for personal memories, professional portfolios, or e-commerce product listings."
    },
    {
      id: 4,
      title: "PowerPoint Design",
      description: "Create stunning presentations that captivate your audience and deliver your message.",
      image: powerpoint,
      features: ["Custom Templates", "Animations", "Infographics", "Brand Consistency", "Data Visualization", "Engaging Storytelling"],
      details: "Make a lasting impression with our bespoke PowerPoint design services. We go beyond basic slides to create dynamic and engaging presentations that effectively convey your message. Our designs incorporate custom templates, compelling visuals, sophisticated animations, and clear data visualizations. We focus on storytelling to ensure your audience remains captivated and your key points are powerfully communicated, leaving a memorable impact."
    },
    {
      id: 5,
      title: "Professional Presentations",
      description: "Comprehensive presentation solutions from concept to final delivery.",
      image: propresenting,
      features: ["Content Strategy", "Visual Design", "Speaker Notes", "Audience Analysis", "Delivery Coaching", "Interactive Elements"],
      details: "Our professional presentation service offers an end-to-end solution for all your presentation needs. From initial concept development and content structuring to sophisticated visual design and the creation of detailed speaker notes, we ensure every aspect is polished. We also provide audience analysis to tailor your message for maximum impact and can offer coaching to enhance your delivery, guaranteeing a compelling and successful presentation."
    },
    {
      id: 6,
      title: "Video Cuts",
      description: "Precise video editing with smooth cuts and seamless transitions.",
      image: videocuts,
      features: ["Scene Transitions", "Audio Sync", "Pacing Control", "Quality Output", "Rough Cut Assembly", "Footage Selection"],
      details: "Our video cutting service provides precise and seamless editing to transform your raw footage into a cohesive and engaging narrative. We focus on smooth transitions, perfect audio synchronization, and optimal pacing to ensure your video flows naturally and maintains viewer interest. Ideal for short-form content, social media clips, or refining longer videos, we deliver high-quality output that meets your specific requirements."
    },
    {
      id: 7,
      title: "Video Editing",
      description: "Full-service video production with professional editing and post-production.",
      image: videoediting,
      features: ["Color Grading", "Sound Design", "Motion Graphics", "Multi-format Export", "Visual Effects", "Subtitling & Captions"],
      details: "Experience comprehensive video editing and post-production services that bring your vision to life. Our offerings include advanced color grading to set the perfect mood, professional sound design for immersive audio, and captivating motion graphics to enhance visual appeal. We handle multi-format export for various platforms and can integrate visual effects, ensuring your final video is polished, professional, and ready for any audience."
    }
  ];

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services.find((s) => s.id === parseInt(id));

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white py-20 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#697328]  mb-4"  style={{
              fontFamily: "Dancing Script, Brush Script MT, cursive",
            }}>{service.title}</h1>
        </motion.div>

        <div className="bg-gray-50 rounded-lg shadow-xl overflow-hidden">
          <img src={service.image} alt={service.title} className="w-full h-64 object-cover"/>
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Service Description</h2>
            <p className="text-gray-600 mb-6">{service.details}</p>
            
            <h3 className="text-xl font-bold text-gray-800 mb-4">Key Features</h3>
            <ul className="space-y-2">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-3 text-[#697328]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceDetail;
