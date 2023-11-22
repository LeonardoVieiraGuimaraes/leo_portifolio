import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ChevronUpIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Sobre", href: "#", current: false },
  { name: "Serviços", href: "#", current: false },
  { name: "Projetos", href: "", current: false },
];

const menuItems = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

// { name: "Home", icon: <FaHome />, href: "#" },
// { name: "Sobre", icon: <FaInfoCircle />, href: "#about" },
// { name: "Serviços", icon: <FaLaptopCode />, href: "#services" },
// {
//   name: "Projetos",
//   icon: dropdownOpen ? (
//     <FaArrowUp className="transform transition-transform duration-500 rotate-180" />
//   ) : (
//     <FaArrowUp className="transform transition-transform duration-500" />
//   ),
//   href: "#projects",
// },
// { name: "Skills", icon: <FaTools />, href: "#skills" },
// { name: "Fale Comigo", icon: <FaEnvelope />, href: "#contact" },
// ];

// const projects = [
// { name: "Academicos", icon: <FaBook />, href: "#projectsAcademics" },
// {
//   name: "Desenlvolvedor",
//   icon: <FaLaptopCode />,
//   href: "#projectsDeveloper",
// },
// { name: "Video Aulas", icon: <FaVideo />, href: "#projectsProfessor" },
// ];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }: { open: boolean }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <ChevronUpIcon
                      className="block h-6 w-6 transform transition-transform duration-500 rotate-180"
                      aria-hidden="true"
                    />
                  ) : (
                    <ChevronUpIcon
                      className="block h-6 w-6 transform transition-transform duration-500 "
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="images/logo.svg"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) =>
                      item.name === "Projetos" ? (
                        // {/* dropdown */}
                        <Menu as="div" className="relative ml-3">
                          <div>
                            <Menu.Button>
                              <span className="absolute -inset-1.5" />
                              <span className="sr-only">Open user menu</span>
                              <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                {open ? (
                                  <>
                                    <ChevronUpIcon
                                      className="block h-6 w-6 transform transition-transform duration-500 rotate-180"
                                      aria-hidden="true"
                                    />
                                    {item.name}
                                  </>
                                ) : (
                                  <>
                                    <ChevronUpIcon
                                      className="block h-6 w-6 transform transition-transform duration-500 "
                                      aria-hidden="true"
                                    />
                                    {item.name}
                                  </>
                                )}
                              </Disclosure.Button>
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              {menuItems.map((item) => (
                                <Menu.Item key={item.name}>
                                  {({ active }: { active: boolean }) => (
                                    <a
                                      href={item.href}
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm text-gray-700"
                                      )}
                                    >
                                      {item.name}
                                    </a>
                                  )}
                                </Menu.Item>
                              ))}
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      ) : (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) =>
                item.name === "Projetos" ? (
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button>
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                          {open ? (
                            <>
                              <ChevronUpIcon
                                className="block h-6 w-6 transform transition-transform duration-500 rotate-180"
                                aria-hidden="true"
                              />
                              {item.name}
                            </>
                          ) : (
                            <>
                              <ChevronUpIcon
                                className="block h-6 w-6 transform transition-transform duration-500 "
                                aria-hidden="true"
                              />
                              {item.name}
                            </>
                          )}
                        </Disclosure.Button>
                      </Menu.Button>
                    </div>
                    <Transition>
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {menuItems.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }: { active: boolean }) => (
                              <a
                                href={item.href}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                {item.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                ) : (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                )
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
