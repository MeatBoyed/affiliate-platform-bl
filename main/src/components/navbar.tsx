"use client"

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, User } from 'lucide-react'

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={`px-3 py-2 rounded-full transition-colors ${
        isActive
          ? 'bg-gray-200 text-gray-900'
          : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
      }`}
    >
      {children}
    </Link>
  )
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-semibold text-gray-900">AffiliateHub</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="/dashboard">Dashboard</NavLink>
              <NavLink href="/products">Products</NavLink>
              <NavLink href="/clients">Clients</NavLink>
              <NavLink href="/analytics">Analytics</NavLink>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="relative">
                <button className="flex items-center focus:outline-none">
                  <img
                    className="h-8 w-8 rounded-full object-cover"
                    src="/placeholder.svg?height=32&width=32"
                    alt="User profile"
                  />
                  <ChevronDown className="h-4 w-4 ml-1 text-gray-700" />
                </button>
                {/* User dropdown menu can be added here */}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink href="/dashboard">Dashboard</NavLink>
            <NavLink href="/products">Products</NavLink>
            <NavLink href="/clients">Clients</NavLink>
            <NavLink href="/analytics">Analytics</NavLink>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  src="/placeholder.svg?height=40&width=40"
                  alt="User profile"
                />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium leading-none text-gray-900">Tom Cook</div>
                <div className="text-sm font-medium leading-none text-gray-700">tom@example.com</div>
              </div>
            </div>
            <div className="mt-3 px-2 space-y-1">
              <Link
                href="/profile"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-gray-600 hover:bg-gray-100"
              >
                Your Profile
              </Link>
              <Link
                href="/settings"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-gray-600 hover:bg-gray-100"
              >
                Settings
              </Link>
              <Link
                href="/logout"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-gray-600 hover:bg-gray-100"
              >
                Sign out
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

