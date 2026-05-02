import React from 'react';
import { motion } from 'framer-motion';

const PageHero = ({ 
  title, 
  subtitle, 
  label, 
  primaryColor = 'var(--color-primary)', // Color por defecto
  overlayOpacity = 0.05 
}) => {
  return (
    <section 
      className="page-hero" 
      style={{ 
        '--hero-accent': primaryColor,
        position: 'relative',
        padding: '8rem 2rem 5rem',
        background: 'var(--color-white)',
        overflow: 'hidden'
      }}
    >
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{ background: `radial-gradient(circle at top right, ${primaryColor}, transparent 40%)`, opacity: overlayOpacity }} 
      />
      
      <div className="page-section__inner" style={{ position: 'relative', zIndex: 2 }}>
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-label"
          style={{ color: primaryColor, borderColor: primaryColor }}
        >
          {label}
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-[clamp(2.5rem,6vw,4rem)] font-black tracking-tighter text-[var(--color-text)] leading-[1.1]"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl text-[var(--color-text-light)] max-w-2xl"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default PageHero;