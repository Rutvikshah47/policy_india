const stats = [
    {
      emoji: "😍",
      number: "80 Lacs+",
      label: "Happy Smiles",
    },
    {
      emoji: "🌟",
      number: "4.8",
      label: "Rated on Google",
    },
    {
      emoji: "📄",
      number: "35k+",
      label: "Claims Served",
    },
    {
      emoji: "🏥",
      number: "100+",
      label: "Hospitals Covered",
    },
    {
      emoji: "🛡️",
      number: "25+",
      label: "Insurance Types",
    },
  ];
  
  export default function StatsSlider() {
    return (
      <div className="overflow-hidden whitespace-nowrap">
        <div className="inline-flex animate-scroll gap-6">
          {[...stats, ...stats].map((stat, idx) => (
            <div
              key={idx}
              className="flex items-center"
            >
              <div className="text-2xl">{stat.emoji}</div>
              <div className="text-left pl-3">
                <div className="text-md font-bold text-[#0d2642]">
                  {stat.number}
                </div>
                <div className="text-sm text-[#333]">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  