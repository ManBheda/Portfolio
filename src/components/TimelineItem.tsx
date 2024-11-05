import React from 'react';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  isLast?: boolean;
}

function TimelineItem({ year, title, description, isLast = false }: TimelineItemProps) {
  return (
    <div className="relative flex gap-6">
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400" />
        {!isLast && <div className="flex-1 w-0.5 bg-blue-600/30 dark:bg-blue-400/30" />}
      </div>
      <div className={`flex-1 pb-8 ${isLast ? '' : 'border-b border-gray-200 dark:border-gray-700'}`}>
        <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-1">{year}</div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
}

export default TimelineItem;