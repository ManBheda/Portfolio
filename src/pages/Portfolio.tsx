import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'web' | 'marketing' | 'iot';
}

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'marketing' | 'iot'>('all');

  const projects: Project[] = [
    {
      title: 'AllVaxConnect',
      description: 'A comprehensive platform for vaccine information and booking, featuring real-time availability updates and automated appointment scheduling.',
      image: 'https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?auto=format&fit=crop&q=80&w=800',
      tags: ['React', 'Node.js', 'MongoDB', 'WebSocket'],
      liveUrl: 'https://allvaxconnect.example.com',
      githubUrl: 'https://github.com/username/allvaxconnect',
      category: 'web'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce solution with advanced features including real-time inventory management and AI-powered product recommendations.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800',
      tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
      liveUrl: 'https://ecommerce.example.com',
      githubUrl: 'https://github.com/username/ecommerce',
      category: 'web'
    },
    {
      title: 'Smart Home IoT Dashboard',
      description: 'Real-time monitoring system for IoT devices with predictive maintenance alerts and energy optimization features.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
      tags: ['React', 'MQTT', 'Arduino', 'TensorFlow'],
      liveUrl: 'https://iot-dashboard.example.com',
      category: 'iot'
    },
    {
      title: 'Digital Marketing Analytics',
      description: 'Comprehensive marketing analytics platform providing real-time insights and automated reporting for digital campaigns.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      tags: ['Google Analytics', 'Data Visualization', 'SEO'],
      category: 'marketing'
    },
    {
      title: 'Agricultural IoT System',
      description: 'Smart farming solution using IoT sensors for monitoring soil health, irrigation, and crop growth.',
      image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80&w=800',
      tags: ['Raspberry Pi', 'Python', 'Machine Learning'],
      category: 'iot'
    },
    {
      title: 'SEO Performance Dashboard',
      description: 'Real-time SEO monitoring and optimization platform with AI-powered recommendations.',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800',
      tags: ['SEO', 'Analytics', 'React', 'Node.js'],
      category: 'marketing'
    }
  ];

  const filteredProjects = projects.filter(
    project => activeFilter === 'all' || project.category === activeFilter
  );

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'marketing', label: 'Digital Marketing' },
    { id: 'iot', label: 'IoT Solutions' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">My Portfolio</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
            Explore my latest projects spanning web development, digital marketing, and IoT solutions.
            Each project represents a unique challenge solved with innovative technology.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id as typeof activeFilter)}
                className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                      >
                        <ExternalLink size={20} className="mr-2" />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                      >
                        <Github size={20} className="mr-2" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Let's collaborate to bring your ideas to life with innovative solutions.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
          >
            Start a Project
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;