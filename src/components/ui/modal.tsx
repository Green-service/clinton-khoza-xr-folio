import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  type?: 'success' | 'error';
}

export function Modal({ isOpen, onClose, title, message, type = 'success' }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md"
          >
            <div className="relative glass-panel rounded-xl p-6 overflow-hidden">
              {/* Gradient background */}
              <div className={`absolute inset-0 ${
                type === 'success' 
                  ? 'bg-gradient-to-br from-green-500/20 to-transparent' 
                  : 'bg-gradient-to-br from-red-500/20 to-transparent'
              }`} />
              
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5 text-white/70" />
              </button>
              
              {/* Content */}
              <div className="relative">
                <h3 className={`font-orbitron text-xl font-semibold mb-2 ${
                  type === 'success' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {title}
                </h3>
                <p className="text-white/80 font-inter">
                  {message}
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 