import NextLink from 'next/link';
import { appendClass, item } from '..';

export function Link({ href, children, ...props }) {
  return (
    <NextLink href={href}>
      <a className={appendClass('text-blue-900 no-underline hover:text-blue-700 hover:underline', props.className)}>{children}</a>
    </NextLink>
  );
}