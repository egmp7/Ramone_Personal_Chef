'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Nav() {

  const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Sample Menu', href: '/menu', current: false },
    { name: 'Pricing', href: '/pricing', current: false },
    { name: 'Contact', href: '#', current: false },
  ]
  return (
    <>
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="flex sm:items-center">
              <div className="sm:hidden"> 
                <Disclosure.Button className="relative">
                  <span className="absolute -inset-0.5" />
                  {open ? (
                    <XMarkIcon className="block h-12 w-12" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-12 w-12" aria-hidden="true" />)}
                  <span className="absolute -inset-0.5" />
                </Disclosure.Button>
              </div>
              <div className="flex-grow sm:hidden"></div>
              <div className="relative mt-1">

                <Image
                  className="rounded-full absolute top-2 left-4"
                  src="/world.gif"
                  width={24}
                  height={24}
                  alt="World rotating" />

                <Image
                  src="/cooking_plate.svg"
                  width={70}
                  height={30}
                  alt="Ramone logo" />
              </div>
              <div className="hidden flex-grow sm:block"></div>
              <div className='hidden sm:block'>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? 'text-black' : 'text-gray-600 hover:underline', 'pr-4'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  )
}