import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, UserCircleIcon, XMarkIcon, ClipboardDocumentListIcon, Bars3CenterLeftIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useState } from 'react';
import LoginRegisterCard from './LoginRegisterCard';

const navigation = [
    { name: 'Manage my bookings', href: '/manage-my-booking-info', current: false, icon: ClipboardDocumentListIcon },
    { name: 'Login | Register', href: '/', current: false, icon: UserCircleIcon },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [showCard, setShowCard] = useState(false);

    const toggleLoginRegisterCard = () => {
        setShowCard(!showCard);
    };

    return (
        <>
            <Disclosure as="nav" className="bg-gray-800">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                                <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                            </DisclosureButton>
                        </div>
                        <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-start">
                            {/* Sidebar Icon */}
                            <div className="flex items-center mr-4">
                                <Bars3CenterLeftIcon className="h-6 w-6 text-gray-400 cursor-pointer hover:bg-gray-700 hover:text-white" />
                            </div>

                            {/* Logo */}
                            <div className="flex flex-shrink-0 items-center">
                                <img
                                    alt="SWIFT"
                                    src="/logo.png"
                                    className="h-8 w-auto"
                                />
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={item.name === 'Login | Register' ? (e) => {
                                            e.preventDefault(); // Prevent default link behavior
                                            toggleLoginRegisterCard();
                                        } : undefined}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'rounded-md px-3 py-2 text-sm font-medium flex items-center space-x-2'
                                        )}
                                    >
                                        <item.icon className="h-5 w-5" aria-hidden="true" />
                                        <span>{item.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <DisclosurePanel className="sm:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {navigation.map((item) => (
                            <DisclosureButton
                                key={item.name}
                                as="a"
                                href={item.href}
                                aria-current={item.current ? 'page' : undefined}
                                className={classNames(
                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                    'block rounded-md px-3 py-2 text-base font-medium',
                                )}
                            >
                                {item.name}
                            </DisclosureButton>
                        ))}
                    </div>
                </DisclosurePanel>
            </Disclosure>

            {showCard && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    {/* Clickable background */}
                    <div className="absolute inset-0 backdrop-blur-md" onClick={toggleLoginRegisterCard}></div>
                    {/* Prevent clicks on the card itself from closing the card */}
                    <div onClick={(e) => e.stopPropagation()}>
                        <LoginRegisterCard onClose={() => setShowCard(false)}/>
                    </div>
                </div>
            )}
        </>
    )
}
