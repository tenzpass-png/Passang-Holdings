export default function Community() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-16 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium text-neutral-900 mb-8 leading-tight tracking-tight">
              Community Impact
            </h1>
            <p className="text-xl sm:text-2xl text-neutral-600 leading-relaxed">
              We are committed to expanding opportunities in underserved communities across the globe. We do so by partnering with local organizations that demonstrate a tangible positive impact in the field of education and regional economic development.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="border-l-2 border-neutral-900 pl-6 mb-12">
            <h2 className="text-2xl font-medium text-neutral-900 mb-2">Pundha Sponsors Partnership</h2>
            <p className="text-sm text-neutral-600">Advancing educational access and regional economic development</p>
          </div>

          <div className="mb-8">
            <img 
              src="/Pundha Charity.png" 
              alt="Pundha Charity Logo" 
              className="w-80 h-auto"
            />
          </div>

          <div className="space-y-6 max-w-3xl">
            <p className="text-base leading-7 text-neutral-600">
              Passang Holdings is proud to partner with Pundha Sponsors in advancing initiatives that drive both educational access and regional economic development. This collaboration is grounded in a shared conviction that long-term prosperity begins with investing in people. Together, we support programs that expand access to education, provide critical resources for academic advancement, and equip individuals with the skills necessary to meaningfully participate in and contribute to their local economies. By aligning capital with measurable community impact, our partnership reflects a disciplined approach to fostering sustainable growth, opportunity, and generational progress.
            </p>

            <p className="text-base leading-7 text-neutral-600">
              Looking ahead, Passang Holdings intends to make substantial contributions over the next eight years toward education and housing initiatives, further reinforcing our commitment to building enduring infrastructure for human and economic development. These investments are designed not only to address immediate needs, but to create scalable, long-term pathways that strengthen communities and expand access to opportunity.
            </p>

            <div className="pt-4">
              <a 
                href="https://pundhacharity.org/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-neutral-900 hover:text-neutral-700 font-medium text-sm"
              >
                Learn more about the work of Pundha Sponsors here
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
