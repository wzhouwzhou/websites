import { container } from '..';
import { Spring } from './Spring';

export function Grid({ className, ...props }) {
  return <Spring
    variants={container}
    initial='hidden'
    animate='visible'
    className={`grid gap-3 ${className}`}
    {...props}
  />;
}