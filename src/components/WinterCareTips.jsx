import React from "react";

const winterTips = [
  {
    id: 1,
    tips: "Keep your pets warm with sweaters, jackets, or blankets during cold weather.",
  },
  {
    id: 2,
    tips: "Moisturize their paws to prevent dryness and cracking from snow and ice.",
  },
  {
    id: 3,
    tips: "Ensure they stay hydrated even in winter, as pets can get dehydrated easily.",
  },
  {
    id: 4,
    tips: "Limit exposure to ice and snow, especially for small or short-haired breeds.",
  },
  {
    id: 5,
    tips: "Regular grooming is important to maintain healthy fur and prevent matting.",
  },
];

const WinterCareTips = () => {
  return (
    <section className="w-11/12 mx-auto mt-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-accent">
        Winter Care Tips for Pets
      </h2>
      <ul className="list-disc list-inside space-y-2 max-w-2xl mx-auto text-gray-700 font-semibold">
        {winterTips.map((tips) => (
          <li key={tips.id}>{tips.tips}</li>
        ))}
      </ul>
    </section>
  );
};

export default WinterCareTips;
