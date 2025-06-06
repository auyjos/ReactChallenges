/**
 * Layout Component - Navigation and page structure
 * Author: Jose Auyon
 */

import { Link, useLocation } from 'react-router-dom'
import { useState, type ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const navigationItems = [
    { path: '/', label: 'Home' },
    { path: '/challenges', label: 'All Challenges' },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center py-4">
              <Link to="/" className="text-2xl font-bold text-gray-800">
                React Challenges
              </Link>
              <span className="ml-3 text-sm text-gray-500 hidden sm:inline">
                by Jose Auyon
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center space-x-6">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300 ${
                    location.pathname === item.path
                      ? 'text-blue-500 border-b-2 border-blue-500'
                      : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="outline-none focus:outline-none"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                title={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                <svg className="w-6 h-6 text-gray-500" fill="none" strokeLinecap="round" 
                     strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
                {navigationItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      location.pathname === item.path
                        ? 'bg-blue-50 text-blue-500'
                        : 'text-gray-500 hover:bg-gray-50 hover:text-blue-500'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
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
