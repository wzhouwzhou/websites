import React from 'react';
import { Grid, NavBar } from 'ui';
import { Center, LinkButton, Spring, SpringChildren, Text } from 'ui';
import { motion } from 'framer-motion';
import Link from 'next/link';

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

const desc = {
  Fabric: 'For Minecraft (1.18.x)',
  Bukkit: 'For Bukkit, Spigot, Paper, etc. (1.8+)',
  Bungee: 'For Bungeecord & Waterfall (latest)',
  Velocity: 'For Velocty (latest)'
};

export default function Downloads() {
  const [artifacts, setArtifacts] = React.useState([]);
  const [releases, setReleases] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const data = await fetch('https://download.poggers.workers.dev/dl/serverstats/latest');
      const c = await data.json();

      const data2 = await fetch('https://download.poggers.workers.dev/dl/serverstats/releases');
      const d = await data2.json();
      setArtifacts(c);
      setReleases(d.filter(x => x.version !== 'v1.1.0').filter(x => x.version !== 'v1.2.0'));
    })();
  }, []);

  return (
    <>
      <NavBar name='ServerStats' items={items} />
      <div className='bg-gray-1000 py-24 px-12'>
        <div className='flex flex-wrap'>
          <div className='flex flex-1 md:justify-start'>
            <Text variant='h1' className='text-5xl md:text-8xl'>
              Downloads
              <Text variant='h6' className='text-gray-300'>Support for Spigot/Bukkit/Paper, Fabric, Bungee/Waterfall</Text>
            </Text>
          </div>
        </div>
      </div>
      <div className='py-24 px-12'>
        <div>
          <Text variant='h2'>Pick your server software</Text>
          <Text variant='h6' className='text-gray-100'>Supporting all major minecraft server software.</Text>
        </div>
        {/* vertical list of artifacts by type name */}
        <div>
          {artifacts.map(x => (
            <Link href={x.download_url} key={x.type} passHref>
              <motion.a
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className='no-underline block px-3 py-2 rounded-md bg-gray-800 hover:bg-gray-700 m-2 cursor-pointer'
              >
                <Text variant='lg'>
                  {x.type}
                  <Text variant='lg' className='text-gray-100'>{desc[x.type]}</Text>
                </Text>
              </motion.a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}