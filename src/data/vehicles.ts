export interface Vehicle {
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

export const vehicles: Vehicle[] = [
  {
    id: "1",
    name: "Rolls-Royce Phantom Series II",
    brand: "Rolls-Royce",
    model: "Phantom",
    year: 2024,
    price: 460000,
    mileage: 120,
    engine: "6.75L V12 Twin-Turbo",
    transmission: "8-Speed Automatic",
    fuelType: "Petrol",
    hp: 563,
    acceleration: "5.1s",
    topSpeed: "155 mph",
    images: [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    category: "Luxury",
    status: "Available",
    features: ["Starlight Headliner", "Coach Doors", "Whisper-quiet Cabin", "Deep-pile Floor Mats"],
    description: "The pinnacle of luxury. The Phantom Series II provides an unparalleled experience of elegance and serenity."
  },
  {
    id: "2",
    name: "Lamborghini Revuelto",
    brand: "Lamborghini",
    model: "Revuelto",
    year: 2024,
    price: 608000,
    mileage: 50,
    engine: "6.5L V12 Hybrid",
    transmission: "8-Speed Dual-Clutch",
    fuelType: "Hybrid",
    hp: 1001,
    acceleration: "2.5s",
    topSpeed: "217 mph",
    images: [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?q=80&w=2000&auto=format&fit=crop"
    ],
    category: "Hypercar",
    status: "Available",
    features: ["Active Aerodynamics", "Carbon Fiber Monocoque", "Hybrid Powertrain", "Y-shaped LED"],
    description: "A new era of performance. The Revuelto combines the raw power of a V12 with cutting-edge hybrid technology."
  },
  {
    id: "3",
    name: "Mercedes-AMG G 63",
    brand: "Mercedes-Benz",
    model: "G-Class",
    year: 2023,
    price: 179000,
    mileage: 1500,
    engine: "4.0L V8 Biturbo",
    transmission: "9-Speed Automatic",
    fuelType: "Petrol",
    hp: 577,
    acceleration: "4.5s",
    topSpeed: "137 mph",
    images: [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=2000&auto=format&fit=crop"
    ],
    category: "SUV",
    status: "Available",
    features: ["Three Differential Locks", "AMG Ride Control", "Burmester Surround Sound", "Widescreen Cockpit"],
    description: "An icon of off-road capability and luxury. The G 63 is the ultimate statement SUV."
  },
  {
    id: "4",
    name: "Porsche 911 GT3 RS",
    brand: "Porsche",
    model: "911",
    year: 2024,
    price: 241000,
    mileage: 85,
    engine: "4.0L Flat-6",
    transmission: "7-Speed PDK",
    fuelType: "Petrol",
    hp: 518,
    acceleration: "3.2s",
    topSpeed: "184 mph",
    images: [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    category: "Sports",
    status: "Available",
    features: ["DRS System", "ClubSport Package", "Carbon Fiber Seats", "Titanium Roll Cage"],
    description: "Built for the track, refined for the road. The GT3 RS is the purest expression of Porsche motorsport DNA."
  }
];
