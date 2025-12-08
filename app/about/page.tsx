export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium text-neutral-900 mb-8 leading-tight tracking-tight">
              About
            </h1>
            <p className="text-xl sm:text-2xl text-neutral-600 leading-relaxed">
              Let's connect and discuss investment philosophy, financial markets, or just say hello.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="border-l-2 border-neutral-900 pl-6 mb-12">
            <h2 className="text-2xl font-medium text-neutral-900 mb-2">Contact Information</h2>
            <p className="text-sm text-neutral-600">Get in touch via email</p>
          </div>

          <div className="max-w-md">
            {/* Email Card */}
            <a
              href="mailto:infocenter@passangholdings.com"
              className="group border border-neutral-200 rounded-lg p-8 hover:border-neutral-400 transition-colors block"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-neutral-100 rounded-md flex items-center justify-center group-hover:bg-neutral-200 transition-colors">
                  <svg className="w-5 h-5 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-medium text-neutral-900 mb-1">Email</h3>
                  <p className="text-sm text-neutral-600 break-all">infocenter@passangholdings.com</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 sm:px-8 lg:px-12 bg-neutral-50">
        <div className="max-w-5xl mx-auto">
          <div className="border-l-2 border-neutral-900 pl-6 mb-8">
            <h2 className="text-2xl font-medium text-neutral-900 mb-2">Based in Minnesota</h2>
          </div>
          <p className="text-base text-neutral-600 leading-relaxed max-w-3xl">
            I'm an investor focused on long-term value creation through strategic capital allocation.
            My investment philosophy centers on buying quality businesses and holding them for extended periods,
            typically 5+ years.
          </p>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="py-16 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="border border-neutral-200 rounded-lg p-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-neutral-100 rounded-md flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-medium text-neutral-900 mb-2">Legal Information</h3>
                <p className="text-sm text-neutral-600 mb-3">
                  Please read the legal disclaimer before making any investment decisions based on information provided on this site.
                </p>
                <a
                  href="https://passangholdings.com/disclaimer.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-900 underline hover:no-underline"
                >
                  View Legal Disclaimer (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
