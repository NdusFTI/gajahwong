import { Disclosure }              from '@headlessui/react'
import { FaXmark,FaBarsStaggered } from 'react-icons/fa6'
import { useLocation }             from 'react-router-dom';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Lokasi', href: '/lokasi'},
    { name: 'Artikel', href: '/artikel'},
    { name: 'Cuaca', href: '/cuaca'},
    { name: 'Update Bencana', href: '/bencana'},
    { name: 'Contact', href: '/contact'},
]

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

export const Navbar = () => {
    const location = useLocation();

    return (
        <Disclosure as="nav" className="shadow-lg">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all duration-300">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>

                                    {open ? (
                                        <FaXmark className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <FaBarsStaggered className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center font-bold">
                                    <h1>GajahWong</h1>
                                </div>
                                <div className="hidden sm:flex sm:justify-center sm:flex-1">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a 
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    location.pathname === item.href ? 'text-blue-500' : 'text-gray-500',
                                                    'block text-base px-3 py-2 font-medium'
                                                )}
                                                aria-current={location.pathname === item.href ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Panel */}
                    <Disclosure.Panel>
                        <div className="flex flex-col space-y-1 px-2 pb-3 pt-2 sm:px-3">
                            {navigation.map((item) => (
                                <Disclosure.Button>
                                    <a 
                                        key={item.name}
                                        href={item.href}
                                        className={classNames(
                                            location.pathname === item.href ? 'text-blue-500' : 'text-gray-500',
                                            'block text-base px-3 py-2 font-medium'
                                        )}
                                        aria-current={location.pathname === item.href ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </a>
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}