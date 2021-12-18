import React from 'react';
import { CenterFull, Grid, LinkButton, Spring, SpringChildren, Text } from 'ui';

export default function Home() {
  return (
    <>
      <CenterFull>
        <Spring>
          <SpringChildren><Text variant='h2'>dicedtomato</Text></SpringChildren>
          <SpringChildren><Text variant='h6'>I create random stuff.</Text></SpringChildren>
          <Grid className='grid-cols-1'>
            <LinkButton href='/projects'><Text variant='lg'>projects</Text></LinkButton>
            <LinkButton href='/github'><Text variant='lg'>github</Text></LinkButton>
            <LinkButton href='/spotify'><Text variant='lg'>spotify</Text></LinkButton>
          </Grid>
        </Spring>
      </CenterFull>
    </>
  );
}