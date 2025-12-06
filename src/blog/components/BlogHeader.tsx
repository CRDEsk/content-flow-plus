import { motion } from 'framer-motion';
import { BookOpen, Sparkles } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const BlogHeader = () => {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden bg-black border-b border-zinc-800/30"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950/50 via-transparent to-zinc-950/50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon with enhanced glow */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              delay: 0.2, 
              type: 'spring',
              stiffness: 200,
              damping: 15
            }}
            className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-primary via-primary/90 to-primary/80 mb-8 shadow-2xl shadow-primary/40 relative"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-primary/30 blur-xl animate-pulse" />
            <BookOpen className="w-10 h-10 md:w-12 md:h-12 text-black relative z-10" strokeWidth={2.5} />
          </motion.div>

          {/* Title with better typography */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight tracking-tight"
          >
            <span className="block">{t('blog.header.title').split(' ').slice(0, 3).join(' ')}</span>
            <span className="block bg-gradient-to-r from-primary via-primary/90 to-primary bg-clip-text text-transparent">
              {t('blog.header.title').split(' ').slice(3).join(' ')}
            </span>
          </motion.h1>

          {/* Subtitle with better styling */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg md:text-xl lg:text-2xl text-zinc-300 max-w-3xl mx-auto leading-relaxed font-light"
          >
            {t('blog.header.subtitle')}
          </motion.p>

          {/* Enhanced decorative elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex items-center justify-center gap-3 mt-10"
          >
            <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-primary drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]" />
            <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-primary/40 to-transparent relative">
              <div className="absolute inset-0 bg-primary/20 blur-sm" />
            </div>
            <div className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(234,179,8,0.8)]" />
            <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-primary/40 to-transparent relative">
              <div className="absolute inset-0 bg-primary/20 blur-sm" />
            </div>
            <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-primary drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogHeader;

