import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../utils/iconMap';

const ServiceCarousel = ({ services = [], accentColor = 'var(--color-primary)' }) => {
  if (!services || services.length === 0) return null;

  return (
    <div className="service-carousel-wrapper">
      <motion.div 
        className="flex gap-6 overflow-x-auto pb-8 snap-x"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {services.map((service, index) => (
          <motion.div 
            key={service.title || index}
            className="snap-center min-w-[300px] bg-white border border-gray-100 p-8 rounded-[var(--radius-2xl)] shadow-sm hover:shadow-md transition-shadow"
            whileHover={{ y: -5 }}
          >
            <div 
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
              style={{ backgroundColor: `${accentColor}10`, color: accentColor }}
            >
              <Icon name={service.icon} size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[var(--color-text)]">
              {service.title}
            </h3>
            <p className="text-[var(--color-text-light)] text-sm leading-relaxed">
              {service.description}
            </p>
            {service.benefits && (
              <ul className="mt-4 space-y-2">
                {service.benefits.slice(0, 3).map((b, i) => (
                  <li key={i} className="text-xs flex items-center gap-2 text-gray-500">
                    <span className="w-1 h-1 rounded-full" style={{ backgroundColor: accentColor }} />
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ServiceCarousel;