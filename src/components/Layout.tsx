/**
 * Layout Component - Navigation and page structure
 * Author: Jose Auyon
 */

import { Link, useLocation } from 'react-router-dom'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation()

  const navigationItems = [
    { path: '/', label: 'Home' },
    { path: '/challenges', label: 'All Challenges' },
    { path: '/calculator', label: 'Calculator' },
    { path: '/connect-four', label: 'Connect Four' },
    { path: '/dice-app', label: 'Dice App' },
    { path: '/expense', label: 'Expense' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-8">
              <div className="flex items-center py-4">
                <Link to="/" className="text-2xl font-bold text-gray-800">
                  React Challenges
                </Link>
                <span className="ml-3 text-sm text-gray-500 hidden sm:inline">
                  by Jose Auyon
                </span>
              </div>
              <div className="hidden md:flex items-center space-x-1">
                {navigationItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300 ${
                      location.pathname === item.path
                        ? 'text-blue-500 border-b-4 border-blue-500'
                        : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-1 max-w-7xl mx-auto py-6 px-4 w-full">
        {children}
      </main>

      <footer className="bg-gray-100 border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-4 px-4">
          <div className="text-center text-sm text-gray-600">
            <p>
              React Challenges Project • Created by{' '}
              <span className="font-semibold text-gray-800">Jose Auyon</span>
            </p>
            <p className="mt-1 text-xs text-gray-500">
              Practice React development through hands-on coding challenges
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
