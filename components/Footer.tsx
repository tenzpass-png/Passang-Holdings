import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-bold text-[#003D82] mb-3" style={{ fontFamily: 'Georgia, serif', fontSize: '25px' }}>
              <span style={{ fontSize: '28px' }}>P</span>ASSANG <span style={{ fontSize: '28px' }}>H</span>OLDINGS
            </h3>
            <p className="text-sm text-neutral-600">
              Investment holding company based in Minnesota.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-medium text-neutral-900 mb-3">Company</h4>
            <div className="flex flex-col gap-2">
              <Link href="/investments" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                Investments
              </Link>
              <Link href="/careers" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                Careers
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-medium text-neutral-900 mb-3">Resources</h4>
            <div className="flex flex-col gap-2">
              <Link href="/community" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                Community
              </Link>
              <Link href="/news" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                News & Updates
              </Link>
              <Link href="/contact" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-medium text-neutral-900 mb-3">Connect</h4>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:infocenter@passangholdings.com"
                className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-200">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="text-xs text-neutral-500">
              © {new Date().getFullYear()} Passang Holdings. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="/LEGAL DISCLAIMER.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                Legal Disclaimer
              </a>
              <a
                href="/Privacy Policy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/TERMS OF SERVICE.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
