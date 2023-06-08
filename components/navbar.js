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
      children: [{
        title: "About our parish",
        path: "/about"
      },
      {
        title: "About our saints",
        path: "/about/saints"
      }] 
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
    <div className="py-5 lg:py-8 bg-navbar">
      <nav className="flex flex-wrap justify-center md:flex-nowrap md:gap-10">
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex gap-4 w-fit flex-col">
                {/* <div className="order-1 hidden w-full flex-col items-center justify-start md:order-none md:flex md:w-auto md:flex-1 md:flex-row md:justify-end">
                  {leftmenu.map((item, index) => (
                    <Fragment key={`${item.label}${index}`}>
                      {item.children && item.children.length > 0 ? (
                        <DropdownMenu
                          menu={item}
                          key={`${item.label}${index}`}
                          items={item.children}
                        />
                      ) : (
                        <Link
                          href={item.href}
                          key={`${item.label}${index}`}
                          className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
                          target={item.external ? "_blank" : ""}
                          rel={item.external ? "noopener" : ""}>
                          {item.label}
                        </Link>
                      )}
                    </Fragment>
                  ))}
                </div> */}
                <div className="flex lg:w-full m-auto items-center justify-center gap-10 md:border-4 md:border-double p-5 md:rounded-lg md:border-black md:w-auto">
                  <Link href="/" className="w-28 dark:hidden">
                    {props.logo ? (
                      // <div className="flex">
                        <Image
                          className="rounded-lg"
                          {...urlForImage(props.logo)}
                          alt="Logo"
                          priority={true}
                          sizes="(max-width: 640px) 100vw, 200px"
                        />
                        // <p>“Holy Martyr Philothea and Saint Bede the Venerable” Parish</p>
                      // </div>
                    ) : (
                      <span className="block text-center">
                        Parish
                      </span>
                    )}
                  </Link>
                  <Link href="/" className="hidden w-28 dark:block">
                    {props.logoalt ? (
                      <Image
                        className="rounded-lg"
                        {...urlForImage(props.logoalt)}
                        alt="Logo"
                        priority={true}
                        sizes="(max-width: 640px) 100vw, 200px"
                      />
                    ) : (
                      <span className="block text-center">
                        Parish
                      </span>
                    )}
                  </Link>
                  <p className="hidden max-w-[30rem] text-black lg:text-xl text-sm self-center text-center uppercase font-semibold">Romanian Orthodox Parish “Holy Martyr Philothea and Saint Bede the Venerable”</p>
                  <p className="text-black max-w-[30rem] text-xs self-center text-center uppercase font-semibold">Parish of “Holy Martyr Philothea and Saint Bede the Venerable”</p>
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
                </div>

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
