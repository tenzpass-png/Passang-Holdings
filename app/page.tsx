import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium text-neutral-900 mb-8 leading-tight tracking-tight">
              Building the Present. Investing in the Future.
            </h1>
            <p className="text-xl sm:text-2xl text-neutral-600 mb-12 leading-relaxed max-w-3xl">
              A diversified holdings company operating across multiple industries with a focus on long-term value creation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/businesses"
                className="inline-flex items-center justify-center bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-3 rounded-md transition-colors text-sm font-medium"
              >
                Our Businesses
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center border border-neutral-300 hover:border-neutral-400 text-neutral-900 px-6 py-3 rounded-md transition-colors text-sm font-medium"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-medium text-neutral-900 mb-6">
                Our Approach
              </h2>
              <div className="space-y-4 text-base text-neutral-600 leading-relaxed">
                <p>
                   Operating as a diversified holdings company, we build, operate, and scale businesses while strategically investing in private and public markets. By integrating direct business ownership with disciplined capital allocation,  this approach creates a balanced and resilient engine for growth, income generation, and long-term risk management across market cycles.
                </p>
                <p>
                </p>
              </div>
            </div>
           
            
          </div>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section className="py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-medium text-neutral-900 mb-12 max-w-2xl">
            Investment Philosophy
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Investing In The Future",
                description: "Investing in the future is not just about our business model, but also about charting a sustainable path unique to us with innovation, adaptability, and strategic focus."
              },
              {
                title: "Constant Innovation & Adaptability",
                description: "Learning, growing, and innovation never stops. Through rigorous evaluation and business landscape analysis, we are always ahead of the broader market. This relentless practice allows us to be prepared for both good and bad times."
              },
              {
                title: "Community Oriented",
                description: "Building great businesses is more than just about increasing the bottom line. It is about creating lasting value for our customers, clients, and business partners while uplifting underserved communities across the world."
              }
            ].map((principle, index) => (
              <div key={index} className="border-l-2 border-neutral-900 pl-6">
                <h3 className="text-lg font-medium text-neutral-900 mb-2">{principle.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-neutral-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-medium text-neutral-900 mb-6">
            Committed to Community Impact
          </h2>
          <p className="text-base text-neutral-600 mb-8 max-w-2xl mx-auto">
            Beyond our business investments, we're dedicated to supporting meaningful causes that create positive change in our communities.
          </p>
          <Link
            href="/community"
            className="inline-flex items-center justify-center border border-neutral-300 hover:border-neutral-400 text-neutral-900 px-6 py-3 rounded-md transition-colors text-sm font-medium"
          >
            Learn About Our Community Work
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-medium text-neutral-900 mb-6">
            Interested in Learning More?
          </h2>
          <p className="text-base text-neutral-600 mb-8 max-w-2xl mx-auto">
            We're always open to discussing potential partnerships and investment opportunities.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-3 rounded-md transition-colors text-sm font-medium"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
