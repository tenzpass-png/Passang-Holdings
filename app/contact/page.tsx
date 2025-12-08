export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-16 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium text-neutral-900 mb-8 leading-tight tracking-tight">
              Contact
            </h1>
            <p className="text-xl sm:text-2xl text-neutral-600 leading-relaxed">
              Get in touch to discuss partnerships, investments, or general inquiries.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="border-l-2 border-neutral-900 pl-6 mb-12">
            <h2 className="text-2xl font-medium text-neutral-900 mb-2">Contact Information</h2>
            <p className="text-sm text-neutral-600">Reach out to us via email</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
            <a
              href="mailto:infocenter@passangholdings.com"
              className="group block border border-neutral-200 rounded-lg p-6 hover:border-neutral-400 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-neutral-100 rounded-md flex items-center justify-center group-hover:bg-neutral-200 transition-colors shrink-0">
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

            <div className="border border-neutral-200 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-neutral-100 rounded-md flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-medium text-neutral-900 mb-1">Location</h3>
                  <p className="text-sm text-neutral-600">Based in Minnesota</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
