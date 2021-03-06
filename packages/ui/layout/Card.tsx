import { motion } from 'framer-motion';
import { item, appendClass } from '..';

export function Card(props) {
  return (
    <motion.div
      variants={item}
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.02 }}
      className={appendClass('p-4 m-1 rounded-md bg-gray-800 h-full', props.className)}
      {...props}
    />
  )
}