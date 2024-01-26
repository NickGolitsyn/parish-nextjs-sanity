"use client";

import { Fragment } from "react";
import { Menu, Transition, Disclosure } from "@headlessui/react";
import Container from "@/components/container";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/lib/sanity/image";
import cx from "clsx";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { myLoader } from "@/utils/all";

export default function Navbar(props) {

  const menu = [
    {
      label: "Home",
      href: "/"
    },
    {
      label: "About",
      href: "/about"
    },
    {
      label: "Contact",
      href: "/#contact"
    },
    {
      label: "Services",
      href: "/services"
    },
    {
      label: "Sunday School",
      href: "/sunday-school"
    },
    // {
    //   label: "Gallery",
    //   href: "/gallery"
    // },
    {
      label: "Donate",
      href: "https://www.paypal.com/paypalme/nickgolitsyn",
      external: true
    },
    {
      label: "Archive",
      children: [{
        title: "Services",
        path: "/archive/services"
      },
      {
        title: "Activities",
        path: "/archive/activities"
      }] 
    },
  ];

  return (
    <div className="py-1 md:py-1 lg:py-1 bg-navbar">
      <nav className="flex flex-wrap justify-center md:flex-nowrap md:gap-10">
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex gap-4 w-fit flex-col">
                  <Image
                    className="rounded-sm absolute left-0 top-0"
                    {...urlForImage(props.logo)}
                    alt="Logo"
                    priority={true}
                    height={100}
                    width={100}
                  />
                  <Image
                    className="rounded-sm absolute right-0 top-0"
                    {...urlForImage(props.logoalt)}
                    alt="Logo"
                    priority={true}
                    height={100}
                    width={100}
                  />
                  <Disclosure.Button
                    aria-label="Toggle Menu"
                    className="ml-auto scale-150 rounded-md px-2 py-1 text-black focus:text-blue-500 focus:outline-none dark:text-gray-300 md:hidden ">
                    <svg
                      className="h-6 w-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24">
                      {open && (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                        />
                      )}
                      {!open && (
                        <path
                          fillRule="evenodd"
                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        />
                      )}
                    </svg>
                  </Disclosure.Button>


                {/* <p className="hidden max-w-[10rem] text-sm self-center text-gray-600">“Holy Martyr Philothea and Saint Bede the Venerable” Parish</p> */}

                <div className="order-2 hidden w-full flex-col items-center justify-start md:order-none md:flex md:w-auto md:flex-1 md:flex-row">
                  {menu.map((item, index) => (
                    <Fragment key={`${item.label}${index}`}>
                      {item.children && item.children.length > 0 ? (
                        <DropdownMenu
                          menu={item}
                          key={`${item.label}${index}`}
                          items={item.children}
                        />
                      ) : (
                        // Normal navitems
                        <Link
                          href={item.href}
                          key={`${item.label}${index}`}
                          className="px-5 py-2 text-xs lg:text-base font-semibold uppercase text-center text-black hover:text-blue-500 dark:text-gray-400"
                          target={item.external ? "_blank" : ""}
                          rel={item.external ? "noopener" : ""}>
                          <span> {item.label}</span>
                          {item.badge && (
                            <span className="ml-2 rounded bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-600 dark:bg-cyan-200 dark:text-blue-800 ">
                              {item.badge}
                            </span>
                          )}
                        </Link>
                      )}
                    </Fragment>
                  ))}
                </div>
              </div>
              <Disclosure.Panel>
                <div className="order-2 -ml-4 mt-4 flex w-full flex-col items-center justify-start md:hidden">
                  {menu.map((item, index) => (
                    <Fragment key={`${item.label}${index}`}>
                      {item.children && item.children.length > 0 ? (
                        <DropdownMenu
                          menu={item}
                          key={`${item.label}${index}`}
                          items={item.children}
                          mobile={true}
                        />
                      ) : (
                        // Normal mobile text
                        <Link
                          href={item.href}
                          key={`${item.label}${index}`}
                          className="w-full px-5 py-2 text-xs lg:text-base uppercase font-semibold text-black hover:text-blue-500 dark:text-gray-400"
                          target={item.external ? "_blank" : ""}
                          rel={item.external ? "noopener" : ""}>
                          {item.label}
                        </Link>
                      )}
                    </Fragment>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </nav>
    </div>
  );
}

const DropdownMenu = ({ menu, items, mobile }) => {
  return (
    <Menu
      as="div"
      className={cx("relative text-left", mobile && "w-full")}>
      {({ open }) => (
        <>
          <Menu.Button
            className={cx(
              "flex items-center gap-x-1 rounded-md px-5 py-2 text-m font-semibold text-xs lg:text-base outline-none transition-all focus:outline-none focus-visible:text-indigo-500 focus-visible:ring-1 dark:focus-visible:bg-gray-800 uppercase",
              open
                ? "text-blue-500 hover:text-blue-500"
                : " text-black dark:text-gray-400 ",
              mobile ? "w-full px-4 py-2 " : "inline-block px-4 py-2"
            )}>
            <span>{menu.label}</span>
            <ChevronDownIcon className="mt-0.5 h-4 w-4" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="lg:transition lg:ease-out lg:duration-100"
            enterFrom="lg:transform lg:opacity-0 lg:scale-95"
            enterTo="lg:transform lg:opacity-100 lg:scale-100"
            leave="lg:transition lg:ease-in lg:duration-75"
            leaveFrom="lg:transform lg:opacity-100 lg:scale-100"
            leaveTo="lg:transform lg:opacity-0 lg:scale-95">
            <Menu.Items
              className={cx(
                "z-20 origin-top-left rounded-md  focus:outline-none  lg:absolute lg:left-0  lg:w-56",
                !mobile && "bg-white shadow-lg  dark:bg-gray-800"
              )}>
              <div className={cx(!mobile && "py-3")}>
                {items.map((item, index) => (
                  <Menu.Item as="div" key={`${item.title}${index}`}>
                    {({ active }) => (
                      // mobile drop links
                      <Link
                        href={item?.path ? item.path : "#"}
                        className={cx(
                          "flex items-center space-x-2 px-5 py-2 uppercase font-semibold text-xs lg:text-base lg:space-x-4",
                          active
                            ? "text-blue-500"
                            : "text-black hover:text-blue-500 focus:text-blue-500 dark:text-gray-300"
                        )}>
                        <span> {item.title}</span>
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

// import { Fragment } from 'react'
// import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

// const menu = [
//   { name: 'Dashboard', href: '#', current: true },
//   { name: 'Team', href: '#', current: false },
//   { name: 'Projects', href: '#', current: false },
//   { name: 'Calendar', href: '#', current: false },
// ]

// const navigation = [
//       {
//         name: "Home",
//         href: "/",
//         current: true
//       },
//       {
//         name: "About",
//         current: false,
//         children: [{
//           title: "About our parish",
//           path: "/about"
//         },
//         {
//           title: "About our saints",
//           path: "/about/saints"
//         }] 
//       },
//       {
//         name: "Contact",
//         href: "/#contact",
//         current: false
//       },
//       {
//         name: "Services",
//         href: "/services",
//         current: false
//       },
//       {
//         name: "Sunday School",
//         href: "/sunday-school",
//         current: false
//       },
//       // {
//       //   label: "Gallery",
//       //   href: "/gallery"
//       // },
//       {
//         name: "Donate",
//         href: "https://www.paypal.com/paypalme/nickgolitsyn",
//         external: true,
//         current: false
//       },
//       {
//         name: "Archive",
//         current: false,
//         children: [{
//           title: "Services",
//           path: "/archive/services"
//         },
//         {
//           title: "Activities",
//           path: "/archive/activities"
//         }] 
//       },
//     ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function Navbar(props) {
//   return (
//     <>
//     <Disclosure as="nav" className="bg-navbar">
//       {({ open }) => (
//         <>
//           <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//             <div className="relative flex h-16 items-center justify-between">
//               <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//                 {/* Mobile menu button*/}
//                 <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                   <span className="absolute -inset-0.5" />
//                   <span className="sr-only">Open main menu</span>
//                   {open ? (
//                     <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//                   ) : (
//                     <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//                   )}
//                 </Disclosure.Button>
//               </div>
//               <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//                 <div className="flex flex-shrink-0 items-center">
//                 </div>
//                 <div className="hidden sm:ml-6 sm:block">
//                   <div className="flex space-x-4">
//                   {navigation.map((item, index) => (
//                     <Fragment key={`${item.name}${index}`}>
//                       {item.children && item.children.length > 0 ? (
//                         <DropdownMenu
//                           menu={item}
//                           key={`${item.name}${index}`}
//                           items={item.children}
//                         />
//                       ) : (
//                         // Normal navitems
//                         <Link
//                           href={item.href}
//                           key={`${item.name}${index}`}
//                           className="px-5 py-2 text-xs lg:text-base font-semibold uppercase text-center text-black hover:text-blue-500 dark:text-gray-400"
//                           target={item.external ? "_blank" : ""}
//                           rel={item.external ? "noopener" : ""}>
//                           <span> {item.name}</span>
//                           {item.badge && (
//                             <span className="ml-2 rounded bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-600 dark:bg-cyan-200 dark:text-blue-800 ">
//                               {item.badge}
//                             </span>
//                           )}
//                         </Link>
//                       )}
//                     </Fragment>
//                   ))}
//                     {/* {navigation.map((item) => (
//                       <a
//                         key={item.name}
//                         href={item.href}
//                         className={classNames(
//                           item.current ? 'bg-darker-golden text-white' : 'text-gray-300 hover:bg-dark-golden hover:text-white',
//                           'rounded-md px-3 py-2 text-sm font-medium cursor-pointer'
//                         )}
//                         aria-current={item.current ? 'page' : undefined}
//                       >
//                         {item.name}
//                       </a>
//                     ))} */}
//                   </div>
//                 </div>
//               </div>
//               <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

//                 {/* Profile dropdown */}
//                 <Menu as="div" className="relative ml-3">
//                   <div>
//                     <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//                       <span className="absolute -inset-1.5" />
//                       <span className="sr-only">Open user menu</span>
//                       <img
//                         className="h-8 w-8 rounded-full"
//                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                         alt=""
//                       />
//                     </Menu.Button>
//                   </div>
//                   <Transition
//                     as={Fragment}
//                     enter="transition ease-out duration-100"
//                     enterFrom="transform opacity-0 scale-95"
//                     enterTo="transform opacity-100 scale-100"
//                     leave="transition ease-in duration-75"
//                     leaveFrom="transform opacity-100 scale-100"
//                     leaveTo="transform opacity-0 scale-95"
//                   >
//                     <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                       <Menu.Item>
//                         {({ active }) => (
//                           <a
//                             href="#"
//                             className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
//                           >
//                             Your Profile
//                           </a>
//                         )}
//                       </Menu.Item>
//                       <Menu.Item>
//                         {({ active }) => (
//                           <a
//                             href="#"
//                             className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
//                           >
//                             Settings
//                           </a>
//                         )}
//                       </Menu.Item>
//                       <Menu.Item>
//                         {({ active }) => (
//                           <a
//                             href="#"
//                             className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
//                           >
//                             Sign out
//                           </a>
//                         )}
//                       </Menu.Item>
//                     </Menu.Items>
//                   </Transition>
//                 </Menu>
//               </div>
//             </div>
//           </div>

//           <Disclosure.Panel className="sm:hidden">
//             <div className="space-y-1 px-2 pb-3 pt-2">
//               {navigation.map((item) => (
//                 <Disclosure.Button
//                   key={item.name}
//                   as="a"
//                   href={item.href}
//                   className={classNames(
//                     item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                     'block rounded-md px-3 py-2 text-base font-medium'
//                   )}
//                   aria-current={item.current ? 'page' : undefined}
//                 >
//                   {item.name}
//                 </Disclosure.Button>
//               ))}
//             </div>
//           </Disclosure.Panel>
//         </>
//       )}
//     </Disclosure>
//     <Image
//       className="rounded-lg absolute left-0 top-0"
//       {...urlForImage(props.logo)}
//       alt="Logo"
//       priority={true}
//       height={100}
//       width={100}
//     />
//     <Image
//       className="rounded-lg absolute right-0 top-0"
//       {...urlForImage(props.logo)}
//       alt="Logo"
//       priority={true}
//       height={100}
//       width={100}
//     />
//     </>
//   )
// }


// const DropdownMenu = ({ menu, items, mobile }) => {
//   return (
//     <Menu
//       as="div"
//       className={cx("relative text-left", mobile && "w-full")}>
//       {({ open }) => (
//         <>
//           <Menu.Button
//             className={cx(
//               "flex items-center gap-x-1 rounded-md px-5 py-2 text-m font-semibold text-xs lg:text-base outline-none transition-all focus:outline-none focus-visible:text-indigo-500 focus-visible:ring-1 dark:focus-visible:bg-gray-800 uppercase",
//               open
//                 ? "text-blue-500 hover:text-blue-500"
//                 : " text-black dark:text-gray-400 ",
//               mobile ? "w-full px-4 py-2 " : "inline-block px-4 py-2"
//             )}
//             >
//             <span>{menu.name}</span>
//             <ChevronDownIcon className="mt-0.5 h-4 w-4" />
//           </Menu.Button>
//           <Transition
//             as={Fragment}
//             enter="lg:transition lg:ease-out lg:duration-100"
//             enterFrom="lg:transform lg:opacity-0 lg:scale-95"
//             enterTo="lg:transform lg:opacity-100 lg:scale-100"
//             leave="lg:transition lg:ease-in lg:duration-75"
//             leaveFrom="lg:transform lg:opacity-100 lg:scale-100"
//             leaveTo="lg:transform lg:opacity-0 lg:scale-95">
//             <Menu.Items
//               className={cx(
//                 "z-20 origin-top-left rounded-md  focus:outline-none  lg:absolute lg:left-0  lg:w-56",
//                 !mobile && "bg-white shadow-lg  dark:bg-gray-800"
//               )}>
//               <div className={cx(!mobile && "py-3")}>
//                 {items.map((item, index) => (
//                   <Menu.Item as="div" key={`${item.title}${index}`}>
//                     {({ active }) => (
//                       // mobile drop links
//                       <Link
//                         href={item?.path ? item.path : "#"}
//                         className={cx(
//                           "flex items-center space-x-2 px-5 py-2 uppercase font-semibold text-xs lg:text-base lg:space-x-4",
//                           active
//                             ? "text-blue-500"
//                             : "text-black hover:text-blue-500 focus:text-blue-500 dark:text-gray-300"
//                         )}>
//                         <span> {item.title}</span>
//                       </Link>
//                     )}
//                   </Menu.Item>
//                 ))}
//               </div>
//             </Menu.Items>
//           </Transition>
//         </>
//       )}
//     </Menu>
//   );
// };