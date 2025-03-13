import { motion } from 'framer-motion'

const LoadingSpinner = () => {
  return (
    <div className='relative mt-10 flex items-center justify-center'>
      <motion.div
        className='h-14 w-14'
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: [0.4, 1, 0.5, 0.8] }}
      >
        <svg className='h-full w-full' viewBox='0 0 50 50'>
          <circle
            cx='25'
            cy='25'
            r='20'
            stroke='#485fb9'
            strokeWidth='3'
            strokeLinecap='round'
            fill='none'
            strokeDasharray='30'
            strokeDashoffset='50'
          />
        </svg>
      </motion.div>
    </div>
  )
}

export default LoadingSpinner
