type Investment = {
  title: string;
  symbol: string;
  logo: string;
  body: string;
};

export default function Investments() {
  const investments: Investment[] = [
    {
      title: 'Microsoft Corporation (MSFT)',
      symbol: 'MSFT',
      logo: '/msft.svg',
      body: `Microsoft is one of the strongest large-cap investments globally, driven by dominant positioning across cloud (Azure), enterprise software, and AI. Its integration of AI into products like Office, Azure, and Copilot creates a powerful monetization flywheel with high switching costs. The company combines growth (cloud + AI) with stability (recurring enterprise revenue), strong margins, and massive free cash flow. For a portfolio, MSFT offers a rare blend of defensive quality and secular growth exposure.`,
    },
    {
      title: 'Ondas Holdings Inc. (ONDS)',
      symbol: 'ONDS',
      logo: '/Ondas.jpg',
      body: `Ondas is a compelling play on mission-critical wireless networks and autonomous drone infrastructure. Its technology targets industrial and government applications—rail, defense, and surveillance—where reliability, regulatory compliance, and proprietary systems create high barriers to entry. As global demand for secure communications and drone-based automation expands, Ondas is positioned to benefit from increasing adoption across both public and private sectors. With a focused strategy and exposure to infrastructure modernization trends, the company offers meaningful upside as it scales deployments and deepens its presence in high-value markets.`,
    },
    {
      title: 'Unusual Machines, Inc. (UMAC)',
      symbol: 'UMAC',
      logo: '/unusual machines.png',
      body: `Unusual Machines is well positioned in the growing drone ecosystem, particularly in FPV and defense-related applications. As demand for low-cost, agile drones rises across military and commercial sectors, UMAC stands to benefit from expanding use cases and increased procurement globally.`,
    },
    {
      title: 'SES AI Corporation (SES)',
      symbol: 'SES',
      logo: '/ses ai.png',
      body: `SES AI Corp is a strong play on next-generation EV batteries, focused on lithium-metal technology that offers higher energy density and longer driving range than traditional lithium-ion. Its combination of advanced materials and AI-driven optimization, along with partnerships with major automakers, positions it well to capture value as EV demand and performance requirements continue to grow.`,
    },
    {
      title: 'Aureus Greenway Holdings Inc. (AGH)',
      symbol: 'AGH',
      logo: '/aureuys.jpeg',
      body: `Aureus Greenway Holdings becomes a significantly more compelling investment following its merger with Autonomous Power Corporation, transforming into a drone and defense-focused company. This shift positions AGH to benefit from rising global demand for autonomous systems and increased defense spending. With exposure to high-growth, high-barrier technology and a clearer path to scalable revenue, AGH offers investors early entry into a strategically important and rapidly expanding market.`,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-16 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium text-neutral-900 mb-6 leading-tight tracking-tight">
              Investments
            </h1>
            <p className="text-xl sm:text-2xl text-neutral-600 leading-relaxed max-w-3xl">
              Selected investment ideas and high-conviction positions that reflect a balance of growth, quality, and thematic opportunity.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-6">
            {investments.map((item) => (
              <div key={item.title} className="border border-neutral-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                    <img 
                      src={item.logo} 
                      alt={`${item.symbol} logo`}
                      className="w-12 h-12 object-contain"
                    />
                    <h2 className="text-2xl font-semibold text-neutral-900">{item.title}</h2>
                  </div>
                  <p className="text-base leading-7 text-neutral-600 whitespace-pre-line">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
