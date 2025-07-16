import React from 'react';
import { Check, X } from 'lucide-react';

// Importing Navbar
import Navbar from '../components/navbar';

// Importing Footer
import Footer from '../components/footer';

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for personal use and small projects",
      features: [
        { text: "100 URLs per month", included: true },
        { text: "Basic analytics", included: true },
        { text: "Standard support", included: true },
        { text: "Custom domains", included: false },
        { text: "Team collaboration", included: false },
        { text: "Advanced analytics", included: false },
        { text: "API access", included: false }
      ],
      buttonText: "Get Started",
      buttonStyle: "bg-gray-600 hover:bg-gray-700",
      popular: false
    },
    {
      name: "Pro",
      price: "$9",
      period: "per month",
      description: "Ideal for professionals and growing businesses",
      features: [
        { text: "5,000 URLs per month", included: true },
        { text: "Advanced analytics", included: true },
        { text: "Priority support", included: true },
        { text: "Custom domains", included: true },
        { text: "Team collaboration (5 users)", included: true },
        { text: "API access", included: true },
        { text: "White-label solution", included: false }
      ],
      buttonText: "Start Free Trial",
      buttonStyle: "bg-blue-600 hover:bg-blue-700",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$49",
      period: "per month",
      description: "For large teams and enterprise solutions",
      features: [
        { text: "Unlimited URLs", included: true },
        { text: "Advanced analytics", included: true },
        { text: "24/7 dedicated support", included: true },
        { text: "Custom domains", included: true },
        { text: "Unlimited team members", included: true },
        { text: "Full API access", included: true },
        { text: "White-label solution", included: true }
      ],
      buttonText: "Contact Sales",
      buttonStyle: "bg-gray-900 hover:bg-gray-800",
      popular: false
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
              Simple, Transparent
              <span className="text-blue-600"> Pricing</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Choose the perfect plan for your needs. Start free and upgrade as you grow.
              No hidden fees, no surprises.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div key={index} className={`bg-white p-8 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.1)] relative ${plan.popular ? 'ring-2 ring-blue-600' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-700 ml-2">/{plan.period}</span>
                  </div>
                  <p className="text-gray-700">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                      )}
                      <span className={feature.included ? 'text-gray-900' : 'text-gray-500'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full text-white px-6 py-3 rounded-md font-medium transition duration-200 ${plan.buttonStyle}`}>
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="bg-white p-12 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.1)]">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Can I change plans anytime?
                </h3>
                <p className="text-gray-700">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Is there a free trial?
                </h3>
                <p className="text-gray-700">
                  Yes, all paid plans come with a 14-day free trial. No credit card required.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What payment methods do you accept?
                </h3>
                <p className="text-gray-700">
                  We accept all major credit cards, PayPal, and bank transfers for enterprise plans.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Do you offer refunds?
                </h3>
                <p className="text-gray-700">
                  Yes, we offer a 30-day money-back guarantee for all paid plans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Pricing;