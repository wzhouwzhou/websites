import { motion } from 'framer-motion';
import { container, item } from '..';

export function Spring(props) {
  return <motion.div
    variants={container}
    initial='hidden'
    animate='visible'
    {...props}
  />;
}

export function SpringChildren(props) {
  return <motion.div variants={item} {...props} />
}