'use client';

import { motion } from 'framer-motion';
import { revealVariant } from '@/data/variants';

interface SectionTagProps {
  children: React.ReactNode;
  center?: boolean;
}

export default function SectionTag({ children, center }: SectionTagProps) {
  return (
    <motion.div
      variants={revealVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        marginBottom: 60,
        justifyContent: center ? 'center' : 'flex-start',
      }}
    >
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        color: '#00ff88',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
      }}>
        {children}
      </span>
      {!center && (
        <span style={{
          display: 'block', height: 1, flex: 1,
          background: 'linear-gradient(to right, #00ff88, transparent)',
        }} />
      )}
    </motion.div>
  );
}
