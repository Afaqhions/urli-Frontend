import React from 'react';
import { Link2, Shield, BarChart3, Zap, Globe, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

// Importing Navbar
import Navbar from '../components/navbar';

// Importing Footer
import Footer from '../components/footer';

const Features = () => {
  const features = [
    {
      icon: <Link2 className="w-8 h-8 text-blue-600" />,
      title: "Custom Short URLs",
      description: "Create personalized short links that reflect your brand and are easy to remember."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Secure & Reliable",
      description: "Your links are protected with enterprise-grade security and 99.9% uptime guarantee."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      title: "Analytics Dashboard",
      description: "Track clicks, geographic data, and user engagement with detailed analytics."
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Lightning Fast",
      description: "Instant URL shortening with global CDN for fastest redirect speeds worldwide."
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "Global Reach",
      description: "Servers worldwide ensure your shortened URLs work perfectly anywhere on Earth."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Team Collaboration",
      description: "Share and manage links with your team members with role-based access control."
    }
  ];

  return (
    <>
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <div className="pt-20 pb-16 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Powerful Features for
              <span className="text-blue-600"> Modern URL Management</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Discover why thousands of users trust Urli for their URL shortening needs. 
              From basic link shortening to advanced analytics, we've got you covered.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_25px_rgba(0,0,0,0.15)] transition-shadow duration-300">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white p-12 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.1)]">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-700 mb-8 text-lg">
              Join thousands of users who trust Urli for their URL shortening needs.
            </p>
            <Link 
              to="/" 
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-blue-700 transition duration-200"
            >
              Start Shortening URLs
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Features;