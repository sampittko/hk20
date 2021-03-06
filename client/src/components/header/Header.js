import React from "react"
import vismaLogoPath from "../../assets/img/logo.jpg"
import { Link } from "gatsby"

const Header = ({ employee }) => (
  <header>
    <nav className="bg-red-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-8 w-8 rounded-full"
                src={vismaLogoPath}
                alt="Visma logo"
              />
            </div>
            {!employee && (
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    to="/dashboard/"
                    activeClassName="px-3 py-2 rounded-md text-sm font-medium text-white bg-red-900 focus:outline-none focus:text-white focus:bg-red-700"
                    className="px-3 py-2 rounded-md text-sm font-medium text-red-300 hover:text-white hover:bg-red-700 focus:outline-none focus:text-white focus:bg-red-700"
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/employees/"
                    activeClassName="px-3 py-2 rounded-md text-sm font-medium text-white bg-red-900 focus:outline-none focus:text-white focus:bg-red-700"
                    className="px-3 py-2 rounded-md text-sm font-medium text-red-300 hover:text-white hover:bg-red-700 focus:outline-none focus:text-white focus:bg-red-700"
                  >
                    Team
                  </Link>
                </div>
              </div>
            )}
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {!employee && (
                <>
                  <button
                    className="p-1 border-2 border-transparent text-red-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-red-700"
                    aria-label="Notifications"
                  >
                    <svg
                      className="h-6 w-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                  </button>

                  <div className="ml-3 relative">
                    <div>
                      <button
                        className="max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid"
                        id="user-menu"
                        aria-label="User menu"
                        aria-haspopup="true"
                      >
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-red-400 hover:text-white hover:bg-red-700 focus:outline-none focus:bg-red-700 focus:text-white">
              {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
              <svg
                className="block h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
              <svg
                className="hidden h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>
)

export default Header
