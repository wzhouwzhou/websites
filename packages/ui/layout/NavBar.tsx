import { Link, Text } from '..';
import NextLink from 'next/link';
import { motion } from 'framer-motion';

export function NavButton({ name, link }) {
  return (
    <NextLink href={link}>
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="text-gray-100 no-underline rounded-md hover:bg-gray-900 p-2 cursor-pointer"
      >
        <Text variant="lg">
          {name}
        </Text>
      </motion.a>
    </NextLink>
  );
}

export function NavButtonMobile({ name, link }) {
  return (
    <NextLink href={link}>
      <motion.a
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="text-gray-100 no-underline block px-3 py-2 rounded-md hover:bg-gray-900 cursor-pointer"
      >
        <Text variant="lg">
          {name}
        </Text>
      </motion.a>
    </NextLink>
  );
}    

export function NavBar({ name, items, ...props }) {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <Link href='/'><Text variant='h6' className='font-semibold pt-1'>{name}</Text></Link>
            </div>
          </div>
          <div className="hidden sm:block absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className='flex space-x-4'>
              {items.map(item => (
                <NavButton key={item.name} name={item.name} link={item.route} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {items.map(item => (
            <NavButtonMobile key={item.name} name={item.name} link={item.route} />
          ))}
        </div>
      </div>
    </nav>
  );
}