const fs = require('fs');
const path = require('path');

const brands = [
  { name: "Rolls-Royce", models: ["Phantom", "Ghost", "Cullinan", "Spectre"], category: "Luxury" },
  { name: "Ferrari", models: ["SF90", "812", "296 GTB", "F8", "Roma", "LaFerrari"], category: "Sports" },
  { name: "Lamborghini", models: ["Revuelto", "Aventador", "Huracán", "Urus"], category: "Hypercar" },
  { name: "Porsche", models: ["911 GT3 RS", "Taycan", "Panamera", "Cayenne"], category: "Sports" },
  { name: "Lexus", models: ["LFA", "LC 500", "LX 600", "LS 500", "RX 500h"], category: "Luxury" },
  { name: "Toyota", models: ["Supra GR", "Land Cruiser 300", "Century", "Crown"], category: "Luxury" },
  { name: "Ford", models: ["GT", "Mustang Shelby GT500", "F-150 Raptor R"], category: "Sports" },
  { name: "Bentley", models: ["Continental GT", "Bentayga", "Flying Spur"], category: "Luxury" },
  { name: "Aston Martin", models: ["DBS", "Vantage", "DBX 707", "Valour"], category: "Sports" },
  { name: "McLaren", models: ["750S", "Artura", "P1", "Senna", "GTS"], category: "Hypercar" },
  { name: "Bugatti", models: ["Chiron Pur Sport", "Mistral", "Bolide"], category: "Hypercar" },
  { name: "Mercedes-Benz", models: ["AMG ONE", "G 63", "Maybach S 680", "GT 63 S"], category: "Luxury" }
];

const unsplashIds = [
  "1631214503951-375126d85444", "1544636331-e26879cd4d9b", "1520031441872-265e4ff70366", "1614162692292-7ac56d7f7f1e",
  "1503376780353-7e6692767b70", "1542362567-b058c02b0147", "1511919884226-fd3cad34687c", "1554224155-8d04cb21cd6c",
  "1486262715619-67b85e0b08d3", "1605559424843-9e4c228bf1c2", "1494976388531-d1058494cdd8", "1580273916550-e323be2ae537",
  "1525609004556-c46c7d6cf0a3", "1502877338535-766e1452684a", "1541899481282-d53bffe3c35d", "1492144534655-ae79c964c9d7",
  "1552519507-da3b142c6e3d", "1567818735868-e71b99932e29", "1514316454349-750a7fd3da3a", "1503736334956-4c8f8e92946d",
  "1533473359331-0135ef1b58bf", "1532581291347-9c39cf10a73c", "1549317661-bd32f8ce0db2", "1519641471654-76ce0107ad1b",
  "1517524008436-bbdb53c5158c", "1541443131876-44b03de101c5", "1555215695-3004980ad54e", "1568605117036-545a7bab71a0",
  "1518770660439-4636190af475", "1526726538690-5cbf2299cd1e", "1532751203793-b963c09b4d1b", "1506469717960-433ce8b6699e"
];

const engines = ["V12 Twin-Turbo", "V10 Natural", "V8 Biturbo", "Flat-6 Turbo", "W16 Quad-Turbo", "Electric Dual-Motor", "Hybrid V12", "i6 Turbo"];
const transmissions = ["8-Speed Automatic", "7-Speed Dual-Clutch", "9-Speed Automatic", "Single-Speed Electric", "6-Speed Manual"];

const generateCars = (count) => {
  const cars = [];
  for (let i = 1; i <= count; i++) {
    const brandObj = brands[Math.floor(Math.random() * brands.length)];
    const model = brandObj.models[Math.floor(Math.random() * brandObj.models.length)];
    const year = 2021 + Math.floor(Math.random() * 4);
    const price = 80000 + Math.floor(Math.random() * 2500000);
    const mileage = Math.floor(Math.random() * 5000);
    const engine = engines[Math.floor(Math.random() * engines.length)];
    const transmission = transmissions[Math.floor(Math.random() * transmissions.length)];
    const fuelType = engine.includes("Electric") ? "Electric" : engine.includes("Hybrid") ? "Hybrid" : "Petrol";
    
    const imgIndex1 = (i * 2) % unsplashIds.length;
    const imgIndex2 = (i * 2 + 1) % unsplashIds.length;
    
    const carImages = [
      `https://images.unsplash.com/photo-${unsplashIds[imgIndex1]}?q=80&w=2000&auto=format&fit=crop&sig=${i}-1`,
      `https://images.unsplash.com/photo-${unsplashIds[imgIndex2]}?q=80&w=2000&auto=format&fit=crop&sig=${i}-2`
    ];

    const features = ["Premium Audio", "Nappa Leather", "Active Aero", "Carbon Ceramic Brakes"];

    cars.push({
      id: `luxe-${i}`,
      name: `${brandObj.name} ${model}`,
      brand: brandObj.name,
      model: model,
      year: year,
      price: price,
      mileage: mileage,
      engine: engine,
      transmission: transmission,
      fuelType: fuelType,
      hp: 450 + Math.floor(Math.random() * 1000),
      acceleration: `${(2.1 + Math.random() * 2.5).toFixed(1)}s`,
      topSpeed: `${160 + Math.floor(Math.random() * 120)} mph`,
      images: carImages,
      category: brandObj.category,
      status: "Available",
      features: features,
      description: `The ${brandObj.name} ${model} is a masterpiece of modern engineering, delivering an unparalleled driving experience with ${engine} power.`
    });
  }
  return cars;
};

const allCars = generateCars(1000);

const content = `export interface Vehicle {
  id: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  engine: string;
  transmission: string;
  fuelType: string;
  hp: number;
  acceleration: string;
  topSpeed: string;
  images: string[];
  category: "Sports" | "Luxury" | "SUV" | "Hypercar" | "Electric";
  status: "Available" | "Sold" | "Reserved";
  features: string[];
  description: string;
}

export const vehicles: Vehicle[] = ${JSON.stringify(allCars, null, 2)};`;

fs.writeFileSync(path.join(__dirname, 'vehicles.ts'), content, 'utf8');
console.log('Successfully generated vehicles.ts in UTF-8');
