export { LinkButton } from './input/LinkButton';

export { Text } from './text/Text';
export { Link } from './text/Link';

export { Center, CenterFull } from './layout/Center';
export { Card } from './layout/Card';
export { Grid } from './layout/Grid';
export { Spring, SpringChildren } from './layout/Spring';
export { NavBar } from './layout/NavBar';

export { FourOhFour } from './pages/404';
export { FiveHundred } from './pages/500';

export const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.2
    }
  }
};

export const item = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  },
};

export function appendClass(hardcoded: string, className: string) {
  return hardcoded + (className ? ' ' + className : '');
}