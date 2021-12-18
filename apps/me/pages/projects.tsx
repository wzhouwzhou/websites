import React from 'react';
import NextLink from 'next/link';
import { Card, Center, Grid, Link, LinkButton, Spring, SpringChildren, Text } from 'ui';


const items = [
  {
    name: 'Dotfiles',
    link: 'https://github.com/diced/dotfiles',
    content: (
      <>My dotfiles for Arch installs.</>
    )
  },
  {
    name: 'Riptide',
    link: 'https://github.com/diced/riptide',
    content: <>A fully microserviced music bot written with Rust and JS.</>
  },
  {
    name: 'Zipline',
    link: 'https://github.com/diced/zipline',
    content: (
      <>
        The best ShareX / File uploader you could ever want, with logging, URL
        shortening, and even more.
      </>
    )
  },
  {
    name: 'Store',
    link: 'https://github.com/diced/store',
    content: (
      <>
        A Redis clone, but made in Rust and multi threaded (used to learn <Link href='https://tokio.rs'>tokio</Link>)
      </>
    )
  },
  {
    name: 'Light',
    link: 'https://github.com/diced/light',
    content: (
      <>A lighter more faster version of Zipline made in Rust with Actix Web</>
    )
  },
  {
    name: 'Edge API',
    link: 'https://edge.diced.me',
    content: (
      <>A collection of API&apos;s </>
    )
  },
  {
    name: 'ServerStats',
    link: 'https://serverstats.diced.me',
    content: (
      <>Visualize your Minecraft server statistics in realtime, a Minecraft server plugin/mod to monitor your server.</>
    )
  },
];

export default function Projects() {
  return (
    <Center>
      <Spring>
        <SpringChildren><Text variant='h3' className='mt-12 md:mt-40 text-center mb-5'>projects</Text></SpringChildren>
        <Grid className='grid-cols-1 md:grid-cols-2 mx-12 md:mx-72'>
          {items.map(({ name, link, content }) => (
            <NextLink href={link} key={name} passHref>
              <a>
                <Card>
                  <Link href={link}><Text variant='h4'>{name}</Text></Link>
                  <Text variant='p' className='mt-1'>{content}</Text>
                </Card>
              </a>
            </NextLink>
          ))}
        </Grid>
        <Center className='mt-12'>
          <SpringChildren><LinkButton href='/'>back</LinkButton></SpringChildren> 
        </Center>
      </Spring>
    </Center>
  );
}

Projects.title = 'diced - projects';
Projects.description = 'projects I have made';