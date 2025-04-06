const services = [
    { title: "Life Insurance", emoji: "❤️" },
    { title: "Health Insurance", emoji: "🩺" },
    { title: "Motor Insurance", emoji: "🚗" },
    { title: "Term Plans", emoji: "📆" },
    { title: "Investment Plans", emoji: "📈" },
    { title: "Corporate Insurance", emoji: "🏢" },
    { title: "Travel Insurance", emoji: "✈️" },
    { title: "Home Insurance", emoji: "🏠" },
  ];
  
  export default function HorizontalCards() {
    return (
      <div className="overflow-x-auto whitespace-nowrap py-6 scrollbar-hide">
        <div className="inline-flex gap-4">
          {services.map((item) => (
            <div
              key={item.title}
              className="bg-[#f4f2ef] text-[#0d2642] p-6 rounded-xl shadow-md text-center hover:scale-105 transition duration-300 ease-in-out border border-[#ccc]"
            >
              <div className="mb-2">{item.emoji}</div>
              <p className="font-semibold">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  