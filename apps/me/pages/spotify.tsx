import React from 'react';
import Image from 'next/image';
import { Center, Link, LinkButton, Spring, SpringChildren, Text } from 'ui';

export default function Spotify() {
  const [spotify, setSpotify] = React.useState(null);

  React.useEffect(() => {
    const run = async () => {
      const res = await fetch('https://spotify.poggers.workers.dev/spotify/user/pranaco_og');
      if (!res.ok) return setSpotify(null);
      const data = await res.json();
      setSpotify(data);
    };
    const interval = setInterval(run, 5000);

    run();
    return () => clearInterval(interval);
  }, []);

  return (
    <Center>
      <Spring>
        <SpringChildren><Text variant='h3' className='mt-12 md:mt-40 text-center mb-5'>spotify</Text></SpringChildren>
        {spotify ? (
          <Spring>
            <Center>
              <Image src={spotify.item.album.images[1].url} height={spotify.item.album.images[1].height} width={spotify.item.album.images[1].width} alt={spotify.item.name} />
            </Center>
            <Link href={spotify.item.external_urls.spotify}><Text variant='h5' className='mt-4 font-semibold'>{spotify.item.name}</Text></Link>
            <Text variant='lg' className='mt-1'>{spotify.item.artists.map(x => x.name).join(', ')}</Text>
          </Spring>
        ) : <Spring><Text variant='lg'>not listening to anything</Text></Spring>}
        <Center className='mt-12'>
          <SpringChildren><LinkButton href='/'>back</LinkButton></SpringChildren> 
        </Center>
      </Spring>
    </Center>
  );
}

Spotify.title = 'diced - spotify';
Spotify.description = 'what I\'m listening to';