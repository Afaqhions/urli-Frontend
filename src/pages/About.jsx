import React from 'react';
import { Target, Users, Heart, Award } from 'lucide-react';

// Importing Navbar
import Navbar from '../components/navbar';

// Importing Footer
import Footer from '../components/footer';

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Our Mission",
      description: "To make the web more accessible by providing simple, reliable, and secure URL shortening services that connect people and content effortlessly."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Community First",
      description: "We believe in building tools that serve our community. Every feature we develop is driven by user feedback and real-world needs."
    },
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: "Built with Care",
      description: "Every line of code is written with attention to detail, ensuring a smooth and delightful experience for all our users."
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from user experience to security, performance, and customer support."
    }
  ];

  const stats = [
    { number: "1M+", label: "URLs Shortened" },
    { number: "50K+", label: "Active Users" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" }
  ];

  const team = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      description: "Full-stack developer with 8+ years of experience in building scalable web applications."
    },
    {
      name: "Sarah Chen",
      role: "Lead Developer",
      description: "Frontend specialist passionate about creating intuitive user experiences and modern web technologies."
    },
    {
      name: "Mike Rodriguez",
      role: "Backend Engineer",
      description: "Systems architect focused on building robust, secure, and high-performance backend infrastructure."
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
              About
              <span className="text-blue-600"> Urli</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We're on a mission to make the web more connected and accessible through 
              simple, reliable URL shortening services built with modern technology.
            </p>
          </div>

          {/* Story Section */}
          <div className="bg-white p-12 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.1)] mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Story</h2>
              <div className="prose prose-lg mx-auto text-gray-700">
                <p className="mb-6">
                  Urli was born out of a simple frustration: existing URL shorteners were either too complex, 
                  unreliable, or came with privacy concerns. We wanted to create something different – a service 
                  that was fast, secure, and genuinely useful for everyone from individual users to large enterprises.
                </p>
                <p className="mb-6">
                  Built with the modern MERN stack (MongoDB, Express.js, React, and Node.js), Urli combines 
                  cutting-edge technology with a user-first approach. We believe that great software should be 
                  both powerful and simple to use.
                </p>
                <p>
                  Today, we're proud to serve thousands of users worldwide, helping them share content more 
                  effectively while providing the analytics and insights they need to understand their audience.
                </p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.1)] text-center">
                  <div className="mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-blue-600 p-12 rounded-2xl mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">By the Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-blue-100 text-lg">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.1)] text-center">
                  <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-white p-12 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.1)] text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-700 mb-8 text-lg">
              Have questions, feedback, or just want to say hello? We'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition duration-200">
                Contact Support
              </button>
              <button className="bg-gray-600 text-white px-8 py-3 rounded-md font-medium hover:bg-gray-700 transition duration-200">
                Send Feedback
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default About;