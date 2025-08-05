import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import assignments from '../assets/assignments.jpg'
import pdf from '../assets/pdf-formating.jpg'
import photoediting from '../assets/photeding.jpg'
import powerpoint from '../assets/power-point.jpg'
import propresenting from '../assets/pro-presentation.jpg'
import videocuts from '../assets/video-cutes.jpg'
import videoediting from '../assets/video-edating.jpg'

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Assignment Writing",
      description: "Professional academic writing services with research-backed content and proper formatting.",
      image: assignments,
      features: ["Research & Analysis", "Proper Citations", "Original Content", "Timely Delivery"]
    },
    {
      id: 2,
      title: "PDF Formatting",
      description: "Transform your documents into professionally formatted PDFs with consistent styling.",
      image: pdf,
      features: ["Layout Design", "Typography", "Interactive Elements", "Print Ready"]
    },
    {
      id: 3,
      title: "Photo Editing",
      description: "Enhance your images with professional photo editing and retouching services.",
      image: photoediting,
      features: ["Color Correction", "Background Removal", "Retouching", "Creative Effects"]
    },
    {
      id: 4,
      title: "PowerPoint Design",
      description: "Create stunning presentations that captivate your audience and deliver your message.",
      image: powerpoint,
      features: ["Custom Templates", "Animations", "Infographics", "Brand Consistency"]
    },
    {
      id: 5,
      title: "Professional Presentations",
      description: "Comprehensive presentation solutions from concept to final delivery.",
      image: propresenting,
      features: ["Content Strategy", "Visual Design", "Speaker Notes", "Audience Analysis"]
    },
    {
      id: 6,
      title: "Video Cuts",
      description: "Precise video editing with smooth cuts and seamless transitions.",
      image: videocuts,
      features: ["Scene Transitions", "Audio Sync", "Pacing Control", "Quality Output"]
    },
    {
      id: 7,
      title: "Video Editing",
      description: "Full-service video production with professional editing and post-production.",
      image: videoediting,
      features: ["Color Grading", "Sound Design", "Motion Graphics", "Multi-format Export"]
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white py-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#697328]"   style={{
            fontFamily:
              "Great Vibes, Sacramento, Pacifico, Lobster, Brush Script MT, cursive",
          }}>
            Our Services
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Elevate your projects with our comprehensive suite of creative and professional services.
            From content creation to multimedia production, we bring your vision to life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-white backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-200 hover:border-cyan-400/50 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                {/* Floating Icon */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-cyan-500/20 backdrop-blur-md rounded-full border border-cyan-400/30 flex items-center justify-center transition-colors duration-300">
                  <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-sm"></div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-black mb-3 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-[#8b9452] rounded-full mr-3 transition-shadow duration-300"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  to={`/services/${service.id}`}
                  className="mt-6 w-full py-3 bg-gradient-to-r bg-[#8b9452] hover:text-white hover:bg-[#4b5030] text-black font-semibold rounded-lg  transform hover:translate-y-[-2px] transition-all duration-300 shadow-lg hover:shadow-bg-green-500/25 text-center block"
                >
                  Learn More
                </Link>
              </div>

              {/* Animated Border Effect */}
              
            </div>
          ))}
        </div>

        
      </div>
    </motion.div>
  )
}

export default Services
 