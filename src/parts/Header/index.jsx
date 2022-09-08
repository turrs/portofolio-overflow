import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { Iavatar, IGithub } from "../../assets/images";
import { NavLink } from "../../components";
import { Avatar, Image, Tooltip } from "antd";
import {
  AlertOutlined,
  PlusOutlined,
  WhatsAppOutlined,
  MailOutlined,
} from "@ant-design/icons";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-white shadow-md shadow-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to="/">
                  <img
                    className="w-[32px] rounded-[30px] bg-white h-[32px]"
                    src={IGithub}
                  />
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <div className="p-1">
                    <NavLink
                      style={{ color: "#1890ff" }}
                      type="link"
                      text="Home"
                      href="/"
                    />
                  </div>
                  <div className="p-1">
                    <NavLink
                      style={{ color: "#1890ff" }}
                      type="link"
                      text="Project"
                      href="/project"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end items-center grow">
              <div className="pr-5">
                <AlertOutlined style={{ color: "#1890ff" }} />
              </div>
              <div className="pr-5">
                <div className=" pr-2 pl-2">
                  <div className="group bg-blue hover:border-solid hover:border-blue hover:bg-white rounded-[5px] hover:shadow-lg hover:shadow-cyan-500/50">
                    <Tooltip
                      placement="bottom"
                      title={
                        <>
                          <a
                            className="p-1"
                            href="https://api.whatsapp.com/send?phone=6285156112606&text=Hallo%20Fatur"
                          >
                            <WhatsAppOutlined style={{ color: "#1890ff" }} />
                          </a>
                          <a className="p-1" href="mailto: faturrahman7qz.com">
                            <MailOutlined style={{ color: "#1890ff" }} />
                          </a>
                        </>
                      }
                    >
                      <div className="flex flex-row rounded justify-center items-center mr-3 ml-3 ">
                        <div className="flex justify-center items-center">
                          <p className="flex text-white group-hover:text-blue text-center font-medium  pr-1 pt-3 justify-center">
                            Contact
                          </p>
                        </div>
                      </div>
                    </Tooltip>
                  </div>
                </div>
              </div>
              <div className="p-2">
                <Avatar src={<Image src={Iavatar}></Image>} />
              </div>
            </div>
            <div className="-mr-2 flex md:hidden hover:shadow-lg hover:shadow-cyan-500/50">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {ref => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <NavLink
                  style={{ color: "#1890ff" }}
                  type="link"
                  text="Home"
                  href="/"
                />
                <NavLink
                  style={{ color: "#1890ff" }}
                  type="link"
                  text="Project"
                  href="/project"
                />
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};

export default Header;
