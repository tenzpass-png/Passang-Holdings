export default function Careers() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-16 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium text-neutral-900 mb-8 leading-tight tracking-tight">
              Careers
            </h1>
            <p className="text-xl sm:text-2xl text-neutral-600 leading-relaxed">
              Join us in building exceptional businesses for the long term.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="bg-neutral-50 rounded-lg p-12 text-center">
            <p className="text-base text-neutral-600 mb-6">
              We're not currently hiring, but we're always interested in connecting with talented individuals.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center border border-neutral-300 hover:border-neutral-400 text-neutral-900 px-6 py-3 rounded-md transition-colors text-sm font-medium"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
