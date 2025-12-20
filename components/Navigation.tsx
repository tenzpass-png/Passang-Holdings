'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm border-b border-neutral-200 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-bold text-[#003D82]" style={{ fontFamily: 'Georgia, serif', fontSize: '25px' }}>
              <span style={{ fontSize: '28px' }}>P</span>ASSANG <span style={{ fontSize: '28px' }}>H</span>OLDINGS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <Link href="/about" className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors">
              About Us
            </Link>
            <Link href="/businesses" className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors">
              Our Businesses
            </Link>
            <Link href="/community" className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors">
              Community
            </Link>
            <Link href="/careers" className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors">
              Careers
            </Link>
            <Link href="/news" className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors">
              News
            </Link>
            <Link
              href="/contact"
              className="text-sm bg-neutral-900 hover:bg-neutral-800 text-white px-4 py-2 rounded-md transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-neutral-900 p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-neutral-200">
            <div className="flex flex-col gap-4">
              <Link
                href="/about"
                className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/businesses"
                className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Businesses
              </Link>
              <Link
                href="/community"
                className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Community
              </Link>
              <Link
                href="/careers"
                className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Careers
              </Link>
              <Link
                href="/news"
                className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                News
              </Link>
              <Link
                href="/contact"
                className="text-sm bg-neutral-900 hover:bg-neutral-800 text-white px-4 py-2 rounded-md transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
