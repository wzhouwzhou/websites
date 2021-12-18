import React from 'react';
import { Text, Center, LinkButton, Card, Grid, Spring, SpringChildren, Link } from 'ui';

export default function Web() {
  return (
    <div>
      <Link href='/example'>click to go to example page</Link>
      <Text variant='h1'>h1</Text>
      <Text variant='h2'>h2</Text>
      <Text variant='h3'>h3</Text>
      <Text variant='h4'>h4</Text>
      <Text variant='h5'>h5</Text>
      <Text variant='h6'>h6</Text>
      <Text variant='lg'>lg</Text>
      <Text variant='p'>p</Text>
      <div className='m-6 p-2'>
        <Spring>
          <SpringChildren><Text variant='h1' center>h1</Text></SpringChildren>
          <SpringChildren><Text variant='h2' center>h2</Text></SpringChildren>
          <SpringChildren><Text variant='h3' center>h3</Text></SpringChildren>
          <SpringChildren><Text variant='h4' center>h4</Text></SpringChildren>
          <SpringChildren><Text variant='h5' center>h5</Text></SpringChildren>
          <SpringChildren><Text variant='h6' center>h6</Text></SpringChildren>
          <SpringChildren><Text variant='lg' center>lg</Text></SpringChildren>
          <SpringChildren><Text variant='p' center>p</Text></SpringChildren>
        </Spring>

        <Link href='/a'>hi</Link>
        <Center>
          <LinkButton href='/a'>hi</LinkButton>
        </Center>
        <Center>
          <LinkButton href='/a' className='w-full'>hi</LinkButton>
        </Center>
        
        <Grid className='grid-cols-1 md:grid-cols-2'>
          <Card>
            <Text variant='h1'>hi</Text>
            <Text variant='lg'>hi2</Text>
          </Card>
          <Card>
            <Text variant='h1'>hi</Text>
            <Text variant='lg'>hi2</Text>
          </Card>
          <Card>
            <Text variant='h1'>hi</Text>
            <Text variant='lg'>hi2</Text>
          </Card>
          <Card>
            <Text variant='h1'>hi</Text>
            <Text variant='lg'>hi2</Text>
          </Card>
        </Grid>
      </div>
    </div>
  );
}
