export default function News() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-16 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium text-neutral-900 mb-8 leading-tight tracking-tight">
              News & Updates
            </h1>
            <p className="text-xl sm:text-2xl text-neutral-600 leading-relaxed">
              Latest announcements and updates from Passang Holdings.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="bg-neutral-50 rounded-lg p-12 text-center">
            <p className="text-base text-neutral-600">
              News and updates will be posted here as they become available.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
