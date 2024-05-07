import { Disclosure } from "@headlessui/react";
import { Link }       from "react-router-dom";

const navigation = [
    { name: 'Privacy Policy', href: '/' },
    { name: 'Terms & Conditions', href: '/'},
]

export const Footer = () => {
    return (
        <>
            <Disclosure as="footer" className="p-5 flex justify-between">
                <div>
                    <p>© 2024 GajahWong. All rights reserved.</p>
                </div>
                <div className="flex gap-5">
                    {navigation.map((item, index) => (
                        <Disclosure.Button 
                            key={index}
                            className="hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all duration-300"
                        >
                            <Link 
                                to={item.href}
                            >
                                {item.name}
                            </Link>
                        </Disclosure.Button>
                    ))}
                </div>
            </Disclosure>
        </>
    );
};