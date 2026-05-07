const brands = [
  { name: "Rolls-Royce", models: ["Phantom", "Ghost", "Cullinan", "Spectre", "Dawn"], category: "Luxury" },
  { name: "Bentley", models: ["Continental GT", "Flying Spur", "Bentayga", "Mulsanne"], category: "Luxury" },
  { name: "Ferrari", models: ["SF90 Stradale", "812 Superfast", "296 GTB", "F8 Tributo", "Purosangue"], category: "Sports" },
  { name: "Lamborghini", models: ["Aventador", "Huracán", "Urus", "Revuelto", "Sian"], category: "Hypercar" },
  { name: "Porsche", models: ["911 Turbo S", "Taycan", "Panamera", "Cayenne Turbo", "718 Cayman GT4"], category: "Sports" },
  { name: "Aston Martin", models: ["DBS", "DB11", "Vantage", "DBX", "Valhalla"], category: "Sports" },
  { name: "McLaren", models: ["720S", "Artura", "GT", "765LT", "P1"], category: "Hypercar" },
  { name: "Bugatti", models: ["Chiron", "Veyron", "Divo", "Mistral"], category: "Hypercar" },
  { name: "Mercedes-Benz", models: ["S-Class Maybach", "G 63 AMG", "GT Black Series", "EQS 580"], category: "Luxury" },
  { name: "BMW", models: ["M8 Competition", "i7 M70", "X7 M60i", "M4 CSL"], category: "Sports" },
  { name: "Range Rover", models: ["Autobiography", "SV", "Sport SVR", "Velar"], category: "SUV" }
];

const engines = ["V12 Twin-Turbo", "V10 Natural", "V8 Biturbo", "Flat-6 Turbo", "W16 Quad-Turbo", "Electric Dual-Motor", "Hybrid V12"];
const transmissions = ["8-Speed Automatic", "7-Speed Dual-Clutch", "9-Speed Automatic", "Single-Speed Electric"];
const fuelTypes = ["Petrol", "Hybrid", "Electric"];

const images = [
  "https://images.unsplash.com/photo-1631214503951-375126d85444",
  "https://images.unsplash.com/photo-1544636331-e26879cd4d9b",
  "https://images.unsplash.com/photo-1520031441872-265e4ff70366",
  "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
  "https://images.unsplash.com/photo-1542362567-b058c02b0147",
  "https://images.unsplash.com/photo-1511919884226-fd3cad34687c",
  "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c",
  "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3"
];

const featuresList = [
  "Starlight Headliner", "Massage Seats", "Carbon Fiber Trim", "Ceramic Brakes",
  "Premium Audio System", "Night Vision", "Adaptive Suspension", "Heads-up Display",
  "Bespoke Leather Interior", "Panoramic Roof", "Soft-close Doors", "Active Aero"
];

const generateCars = (count) => {
  const cars = [];
  for (let i = 1; i <= count; i++) {
    const brandObj = brands[Math.floor(Math.random() * brands.length)];
    const model = brandObj.models[Math.floor(Math.random() * brandObj.models.length)];
    const year = 2020 + Math.floor(Math.random() * 5);
    const price = 100000 + Math.floor(Math.random() * 2000000);
    const mileage = Math.floor(Math.random() * 15000);
    const engine = engines[Math.floor(Math.random() * engines.length)];
    const transmission = transmissions[Math.floor(Math.random() * transmissions.length)];
    const fuelType = engine.includes("Electric") ? "Electric" : engine.includes("Hybrid") ? "Hybrid" : "Petrol";
    
    // Pick 2 random images
    const carImages = [
      `${images[Math.floor(Math.random() * images.length)]}?q=80&w=2000&auto=format&fit=crop`,
      `${images[Math.floor(Math.random() * images.length)]}?q=80&w=2000&auto=format&fit=crop`
    ];

    // Pick 4 random features
    const features = [...featuresList].sort(() => 0.5 - Math.random()).slice(0, 4);

    cars.push({
      id: `gen-${i}`,
      name: `${brandObj.name} ${model}`,
      brand: brandObj.name,
      model: model,
      year: year,
      price: price,
      mileage: mileage,
      engine: engine,
      transmission: transmission,
      fuelType: fuelType,
      hp: 400 + Math.floor(Math.random() * 800),
      acceleration: `${(2.0 + Math.random() * 3).toFixed(1)}s`,
      topSpeed: `${150 + Math.floor(Math.random() * 100)} mph`,
      images: carImages,
      category: brandObj.category,
      status: Math.random() > 0.8 ? "Reserved" : "Available",
      features: features,
      description: `A stunning example of ${brandObj.name} engineering. This ${model} offers a perfect blend of performance and luxury.`
    });
  }
  return cars;
};

const allCars = generateCars(1000);

console.log(`export const vehicles = ${JSON.stringify(allCars, null, 2)};`);
