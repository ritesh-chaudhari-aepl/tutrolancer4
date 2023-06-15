
import React, { useState } from 'react';
import classNames from 'classnames';

export default function ServiceCard({ icon, text }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cardClasses = classNames('bg-lightBg-n', 'cursor-pointer', 'shadow-sm', 'w-48', 'h-28', 'justify-center', 'mx-auto', 'my-4', 'rounded-md', {
    'hover:bg-btnColor': isHovered,
    'hover:shadow-lg': isHovered,
  });

  const iconClasses = classNames('p-3 text-btnColor', {
    'text-[#fff]': isHovered,
  });

  return (
    <div
      className={cardClasses}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={iconClasses}>{icon}</div>
      <div className={`p-3 font-normal ${isHovered ? 'text-lightBg-n' : ''}`}>{text}</div>
    </div>
  );
}
