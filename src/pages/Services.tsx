import React from 'react';
import { Code, Search, LineChart, Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Service {
  icon: typeof Code;
  title: string;
  description: string;
  features: string[];
  color: string;
}

function Services() {
  const services: Service[] = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.',
      features: [
        'Responsive web design',
        'Progressive Web Apps (PWA)',
        'E-commerce solutions',
        'Content Management Systems',
        'API development and integration',
        'Performance optimization'
      ],
      color: 'blue'
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Data-driven SEO strategies to improve your search engine rankings.',
      features: [
        'Keyword research and analysis',
        'On-page optimization',
        'Technical SEO audits',
        'Content strategy',
        'Local SEO optimization',
        'Performance tracking'
      ],
      color: 'green'
    },
    {
      icon: LineChart,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing solutions to grow your online presence.',
      features: [
        'Social media marketing',
        'Google Ads management',
        'Email marketing campaigns',
        'Content marketing',
        'Analytics and reporting',
        'Conversion optimization'
      ],
      color: 'purple'
    },
    {
      icon: Cpu,
      title: 'IoT Solutions',
      description: 'Innovative IoT solutions for smart homes and industrial applications.',
      features: [
        'Custom IoT device development',
        'Sensor integration',
        'Real-time monitoring systems',
        'Data analytics',
        'Automated control systems',
        'Remote management'
      ],
      color: 'orange'
    }
  ];

  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    orange: 'from-orange-500 to-orange-600'
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Services</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive solutions tailored to your needs. From web development to IoT,
              we deliver innovative and scalable results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="relative group bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br opacity-10 dark:opacity-20 transition-opacity duration-200 group-hover:opacity-15 dark:group-hover:opacity-25"
                    style={{
                      background: `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))`,
                      '--tw-gradient-from': `var(--tw-${service.color}-500)`,
                      '--tw-gradient-to': `var(--tw-${service.color}-600)`
                    }}
                  />
                  <div className="p-8">
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${colorClasses[service.color]} text-white mb-6`}>
                      <Icon size={24} />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                    >
                      Get Started
                      <ArrowRight className="ml-2" size={20} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '01', title: 'Discovery', description: 'Understanding your needs and objectives' },
              { number: '02', title: 'Planning', description: 'Developing a strategic approach' },
              { number: '03', title: 'Execution', description: 'Implementing the solution' },
              { number: '04', title: 'Maintenance', description: 'Ongoing support and optimization' }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss your project and create something amazing together.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 rounded-lg bg-white text-blue-600 hover:bg-gray-100 transition-colors duration-200"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Services;