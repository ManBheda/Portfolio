import React from 'react';
import { ArrowRight, Code, Search, LineChart, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in">
            Hi, I'm Man Bheda
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto animate-slide-up">
            Turning Ideas into Impactful Solutions through Web Development, SEO, Digital Marketing, and IoT
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link
              to="/portfolio"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
            >
              See My Work
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/50 transition-colors duration-200"
            >
              Get in Touch
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Code size={32} />,
                title: 'Web Development',
                description: 'Building responsive and performant web applications with modern technologies.',
              },
              {
                icon: <Search size={32} />,
                title: 'SEO Optimization',
                description: 'Boosting your search engine visibility with data-driven strategies.',
              },
              {
                icon: <LineChart size={32} />,
                title: 'Digital Marketing',
                description: 'Creating impactful digital marketing campaigns that drive results.',
              },
              {
                icon: <Cpu size={32} />,
                title: 'IoT Solutions',
                description: 'Developing innovative IoT solutions for real-world problems.',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors duration-200 group"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-200">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'AllVaxConnect',
                description: 'A comprehensive platform for vaccine information and booking.',
                image: 'https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?auto=format&fit=crop&q=80&w=800',
              },
              {
                title: 'E-Commerce Platform',
                description: 'Modern e-commerce solution with advanced features.',
                image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800',
              },
              {
                title: 'IoT Dashboard',
                description: 'Real-time monitoring system for IoT devices.',
                image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-200 mb-4">{project.description}</p>
                    <Link
                      to="/portfolio"
                      className="inline-flex items-center text-white hover:text-blue-400 transition-colors duration-200"
                    >
                      View Project
                      <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '20+', label: 'Projects Completed' },
              { number: '15+', label: 'Satisfied Clients' },
              { number: '3', label: 'Hackathon Awards' },
              { number: '5+', label: 'Years Experience' },
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Start Your Next Project?</h2>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 rounded-lg bg-white text-blue-600 hover:bg-gray-100 transition-colors duration-200"
          >
            Let's Talk
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;