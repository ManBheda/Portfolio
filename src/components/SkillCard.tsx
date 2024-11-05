import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  skills: string[];
}

function SkillCard({ icon: Icon, title, skills }: SkillCardProps) {
  return (
    <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-200">
      <div className="text-blue-600 dark:text-blue-400 mb-4">
        <Icon size={32} />
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillCard;