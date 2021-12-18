import React from 'react';
import { Grid, NavBar } from 'ui';
import { Center, Link, LinkButton, Spring, SpringChildren, Text } from 'ui';

const items = [
  {
    name: 'Home',
    route: '/',
  },
  {
    name: 'Download',
    route: '/download',
  },
  {
    name: 'Docs',
    route: '/docs',
  },
  {
    name: 'Github',
    route: '/github',
  },
];

const features = [
  {
    name: 'Configurable',
    desc: 'Configure your ServerStats to display the stats you want and much more.',
  },
  {
    name: 'Prometheus',
    desc: 'Collect metrics from your server with our powerful Prometheus exporter',
  },
  {
    name: 'Grafana',
    desc: 'Visualize your metrics with Grafana with our examble dashboards',
  },
  {
    name: 'Cross Server Compatibility',
    desc: 'ServerStats can be used on any server software including Bukkit/Spigot/Paper, BungeeCord/Waterfall, Velocity and Fabric. Allowing you to monitor all your servers with one simple plugin.',
  }
];

function Feature({ name, desc }) {
  return (
    <div className='w-full md:w-1/2 px-4 mb-5'>
      <div className='flex flex-col'>
        <div className='flex-1'>
          <Text variant='h5' className='font-semibold'>{name}</Text>
          <Text variant='p'>{desc}</Text>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <NavBar name='ServerStats' items={items} />
      <div className='bg-gray-1000 py-24 px-12'>
        <div className='flex flex-wrap'>
          <div className='flex flex-1 md:justify-start'>
            <Text variant='h1'>
              Server Stats
              <Text variant='h6' className='text-gray-300'>Visualize your Minecraft server statistics in realtime</Text>
            </Text>
          </div>
          <div className='flex mt-4'>
            <div>
              <Center><LinkButton href='/download'><Text variant='lg'>Download</Text></LinkButton></Center>
              <Text variant='p' className='mt-2'>Support for Spigot/Bukkit/Paper, Fabric, Bungee/Waterfall</Text>
            </div>
          </div>
        </div>
      </div>
      <div className='py-24 px-12'>
        <div className='flex'>
          <div className='flex flex-1 md:justify-start mb-6'>
            <Text variant='h2'>Features</Text>
          </div>
        </div>
        <div className='flex flex-wrap -mx-4'>
          {features.map(feature => (
            <Feature key={feature.name} {...feature} />
          ))}
        </div>
      </div>
    </>
  );
}

Home.title = 'Server Stats';
Home.description = 'Visualize your Minecraft server statistics in realtime';