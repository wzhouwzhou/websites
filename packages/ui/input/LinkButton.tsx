import Link from 'next/link';
import { motion } from 'framer-motion';
import { appendClass, item } from '..';

export function LinkButton({ children, href, ...props }) {
  return (
    <Link href={href} passHref>
      <motion.a
        variants={item}
        whileTap={{ scale: 0.98 }}
        whileHover={{ scale: 1.05 }}
        className={appendClass('bg-gray-800 p-2 rounded-md', props.className)}
      >
        {children}
      </motion.a>
    </Link>
  );
}