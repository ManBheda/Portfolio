import React from 'react';
import { Code, Globe, Database, Cpu, Lightbulb, Award } from 'lucide-react';
import TimelineItem from '../components/TimelineItem';
import SkillCard from '../components/SkillCard';

function About() {
  const skills = [
    {
      icon: Code,
      title: 'Frontend Development',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'],
    },
    {
      icon: Database,
      title: 'Backend Development',
      skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs'],
    },
    {
      icon: Globe,
      title: 'Digital Marketing',
      skills: ['SEO', 'Google Ads', 'Analytics', 'Content Strategy', 'Social Media'],
    },
    {
      icon: Cpu,
      title: 'IoT & Hardware',
      skills: ['Arduino', 'Raspberry Pi', 'Sensors', 'Embedded Systems', 'PCB Design'],
    },
  ];

  const timeline = [
    {
      year: '2024',
      title: 'Senior Full Stack Developer',
      description: 'Leading development teams and architecting scalable solutions for enterprise clients.',
    },
    {
      year: '2022',
      title: 'Digital Marketing Specialist',
      description: 'Implemented successful SEO and marketing strategies for various businesses.',
    },
    {
      year: '2020',
      title: 'IoT Solutions Developer',
      description: 'Developed innovative IoT solutions for smart home and industrial applications.',
    },
    {
      year: '2019',
      title: 'Started Freelancing',
      description: 'Began working with clients worldwide on web development and digital marketing projects.',
    },
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Smart India Hackathon Winner',
      description: 'First place in the Smart Cities track with an innovative IoT solution.',
    },
    {
      icon: Lightbulb,
      title: 'SSIP Hackathon Recognition',
      description: 'Developed a breakthrough solution for agricultural monitoring using IoT.',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-6">About Me</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                I'm a passionate developer and digital marketer with expertise in creating impactful digital solutions. 
                My journey spans across web development, IoT, and digital marketing, allowing me to bring a unique 
                perspective to every project.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
                >
                  Connect on LinkedIn
                </a>
                <a
                  href="/contact"
                  className="px-6 py-3 rounded-lg border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/50 transition-colors duration-200"
                >
                  Get in Touch
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800"
                alt="Working on laptop"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Professional Journey</h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <TimelineItem
                key={index}
                {...item}
                isLast={index === timeline.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                >
                  <div className="text-blue-600 dark:text-blue-400 mb-4">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{achievement.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;