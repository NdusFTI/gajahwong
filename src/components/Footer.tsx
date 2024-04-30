import { Disclosure } from "@headlessui/react";

const navigation = [
    { name: 'Privacy Policy', href: '/' },
    { name: 'Terms & Conditions', href: '/'},
]

export const Footer = () => {
    return (
        <Disclosure as="footer" className="p-5 flex justify-between">
            <div>
                <p>© 2024 GajahWong. All rights reserved.</p>
            </div>
            <div className="flex gap-5">
                {navigation.map((item) => (
                    <Disclosure.Button className="hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all duration-300">
                        <a 
                            key={item.name}
                            href={item.href}
                        >
                            {item.name}
                        </a>
                    </Disclosure.Button>
                ))}
            </div>
        </Disclosure>
    );
};
