import { CenterFull, Text } from '..';

export function FourOhFour() {
  return (
    <CenterFull>
      <div>
        <Text variant='h1' className='text-center'>
          404
        </Text>
        <Text variant='h6'>
          Page not found
        </Text>
      </div>
    </CenterFull>
  );
}