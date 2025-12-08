export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium text-neutral-900 mb-8 leading-tight tracking-tight">
              Investment Portfolio
            </h1>
            <p className="text-xl sm:text-2xl text-neutral-600 leading-relaxed">
              A transparent view of my investment positions and transaction history.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Content */}
      <section className="py-16 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto space-y-16">

          {/* Liquidated Equities */}
          <div>
            <div className="border-l-2 border-neutral-900 pl-6 mb-8">
              <h2 className="text-2xl font-medium text-neutral-900 mb-2">Completely Liquidated Equities</h2>
              <p className="text-sm text-neutral-600">Positions that have been fully exited</p>
            </div>
            <div className="bg-neutral-50 rounded-lg p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-neutral-900 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <span className="font-medium text-neutral-900">APPLE (APPL)</span>
                      <span className="text-sm text-neutral-500">2021</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Potential Investments */}
          <div>
            <div className="border-l-2 border-neutral-900 pl-6 mb-8">
              <h2 className="text-2xl font-medium text-neutral-900 mb-2">Potential Investments Under Review</h2>
              <p className="text-sm text-neutral-600">Positions currently being evaluated for future allocation</p>
            </div>
            <div className="bg-neutral-50 rounded-lg p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-neutral-900 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <span className="font-medium text-neutral-900">Moet Hennessy Louis Vuitton (LVMH)</span>
                  </div>
                </li>
              </ul>
              <p className="text-sm text-neutral-600 mt-6 italic">
                These positions are currently under evaluation and research. No commitment has been made.
              </p>
            </div>
          </div>

          {/* Investment Note */}
          <div className="border border-neutral-200 rounded-lg p-8 bg-neutral-50">
            <h3 className="text-lg font-medium text-neutral-900 mb-4">Portfolio Update Schedule</h3>
            <p className="text-base text-neutral-600 leading-relaxed">
              Investment transactions are updated <strong className="font-medium text-neutral-900">quarterly</strong>.
              However, I don't expect significant changes in capital allocation, as most investments are held
              for <strong className="font-medium text-neutral-900">more than five years</strong> with a long-term,
              buy-and-hold strategy.
            </p>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-neutral-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-medium text-neutral-900 mb-4">
            Questions About My Investment Strategy?
          </h2>
          <p className="text-base text-neutral-600 mb-8">
            Feel free to reach out if you'd like to discuss investment philosophy or have any questions.
          </p>
          <a
            href="/about"
            className="inline-flex items-center justify-center bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-3 rounded-md transition-colors text-sm font-medium"
          >
            Contact Me
          </a>
        </div>
      </section>
    </div>
  );
}
