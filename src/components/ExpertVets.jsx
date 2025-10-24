import React from "react";

const experts = [
  {
    id: 1,
    name: "Dr. Sarah Collins",
    specialty: "Small Animals & Dogs",
    photo:
      "https://ucmscdn.healthgrades.com/10/29/71d9e259459da86780705ca71b06/oab-dr-sarah-collins-photo.jpg",
  },
  {
    id: 2,
    name: "Dr. Michael Lee",
    specialty: "Cats & Exotic Pets",
    photo:
      "https://assets-us-01.kc-usercontent.com/0f1bf390-09c2-00ff-dbea-bab90e37fcfe/f9861fe8-2fe7-4fd7-bb10-1588eab3773e/Dr%20Michael%20Lee.png",
  },
  {
    id: 3,
    name: "Dr. Emily Wong",
    specialty: "Grooming & Nutrition",
    photo:
      "https://doximity-res.cloudinary.com/images/f_auto,q_auto,t_profile_photo_320x320/yeczncgzxlz4mzxzbxmh/emily-wong-md-aiea-hi.jpg?noindex=true",
  },
  {
    id: 4,
    name: "Dr. David Thompson",
    specialty: "Senior & Geriatric Pets",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-jvmdWG0u_n-ot9Y1HbTH40k96if1Lw4pqg&s",
  },
];

const ExpertVets = () => {
  return (
    <section className="w-11/12 mx-auto my-10">
      <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">
        Meet Our Expert Vets
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {experts.map((vet) => (
          <div
            key={vet.id}
            className="card bg-base-100 shadow-2xl border  hover:shadow-2xl transition-all duration-300 text-center p-4"
          >
            <div className="flex justify-center mb-3">
              <img
                src={vet.photo}
                alt={vet.name}
                className="w-24 h-24 rounded-full object-cover border-2 border-orange-500"
              />
            </div>
            <h3 className="text-lg font-bold text-gray-800">{vet.name}</h3>
            <p className="text-gray-600">{vet.specialty}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertVets;
