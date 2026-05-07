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
    "id": "gen-1",
    "name": "BMW i7 M70",
    "brand": "BMW",
    "model": "i7 M70",
    "year": 2024,
    "price": 146138,
    "mileage": 10976,
    "engine": "Flat-6 Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 1165,
    "acceleration": "3.8s",
    "topSpeed": "193 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Night Vision",
      "Bespoke Leather Interior",
      "Ceramic Brakes",
      "Starlight Headliner"
    ],
    "description": "A stunning example of BMW engineering. This i7 M70 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-2",
    "name": "McLaren P1",
    "brand": "McLaren",
    "model": "P1",
    "year": 2020,
    "price": 1046151,
    "mileage": 6399,
    "engine": "Hybrid V12",
    "transmission": "9-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 417,
    "acceleration": "4.9s",
    "topSpeed": "190 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Panoramic Roof",
      "Soft-close Doors",
      "Heads-up Display"
    ],
    "description": "A stunning example of McLaren engineering. This P1 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-3",
    "name": "Bugatti Veyron",
    "brand": "Bugatti",
    "model": "Veyron",
    "year": 2024,
    "price": 1396731,
    "mileage": 10960,
    "engine": "V12 Twin-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 531,
    "acceleration": "2.3s",
    "topSpeed": "244 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Soft-close Doors",
      "Active Aero",
      "Premium Audio System",
      "Massage Seats"
    ],
    "description": "A stunning example of Bugatti engineering. This Veyron offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-4",
    "name": "Ferrari F8 Tributo",
    "brand": "Ferrari",
    "model": "F8 Tributo",
    "year": 2024,
    "price": 1458073,
    "mileage": 8637,
    "engine": "V12 Twin-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1128,
    "acceleration": "2.4s",
    "topSpeed": "236 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Soft-close Doors",
      "Night Vision",
      "Heads-up Display"
    ],
    "description": "A stunning example of Ferrari engineering. This F8 Tributo offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-5",
    "name": "Range Rover Velar",
    "brand": "Range Rover",
    "model": "Velar",
    "year": 2022,
    "price": 226492,
    "mileage": 2124,
    "engine": "Flat-6 Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 1118,
    "acceleration": "4.1s",
    "topSpeed": "226 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Panoramic Roof",
      "Ceramic Brakes",
      "Soft-close Doors",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of Range Rover engineering. This Velar offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-6",
    "name": "Lamborghini Urus",
    "brand": "Lamborghini",
    "model": "Urus",
    "year": 2020,
    "price": 424363,
    "mileage": 7197,
    "engine": "W16 Quad-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 913,
    "acceleration": "3.1s",
    "topSpeed": "192 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Reserved",
    "features": [
      "Starlight Headliner",
      "Panoramic Roof",
      "Massage Seats",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of Lamborghini engineering. This Urus offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-7",
    "name": "Bugatti Veyron",
    "brand": "Bugatti",
    "model": "Veyron",
    "year": 2020,
    "price": 251286,
    "mileage": 886,
    "engine": "Hybrid V12",
    "transmission": "9-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 769,
    "acceleration": "4.0s",
    "topSpeed": "158 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Night Vision",
      "Ceramic Brakes",
      "Heads-up Display",
      "Soft-close Doors"
    ],
    "description": "A stunning example of Bugatti engineering. This Veyron offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-8",
    "name": "Lamborghini Revuelto",
    "brand": "Lamborghini",
    "model": "Revuelto",
    "year": 2020,
    "price": 1601477,
    "mileage": 11111,
    "engine": "Flat-6 Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1071,
    "acceleration": "3.0s",
    "topSpeed": "212 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Panoramic Roof",
      "Night Vision",
      "Heads-up Display",
      "Soft-close Doors"
    ],
    "description": "A stunning example of Lamborghini engineering. This Revuelto offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-9",
    "name": "Lamborghini Revuelto",
    "brand": "Lamborghini",
    "model": "Revuelto",
    "year": 2021,
    "price": 1107667,
    "mileage": 1423,
    "engine": "W16 Quad-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 444,
    "acceleration": "3.0s",
    "topSpeed": "207 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Reserved",
    "features": [
      "Ceramic Brakes",
      "Starlight Headliner",
      "Night Vision",
      "Premium Audio System"
    ],
    "description": "A stunning example of Lamborghini engineering. This Revuelto offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-10",
    "name": "BMW i7 M70",
    "brand": "BMW",
    "model": "i7 M70",
    "year": 2021,
    "price": 1691296,
    "mileage": 7071,
    "engine": "Electric Dual-Motor",
    "transmission": "8-Speed Automatic",
    "fuelType": "Electric",
    "hp": 497,
    "acceleration": "4.9s",
    "topSpeed": "188 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Carbon Fiber Trim",
      "Massage Seats",
      "Active Aero"
    ],
    "description": "A stunning example of BMW engineering. This i7 M70 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-11",
    "name": "Bentley Mulsanne",
    "brand": "Bentley",
    "model": "Mulsanne",
    "year": 2020,
    "price": 1075712,
    "mileage": 3808,
    "engine": "V8 Biturbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 467,
    "acceleration": "2.0s",
    "topSpeed": "200 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Massage Seats",
      "Panoramic Roof",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of Bentley engineering. This Mulsanne offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-12",
    "name": "McLaren 765LT",
    "brand": "McLaren",
    "model": "765LT",
    "year": 2022,
    "price": 1742482,
    "mileage": 7772,
    "engine": "V10 Natural",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1054,
    "acceleration": "2.4s",
    "topSpeed": "168 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Heads-up Display",
      "Active Aero",
      "Soft-close Doors"
    ],
    "description": "A stunning example of McLaren engineering. This 765LT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-13",
    "name": "Bugatti Veyron",
    "brand": "Bugatti",
    "model": "Veyron",
    "year": 2023,
    "price": 1737998,
    "mileage": 9678,
    "engine": "Flat-6 Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 555,
    "acceleration": "4.6s",
    "topSpeed": "210 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Reserved",
    "features": [
      "Active Aero",
      "Ceramic Brakes",
      "Massage Seats",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Bugatti engineering. This Veyron offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-14",
    "name": "Ferrari Purosangue",
    "brand": "Ferrari",
    "model": "Purosangue",
    "year": 2020,
    "price": 2092656,
    "mileage": 4727,
    "engine": "W16 Quad-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 773,
    "acceleration": "4.4s",
    "topSpeed": "179 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Starlight Headliner",
      "Ceramic Brakes",
      "Premium Audio System"
    ],
    "description": "A stunning example of Ferrari engineering. This Purosangue offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-15",
    "name": "McLaren 720S",
    "brand": "McLaren",
    "model": "720S",
    "year": 2023,
    "price": 241112,
    "mileage": 9316,
    "engine": "V10 Natural",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 559,
    "acceleration": "3.9s",
    "topSpeed": "232 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Heads-up Display",
      "Starlight Headliner",
      "Massage Seats"
    ],
    "description": "A stunning example of McLaren engineering. This 720S offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-16",
    "name": "Rolls-Royce Spectre",
    "brand": "Rolls-Royce",
    "model": "Spectre",
    "year": 2020,
    "price": 804824,
    "mileage": 5581,
    "engine": "V12 Twin-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 654,
    "acceleration": "4.8s",
    "topSpeed": "162 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Carbon Fiber Trim",
      "Premium Audio System",
      "Massage Seats"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Spectre offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-17",
    "name": "McLaren P1",
    "brand": "McLaren",
    "model": "P1",
    "year": 2021,
    "price": 1338624,
    "mileage": 8858,
    "engine": "W16 Quad-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1096,
    "acceleration": "3.9s",
    "topSpeed": "170 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Bespoke Leather Interior",
      "Heads-up Display",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of McLaren engineering. This P1 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-18",
    "name": "Lamborghini Sian",
    "brand": "Lamborghini",
    "model": "Sian",
    "year": 2020,
    "price": 1496739,
    "mileage": 8186,
    "engine": "Hybrid V12",
    "transmission": "Single-Speed Electric",
    "fuelType": "Hybrid",
    "hp": 844,
    "acceleration": "2.2s",
    "topSpeed": "205 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Massage Seats",
      "Soft-close Doors",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Lamborghini engineering. This Sian offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-19",
    "name": "BMW M4 CSL",
    "brand": "BMW",
    "model": "M4 CSL",
    "year": 2024,
    "price": 1937977,
    "mileage": 13411,
    "engine": "Electric Dual-Motor",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Electric",
    "hp": 845,
    "acceleration": "2.0s",
    "topSpeed": "206 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Adaptive Suspension",
      "Night Vision",
      "Bespoke Leather Interior",
      "Premium Audio System"
    ],
    "description": "A stunning example of BMW engineering. This M4 CSL offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-20",
    "name": "McLaren GT",
    "brand": "McLaren",
    "model": "GT",
    "year": 2024,
    "price": 175103,
    "mileage": 13182,
    "engine": "Flat-6 Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 413,
    "acceleration": "2.9s",
    "topSpeed": "192 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Reserved",
    "features": [
      "Premium Audio System",
      "Carbon Fiber Trim",
      "Ceramic Brakes",
      "Panoramic Roof"
    ],
    "description": "A stunning example of McLaren engineering. This GT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-21",
    "name": "Mercedes-Benz GT Black Series",
    "brand": "Mercedes-Benz",
    "model": "GT Black Series",
    "year": 2023,
    "price": 563648,
    "mileage": 13828,
    "engine": "Hybrid V12",
    "transmission": "9-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 577,
    "acceleration": "2.6s",
    "topSpeed": "223 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Massage Seats",
      "Ceramic Brakes",
      "Premium Audio System"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This GT Black Series offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-22",
    "name": "Bugatti Chiron",
    "brand": "Bugatti",
    "model": "Chiron",
    "year": 2022,
    "price": 662606,
    "mileage": 10005,
    "engine": "V10 Natural",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 738,
    "acceleration": "3.2s",
    "topSpeed": "240 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Reserved",
    "features": [
      "Premium Audio System",
      "Adaptive Suspension",
      "Massage Seats",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Bugatti engineering. This Chiron offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-23",
    "name": "Lamborghini Sian",
    "brand": "Lamborghini",
    "model": "Sian",
    "year": 2021,
    "price": 166700,
    "mileage": 4315,
    "engine": "Electric Dual-Motor",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Electric",
    "hp": 612,
    "acceleration": "2.8s",
    "topSpeed": "192 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Bespoke Leather Interior",
      "Night Vision",
      "Panoramic Roof",
      "Premium Audio System"
    ],
    "description": "A stunning example of Lamborghini engineering. This Sian offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-24",
    "name": "Ferrari Purosangue",
    "brand": "Ferrari",
    "model": "Purosangue",
    "year": 2021,
    "price": 555161,
    "mileage": 10422,
    "engine": "V8 Biturbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 670,
    "acceleration": "3.0s",
    "topSpeed": "238 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Premium Audio System",
      "Panoramic Roof",
      "Night Vision",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Ferrari engineering. This Purosangue offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-25",
    "name": "Bentley Mulsanne",
    "brand": "Bentley",
    "model": "Mulsanne",
    "year": 2022,
    "price": 382780,
    "mileage": 4020,
    "engine": "V10 Natural",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 516,
    "acceleration": "2.2s",
    "topSpeed": "187 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Reserved",
    "features": [
      "Panoramic Roof",
      "Premium Audio System",
      "Ceramic Brakes",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of Bentley engineering. This Mulsanne offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-26",
    "name": "Mercedes-Benz EQS 580",
    "brand": "Mercedes-Benz",
    "model": "EQS 580",
    "year": 2021,
    "price": 1378771,
    "mileage": 8449,
    "engine": "Flat-6 Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 555,
    "acceleration": "3.5s",
    "topSpeed": "184 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Reserved",
    "features": [
      "Premium Audio System",
      "Starlight Headliner",
      "Massage Seats",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This EQS 580 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-27",
    "name": "BMW M8 Competition",
    "brand": "BMW",
    "model": "M8 Competition",
    "year": 2022,
    "price": 464762,
    "mileage": 13080,
    "engine": "V8 Biturbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 887,
    "acceleration": "4.3s",
    "topSpeed": "168 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Adaptive Suspension",
      "Active Aero",
      "Premium Audio System"
    ],
    "description": "A stunning example of BMW engineering. This M8 Competition offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-28",
    "name": "Aston Martin Vantage",
    "brand": "Aston Martin",
    "model": "Vantage",
    "year": 2024,
    "price": 611379,
    "mileage": 1988,
    "engine": "V12 Twin-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 901,
    "acceleration": "4.0s",
    "topSpeed": "217 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Ceramic Brakes",
      "Active Aero",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Aston Martin engineering. This Vantage offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-29",
    "name": "Bugatti Mistral",
    "brand": "Bugatti",
    "model": "Mistral",
    "year": 2021,
    "price": 223784,
    "mileage": 2061,
    "engine": "Hybrid V12",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Hybrid",
    "hp": 638,
    "acceleration": "2.7s",
    "topSpeed": "183 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Premium Audio System",
      "Night Vision",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of Bugatti engineering. This Mistral offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-30",
    "name": "Range Rover SV",
    "brand": "Range Rover",
    "model": "SV",
    "year": 2021,
    "price": 1777783,
    "mileage": 5348,
    "engine": "V8 Biturbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 453,
    "acceleration": "3.3s",
    "topSpeed": "215 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Massage Seats",
      "Starlight Headliner",
      "Carbon Fiber Trim",
      "Active Aero"
    ],
    "description": "A stunning example of Range Rover engineering. This SV offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-31",
    "name": "BMW i7 M70",
    "brand": "BMW",
    "model": "i7 M70",
    "year": 2024,
    "price": 1175597,
    "mileage": 10022,
    "engine": "V12 Twin-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 689,
    "acceleration": "4.9s",
    "topSpeed": "222 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Soft-close Doors",
      "Premium Audio System",
      "Massage Seats",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of BMW engineering. This i7 M70 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-32",
    "name": "Mercedes-Benz GT Black Series",
    "brand": "Mercedes-Benz",
    "model": "GT Black Series",
    "year": 2023,
    "price": 108654,
    "mileage": 5328,
    "engine": "V10 Natural",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 846,
    "acceleration": "4.6s",
    "topSpeed": "165 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Carbon Fiber Trim",
      "Active Aero",
      "Soft-close Doors"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This GT Black Series offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-33",
    "name": "Rolls-Royce Cullinan",
    "brand": "Rolls-Royce",
    "model": "Cullinan",
    "year": 2024,
    "price": 1011350,
    "mileage": 9719,
    "engine": "V10 Natural",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 761,
    "acceleration": "3.1s",
    "topSpeed": "161 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Reserved",
    "features": [
      "Starlight Headliner",
      "Heads-up Display",
      "Carbon Fiber Trim",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Cullinan offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-34",
    "name": "BMW M8 Competition",
    "brand": "BMW",
    "model": "M8 Competition",
    "year": 2020,
    "price": 192138,
    "mileage": 3366,
    "engine": "W16 Quad-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 558,
    "acceleration": "3.8s",
    "topSpeed": "193 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Ceramic Brakes",
      "Adaptive Suspension",
      "Night Vision",
      "Heads-up Display"
    ],
    "description": "A stunning example of BMW engineering. This M8 Competition offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-35",
    "name": "McLaren P1",
    "brand": "McLaren",
    "model": "P1",
    "year": 2020,
    "price": 1665297,
    "mileage": 3928,
    "engine": "Hybrid V12",
    "transmission": "9-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 930,
    "acceleration": "3.1s",
    "topSpeed": "243 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Massage Seats",
      "Premium Audio System",
      "Bespoke Leather Interior",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of McLaren engineering. This P1 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-36",
    "name": "Bugatti Divo",
    "brand": "Bugatti",
    "model": "Divo",
    "year": 2024,
    "price": 1431412,
    "mileage": 10579,
    "engine": "Electric Dual-Motor",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Electric",
    "hp": 796,
    "acceleration": "4.6s",
    "topSpeed": "189 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Panoramic Roof",
      "Night Vision",
      "Starlight Headliner",
      "Soft-close Doors"
    ],
    "description": "A stunning example of Bugatti engineering. This Divo offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-37",
    "name": "BMW M4 CSL",
    "brand": "BMW",
    "model": "M4 CSL",
    "year": 2021,
    "price": 776676,
    "mileage": 11179,
    "engine": "V12 Twin-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 889,
    "acceleration": "4.7s",
    "topSpeed": "215 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Massage Seats",
      "Soft-close Doors",
      "Night Vision"
    ],
    "description": "A stunning example of BMW engineering. This M4 CSL offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-38",
    "name": "Ferrari F8 Tributo",
    "brand": "Ferrari",
    "model": "F8 Tributo",
    "year": 2024,
    "price": 336939,
    "mileage": 11208,
    "engine": "W16 Quad-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 863,
    "acceleration": "3.4s",
    "topSpeed": "187 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Premium Audio System",
      "Panoramic Roof",
      "Active Aero",
      "Soft-close Doors"
    ],
    "description": "A stunning example of Ferrari engineering. This F8 Tributo offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-39",
    "name": "Range Rover Autobiography",
    "brand": "Range Rover",
    "model": "Autobiography",
    "year": 2024,
    "price": 599249,
    "mileage": 8463,
    "engine": "Flat-6 Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 810,
    "acceleration": "2.9s",
    "topSpeed": "235 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Active Aero",
      "Heads-up Display",
      "Soft-close Doors"
    ],
    "description": "A stunning example of Range Rover engineering. This Autobiography offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-40",
    "name": "Rolls-Royce Phantom",
    "brand": "Rolls-Royce",
    "model": "Phantom",
    "year": 2023,
    "price": 1574848,
    "mileage": 13266,
    "engine": "V10 Natural",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 866,
    "acceleration": "2.7s",
    "topSpeed": "192 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Reserved",
    "features": [
      "Starlight Headliner",
      "Adaptive Suspension",
      "Ceramic Brakes",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Phantom offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-41",
    "name": "McLaren P1",
    "brand": "McLaren",
    "model": "P1",
    "year": 2023,
    "price": 1315840,
    "mileage": 6367,
    "engine": "V8 Biturbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 886,
    "acceleration": "3.5s",
    "topSpeed": "209 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Reserved",
    "features": [
      "Bespoke Leather Interior",
      "Heads-up Display",
      "Adaptive Suspension",
      "Night Vision"
    ],
    "description": "A stunning example of McLaren engineering. This P1 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-42",
    "name": "Porsche 718 Cayman GT4",
    "brand": "Porsche",
    "model": "718 Cayman GT4",
    "year": 2020,
    "price": 1227321,
    "mileage": 1654,
    "engine": "W16 Quad-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 744,
    "acceleration": "3.3s",
    "topSpeed": "215 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Massage Seats",
      "Starlight Headliner",
      "Active Aero",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of Porsche engineering. This 718 Cayman GT4 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-43",
    "name": "Range Rover SV",
    "brand": "Range Rover",
    "model": "SV",
    "year": 2024,
    "price": 2041079,
    "mileage": 9665,
    "engine": "W16 Quad-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 860,
    "acceleration": "2.9s",
    "topSpeed": "184 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Active Aero",
      "Carbon Fiber Trim",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of Range Rover engineering. This SV offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-44",
    "name": "Bugatti Veyron",
    "brand": "Bugatti",
    "model": "Veyron",
    "year": 2022,
    "price": 1985658,
    "mileage": 2855,
    "engine": "Electric Dual-Motor",
    "transmission": "9-Speed Automatic",
    "fuelType": "Electric",
    "hp": 815,
    "acceleration": "3.0s",
    "topSpeed": "205 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Massage Seats",
      "Bespoke Leather Interior",
      "Heads-up Display"
    ],
    "description": "A stunning example of Bugatti engineering. This Veyron offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-45",
    "name": "Range Rover Sport SVR",
    "brand": "Range Rover",
    "model": "Sport SVR",
    "year": 2023,
    "price": 1557958,
    "mileage": 6998,
    "engine": "Electric Dual-Motor",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Electric",
    "hp": 614,
    "acceleration": "4.6s",
    "topSpeed": "211 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Heads-up Display",
      "Active Aero",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Range Rover engineering. This Sport SVR offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-46",
    "name": "Aston Martin DBS",
    "brand": "Aston Martin",
    "model": "DBS",
    "year": 2024,
    "price": 1693169,
    "mileage": 14606,
    "engine": "V12 Twin-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 701,
    "acceleration": "4.8s",
    "topSpeed": "169 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Carbon Fiber Trim",
      "Heads-up Display",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Aston Martin engineering. This DBS offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-47",
    "name": "Rolls-Royce Ghost",
    "brand": "Rolls-Royce",
    "model": "Ghost",
    "year": 2023,
    "price": 1110910,
    "mileage": 7434,
    "engine": "V8 Biturbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 1181,
    "acceleration": "3.2s",
    "topSpeed": "241 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Panoramic Roof",
      "Ceramic Brakes",
      "Heads-up Display",
      "Starlight Headliner"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Ghost offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-48",
    "name": "Ferrari 812 Superfast",
    "brand": "Ferrari",
    "model": "812 Superfast",
    "year": 2023,
    "price": 1210349,
    "mileage": 13422,
    "engine": "Flat-6 Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 910,
    "acceleration": "4.9s",
    "topSpeed": "170 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Ceramic Brakes",
      "Night Vision",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Ferrari engineering. This 812 Superfast offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-49",
    "name": "McLaren 765LT",
    "brand": "McLaren",
    "model": "765LT",
    "year": 2024,
    "price": 644748,
    "mileage": 4290,
    "engine": "W16 Quad-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 538,
    "acceleration": "3.8s",
    "topSpeed": "239 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Reserved",
    "features": [
      "Premium Audio System",
      "Soft-close Doors",
      "Heads-up Display",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of McLaren engineering. This 765LT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-50",
    "name": "Bentley Flying Spur",
    "brand": "Bentley",
    "model": "Flying Spur",
    "year": 2024,
    "price": 591428,
    "mileage": 7348,
    "engine": "W16 Quad-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 647,
    "acceleration": "2.1s",
    "topSpeed": "169 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Soft-close Doors",
      "Adaptive Suspension",
      "Carbon Fiber Trim",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Bentley engineering. This Flying Spur offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-51",
    "name": "Ferrari F8 Tributo",
    "brand": "Ferrari",
    "model": "F8 Tributo",
    "year": 2024,
    "price": 388622,
    "mileage": 4872,
    "engine": "Flat-6 Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 978,
    "acceleration": "4.1s",
    "topSpeed": "199 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Starlight Headliner",
      "Carbon Fiber Trim",
      "Massage Seats"
    ],
    "description": "A stunning example of Ferrari engineering. This F8 Tributo offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-52",
    "name": "Lamborghini Urus",
    "brand": "Lamborghini",
    "model": "Urus",
    "year": 2023,
    "price": 958733,
    "mileage": 1641,
    "engine": "Electric Dual-Motor",
    "transmission": "Single-Speed Electric",
    "fuelType": "Electric",
    "hp": 852,
    "acceleration": "4.7s",
    "topSpeed": "221 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Massage Seats",
      "Starlight Headliner",
      "Heads-up Display"
    ],
    "description": "A stunning example of Lamborghini engineering. This Urus offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-53",
    "name": "Aston Martin Vantage",
    "brand": "Aston Martin",
    "model": "Vantage",
    "year": 2023,
    "price": 2032239,
    "mileage": 6322,
    "engine": "V10 Natural",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 997,
    "acceleration": "4.6s",
    "topSpeed": "240 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Night Vision",
      "Soft-close Doors",
      "Premium Audio System"
    ],
    "description": "A stunning example of Aston Martin engineering. This Vantage offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-54",
    "name": "Bentley Continental GT",
    "brand": "Bentley",
    "model": "Continental GT",
    "year": 2021,
    "price": 195149,
    "mileage": 7077,
    "engine": "V12 Twin-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 1166,
    "acceleration": "2.8s",
    "topSpeed": "167 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Active Aero",
      "Bespoke Leather Interior",
      "Massage Seats"
    ],
    "description": "A stunning example of Bentley engineering. This Continental GT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-55",
    "name": "McLaren P1",
    "brand": "McLaren",
    "model": "P1",
    "year": 2023,
    "price": 463489,
    "mileage": 11840,
    "engine": "Flat-6 Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 1159,
    "acceleration": "3.1s",
    "topSpeed": "158 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Ceramic Brakes",
      "Night Vision",
      "Heads-up Display"
    ],
    "description": "A stunning example of McLaren engineering. This P1 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-56",
    "name": "BMW X7 M60i",
    "brand": "BMW",
    "model": "X7 M60i",
    "year": 2023,
    "price": 804963,
    "mileage": 10360,
    "engine": "Hybrid V12",
    "transmission": "8-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 947,
    "acceleration": "2.8s",
    "topSpeed": "198 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Bespoke Leather Interior",
      "Ceramic Brakes",
      "Panoramic Roof"
    ],
    "description": "A stunning example of BMW engineering. This X7 M60i offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-57",
    "name": "McLaren P1",
    "brand": "McLaren",
    "model": "P1",
    "year": 2020,
    "price": 236249,
    "mileage": 5032,
    "engine": "V8 Biturbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 761,
    "acceleration": "2.6s",
    "topSpeed": "244 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Adaptive Suspension",
      "Bespoke Leather Interior",
      "Massage Seats"
    ],
    "description": "A stunning example of McLaren engineering. This P1 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-58",
    "name": "Porsche Cayenne Turbo",
    "brand": "Porsche",
    "model": "Cayenne Turbo",
    "year": 2023,
    "price": 1345719,
    "mileage": 14134,
    "engine": "V8 Biturbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 782,
    "acceleration": "3.7s",
    "topSpeed": "175 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Ceramic Brakes",
      "Soft-close Doors",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Porsche engineering. This Cayenne Turbo offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-59",
    "name": "Bugatti Divo",
    "brand": "Bugatti",
    "model": "Divo",
    "year": 2020,
    "price": 1639646,
    "mileage": 7521,
    "engine": "V12 Twin-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 984,
    "acceleration": "4.6s",
    "topSpeed": "248 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Reserved",
    "features": [
      "Heads-up Display",
      "Ceramic Brakes",
      "Adaptive Suspension",
      "Starlight Headliner"
    ],
    "description": "A stunning example of Bugatti engineering. This Divo offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-60",
    "name": "Ferrari 812 Superfast",
    "brand": "Ferrari",
    "model": "812 Superfast",
    "year": 2020,
    "price": 218349,
    "mileage": 11311,
    "engine": "Flat-6 Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 1173,
    "acceleration": "3.0s",
    "topSpeed": "172 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Night Vision",
      "Soft-close Doors",
      "Starlight Headliner",
      "Massage Seats"
    ],
    "description": "A stunning example of Ferrari engineering. This 812 Superfast offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-61",
    "name": "Range Rover Autobiography",
    "brand": "Range Rover",
    "model": "Autobiography",
    "year": 2024,
    "price": 924520,
    "mileage": 1583,
    "engine": "Electric Dual-Motor",
    "transmission": "9-Speed Automatic",
    "fuelType": "Electric",
    "hp": 690,
    "acceleration": "2.7s",
    "topSpeed": "246 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Reserved",
    "features": [
      "Starlight Headliner",
      "Ceramic Brakes",
      "Soft-close Doors",
      "Active Aero"
    ],
    "description": "A stunning example of Range Rover engineering. This Autobiography offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-62",
    "name": "Lamborghini Hurac├ín",
    "brand": "Lamborghini",
    "model": "Hurac├ín",
    "year": 2022,
    "price": 431156,
    "mileage": 4619,
    "engine": "Electric Dual-Motor",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Electric",
    "hp": 545,
    "acceleration": "4.9s",
    "topSpeed": "174 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Massage Seats",
      "Ceramic Brakes",
      "Panoramic Roof",
      "Heads-up Display"
    ],
    "description": "A stunning example of Lamborghini engineering. This Hurac├ín offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-63",
    "name": "Mercedes-Benz S-Class Maybach",
    "brand": "Mercedes-Benz",
    "model": "S-Class Maybach",
    "year": 2020,
    "price": 1061805,
    "mileage": 7805,
    "engine": "Electric Dual-Motor",
    "transmission": "Single-Speed Electric",
    "fuelType": "Electric",
    "hp": 1104,
    "acceleration": "4.9s",
    "topSpeed": "206 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Reserved",
    "features": [
      "Premium Audio System",
      "Heads-up Display",
      "Starlight Headliner",
      "Night Vision"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This S-Class Maybach offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-64",
    "name": "Aston Martin DB11",
    "brand": "Aston Martin",
    "model": "DB11",
    "year": 2021,
    "price": 1658362,
    "mileage": 8869,
    "engine": "W16 Quad-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 955,
    "acceleration": "2.8s",
    "topSpeed": "161 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Massage Seats",
      "Ceramic Brakes",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Aston Martin engineering. This DB11 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-65",
    "name": "Range Rover Velar",
    "brand": "Range Rover",
    "model": "Velar",
    "year": 2023,
    "price": 453159,
    "mileage": 5110,
    "engine": "W16 Quad-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 619,
    "acceleration": "4.6s",
    "topSpeed": "169 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Panoramic Roof",
      "Heads-up Display",
      "Adaptive Suspension",
      "Night Vision"
    ],
    "description": "A stunning example of Range Rover engineering. This Velar offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-66",
    "name": "Mercedes-Benz EQS 580",
    "brand": "Mercedes-Benz",
    "model": "EQS 580",
    "year": 2022,
    "price": 431284,
    "mileage": 11685,
    "engine": "W16 Quad-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1055,
    "acceleration": "2.3s",
    "topSpeed": "191 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Premium Audio System",
      "Panoramic Roof",
      "Night Vision"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This EQS 580 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-67",
    "name": "Bugatti Divo",
    "brand": "Bugatti",
    "model": "Divo",
    "year": 2022,
    "price": 2045668,
    "mileage": 8182,
    "engine": "W16 Quad-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 1015,
    "acceleration": "3.2s",
    "topSpeed": "200 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Night Vision",
      "Heads-up Display",
      "Soft-close Doors",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Bugatti engineering. This Divo offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-68",
    "name": "Lamborghini Revuelto",
    "brand": "Lamborghini",
    "model": "Revuelto",
    "year": 2020,
    "price": 1667144,
    "mileage": 9686,
    "engine": "V12 Twin-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 1078,
    "acceleration": "4.1s",
    "topSpeed": "201 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Carbon Fiber Trim",
      "Active Aero",
      "Massage Seats"
    ],
    "description": "A stunning example of Lamborghini engineering. This Revuelto offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-69",
    "name": "Bentley Bentayga",
    "brand": "Bentley",
    "model": "Bentayga",
    "year": 2023,
    "price": 1020714,
    "mileage": 6926,
    "engine": "V8 Biturbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 816,
    "acceleration": "3.0s",
    "topSpeed": "242 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Heads-up Display",
      "Adaptive Suspension",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Bentley engineering. This Bentayga offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-70",
    "name": "Bugatti Veyron",
    "brand": "Bugatti",
    "model": "Veyron",
    "year": 2021,
    "price": 1494682,
    "mileage": 13575,
    "engine": "V12 Twin-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 796,
    "acceleration": "3.6s",
    "topSpeed": "177 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Carbon Fiber Trim",
      "Night Vision",
      "Active Aero"
    ],
    "description": "A stunning example of Bugatti engineering. This Veyron offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-71",
    "name": "BMW X7 M60i",
    "brand": "BMW",
    "model": "X7 M60i",
    "year": 2024,
    "price": 163146,
    "mileage": 2876,
    "engine": "V12 Twin-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 995,
    "acceleration": "4.5s",
    "topSpeed": "189 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Heads-up Display",
      "Massage Seats",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of BMW engineering. This X7 M60i offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-72",
    "name": "Lamborghini Sian",
    "brand": "Lamborghini",
    "model": "Sian",
    "year": 2023,
    "price": 1382833,
    "mileage": 4465,
    "engine": "Hybrid V12",
    "transmission": "Single-Speed Electric",
    "fuelType": "Hybrid",
    "hp": 884,
    "acceleration": "3.2s",
    "topSpeed": "182 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Massage Seats",
      "Heads-up Display",
      "Panoramic Roof",
      "Starlight Headliner"
    ],
    "description": "A stunning example of Lamborghini engineering. This Sian offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-73",
    "name": "Aston Martin DBS",
    "brand": "Aston Martin",
    "model": "DBS",
    "year": 2024,
    "price": 1504081,
    "mileage": 6921,
    "engine": "V12 Twin-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 749,
    "acceleration": "2.6s",
    "topSpeed": "249 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Active Aero",
      "Carbon Fiber Trim",
      "Starlight Headliner",
      "Premium Audio System"
    ],
    "description": "A stunning example of Aston Martin engineering. This DBS offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-74",
    "name": "Range Rover Velar",
    "brand": "Range Rover",
    "model": "Velar",
    "year": 2022,
    "price": 1945008,
    "mileage": 13470,
    "engine": "W16 Quad-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 492,
    "acceleration": "4.7s",
    "topSpeed": "203 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Soft-close Doors",
      "Massage Seats",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of Range Rover engineering. This Velar offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-75",
    "name": "BMW M4 CSL",
    "brand": "BMW",
    "model": "M4 CSL",
    "year": 2021,
    "price": 1652547,
    "mileage": 5046,
    "engine": "V12 Twin-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 1047,
    "acceleration": "4.4s",
    "topSpeed": "151 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Bespoke Leather Interior",
      "Premium Audio System",
      "Ceramic Brakes",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of BMW engineering. This M4 CSL offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-76",
    "name": "BMW i7 M70",
    "brand": "BMW",
    "model": "i7 M70",
    "year": 2022,
    "price": 1551252,
    "mileage": 5492,
    "engine": "Hybrid V12",
    "transmission": "8-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 934,
    "acceleration": "4.3s",
    "topSpeed": "232 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Night Vision",
      "Adaptive Suspension",
      "Active Aero",
      "Heads-up Display"
    ],
    "description": "A stunning example of BMW engineering. This i7 M70 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-77",
    "name": "Ferrari F8 Tributo",
    "brand": "Ferrari",
    "model": "F8 Tributo",
    "year": 2023,
    "price": 1780219,
    "mileage": 14994,
    "engine": "Hybrid V12",
    "transmission": "8-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 813,
    "acceleration": "2.1s",
    "topSpeed": "195 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Bespoke Leather Interior",
      "Massage Seats",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Ferrari engineering. This F8 Tributo offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-78",
    "name": "Aston Martin DBS",
    "brand": "Aston Martin",
    "model": "DBS",
    "year": 2024,
    "price": 388264,
    "mileage": 1735,
    "engine": "Electric Dual-Motor",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Electric",
    "hp": 917,
    "acceleration": "4.8s",
    "topSpeed": "154 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Premium Audio System",
      "Adaptive Suspension",
      "Massage Seats"
    ],
    "description": "A stunning example of Aston Martin engineering. This DBS offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-79",
    "name": "Mercedes-Benz GT Black Series",
    "brand": "Mercedes-Benz",
    "model": "GT Black Series",
    "year": 2024,
    "price": 2024483,
    "mileage": 12118,
    "engine": "V12 Twin-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 827,
    "acceleration": "4.7s",
    "topSpeed": "234 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Starlight Headliner",
      "Active Aero",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This GT Black Series offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-80",
    "name": "Mercedes-Benz S-Class Maybach",
    "brand": "Mercedes-Benz",
    "model": "S-Class Maybach",
    "year": 2023,
    "price": 1149751,
    "mileage": 9247,
    "engine": "W16 Quad-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 1055,
    "acceleration": "3.3s",
    "topSpeed": "236 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Massage Seats",
      "Heads-up Display",
      "Soft-close Doors",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This S-Class Maybach offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-81",
    "name": "Rolls-Royce Dawn",
    "brand": "Rolls-Royce",
    "model": "Dawn",
    "year": 2021,
    "price": 787206,
    "mileage": 8592,
    "engine": "Hybrid V12",
    "transmission": "9-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 1095,
    "acceleration": "3.4s",
    "topSpeed": "241 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Night Vision",
      "Adaptive Suspension",
      "Massage Seats",
      "Active Aero"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Dawn offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-82",
    "name": "Range Rover Autobiography",
    "brand": "Range Rover",
    "model": "Autobiography",
    "year": 2024,
    "price": 982968,
    "mileage": 12934,
    "engine": "Flat-6 Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1180,
    "acceleration": "4.7s",
    "topSpeed": "208 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Bespoke Leather Interior",
      "Soft-close Doors",
      "Heads-up Display"
    ],
    "description": "A stunning example of Range Rover engineering. This Autobiography offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-83",
    "name": "BMW M4 CSL",
    "brand": "BMW",
    "model": "M4 CSL",
    "year": 2024,
    "price": 1083757,
    "mileage": 12437,
    "engine": "Electric Dual-Motor",
    "transmission": "9-Speed Automatic",
    "fuelType": "Electric",
    "hp": 696,
    "acceleration": "4.1s",
    "topSpeed": "215 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Massage Seats",
      "Premium Audio System",
      "Panoramic Roof",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of BMW engineering. This M4 CSL offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-84",
    "name": "McLaren 765LT",
    "brand": "McLaren",
    "model": "765LT",
    "year": 2023,
    "price": 334667,
    "mileage": 13749,
    "engine": "V8 Biturbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1139,
    "acceleration": "4.7s",
    "topSpeed": "209 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Massage Seats",
      "Ceramic Brakes",
      "Panoramic Roof",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of McLaren engineering. This 765LT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-85",
    "name": "BMW i7 M70",
    "brand": "BMW",
    "model": "i7 M70",
    "year": 2023,
    "price": 1784130,
    "mileage": 3944,
    "engine": "Flat-6 Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 778,
    "acceleration": "3.5s",
    "topSpeed": "154 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Night Vision",
      "Carbon Fiber Trim",
      "Starlight Headliner",
      "Heads-up Display"
    ],
    "description": "A stunning example of BMW engineering. This i7 M70 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-86",
    "name": "Mercedes-Benz G 63 AMG",
    "brand": "Mercedes-Benz",
    "model": "G 63 AMG",
    "year": 2024,
    "price": 1943477,
    "mileage": 3993,
    "engine": "W16 Quad-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 523,
    "acceleration": "4.2s",
    "topSpeed": "198 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Carbon Fiber Trim",
      "Premium Audio System",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This G 63 AMG offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-87",
    "name": "Bentley Bentayga",
    "brand": "Bentley",
    "model": "Bentayga",
    "year": 2024,
    "price": 1210099,
    "mileage": 509,
    "engine": "W16 Quad-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 836,
    "acceleration": "3.0s",
    "topSpeed": "186 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Bespoke Leather Interior",
      "Heads-up Display",
      "Soft-close Doors",
      "Active Aero"
    ],
    "description": "A stunning example of Bentley engineering. This Bentayga offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-88",
    "name": "Rolls-Royce Phantom",
    "brand": "Rolls-Royce",
    "model": "Phantom",
    "year": 2022,
    "price": 266878,
    "mileage": 10871,
    "engine": "V10 Natural",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 698,
    "acceleration": "2.7s",
    "topSpeed": "189 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Reserved",
    "features": [
      "Premium Audio System",
      "Night Vision",
      "Panoramic Roof",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Phantom offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-89",
    "name": "BMW M4 CSL",
    "brand": "BMW",
    "model": "M4 CSL",
    "year": 2022,
    "price": 1959445,
    "mileage": 5486,
    "engine": "Hybrid V12",
    "transmission": "Single-Speed Electric",
    "fuelType": "Hybrid",
    "hp": 754,
    "acceleration": "3.2s",
    "topSpeed": "190 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Soft-close Doors",
      "Massage Seats",
      "Heads-up Display"
    ],
    "description": "A stunning example of BMW engineering. This M4 CSL offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-90",
    "name": "Bugatti Veyron",
    "brand": "Bugatti",
    "model": "Veyron",
    "year": 2021,
    "price": 978824,
    "mileage": 8621,
    "engine": "Flat-6 Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 711,
    "acceleration": "4.3s",
    "topSpeed": "212 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Night Vision",
      "Premium Audio System",
      "Soft-close Doors",
      "Active Aero"
    ],
    "description": "A stunning example of Bugatti engineering. This Veyron offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-91",
    "name": "Aston Martin DBX",
    "brand": "Aston Martin",
    "model": "DBX",
    "year": 2020,
    "price": 1040544,
    "mileage": 43,
    "engine": "V8 Biturbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 760,
    "acceleration": "2.2s",
    "topSpeed": "156 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Night Vision",
      "Carbon Fiber Trim",
      "Panoramic Roof",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Aston Martin engineering. This DBX offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-92",
    "name": "Porsche 911 Turbo S",
    "brand": "Porsche",
    "model": "911 Turbo S",
    "year": 2022,
    "price": 784047,
    "mileage": 2485,
    "engine": "V12 Twin-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 533,
    "acceleration": "2.3s",
    "topSpeed": "236 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Adaptive Suspension",
      "Soft-close Doors",
      "Heads-up Display"
    ],
    "description": "A stunning example of Porsche engineering. This 911 Turbo S offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-93",
    "name": "Range Rover SV",
    "brand": "Range Rover",
    "model": "SV",
    "year": 2020,
    "price": 1389052,
    "mileage": 14684,
    "engine": "Hybrid V12",
    "transmission": "8-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 947,
    "acceleration": "2.3s",
    "topSpeed": "223 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Panoramic Roof",
      "Active Aero",
      "Heads-up Display"
    ],
    "description": "A stunning example of Range Rover engineering. This SV offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-94",
    "name": "Rolls-Royce Dawn",
    "brand": "Rolls-Royce",
    "model": "Dawn",
    "year": 2020,
    "price": 1753903,
    "mileage": 10033,
    "engine": "Electric Dual-Motor",
    "transmission": "9-Speed Automatic",
    "fuelType": "Electric",
    "hp": 717,
    "acceleration": "2.5s",
    "topSpeed": "217 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Massage Seats",
      "Heads-up Display",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Dawn offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-95",
    "name": "Range Rover SV",
    "brand": "Range Rover",
    "model": "SV",
    "year": 2022,
    "price": 1182259,
    "mileage": 12455,
    "engine": "Flat-6 Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 891,
    "acceleration": "2.3s",
    "topSpeed": "239 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Panoramic Roof",
      "Night Vision",
      "Heads-up Display",
      "Massage Seats"
    ],
    "description": "A stunning example of Range Rover engineering. This SV offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-96",
    "name": "Mercedes-Benz EQS 580",
    "brand": "Mercedes-Benz",
    "model": "EQS 580",
    "year": 2021,
    "price": 438270,
    "mileage": 9016,
    "engine": "W16 Quad-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 1101,
    "acceleration": "4.9s",
    "topSpeed": "194 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Reserved",
    "features": [
      "Adaptive Suspension",
      "Carbon Fiber Trim",
      "Soft-close Doors",
      "Heads-up Display"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This EQS 580 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-97",
    "name": "Lamborghini Sian",
    "brand": "Lamborghini",
    "model": "Sian",
    "year": 2022,
    "price": 446733,
    "mileage": 7098,
    "engine": "V10 Natural",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 497,
    "acceleration": "2.0s",
    "topSpeed": "167 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Reserved",
    "features": [
      "Heads-up Display",
      "Soft-close Doors",
      "Massage Seats",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Lamborghini engineering. This Sian offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-98",
    "name": "McLaren 765LT",
    "brand": "McLaren",
    "model": "765LT",
    "year": 2023,
    "price": 880616,
    "mileage": 12105,
    "engine": "V12 Twin-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 496,
    "acceleration": "2.0s",
    "topSpeed": "246 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Massage Seats",
      "Bespoke Leather Interior",
      "Heads-up Display"
    ],
    "description": "A stunning example of McLaren engineering. This 765LT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-99",
    "name": "Ferrari 296 GTB",
    "brand": "Ferrari",
    "model": "296 GTB",
    "year": 2023,
    "price": 759943,
    "mileage": 2057,
    "engine": "W16 Quad-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 767,
    "acceleration": "3.4s",
    "topSpeed": "198 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Adaptive Suspension",
      "Active Aero",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Ferrari engineering. This 296 GTB offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-100",
    "name": "McLaren Artura",
    "brand": "McLaren",
    "model": "Artura",
    "year": 2021,
    "price": 553890,
    "mileage": 4928,
    "engine": "Hybrid V12",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Hybrid",
    "hp": 878,
    "acceleration": "2.5s",
    "topSpeed": "248 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Carbon Fiber Trim",
      "Active Aero",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of McLaren engineering. This Artura offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-101",
    "name": "Lamborghini Hurac├ín",
    "brand": "Lamborghini",
    "model": "Hurac├ín",
    "year": 2022,
    "price": 818971,
    "mileage": 4194,
    "engine": "V10 Natural",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 853,
    "acceleration": "4.8s",
    "topSpeed": "159 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Massage Seats",
      "Active Aero",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Lamborghini engineering. This Hurac├ín offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-102",
    "name": "Bentley Bentayga",
    "brand": "Bentley",
    "model": "Bentayga",
    "year": 2024,
    "price": 1185044,
    "mileage": 837,
    "engine": "V10 Natural",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 496,
    "acceleration": "4.1s",
    "topSpeed": "165 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Ceramic Brakes",
      "Heads-up Display",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Bentley engineering. This Bentayga offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-103",
    "name": "BMW M8 Competition",
    "brand": "BMW",
    "model": "M8 Competition",
    "year": 2023,
    "price": 896224,
    "mileage": 12760,
    "engine": "Hybrid V12",
    "transmission": "Single-Speed Electric",
    "fuelType": "Hybrid",
    "hp": 858,
    "acceleration": "3.5s",
    "topSpeed": "214 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Massage Seats",
      "Carbon Fiber Trim",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of BMW engineering. This M8 Competition offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-104",
    "name": "Ferrari 296 GTB",
    "brand": "Ferrari",
    "model": "296 GTB",
    "year": 2023,
    "price": 482297,
    "mileage": 3856,
    "engine": "Flat-6 Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 466,
    "acceleration": "4.8s",
    "topSpeed": "205 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Heads-up Display",
      "Starlight Headliner",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of Ferrari engineering. This 296 GTB offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-105",
    "name": "McLaren GT",
    "brand": "McLaren",
    "model": "GT",
    "year": 2020,
    "price": 1602846,
    "mileage": 14761,
    "engine": "Hybrid V12",
    "transmission": "9-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 921,
    "acceleration": "2.5s",
    "topSpeed": "204 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Massage Seats",
      "Bespoke Leather Interior",
      "Premium Audio System"
    ],
    "description": "A stunning example of McLaren engineering. This GT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-106",
    "name": "Aston Martin DBX",
    "brand": "Aston Martin",
    "model": "DBX",
    "year": 2020,
    "price": 712350,
    "mileage": 10576,
    "engine": "Flat-6 Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1088,
    "acceleration": "3.2s",
    "topSpeed": "234 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Heads-up Display",
      "Starlight Headliner",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Aston Martin engineering. This DBX offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-107",
    "name": "BMW M4 CSL",
    "brand": "BMW",
    "model": "M4 CSL",
    "year": 2024,
    "price": 107731,
    "mileage": 1411,
    "engine": "W16 Quad-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 837,
    "acceleration": "4.9s",
    "topSpeed": "201 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Night Vision",
      "Ceramic Brakes",
      "Carbon Fiber Trim",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of BMW engineering. This M4 CSL offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-108",
    "name": "Rolls-Royce Dawn",
    "brand": "Rolls-Royce",
    "model": "Dawn",
    "year": 2024,
    "price": 1510912,
    "mileage": 11974,
    "engine": "Electric Dual-Motor",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Electric",
    "hp": 651,
    "acceleration": "3.3s",
    "topSpeed": "191 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Heads-up Display",
      "Active Aero",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Dawn offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-109",
    "name": "Mercedes-Benz GT Black Series",
    "brand": "Mercedes-Benz",
    "model": "GT Black Series",
    "year": 2020,
    "price": 110370,
    "mileage": 3173,
    "engine": "W16 Quad-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 1036,
    "acceleration": "2.1s",
    "topSpeed": "203 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Premium Audio System",
      "Night Vision",
      "Heads-up Display"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This GT Black Series offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-110",
    "name": "McLaren Artura",
    "brand": "McLaren",
    "model": "Artura",
    "year": 2021,
    "price": 816529,
    "mileage": 3420,
    "engine": "V12 Twin-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 741,
    "acceleration": "4.1s",
    "topSpeed": "161 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Reserved",
    "features": [
      "Adaptive Suspension",
      "Active Aero",
      "Massage Seats",
      "Starlight Headliner"
    ],
    "description": "A stunning example of McLaren engineering. This Artura offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-111",
    "name": "McLaren P1",
    "brand": "McLaren",
    "model": "P1",
    "year": 2022,
    "price": 1694870,
    "mileage": 9568,
    "engine": "V12 Twin-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1171,
    "acceleration": "2.3s",
    "topSpeed": "221 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Soft-close Doors",
      "Massage Seats",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of McLaren engineering. This P1 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-112",
    "name": "Ferrari 812 Superfast",
    "brand": "Ferrari",
    "model": "812 Superfast",
    "year": 2023,
    "price": 1635263,
    "mileage": 9611,
    "engine": "Hybrid V12",
    "transmission": "Single-Speed Electric",
    "fuelType": "Hybrid",
    "hp": 799,
    "acceleration": "3.7s",
    "topSpeed": "235 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Ceramic Brakes",
      "Panoramic Roof",
      "Massage Seats"
    ],
    "description": "A stunning example of Ferrari engineering. This 812 Superfast offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-113",
    "name": "Aston Martin DB11",
    "brand": "Aston Martin",
    "model": "DB11",
    "year": 2021,
    "price": 1852819,
    "mileage": 9081,
    "engine": "V8 Biturbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 427,
    "acceleration": "4.0s",
    "topSpeed": "152 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Soft-close Doors",
      "Premium Audio System",
      "Active Aero",
      "Night Vision"
    ],
    "description": "A stunning example of Aston Martin engineering. This DB11 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-114",
    "name": "Ferrari Purosangue",
    "brand": "Ferrari",
    "model": "Purosangue",
    "year": 2024,
    "price": 828188,
    "mileage": 7948,
    "engine": "Flat-6 Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 600,
    "acceleration": "3.3s",
    "topSpeed": "209 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Starlight Headliner",
      "Massage Seats",
      "Ceramic Brakes",
      "Active Aero"
    ],
    "description": "A stunning example of Ferrari engineering. This Purosangue offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-115",
    "name": "Lamborghini Revuelto",
    "brand": "Lamborghini",
    "model": "Revuelto",
    "year": 2024,
    "price": 814360,
    "mileage": 7282,
    "engine": "V8 Biturbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 818,
    "acceleration": "4.2s",
    "topSpeed": "174 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Carbon Fiber Trim",
      "Heads-up Display",
      "Night Vision"
    ],
    "description": "A stunning example of Lamborghini engineering. This Revuelto offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-116",
    "name": "Ferrari 812 Superfast",
    "brand": "Ferrari",
    "model": "812 Superfast",
    "year": 2022,
    "price": 1483854,
    "mileage": 1219,
    "engine": "V10 Natural",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 861,
    "acceleration": "4.7s",
    "topSpeed": "213 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Active Aero",
      "Starlight Headliner",
      "Ceramic Brakes",
      "Night Vision"
    ],
    "description": "A stunning example of Ferrari engineering. This 812 Superfast offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-117",
    "name": "Ferrari 296 GTB",
    "brand": "Ferrari",
    "model": "296 GTB",
    "year": 2020,
    "price": 621010,
    "mileage": 8425,
    "engine": "V12 Twin-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1190,
    "acceleration": "3.1s",
    "topSpeed": "153 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Premium Audio System",
      "Night Vision",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of Ferrari engineering. This 296 GTB offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-118",
    "name": "Lamborghini Revuelto",
    "brand": "Lamborghini",
    "model": "Revuelto",
    "year": 2021,
    "price": 1068982,
    "mileage": 5165,
    "engine": "V12 Twin-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 996,
    "acceleration": "3.1s",
    "topSpeed": "152 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Active Aero",
      "Massage Seats",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Lamborghini engineering. This Revuelto offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-119",
    "name": "Lamborghini Hurac├ín",
    "brand": "Lamborghini",
    "model": "Hurac├ín",
    "year": 2022,
    "price": 1042845,
    "mileage": 12186,
    "engine": "V8 Biturbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 489,
    "acceleration": "2.8s",
    "topSpeed": "222 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Soft-close Doors",
      "Starlight Headliner",
      "Massage Seats",
      "Heads-up Display"
    ],
    "description": "A stunning example of Lamborghini engineering. This Hurac├ín offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-120",
    "name": "Rolls-Royce Dawn",
    "brand": "Rolls-Royce",
    "model": "Dawn",
    "year": 2020,
    "price": 1832918,
    "mileage": 1918,
    "engine": "V12 Twin-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 1133,
    "acceleration": "2.3s",
    "topSpeed": "222 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Adaptive Suspension",
      "Massage Seats",
      "Night Vision"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Dawn offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-121",
    "name": "Lamborghini Aventador",
    "brand": "Lamborghini",
    "model": "Aventador",
    "year": 2024,
    "price": 1672719,
    "mileage": 2726,
    "engine": "V8 Biturbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 994,
    "acceleration": "4.6s",
    "topSpeed": "223 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Heads-up Display",
      "Starlight Headliner",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of Lamborghini engineering. This Aventador offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-122",
    "name": "McLaren 720S",
    "brand": "McLaren",
    "model": "720S",
    "year": 2020,
    "price": 1126487,
    "mileage": 9359,
    "engine": "W16 Quad-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 791,
    "acceleration": "3.2s",
    "topSpeed": "175 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Soft-close Doors",
      "Starlight Headliner",
      "Massage Seats",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of McLaren engineering. This 720S offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-123",
    "name": "Bentley Mulsanne",
    "brand": "Bentley",
    "model": "Mulsanne",
    "year": 2021,
    "price": 1710636,
    "mileage": 4385,
    "engine": "V8 Biturbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 620,
    "acceleration": "3.5s",
    "topSpeed": "202 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Carbon Fiber Trim",
      "Massage Seats",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of Bentley engineering. This Mulsanne offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-124",
    "name": "Rolls-Royce Dawn",
    "brand": "Rolls-Royce",
    "model": "Dawn",
    "year": 2023,
    "price": 1421099,
    "mileage": 9904,
    "engine": "V8 Biturbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 432,
    "acceleration": "4.7s",
    "topSpeed": "184 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Massage Seats",
      "Soft-close Doors",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Dawn offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-125",
    "name": "McLaren GT",
    "brand": "McLaren",
    "model": "GT",
    "year": 2022,
    "price": 1106633,
    "mileage": 9172,
    "engine": "V10 Natural",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1022,
    "acceleration": "2.9s",
    "topSpeed": "241 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Panoramic Roof",
      "Bespoke Leather Interior",
      "Night Vision"
    ],
    "description": "A stunning example of McLaren engineering. This GT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-126",
    "name": "Aston Martin DBS",
    "brand": "Aston Martin",
    "model": "DBS",
    "year": 2024,
    "price": 1933231,
    "mileage": 11945,
    "engine": "V8 Biturbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 817,
    "acceleration": "3.9s",
    "topSpeed": "242 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Bespoke Leather Interior",
      "Soft-close Doors",
      "Active Aero",
      "Premium Audio System"
    ],
    "description": "A stunning example of Aston Martin engineering. This DBS offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-127",
    "name": "Aston Martin Valhalla",
    "brand": "Aston Martin",
    "model": "Valhalla",
    "year": 2024,
    "price": 1803547,
    "mileage": 8933,
    "engine": "V12 Twin-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 929,
    "acceleration": "4.5s",
    "topSpeed": "152 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Massage Seats",
      "Soft-close Doors",
      "Heads-up Display"
    ],
    "description": "A stunning example of Aston Martin engineering. This Valhalla offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-128",
    "name": "BMW M8 Competition",
    "brand": "BMW",
    "model": "M8 Competition",
    "year": 2020,
    "price": 1600765,
    "mileage": 12636,
    "engine": "Electric Dual-Motor",
    "transmission": "8-Speed Automatic",
    "fuelType": "Electric",
    "hp": 421,
    "acceleration": "2.2s",
    "topSpeed": "187 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Night Vision",
      "Premium Audio System",
      "Ceramic Brakes",
      "Panoramic Roof"
    ],
    "description": "A stunning example of BMW engineering. This M8 Competition offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-129",
    "name": "Porsche 718 Cayman GT4",
    "brand": "Porsche",
    "model": "718 Cayman GT4",
    "year": 2023,
    "price": 1721323,
    "mileage": 7692,
    "engine": "V12 Twin-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 489,
    "acceleration": "4.1s",
    "topSpeed": "170 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Heads-up Display",
      "Adaptive Suspension",
      "Active Aero"
    ],
    "description": "A stunning example of Porsche engineering. This 718 Cayman GT4 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-130",
    "name": "Mercedes-Benz S-Class Maybach",
    "brand": "Mercedes-Benz",
    "model": "S-Class Maybach",
    "year": 2023,
    "price": 1341742,
    "mileage": 8475,
    "engine": "Hybrid V12",
    "transmission": "Single-Speed Electric",
    "fuelType": "Hybrid",
    "hp": 1130,
    "acceleration": "2.6s",
    "topSpeed": "220 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Heads-up Display",
      "Panoramic Roof",
      "Active Aero"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This S-Class Maybach offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-131",
    "name": "McLaren GT",
    "brand": "McLaren",
    "model": "GT",
    "year": 2022,
    "price": 1822332,
    "mileage": 5332,
    "engine": "V8 Biturbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 444,
    "acceleration": "4.1s",
    "topSpeed": "203 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Carbon Fiber Trim",
      "Soft-close Doors",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of McLaren engineering. This GT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-132",
    "name": "Porsche 718 Cayman GT4",
    "brand": "Porsche",
    "model": "718 Cayman GT4",
    "year": 2023,
    "price": 290855,
    "mileage": 1929,
    "engine": "W16 Quad-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 801,
    "acceleration": "3.0s",
    "topSpeed": "232 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Soft-close Doors",
      "Starlight Headliner",
      "Panoramic Roof",
      "Massage Seats"
    ],
    "description": "A stunning example of Porsche engineering. This 718 Cayman GT4 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-133",
    "name": "Bugatti Mistral",
    "brand": "Bugatti",
    "model": "Mistral",
    "year": 2022,
    "price": 1189778,
    "mileage": 7519,
    "engine": "Electric Dual-Motor",
    "transmission": "Single-Speed Electric",
    "fuelType": "Electric",
    "hp": 907,
    "acceleration": "2.8s",
    "topSpeed": "196 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Adaptive Suspension",
      "Panoramic Roof",
      "Massage Seats"
    ],
    "description": "A stunning example of Bugatti engineering. This Mistral offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-134",
    "name": "Aston Martin DB11",
    "brand": "Aston Martin",
    "model": "DB11",
    "year": 2020,
    "price": 1203717,
    "mileage": 6690,
    "engine": "Electric Dual-Motor",
    "transmission": "8-Speed Automatic",
    "fuelType": "Electric",
    "hp": 1070,
    "acceleration": "3.7s",
    "topSpeed": "228 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Massage Seats",
      "Night Vision",
      "Starlight Headliner",
      "Heads-up Display"
    ],
    "description": "A stunning example of Aston Martin engineering. This DB11 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-135",
    "name": "McLaren GT",
    "brand": "McLaren",
    "model": "GT",
    "year": 2024,
    "price": 369752,
    "mileage": 11520,
    "engine": "Hybrid V12",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Hybrid",
    "hp": 673,
    "acceleration": "2.4s",
    "topSpeed": "198 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Adaptive Suspension",
      "Soft-close Doors",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of McLaren engineering. This GT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-136",
    "name": "Lamborghini Aventador",
    "brand": "Lamborghini",
    "model": "Aventador",
    "year": 2020,
    "price": 637782,
    "mileage": 4294,
    "engine": "Hybrid V12",
    "transmission": "Single-Speed Electric",
    "fuelType": "Hybrid",
    "hp": 887,
    "acceleration": "2.7s",
    "topSpeed": "210 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Massage Seats",
      "Active Aero",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Lamborghini engineering. This Aventador offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-137",
    "name": "Range Rover Velar",
    "brand": "Range Rover",
    "model": "Velar",
    "year": 2024,
    "price": 421294,
    "mileage": 6179,
    "engine": "Hybrid V12",
    "transmission": "8-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 544,
    "acceleration": "2.3s",
    "topSpeed": "172 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Soft-close Doors",
      "Starlight Headliner",
      "Heads-up Display"
    ],
    "description": "A stunning example of Range Rover engineering. This Velar offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-138",
    "name": "Mercedes-Benz S-Class Maybach",
    "brand": "Mercedes-Benz",
    "model": "S-Class Maybach",
    "year": 2020,
    "price": 869053,
    "mileage": 8145,
    "engine": "W16 Quad-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 627,
    "acceleration": "3.3s",
    "topSpeed": "209 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Bespoke Leather Interior",
      "Heads-up Display",
      "Ceramic Brakes",
      "Soft-close Doors"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This S-Class Maybach offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-139",
    "name": "Bugatti Mistral",
    "brand": "Bugatti",
    "model": "Mistral",
    "year": 2023,
    "price": 115099,
    "mileage": 12733,
    "engine": "V12 Twin-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 554,
    "acceleration": "2.9s",
    "topSpeed": "204 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Reserved",
    "features": [
      "Panoramic Roof",
      "Ceramic Brakes",
      "Soft-close Doors",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Bugatti engineering. This Mistral offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-140",
    "name": "Ferrari F8 Tributo",
    "brand": "Ferrari",
    "model": "F8 Tributo",
    "year": 2022,
    "price": 1551985,
    "mileage": 10095,
    "engine": "Hybrid V12",
    "transmission": "Single-Speed Electric",
    "fuelType": "Hybrid",
    "hp": 823,
    "acceleration": "3.9s",
    "topSpeed": "182 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Ceramic Brakes",
      "Carbon Fiber Trim",
      "Massage Seats",
      "Starlight Headliner"
    ],
    "description": "A stunning example of Ferrari engineering. This F8 Tributo offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-141",
    "name": "BMW M8 Competition",
    "brand": "BMW",
    "model": "M8 Competition",
    "year": 2020,
    "price": 382806,
    "mileage": 13289,
    "engine": "Hybrid V12",
    "transmission": "9-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 824,
    "acceleration": "3.9s",
    "topSpeed": "156 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Panoramic Roof",
      "Bespoke Leather Interior",
      "Massage Seats"
    ],
    "description": "A stunning example of BMW engineering. This M8 Competition offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-142",
    "name": "Range Rover Velar",
    "brand": "Range Rover",
    "model": "Velar",
    "year": 2024,
    "price": 816277,
    "mileage": 14651,
    "engine": "V12 Twin-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 790,
    "acceleration": "4.0s",
    "topSpeed": "229 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Bespoke Leather Interior",
      "Panoramic Roof",
      "Massage Seats"
    ],
    "description": "A stunning example of Range Rover engineering. This Velar offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-143",
    "name": "McLaren 720S",
    "brand": "McLaren",
    "model": "720S",
    "year": 2021,
    "price": 1319883,
    "mileage": 8583,
    "engine": "V10 Natural",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 846,
    "acceleration": "2.6s",
    "topSpeed": "171 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Starlight Headliner",
      "Night Vision",
      "Heads-up Display"
    ],
    "description": "A stunning example of McLaren engineering. This 720S offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-144",
    "name": "BMW i7 M70",
    "brand": "BMW",
    "model": "i7 M70",
    "year": 2020,
    "price": 1925949,
    "mileage": 9387,
    "engine": "V12 Twin-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 746,
    "acceleration": "4.1s",
    "topSpeed": "246 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Soft-close Doors",
      "Carbon Fiber Trim",
      "Heads-up Display"
    ],
    "description": "A stunning example of BMW engineering. This i7 M70 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-145",
    "name": "Rolls-Royce Ghost",
    "brand": "Rolls-Royce",
    "model": "Ghost",
    "year": 2022,
    "price": 1314122,
    "mileage": 4313,
    "engine": "V10 Natural",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 1023,
    "acceleration": "2.4s",
    "topSpeed": "180 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Ceramic Brakes",
      "Premium Audio System",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Ghost offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-146",
    "name": "Rolls-Royce Phantom",
    "brand": "Rolls-Royce",
    "model": "Phantom",
    "year": 2021,
    "price": 1171040,
    "mileage": 1807,
    "engine": "Hybrid V12",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Hybrid",
    "hp": 517,
    "acceleration": "4.5s",
    "topSpeed": "218 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Reserved",
    "features": [
      "Bespoke Leather Interior",
      "Premium Audio System",
      "Heads-up Display",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Phantom offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-147",
    "name": "Porsche 911 Turbo S",
    "brand": "Porsche",
    "model": "911 Turbo S",
    "year": 2022,
    "price": 343210,
    "mileage": 14350,
    "engine": "V8 Biturbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 605,
    "acceleration": "4.4s",
    "topSpeed": "183 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Panoramic Roof",
      "Starlight Headliner",
      "Massage Seats",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Porsche engineering. This 911 Turbo S offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-148",
    "name": "Aston Martin DB11",
    "brand": "Aston Martin",
    "model": "DB11",
    "year": 2022,
    "price": 347454,
    "mileage": 914,
    "engine": "W16 Quad-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 745,
    "acceleration": "4.8s",
    "topSpeed": "212 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Premium Audio System",
      "Night Vision",
      "Active Aero",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of Aston Martin engineering. This DB11 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-149",
    "name": "McLaren 765LT",
    "brand": "McLaren",
    "model": "765LT",
    "year": 2022,
    "price": 556356,
    "mileage": 5722,
    "engine": "Flat-6 Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 566,
    "acceleration": "3.0s",
    "topSpeed": "174 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Reserved",
    "features": [
      "Carbon Fiber Trim",
      "Soft-close Doors",
      "Massage Seats",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of McLaren engineering. This 765LT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-150",
    "name": "Lamborghini Hurac├ín",
    "brand": "Lamborghini",
    "model": "Hurac├ín",
    "year": 2024,
    "price": 1010050,
    "mileage": 2766,
    "engine": "Electric Dual-Motor",
    "transmission": "Single-Speed Electric",
    "fuelType": "Electric",
    "hp": 1199,
    "acceleration": "3.8s",
    "topSpeed": "223 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Active Aero",
      "Night Vision",
      "Starlight Headliner",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of Lamborghini engineering. This Hurac├ín offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-151",
    "name": "Bentley Bentayga",
    "brand": "Bentley",
    "model": "Bentayga",
    "year": 2021,
    "price": 821947,
    "mileage": 9227,
    "engine": "V12 Twin-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1188,
    "acceleration": "2.2s",
    "topSpeed": "182 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Ceramic Brakes",
      "Night Vision",
      "Massage Seats"
    ],
    "description": "A stunning example of Bentley engineering. This Bentayga offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-152",
    "name": "Mercedes-Benz G 63 AMG",
    "brand": "Mercedes-Benz",
    "model": "G 63 AMG",
    "year": 2022,
    "price": 1078015,
    "mileage": 8722,
    "engine": "V12 Twin-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 788,
    "acceleration": "2.8s",
    "topSpeed": "153 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Bespoke Leather Interior",
      "Ceramic Brakes",
      "Massage Seats",
      "Night Vision"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This G 63 AMG offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-153",
    "name": "McLaren Artura",
    "brand": "McLaren",
    "model": "Artura",
    "year": 2024,
    "price": 799599,
    "mileage": 2408,
    "engine": "Hybrid V12",
    "transmission": "9-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 819,
    "acceleration": "2.5s",
    "topSpeed": "209 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Active Aero",
      "Ceramic Brakes",
      "Carbon Fiber Trim",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of McLaren engineering. This Artura offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-154",
    "name": "Ferrari 812 Superfast",
    "brand": "Ferrari",
    "model": "812 Superfast",
    "year": 2020,
    "price": 1468894,
    "mileage": 7260,
    "engine": "Electric Dual-Motor",
    "transmission": "Single-Speed Electric",
    "fuelType": "Electric",
    "hp": 781,
    "acceleration": "4.2s",
    "topSpeed": "212 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Carbon Fiber Trim",
      "Soft-close Doors",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Ferrari engineering. This 812 Superfast offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-155",
    "name": "BMW X7 M60i",
    "brand": "BMW",
    "model": "X7 M60i",
    "year": 2022,
    "price": 1298531,
    "mileage": 2196,
    "engine": "Hybrid V12",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Hybrid",
    "hp": 784,
    "acceleration": "4.4s",
    "topSpeed": "170 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Carbon Fiber Trim",
      "Adaptive Suspension",
      "Active Aero"
    ],
    "description": "A stunning example of BMW engineering. This X7 M60i offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-156",
    "name": "Bugatti Veyron",
    "brand": "Bugatti",
    "model": "Veyron",
    "year": 2023,
    "price": 741266,
    "mileage": 211,
    "engine": "V12 Twin-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 1147,
    "acceleration": "3.9s",
    "topSpeed": "208 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Soft-close Doors",
      "Panoramic Roof",
      "Bespoke Leather Interior",
      "Heads-up Display"
    ],
    "description": "A stunning example of Bugatti engineering. This Veyron offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-157",
    "name": "Mercedes-Benz S-Class Maybach",
    "brand": "Mercedes-Benz",
    "model": "S-Class Maybach",
    "year": 2023,
    "price": 1935134,
    "mileage": 4161,
    "engine": "W16 Quad-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1145,
    "acceleration": "5.0s",
    "topSpeed": "246 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Premium Audio System",
      "Soft-close Doors",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This S-Class Maybach offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-158",
    "name": "Bentley Continental GT",
    "brand": "Bentley",
    "model": "Continental GT",
    "year": 2020,
    "price": 1674330,
    "mileage": 2913,
    "engine": "Flat-6 Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 413,
    "acceleration": "3.9s",
    "topSpeed": "231 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Massage Seats",
      "Adaptive Suspension",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of Bentley engineering. This Continental GT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-159",
    "name": "Bugatti Divo",
    "brand": "Bugatti",
    "model": "Divo",
    "year": 2021,
    "price": 1995365,
    "mileage": 4891,
    "engine": "V8 Biturbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 632,
    "acceleration": "3.2s",
    "topSpeed": "205 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Starlight Headliner",
      "Panoramic Roof",
      "Massage Seats"
    ],
    "description": "A stunning example of Bugatti engineering. This Divo offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-160",
    "name": "Ferrari 812 Superfast",
    "brand": "Ferrari",
    "model": "812 Superfast",
    "year": 2024,
    "price": 794266,
    "mileage": 13375,
    "engine": "Hybrid V12",
    "transmission": "9-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 727,
    "acceleration": "3.7s",
    "topSpeed": "232 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Carbon Fiber Trim",
      "Massage Seats",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Ferrari engineering. This 812 Superfast offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-161",
    "name": "Aston Martin DBS",
    "brand": "Aston Martin",
    "model": "DBS",
    "year": 2022,
    "price": 1008170,
    "mileage": 3790,
    "engine": "Flat-6 Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 495,
    "acceleration": "2.1s",
    "topSpeed": "195 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Heads-up Display",
      "Active Aero",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of Aston Martin engineering. This DBS offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-162",
    "name": "Mercedes-Benz S-Class Maybach",
    "brand": "Mercedes-Benz",
    "model": "S-Class Maybach",
    "year": 2023,
    "price": 1022073,
    "mileage": 1274,
    "engine": "W16 Quad-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 652,
    "acceleration": "3.0s",
    "topSpeed": "185 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Reserved",
    "features": [
      "Night Vision",
      "Panoramic Roof",
      "Ceramic Brakes",
      "Premium Audio System"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This S-Class Maybach offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-163",
    "name": "Bentley Bentayga",
    "brand": "Bentley",
    "model": "Bentayga",
    "year": 2020,
    "price": 497658,
    "mileage": 10204,
    "engine": "Electric Dual-Motor",
    "transmission": "9-Speed Automatic",
    "fuelType": "Electric",
    "hp": 722,
    "acceleration": "2.2s",
    "topSpeed": "160 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Reserved",
    "features": [
      "Carbon Fiber Trim",
      "Night Vision",
      "Massage Seats",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Bentley engineering. This Bentayga offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-164",
    "name": "McLaren GT",
    "brand": "McLaren",
    "model": "GT",
    "year": 2024,
    "price": 1670135,
    "mileage": 829,
    "engine": "V10 Natural",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 653,
    "acceleration": "4.2s",
    "topSpeed": "240 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Reserved",
    "features": [
      "Premium Audio System",
      "Ceramic Brakes",
      "Heads-up Display",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of McLaren engineering. This GT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-165",
    "name": "BMW M8 Competition",
    "brand": "BMW",
    "model": "M8 Competition",
    "year": 2021,
    "price": 929548,
    "mileage": 9850,
    "engine": "Hybrid V12",
    "transmission": "9-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 1191,
    "acceleration": "3.6s",
    "topSpeed": "157 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Panoramic Roof",
      "Carbon Fiber Trim",
      "Night Vision"
    ],
    "description": "A stunning example of BMW engineering. This M8 Competition offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-166",
    "name": "Lamborghini Revuelto",
    "brand": "Lamborghini",
    "model": "Revuelto",
    "year": 2020,
    "price": 1008279,
    "mileage": 4804,
    "engine": "W16 Quad-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 737,
    "acceleration": "4.1s",
    "topSpeed": "194 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Panoramic Roof",
      "Adaptive Suspension",
      "Active Aero"
    ],
    "description": "A stunning example of Lamborghini engineering. This Revuelto offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-167",
    "name": "Ferrari Purosangue",
    "brand": "Ferrari",
    "model": "Purosangue",
    "year": 2022,
    "price": 1232587,
    "mileage": 9250,
    "engine": "Flat-6 Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 601,
    "acceleration": "2.9s",
    "topSpeed": "201 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Adaptive Suspension",
      "Starlight Headliner",
      "Heads-up Display"
    ],
    "description": "A stunning example of Ferrari engineering. This Purosangue offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-168",
    "name": "Mercedes-Benz EQS 580",
    "brand": "Mercedes-Benz",
    "model": "EQS 580",
    "year": 2021,
    "price": 404233,
    "mileage": 9122,
    "engine": "Electric Dual-Motor",
    "transmission": "8-Speed Automatic",
    "fuelType": "Electric",
    "hp": 864,
    "acceleration": "3.0s",
    "topSpeed": "181 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Reserved",
    "features": [
      "Bespoke Leather Interior",
      "Adaptive Suspension",
      "Starlight Headliner",
      "Massage Seats"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This EQS 580 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-169",
    "name": "Ferrari 812 Superfast",
    "brand": "Ferrari",
    "model": "812 Superfast",
    "year": 2024,
    "price": 1917810,
    "mileage": 6435,
    "engine": "Hybrid V12",
    "transmission": "Single-Speed Electric",
    "fuelType": "Hybrid",
    "hp": 804,
    "acceleration": "4.4s",
    "topSpeed": "215 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Adaptive Suspension",
      "Soft-close Doors",
      "Night Vision"
    ],
    "description": "A stunning example of Ferrari engineering. This 812 Superfast offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-170",
    "name": "McLaren P1",
    "brand": "McLaren",
    "model": "P1",
    "year": 2022,
    "price": 337501,
    "mileage": 6087,
    "engine": "Flat-6 Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1066,
    "acceleration": "2.0s",
    "topSpeed": "169 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Panoramic Roof",
      "Active Aero",
      "Soft-close Doors",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of McLaren engineering. This P1 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-171",
    "name": "Aston Martin DBX",
    "brand": "Aston Martin",
    "model": "DBX",
    "year": 2021,
    "price": 1559080,
    "mileage": 5714,
    "engine": "Flat-6 Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 778,
    "acceleration": "3.5s",
    "topSpeed": "164 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Carbon Fiber Trim",
      "Ceramic Brakes",
      "Heads-up Display",
      "Night Vision"
    ],
    "description": "A stunning example of Aston Martin engineering. This DBX offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-172",
    "name": "BMW i7 M70",
    "brand": "BMW",
    "model": "i7 M70",
    "year": 2021,
    "price": 167321,
    "mileage": 1478,
    "engine": "Hybrid V12",
    "transmission": "8-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 454,
    "acceleration": "4.7s",
    "topSpeed": "193 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Starlight Headliner",
      "Soft-close Doors",
      "Night Vision"
    ],
    "description": "A stunning example of BMW engineering. This i7 M70 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-173",
    "name": "Ferrari SF90 Stradale",
    "brand": "Ferrari",
    "model": "SF90 Stradale",
    "year": 2020,
    "price": 991658,
    "mileage": 12961,
    "engine": "Hybrid V12",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Hybrid",
    "hp": 1177,
    "acceleration": "3.5s",
    "topSpeed": "244 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Adaptive Suspension",
      "Night Vision",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Ferrari engineering. This SF90 Stradale offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-174",
    "name": "McLaren P1",
    "brand": "McLaren",
    "model": "P1",
    "year": 2023,
    "price": 531860,
    "mileage": 13750,
    "engine": "V12 Twin-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 426,
    "acceleration": "4.5s",
    "topSpeed": "172 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Panoramic Roof",
      "Premium Audio System",
      "Heads-up Display",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of McLaren engineering. This P1 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-175",
    "name": "Range Rover Sport SVR",
    "brand": "Range Rover",
    "model": "Sport SVR",
    "year": 2021,
    "price": 647750,
    "mileage": 6384,
    "engine": "V8 Biturbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 791,
    "acceleration": "4.6s",
    "topSpeed": "217 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Adaptive Suspension",
      "Starlight Headliner",
      "Massage Seats"
    ],
    "description": "A stunning example of Range Rover engineering. This Sport SVR offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-176",
    "name": "McLaren 720S",
    "brand": "McLaren",
    "model": "720S",
    "year": 2022,
    "price": 1973145,
    "mileage": 5574,
    "engine": "V10 Natural",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 517,
    "acceleration": "3.5s",
    "topSpeed": "183 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Reserved",
    "features": [
      "Starlight Headliner",
      "Heads-up Display",
      "Massage Seats",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of McLaren engineering. This 720S offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-177",
    "name": "Lamborghini Hurac├ín",
    "brand": "Lamborghini",
    "model": "Hurac├ín",
    "year": 2023,
    "price": 1873924,
    "mileage": 52,
    "engine": "V12 Twin-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 818,
    "acceleration": "2.2s",
    "topSpeed": "187 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Massage Seats",
      "Adaptive Suspension",
      "Soft-close Doors",
      "Starlight Headliner"
    ],
    "description": "A stunning example of Lamborghini engineering. This Hurac├ín offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-178",
    "name": "Mercedes-Benz EQS 580",
    "brand": "Mercedes-Benz",
    "model": "EQS 580",
    "year": 2022,
    "price": 235923,
    "mileage": 14514,
    "engine": "W16 Quad-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 622,
    "acceleration": "2.6s",
    "topSpeed": "171 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Night Vision",
      "Carbon Fiber Trim",
      "Panoramic Roof",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This EQS 580 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-179",
    "name": "Ferrari F8 Tributo",
    "brand": "Ferrari",
    "model": "F8 Tributo",
    "year": 2022,
    "price": 1116997,
    "mileage": 13427,
    "engine": "Flat-6 Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 874,
    "acceleration": "3.3s",
    "topSpeed": "219 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Bespoke Leather Interior",
      "Starlight Headliner",
      "Massage Seats",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of Ferrari engineering. This F8 Tributo offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-180",
    "name": "Rolls-Royce Spectre",
    "brand": "Rolls-Royce",
    "model": "Spectre",
    "year": 2022,
    "price": 1758185,
    "mileage": 12065,
    "engine": "V12 Twin-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 810,
    "acceleration": "3.2s",
    "topSpeed": "234 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Reserved",
    "features": [
      "Adaptive Suspension",
      "Night Vision",
      "Bespoke Leather Interior",
      "Premium Audio System"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Spectre offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-181",
    "name": "Ferrari SF90 Stradale",
    "brand": "Ferrari",
    "model": "SF90 Stradale",
    "year": 2024,
    "price": 1174880,
    "mileage": 2755,
    "engine": "Flat-6 Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1159,
    "acceleration": "2.4s",
    "topSpeed": "167 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Heads-up Display",
      "Night Vision",
      "Carbon Fiber Trim",
      "Massage Seats"
    ],
    "description": "A stunning example of Ferrari engineering. This SF90 Stradale offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-182",
    "name": "Bentley Mulsanne",
    "brand": "Bentley",
    "model": "Mulsanne",
    "year": 2023,
    "price": 1819684,
    "mileage": 12528,
    "engine": "Hybrid V12",
    "transmission": "8-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 591,
    "acceleration": "4.1s",
    "topSpeed": "169 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Bespoke Leather Interior",
      "Heads-up Display",
      "Adaptive Suspension",
      "Night Vision"
    ],
    "description": "A stunning example of Bentley engineering. This Mulsanne offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-183",
    "name": "McLaren 765LT",
    "brand": "McLaren",
    "model": "765LT",
    "year": 2022,
    "price": 387246,
    "mileage": 14441,
    "engine": "V8 Biturbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 608,
    "acceleration": "3.1s",
    "topSpeed": "177 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Starlight Headliner",
      "Bespoke Leather Interior",
      "Panoramic Roof"
    ],
    "description": "A stunning example of McLaren engineering. This 765LT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-184",
    "name": "Aston Martin DB11",
    "brand": "Aston Martin",
    "model": "DB11",
    "year": 2020,
    "price": 1937783,
    "mileage": 13922,
    "engine": "W16 Quad-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 1078,
    "acceleration": "3.4s",
    "topSpeed": "237 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Adaptive Suspension",
      "Starlight Headliner",
      "Panoramic Roof",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Aston Martin engineering. This DB11 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-185",
    "name": "McLaren 720S",
    "brand": "McLaren",
    "model": "720S",
    "year": 2024,
    "price": 1690204,
    "mileage": 14225,
    "engine": "Flat-6 Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 1100,
    "acceleration": "2.2s",
    "topSpeed": "235 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Panoramic Roof",
      "Starlight Headliner",
      "Soft-close Doors",
      "Massage Seats"
    ],
    "description": "A stunning example of McLaren engineering. This 720S offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-186",
    "name": "BMW M8 Competition",
    "brand": "BMW",
    "model": "M8 Competition",
    "year": 2020,
    "price": 404662,
    "mileage": 3110,
    "engine": "V12 Twin-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 630,
    "acceleration": "4.0s",
    "topSpeed": "162 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Starlight Headliner",
      "Massage Seats",
      "Night Vision",
      "Heads-up Display"
    ],
    "description": "A stunning example of BMW engineering. This M8 Competition offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-187",
    "name": "Ferrari 812 Superfast",
    "brand": "Ferrari",
    "model": "812 Superfast",
    "year": 2021,
    "price": 225373,
    "mileage": 3905,
    "engine": "W16 Quad-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1025,
    "acceleration": "4.8s",
    "topSpeed": "204 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Massage Seats",
      "Carbon Fiber Trim",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Ferrari engineering. This 812 Superfast offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-188",
    "name": "Rolls-Royce Phantom",
    "brand": "Rolls-Royce",
    "model": "Phantom",
    "year": 2020,
    "price": 1318887,
    "mileage": 1534,
    "engine": "V12 Twin-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 972,
    "acceleration": "3.6s",
    "topSpeed": "169 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Soft-close Doors",
      "Premium Audio System",
      "Massage Seats"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Phantom offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-189",
    "name": "Rolls-Royce Ghost",
    "brand": "Rolls-Royce",
    "model": "Ghost",
    "year": 2022,
    "price": 1296347,
    "mileage": 11012,
    "engine": "V10 Natural",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 571,
    "acceleration": "3.8s",
    "topSpeed": "186 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Ceramic Brakes",
      "Panoramic Roof",
      "Starlight Headliner"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Ghost offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-190",
    "name": "BMW X7 M60i",
    "brand": "BMW",
    "model": "X7 M60i",
    "year": 2021,
    "price": 932171,
    "mileage": 14880,
    "engine": "W16 Quad-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 606,
    "acceleration": "2.8s",
    "topSpeed": "180 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Adaptive Suspension",
      "Night Vision",
      "Panoramic Roof"
    ],
    "description": "A stunning example of BMW engineering. This X7 M60i offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-191",
    "name": "Bentley Bentayga",
    "brand": "Bentley",
    "model": "Bentayga",
    "year": 2022,
    "price": 1254301,
    "mileage": 13426,
    "engine": "W16 Quad-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 834,
    "acceleration": "3.6s",
    "topSpeed": "230 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Massage Seats",
      "Panoramic Roof",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of Bentley engineering. This Bentayga offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-192",
    "name": "Rolls-Royce Spectre",
    "brand": "Rolls-Royce",
    "model": "Spectre",
    "year": 2021,
    "price": 1119173,
    "mileage": 6667,
    "engine": "Hybrid V12",
    "transmission": "Single-Speed Electric",
    "fuelType": "Hybrid",
    "hp": 836,
    "acceleration": "2.1s",
    "topSpeed": "244 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Massage Seats",
      "Starlight Headliner",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Spectre offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-193",
    "name": "Porsche Cayenne Turbo",
    "brand": "Porsche",
    "model": "Cayenne Turbo",
    "year": 2020,
    "price": 795935,
    "mileage": 11434,
    "engine": "V12 Twin-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 453,
    "acceleration": "3.5s",
    "topSpeed": "176 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Starlight Headliner",
      "Active Aero",
      "Premium Audio System"
    ],
    "description": "A stunning example of Porsche engineering. This Cayenne Turbo offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-194",
    "name": "BMW M8 Competition",
    "brand": "BMW",
    "model": "M8 Competition",
    "year": 2024,
    "price": 1709744,
    "mileage": 5167,
    "engine": "Electric Dual-Motor",
    "transmission": "8-Speed Automatic",
    "fuelType": "Electric",
    "hp": 1198,
    "acceleration": "3.6s",
    "topSpeed": "203 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Night Vision",
      "Carbon Fiber Trim",
      "Panoramic Roof"
    ],
    "description": "A stunning example of BMW engineering. This M8 Competition offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-195",
    "name": "Lamborghini Hurac├ín",
    "brand": "Lamborghini",
    "model": "Hurac├ín",
    "year": 2024,
    "price": 1601841,
    "mileage": 3681,
    "engine": "V10 Natural",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 523,
    "acceleration": "2.5s",
    "topSpeed": "242 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Massage Seats",
      "Active Aero",
      "Premium Audio System"
    ],
    "description": "A stunning example of Lamborghini engineering. This Hurac├ín offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-196",
    "name": "Aston Martin DBS",
    "brand": "Aston Martin",
    "model": "DBS",
    "year": 2020,
    "price": 1367792,
    "mileage": 10388,
    "engine": "Electric Dual-Motor",
    "transmission": "Single-Speed Electric",
    "fuelType": "Electric",
    "hp": 916,
    "acceleration": "4.2s",
    "topSpeed": "209 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Heads-up Display",
      "Carbon Fiber Trim",
      "Premium Audio System"
    ],
    "description": "A stunning example of Aston Martin engineering. This DBS offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-197",
    "name": "Aston Martin Valhalla",
    "brand": "Aston Martin",
    "model": "Valhalla",
    "year": 2023,
    "price": 1165547,
    "mileage": 11901,
    "engine": "V12 Twin-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 820,
    "acceleration": "4.1s",
    "topSpeed": "237 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Active Aero",
      "Panoramic Roof",
      "Massage Seats"
    ],
    "description": "A stunning example of Aston Martin engineering. This Valhalla offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-198",
    "name": "Bentley Bentayga",
    "brand": "Bentley",
    "model": "Bentayga",
    "year": 2022,
    "price": 1647241,
    "mileage": 3532,
    "engine": "W16 Quad-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 474,
    "acceleration": "3.1s",
    "topSpeed": "170 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Night Vision",
      "Soft-close Doors",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Bentley engineering. This Bentayga offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-199",
    "name": "Porsche 911 Turbo S",
    "brand": "Porsche",
    "model": "911 Turbo S",
    "year": 2020,
    "price": 1068017,
    "mileage": 10097,
    "engine": "V8 Biturbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1029,
    "acceleration": "2.5s",
    "topSpeed": "209 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Panoramic Roof",
      "Carbon Fiber Trim",
      "Night Vision"
    ],
    "description": "A stunning example of Porsche engineering. This 911 Turbo S offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-200",
    "name": "Lamborghini Urus",
    "brand": "Lamborghini",
    "model": "Urus",
    "year": 2023,
    "price": 1716437,
    "mileage": 2383,
    "engine": "Hybrid V12",
    "transmission": "Single-Speed Electric",
    "fuelType": "Hybrid",
    "hp": 507,
    "acceleration": "3.8s",
    "topSpeed": "159 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Active Aero",
      "Panoramic Roof",
      "Premium Audio System",
      "Night Vision"
    ],
    "description": "A stunning example of Lamborghini engineering. This Urus offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-201",
    "name": "BMW M4 CSL",
    "brand": "BMW",
    "model": "M4 CSL",
    "year": 2021,
    "price": 2067906,
    "mileage": 8011,
    "engine": "Flat-6 Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 487,
    "acceleration": "4.6s",
    "topSpeed": "193 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Active Aero",
      "Carbon Fiber Trim",
      "Adaptive Suspension",
      "Panoramic Roof"
    ],
    "description": "A stunning example of BMW engineering. This M4 CSL offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-202",
    "name": "Mercedes-Benz GT Black Series",
    "brand": "Mercedes-Benz",
    "model": "GT Black Series",
    "year": 2024,
    "price": 1503859,
    "mileage": 12484,
    "engine": "Hybrid V12",
    "transmission": "Single-Speed Electric",
    "fuelType": "Hybrid",
    "hp": 403,
    "acceleration": "4.7s",
    "topSpeed": "198 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Massage Seats",
      "Starlight Headliner",
      "Heads-up Display",
      "Night Vision"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This GT Black Series offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-203",
    "name": "Bentley Continental GT",
    "brand": "Bentley",
    "model": "Continental GT",
    "year": 2024,
    "price": 116049,
    "mileage": 4350,
    "engine": "Hybrid V12",
    "transmission": "Single-Speed Electric",
    "fuelType": "Hybrid",
    "hp": 1174,
    "acceleration": "2.0s",
    "topSpeed": "174 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Night Vision",
      "Active Aero",
      "Soft-close Doors",
      "Starlight Headliner"
    ],
    "description": "A stunning example of Bentley engineering. This Continental GT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-204",
    "name": "Porsche 911 Turbo S",
    "brand": "Porsche",
    "model": "911 Turbo S",
    "year": 2022,
    "price": 450762,
    "mileage": 10281,
    "engine": "Hybrid V12",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Hybrid",
    "hp": 1120,
    "acceleration": "3.3s",
    "topSpeed": "196 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Night Vision",
      "Massage Seats",
      "Panoramic Roof",
      "Heads-up Display"
    ],
    "description": "A stunning example of Porsche engineering. This 911 Turbo S offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-205",
    "name": "Range Rover Autobiography",
    "brand": "Range Rover",
    "model": "Autobiography",
    "year": 2024,
    "price": 1224899,
    "mileage": 2464,
    "engine": "Hybrid V12",
    "transmission": "9-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 669,
    "acceleration": "3.5s",
    "topSpeed": "205 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Soft-close Doors",
      "Ceramic Brakes",
      "Massage Seats"
    ],
    "description": "A stunning example of Range Rover engineering. This Autobiography offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-206",
    "name": "Aston Martin Valhalla",
    "brand": "Aston Martin",
    "model": "Valhalla",
    "year": 2020,
    "price": 557997,
    "mileage": 5053,
    "engine": "Electric Dual-Motor",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Electric",
    "hp": 725,
    "acceleration": "2.8s",
    "topSpeed": "162 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Adaptive Suspension",
      "Heads-up Display",
      "Premium Audio System",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of Aston Martin engineering. This Valhalla offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-207",
    "name": "McLaren 720S",
    "brand": "McLaren",
    "model": "720S",
    "year": 2022,
    "price": 536299,
    "mileage": 8420,
    "engine": "Electric Dual-Motor",
    "transmission": "8-Speed Automatic",
    "fuelType": "Electric",
    "hp": 1105,
    "acceleration": "2.1s",
    "topSpeed": "203 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Night Vision",
      "Active Aero",
      "Premium Audio System"
    ],
    "description": "A stunning example of McLaren engineering. This 720S offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-208",
    "name": "Range Rover Sport SVR",
    "brand": "Range Rover",
    "model": "Sport SVR",
    "year": 2021,
    "price": 117960,
    "mileage": 3873,
    "engine": "Hybrid V12",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Hybrid",
    "hp": 864,
    "acceleration": "4.4s",
    "topSpeed": "159 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Reserved",
    "features": [
      "Carbon Fiber Trim",
      "Soft-close Doors",
      "Adaptive Suspension",
      "Night Vision"
    ],
    "description": "A stunning example of Range Rover engineering. This Sport SVR offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-209",
    "name": "Lamborghini Hurac├ín",
    "brand": "Lamborghini",
    "model": "Hurac├ín",
    "year": 2024,
    "price": 349597,
    "mileage": 9471,
    "engine": "Hybrid V12",
    "transmission": "Single-Speed Electric",
    "fuelType": "Hybrid",
    "hp": 562,
    "acceleration": "4.9s",
    "topSpeed": "201 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Heads-up Display",
      "Carbon Fiber Trim",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of Lamborghini engineering. This Hurac├ín offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-210",
    "name": "Aston Martin DBX",
    "brand": "Aston Martin",
    "model": "DBX",
    "year": 2023,
    "price": 586811,
    "mileage": 5511,
    "engine": "Electric Dual-Motor",
    "transmission": "9-Speed Automatic",
    "fuelType": "Electric",
    "hp": 682,
    "acceleration": "3.4s",
    "topSpeed": "234 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Night Vision",
      "Carbon Fiber Trim",
      "Panoramic Roof",
      "Soft-close Doors"
    ],
    "description": "A stunning example of Aston Martin engineering. This DBX offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-211",
    "name": "BMW M8 Competition",
    "brand": "BMW",
    "model": "M8 Competition",
    "year": 2023,
    "price": 254049,
    "mileage": 1730,
    "engine": "Electric Dual-Motor",
    "transmission": "Single-Speed Electric",
    "fuelType": "Electric",
    "hp": 861,
    "acceleration": "4.7s",
    "topSpeed": "240 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Night Vision",
      "Massage Seats",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of BMW engineering. This M8 Competition offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-212",
    "name": "Bugatti Veyron",
    "brand": "Bugatti",
    "model": "Veyron",
    "year": 2022,
    "price": 1164294,
    "mileage": 2279,
    "engine": "V8 Biturbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 654,
    "acceleration": "2.2s",
    "topSpeed": "166 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Massage Seats",
      "Carbon Fiber Trim",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Bugatti engineering. This Veyron offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-213",
    "name": "Aston Martin Valhalla",
    "brand": "Aston Martin",
    "model": "Valhalla",
    "year": 2020,
    "price": 2055690,
    "mileage": 10777,
    "engine": "Flat-6 Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 821,
    "acceleration": "4.3s",
    "topSpeed": "198 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Active Aero",
      "Starlight Headliner",
      "Adaptive Suspension",
      "Massage Seats"
    ],
    "description": "A stunning example of Aston Martin engineering. This Valhalla offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-214",
    "name": "Aston Martin Valhalla",
    "brand": "Aston Martin",
    "model": "Valhalla",
    "year": 2021,
    "price": 759244,
    "mileage": 13199,
    "engine": "W16 Quad-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 711,
    "acceleration": "4.2s",
    "topSpeed": "207 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Night Vision",
      "Massage Seats",
      "Soft-close Doors"
    ],
    "description": "A stunning example of Aston Martin engineering. This Valhalla offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-215",
    "name": "McLaren GT",
    "brand": "McLaren",
    "model": "GT",
    "year": 2020,
    "price": 2006318,
    "mileage": 14284,
    "engine": "Flat-6 Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 754,
    "acceleration": "3.0s",
    "topSpeed": "223 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Starlight Headliner",
      "Night Vision",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of McLaren engineering. This GT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-216",
    "name": "Lamborghini Revuelto",
    "brand": "Lamborghini",
    "model": "Revuelto",
    "year": 2022,
    "price": 1642089,
    "mileage": 8925,
    "engine": "Electric Dual-Motor",
    "transmission": "9-Speed Automatic",
    "fuelType": "Electric",
    "hp": 1043,
    "acceleration": "2.1s",
    "topSpeed": "181 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Premium Audio System",
      "Active Aero",
      "Night Vision"
    ],
    "description": "A stunning example of Lamborghini engineering. This Revuelto offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-217",
    "name": "Rolls-Royce Ghost",
    "brand": "Rolls-Royce",
    "model": "Ghost",
    "year": 2021,
    "price": 1159867,
    "mileage": 5963,
    "engine": "Flat-6 Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 683,
    "acceleration": "4.5s",
    "topSpeed": "154 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Adaptive Suspension",
      "Massage Seats",
      "Premium Audio System"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Ghost offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-218",
    "name": "Mercedes-Benz G 63 AMG",
    "brand": "Mercedes-Benz",
    "model": "G 63 AMG",
    "year": 2024,
    "price": 1722546,
    "mileage": 7998,
    "engine": "Electric Dual-Motor",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Electric",
    "hp": 1077,
    "acceleration": "3.7s",
    "topSpeed": "204 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Reserved",
    "features": [
      "Heads-up Display",
      "Panoramic Roof",
      "Soft-close Doors",
      "Active Aero"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This G 63 AMG offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-219",
    "name": "McLaren P1",
    "brand": "McLaren",
    "model": "P1",
    "year": 2021,
    "price": 2054062,
    "mileage": 10231,
    "engine": "W16 Quad-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 1009,
    "acceleration": "3.5s",
    "topSpeed": "176 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Soft-close Doors",
      "Carbon Fiber Trim",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of McLaren engineering. This P1 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-220",
    "name": "Rolls-Royce Cullinan",
    "brand": "Rolls-Royce",
    "model": "Cullinan",
    "year": 2021,
    "price": 1061296,
    "mileage": 8399,
    "engine": "Flat-6 Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 1150,
    "acceleration": "3.0s",
    "topSpeed": "186 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Ceramic Brakes",
      "Night Vision",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Cullinan offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-221",
    "name": "McLaren 765LT",
    "brand": "McLaren",
    "model": "765LT",
    "year": 2023,
    "price": 966296,
    "mileage": 5564,
    "engine": "Electric Dual-Motor",
    "transmission": "9-Speed Automatic",
    "fuelType": "Electric",
    "hp": 820,
    "acceleration": "3.8s",
    "topSpeed": "199 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Massage Seats",
      "Bespoke Leather Interior",
      "Soft-close Doors"
    ],
    "description": "A stunning example of McLaren engineering. This 765LT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-222",
    "name": "BMW M8 Competition",
    "brand": "BMW",
    "model": "M8 Competition",
    "year": 2020,
    "price": 773836,
    "mileage": 11847,
    "engine": "Hybrid V12",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Hybrid",
    "hp": 583,
    "acceleration": "3.6s",
    "topSpeed": "236 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Panoramic Roof",
      "Ceramic Brakes",
      "Bespoke Leather Interior",
      "Starlight Headliner"
    ],
    "description": "A stunning example of BMW engineering. This M8 Competition offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-223",
    "name": "Bentley Continental GT",
    "brand": "Bentley",
    "model": "Continental GT",
    "year": 2020,
    "price": 1285111,
    "mileage": 11571,
    "engine": "V10 Natural",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 1074,
    "acceleration": "4.0s",
    "topSpeed": "239 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Adaptive Suspension",
      "Bespoke Leather Interior",
      "Massage Seats"
    ],
    "description": "A stunning example of Bentley engineering. This Continental GT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-224",
    "name": "Range Rover Autobiography",
    "brand": "Range Rover",
    "model": "Autobiography",
    "year": 2023,
    "price": 882307,
    "mileage": 2408,
    "engine": "W16 Quad-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1051,
    "acceleration": "2.1s",
    "topSpeed": "233 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Reserved",
    "features": [
      "Night Vision",
      "Starlight Headliner",
      "Massage Seats",
      "Premium Audio System"
    ],
    "description": "A stunning example of Range Rover engineering. This Autobiography offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-225",
    "name": "McLaren P1",
    "brand": "McLaren",
    "model": "P1",
    "year": 2023,
    "price": 455255,
    "mileage": 201,
    "engine": "V8 Biturbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 595,
    "acceleration": "2.2s",
    "topSpeed": "161 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Soft-close Doors",
      "Active Aero",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of McLaren engineering. This P1 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-226",
    "name": "McLaren P1",
    "brand": "McLaren",
    "model": "P1",
    "year": 2024,
    "price": 510711,
    "mileage": 5050,
    "engine": "W16 Quad-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1169,
    "acceleration": "2.1s",
    "topSpeed": "183 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Reserved",
    "features": [
      "Heads-up Display",
      "Carbon Fiber Trim",
      "Massage Seats",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of McLaren engineering. This P1 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-227",
    "name": "Range Rover SV",
    "brand": "Range Rover",
    "model": "SV",
    "year": 2024,
    "price": 1008353,
    "mileage": 12425,
    "engine": "V10 Natural",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 551,
    "acceleration": "4.9s",
    "topSpeed": "205 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Reserved",
    "features": [
      "Premium Audio System",
      "Ceramic Brakes",
      "Active Aero",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of Range Rover engineering. This SV offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-228",
    "name": "Mercedes-Benz G 63 AMG",
    "brand": "Mercedes-Benz",
    "model": "G 63 AMG",
    "year": 2020,
    "price": 1399977,
    "mileage": 3590,
    "engine": "W16 Quad-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 572,
    "acceleration": "3.7s",
    "topSpeed": "188 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Ceramic Brakes",
      "Premium Audio System",
      "Massage Seats"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This G 63 AMG offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-229",
    "name": "Aston Martin Vantage",
    "brand": "Aston Martin",
    "model": "Vantage",
    "year": 2021,
    "price": 1893027,
    "mileage": 13392,
    "engine": "Hybrid V12",
    "transmission": "Single-Speed Electric",
    "fuelType": "Hybrid",
    "hp": 542,
    "acceleration": "3.7s",
    "topSpeed": "239 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Carbon Fiber Trim",
      "Heads-up Display",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Aston Martin engineering. This Vantage offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-230",
    "name": "McLaren 720S",
    "brand": "McLaren",
    "model": "720S",
    "year": 2022,
    "price": 1130512,
    "mileage": 10933,
    "engine": "Hybrid V12",
    "transmission": "9-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 903,
    "acceleration": "2.8s",
    "topSpeed": "227 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Night Vision",
      "Premium Audio System",
      "Panoramic Roof",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of McLaren engineering. This 720S offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-231",
    "name": "BMW X7 M60i",
    "brand": "BMW",
    "model": "X7 M60i",
    "year": 2021,
    "price": 886915,
    "mileage": 7123,
    "engine": "Electric Dual-Motor",
    "transmission": "9-Speed Automatic",
    "fuelType": "Electric",
    "hp": 867,
    "acceleration": "3.8s",
    "topSpeed": "181 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Massage Seats",
      "Heads-up Display",
      "Starlight Headliner",
      "Premium Audio System"
    ],
    "description": "A stunning example of BMW engineering. This X7 M60i offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-232",
    "name": "Rolls-Royce Cullinan",
    "brand": "Rolls-Royce",
    "model": "Cullinan",
    "year": 2024,
    "price": 1200966,
    "mileage": 1477,
    "engine": "Electric Dual-Motor",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Electric",
    "hp": 444,
    "acceleration": "2.0s",
    "topSpeed": "157 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Starlight Headliner",
      "Bespoke Leather Interior",
      "Premium Audio System"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Cullinan offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-233",
    "name": "Mercedes-Benz EQS 580",
    "brand": "Mercedes-Benz",
    "model": "EQS 580",
    "year": 2022,
    "price": 1053139,
    "mileage": 9298,
    "engine": "Flat-6 Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 502,
    "acceleration": "4.7s",
    "topSpeed": "210 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Massage Seats",
      "Carbon Fiber Trim",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This EQS 580 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-234",
    "name": "Bugatti Mistral",
    "brand": "Bugatti",
    "model": "Mistral",
    "year": 2024,
    "price": 1504366,
    "mileage": 7546,
    "engine": "V12 Twin-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 831,
    "acceleration": "2.6s",
    "topSpeed": "154 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Carbon Fiber Trim",
      "Heads-up Display",
      "Premium Audio System"
    ],
    "description": "A stunning example of Bugatti engineering. This Mistral offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-235",
    "name": "Bentley Bentayga",
    "brand": "Bentley",
    "model": "Bentayga",
    "year": 2020,
    "price": 1503006,
    "mileage": 2675,
    "engine": "V8 Biturbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 450,
    "acceleration": "2.5s",
    "topSpeed": "155 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Ceramic Brakes",
      "Carbon Fiber Trim",
      "Active Aero"
    ],
    "description": "A stunning example of Bentley engineering. This Bentayga offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-236",
    "name": "BMW M8 Competition",
    "brand": "BMW",
    "model": "M8 Competition",
    "year": 2024,
    "price": 1061199,
    "mileage": 5845,
    "engine": "Hybrid V12",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Hybrid",
    "hp": 1167,
    "acceleration": "4.5s",
    "topSpeed": "220 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Night Vision",
      "Heads-up Display",
      "Starlight Headliner",
      "Active Aero"
    ],
    "description": "A stunning example of BMW engineering. This M8 Competition offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-237",
    "name": "Ferrari F8 Tributo",
    "brand": "Ferrari",
    "model": "F8 Tributo",
    "year": 2023,
    "price": 980326,
    "mileage": 13826,
    "engine": "Hybrid V12",
    "transmission": "8-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 725,
    "acceleration": "4.7s",
    "topSpeed": "230 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Adaptive Suspension",
      "Ceramic Brakes",
      "Starlight Headliner"
    ],
    "description": "A stunning example of Ferrari engineering. This F8 Tributo offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-238",
    "name": "Lamborghini Revuelto",
    "brand": "Lamborghini",
    "model": "Revuelto",
    "year": 2020,
    "price": 519021,
    "mileage": 11840,
    "engine": "V12 Twin-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 788,
    "acceleration": "4.7s",
    "topSpeed": "230 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Panoramic Roof",
      "Premium Audio System",
      "Soft-close Doors",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of Lamborghini engineering. This Revuelto offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-239",
    "name": "BMW i7 M70",
    "brand": "BMW",
    "model": "i7 M70",
    "year": 2020,
    "price": 839053,
    "mileage": 913,
    "engine": "Flat-6 Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 884,
    "acceleration": "3.8s",
    "topSpeed": "174 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Bespoke Leather Interior",
      "Active Aero",
      "Panoramic Roof"
    ],
    "description": "A stunning example of BMW engineering. This i7 M70 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-240",
    "name": "Range Rover Autobiography",
    "brand": "Range Rover",
    "model": "Autobiography",
    "year": 2022,
    "price": 1629881,
    "mileage": 12095,
    "engine": "V8 Biturbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1024,
    "acceleration": "3.8s",
    "topSpeed": "222 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Heads-up Display",
      "Massage Seats",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Range Rover engineering. This Autobiography offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-241",
    "name": "Porsche 718 Cayman GT4",
    "brand": "Porsche",
    "model": "718 Cayman GT4",
    "year": 2022,
    "price": 2013197,
    "mileage": 2172,
    "engine": "Flat-6 Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 779,
    "acceleration": "3.1s",
    "topSpeed": "173 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Ceramic Brakes",
      "Carbon Fiber Trim",
      "Soft-close Doors",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Porsche engineering. This 718 Cayman GT4 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-242",
    "name": "Aston Martin Vantage",
    "brand": "Aston Martin",
    "model": "Vantage",
    "year": 2024,
    "price": 662947,
    "mileage": 10418,
    "engine": "V10 Natural",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 653,
    "acceleration": "2.8s",
    "topSpeed": "205 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Carbon Fiber Trim",
      "Active Aero",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Aston Martin engineering. This Vantage offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-243",
    "name": "Rolls-Royce Ghost",
    "brand": "Rolls-Royce",
    "model": "Ghost",
    "year": 2020,
    "price": 452552,
    "mileage": 7747,
    "engine": "Flat-6 Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 829,
    "acceleration": "2.3s",
    "topSpeed": "155 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Night Vision",
      "Carbon Fiber Trim",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Ghost offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-244",
    "name": "Rolls-Royce Ghost",
    "brand": "Rolls-Royce",
    "model": "Ghost",
    "year": 2020,
    "price": 672960,
    "mileage": 14743,
    "engine": "V8 Biturbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 917,
    "acceleration": "2.7s",
    "topSpeed": "196 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Active Aero",
      "Heads-up Display",
      "Night Vision",
      "Massage Seats"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Ghost offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-245",
    "name": "McLaren GT",
    "brand": "McLaren",
    "model": "GT",
    "year": 2024,
    "price": 171758,
    "mileage": 7180,
    "engine": "Hybrid V12",
    "transmission": "8-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 751,
    "acceleration": "2.7s",
    "topSpeed": "240 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Starlight Headliner",
      "Panoramic Roof",
      "Massage Seats"
    ],
    "description": "A stunning example of McLaren engineering. This GT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-246",
    "name": "Range Rover Velar",
    "brand": "Range Rover",
    "model": "Velar",
    "year": 2024,
    "price": 1972839,
    "mileage": 1404,
    "engine": "V10 Natural",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 654,
    "acceleration": "2.7s",
    "topSpeed": "158 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Carbon Fiber Trim",
      "Panoramic Roof",
      "Active Aero"
    ],
    "description": "A stunning example of Range Rover engineering. This Velar offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-247",
    "name": "Ferrari F8 Tributo",
    "brand": "Ferrari",
    "model": "F8 Tributo",
    "year": 2020,
    "price": 253593,
    "mileage": 13686,
    "engine": "V12 Twin-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 952,
    "acceleration": "2.1s",
    "topSpeed": "200 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Starlight Headliner",
      "Adaptive Suspension",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Ferrari engineering. This F8 Tributo offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-248",
    "name": "McLaren Artura",
    "brand": "McLaren",
    "model": "Artura",
    "year": 2022,
    "price": 1963015,
    "mileage": 11963,
    "engine": "V12 Twin-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 765,
    "acceleration": "3.1s",
    "topSpeed": "197 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Reserved",
    "features": [
      "Ceramic Brakes",
      "Carbon Fiber Trim",
      "Bespoke Leather Interior",
      "Night Vision"
    ],
    "description": "A stunning example of McLaren engineering. This Artura offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-249",
    "name": "BMW M8 Competition",
    "brand": "BMW",
    "model": "M8 Competition",
    "year": 2024,
    "price": 684794,
    "mileage": 1782,
    "engine": "V10 Natural",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 586,
    "acceleration": "4.3s",
    "topSpeed": "243 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Starlight Headliner",
      "Massage Seats",
      "Night Vision",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of BMW engineering. This M8 Competition offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-250",
    "name": "BMW M8 Competition",
    "brand": "BMW",
    "model": "M8 Competition",
    "year": 2021,
    "price": 1942777,
    "mileage": 11818,
    "engine": "V10 Natural",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 748,
    "acceleration": "3.3s",
    "topSpeed": "152 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Night Vision",
      "Soft-close Doors",
      "Premium Audio System",
      "Panoramic Roof"
    ],
    "description": "A stunning example of BMW engineering. This M8 Competition offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-251",
    "name": "Range Rover Sport SVR",
    "brand": "Range Rover",
    "model": "Sport SVR",
    "year": 2020,
    "price": 961667,
    "mileage": 4571,
    "engine": "V12 Twin-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 653,
    "acceleration": "2.8s",
    "topSpeed": "209 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Panoramic Roof",
      "Night Vision",
      "Premium Audio System",
      "Heads-up Display"
    ],
    "description": "A stunning example of Range Rover engineering. This Sport SVR offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-252",
    "name": "McLaren 720S",
    "brand": "McLaren",
    "model": "720S",
    "year": 2023,
    "price": 1682852,
    "mileage": 5936,
    "engine": "V12 Twin-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 498,
    "acceleration": "3.2s",
    "topSpeed": "207 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Massage Seats",
      "Starlight Headliner",
      "Carbon Fiber Trim",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of McLaren engineering. This 720S offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-253",
    "name": "Porsche Taycan",
    "brand": "Porsche",
    "model": "Taycan",
    "year": 2023,
    "price": 1904996,
    "mileage": 10624,
    "engine": "V10 Natural",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 1152,
    "acceleration": "4.1s",
    "topSpeed": "156 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Night Vision",
      "Adaptive Suspension",
      "Active Aero",
      "Starlight Headliner"
    ],
    "description": "A stunning example of Porsche engineering. This Taycan offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-254",
    "name": "Porsche Taycan",
    "brand": "Porsche",
    "model": "Taycan",
    "year": 2024,
    "price": 1382132,
    "mileage": 8478,
    "engine": "V8 Biturbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 639,
    "acceleration": "3.8s",
    "topSpeed": "195 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Ceramic Brakes",
      "Soft-close Doors",
      "Active Aero"
    ],
    "description": "A stunning example of Porsche engineering. This Taycan offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-255",
    "name": "Mercedes-Benz EQS 580",
    "brand": "Mercedes-Benz",
    "model": "EQS 580",
    "year": 2022,
    "price": 1359174,
    "mileage": 6782,
    "engine": "Electric Dual-Motor",
    "transmission": "9-Speed Automatic",
    "fuelType": "Electric",
    "hp": 448,
    "acceleration": "4.8s",
    "topSpeed": "189 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Massage Seats",
      "Heads-up Display",
      "Ceramic Brakes",
      "Night Vision"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This EQS 580 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-256",
    "name": "Mercedes-Benz GT Black Series",
    "brand": "Mercedes-Benz",
    "model": "GT Black Series",
    "year": 2023,
    "price": 1138849,
    "mileage": 11319,
    "engine": "Electric Dual-Motor",
    "transmission": "Single-Speed Electric",
    "fuelType": "Electric",
    "hp": 1093,
    "acceleration": "5.0s",
    "topSpeed": "207 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Reserved",
    "features": [
      "Massage Seats",
      "Ceramic Brakes",
      "Bespoke Leather Interior",
      "Starlight Headliner"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This GT Black Series offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-257",
    "name": "Porsche Panamera",
    "brand": "Porsche",
    "model": "Panamera",
    "year": 2023,
    "price": 408380,
    "mileage": 803,
    "engine": "Electric Dual-Motor",
    "transmission": "9-Speed Automatic",
    "fuelType": "Electric",
    "hp": 746,
    "acceleration": "2.9s",
    "topSpeed": "199 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Soft-close Doors",
      "Massage Seats",
      "Heads-up Display"
    ],
    "description": "A stunning example of Porsche engineering. This Panamera offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-258",
    "name": "Range Rover Sport SVR",
    "brand": "Range Rover",
    "model": "Sport SVR",
    "year": 2023,
    "price": 192311,
    "mileage": 3771,
    "engine": "Hybrid V12",
    "transmission": "9-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 1025,
    "acceleration": "4.6s",
    "topSpeed": "189 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Bespoke Leather Interior",
      "Adaptive Suspension",
      "Active Aero",
      "Premium Audio System"
    ],
    "description": "A stunning example of Range Rover engineering. This Sport SVR offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-259",
    "name": "Bugatti Veyron",
    "brand": "Bugatti",
    "model": "Veyron",
    "year": 2024,
    "price": 1731514,
    "mileage": 7123,
    "engine": "Hybrid V12",
    "transmission": "9-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 502,
    "acceleration": "3.0s",
    "topSpeed": "152 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Active Aero",
      "Premium Audio System",
      "Ceramic Brakes",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Bugatti engineering. This Veyron offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-260",
    "name": "Porsche 718 Cayman GT4",
    "brand": "Porsche",
    "model": "718 Cayman GT4",
    "year": 2024,
    "price": 1897886,
    "mileage": 6620,
    "engine": "Hybrid V12",
    "transmission": "9-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 1026,
    "acceleration": "2.9s",
    "topSpeed": "205 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Soft-close Doors",
      "Heads-up Display",
      "Massage Seats"
    ],
    "description": "A stunning example of Porsche engineering. This 718 Cayman GT4 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-261",
    "name": "Lamborghini Hurac├ín",
    "brand": "Lamborghini",
    "model": "Hurac├ín",
    "year": 2024,
    "price": 1636020,
    "mileage": 5263,
    "engine": "Hybrid V12",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Hybrid",
    "hp": 747,
    "acceleration": "2.8s",
    "topSpeed": "166 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Bespoke Leather Interior",
      "Heads-up Display",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Lamborghini engineering. This Hurac├ín offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-262",
    "name": "Range Rover Autobiography",
    "brand": "Range Rover",
    "model": "Autobiography",
    "year": 2021,
    "price": 134431,
    "mileage": 654,
    "engine": "Flat-6 Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 511,
    "acceleration": "4.7s",
    "topSpeed": "155 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Heads-up Display",
      "Active Aero",
      "Massage Seats"
    ],
    "description": "A stunning example of Range Rover engineering. This Autobiography offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-263",
    "name": "Ferrari F8 Tributo",
    "brand": "Ferrari",
    "model": "F8 Tributo",
    "year": 2022,
    "price": 1046016,
    "mileage": 11299,
    "engine": "Electric Dual-Motor",
    "transmission": "9-Speed Automatic",
    "fuelType": "Electric",
    "hp": 584,
    "acceleration": "4.9s",
    "topSpeed": "246 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Active Aero",
      "Heads-up Display",
      "Night Vision",
      "Soft-close Doors"
    ],
    "description": "A stunning example of Ferrari engineering. This F8 Tributo offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-264",
    "name": "Mercedes-Benz EQS 580",
    "brand": "Mercedes-Benz",
    "model": "EQS 580",
    "year": 2022,
    "price": 1188300,
    "mileage": 11160,
    "engine": "V10 Natural",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 566,
    "acceleration": "2.1s",
    "topSpeed": "169 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Reserved",
    "features": [
      "Starlight Headliner",
      "Massage Seats",
      "Premium Audio System",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This EQS 580 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-265",
    "name": "Bugatti Divo",
    "brand": "Bugatti",
    "model": "Divo",
    "year": 2021,
    "price": 1730615,
    "mileage": 6978,
    "engine": "Electric Dual-Motor",
    "transmission": "8-Speed Automatic",
    "fuelType": "Electric",
    "hp": 538,
    "acceleration": "3.3s",
    "topSpeed": "193 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Active Aero",
      "Heads-up Display",
      "Soft-close Doors"
    ],
    "description": "A stunning example of Bugatti engineering. This Divo offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-266",
    "name": "Bugatti Chiron",
    "brand": "Bugatti",
    "model": "Chiron",
    "year": 2022,
    "price": 376008,
    "mileage": 104,
    "engine": "V10 Natural",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 775,
    "acceleration": "2.9s",
    "topSpeed": "186 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Panoramic Roof",
      "Starlight Headliner",
      "Adaptive Suspension",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Bugatti engineering. This Chiron offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-267",
    "name": "Mercedes-Benz S-Class Maybach",
    "brand": "Mercedes-Benz",
    "model": "S-Class Maybach",
    "year": 2022,
    "price": 253561,
    "mileage": 3236,
    "engine": "V12 Twin-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 581,
    "acceleration": "3.9s",
    "topSpeed": "177 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Panoramic Roof",
      "Carbon Fiber Trim",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This S-Class Maybach offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-268",
    "name": "Aston Martin DBX",
    "brand": "Aston Martin",
    "model": "DBX",
    "year": 2024,
    "price": 458988,
    "mileage": 4155,
    "engine": "V10 Natural",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 804,
    "acceleration": "2.7s",
    "topSpeed": "184 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Soft-close Doors",
      "Active Aero",
      "Night Vision"
    ],
    "description": "A stunning example of Aston Martin engineering. This DBX offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-269",
    "name": "Ferrari 812 Superfast",
    "brand": "Ferrari",
    "model": "812 Superfast",
    "year": 2023,
    "price": 923203,
    "mileage": 2626,
    "engine": "Hybrid V12",
    "transmission": "8-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 805,
    "acceleration": "4.1s",
    "topSpeed": "154 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Night Vision",
      "Ceramic Brakes",
      "Starlight Headliner"
    ],
    "description": "A stunning example of Ferrari engineering. This 812 Superfast offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-270",
    "name": "Aston Martin Valhalla",
    "brand": "Aston Martin",
    "model": "Valhalla",
    "year": 2021,
    "price": 1106575,
    "mileage": 9429,
    "engine": "V8 Biturbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 1170,
    "acceleration": "4.4s",
    "topSpeed": "156 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Bespoke Leather Interior",
      "Starlight Headliner",
      "Heads-up Display",
      "Massage Seats"
    ],
    "description": "A stunning example of Aston Martin engineering. This Valhalla offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-271",
    "name": "Ferrari F8 Tributo",
    "brand": "Ferrari",
    "model": "F8 Tributo",
    "year": 2024,
    "price": 190356,
    "mileage": 10971,
    "engine": "V8 Biturbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 1179,
    "acceleration": "2.9s",
    "topSpeed": "164 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Panoramic Roof",
      "Heads-up Display",
      "Massage Seats"
    ],
    "description": "A stunning example of Ferrari engineering. This F8 Tributo offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-272",
    "name": "Ferrari 812 Superfast",
    "brand": "Ferrari",
    "model": "812 Superfast",
    "year": 2021,
    "price": 1371259,
    "mileage": 11468,
    "engine": "W16 Quad-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 908,
    "acceleration": "4.3s",
    "topSpeed": "198 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Active Aero",
      "Heads-up Display",
      "Premium Audio System",
      "Massage Seats"
    ],
    "description": "A stunning example of Ferrari engineering. This 812 Superfast offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-273",
    "name": "Rolls-Royce Cullinan",
    "brand": "Rolls-Royce",
    "model": "Cullinan",
    "year": 2020,
    "price": 1681955,
    "mileage": 2855,
    "engine": "V8 Biturbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 459,
    "acceleration": "4.1s",
    "topSpeed": "213 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Carbon Fiber Trim",
      "Heads-up Display",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Cullinan offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-274",
    "name": "Bentley Continental GT",
    "brand": "Bentley",
    "model": "Continental GT",
    "year": 2020,
    "price": 561741,
    "mileage": 1437,
    "engine": "V10 Natural",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 754,
    "acceleration": "3.5s",
    "topSpeed": "189 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Premium Audio System",
      "Starlight Headliner",
      "Soft-close Doors"
    ],
    "description": "A stunning example of Bentley engineering. This Continental GT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-275",
    "name": "Rolls-Royce Spectre",
    "brand": "Rolls-Royce",
    "model": "Spectre",
    "year": 2020,
    "price": 366623,
    "mileage": 2376,
    "engine": "Hybrid V12",
    "transmission": "8-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 1107,
    "acceleration": "2.4s",
    "topSpeed": "202 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Reserved",
    "features": [
      "Active Aero",
      "Starlight Headliner",
      "Heads-up Display",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Spectre offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-276",
    "name": "Porsche 718 Cayman GT4",
    "brand": "Porsche",
    "model": "718 Cayman GT4",
    "year": 2024,
    "price": 1149552,
    "mileage": 1427,
    "engine": "Flat-6 Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 440,
    "acceleration": "3.0s",
    "topSpeed": "200 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Panoramic Roof",
      "Night Vision",
      "Starlight Headliner"
    ],
    "description": "A stunning example of Porsche engineering. This 718 Cayman GT4 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-277",
    "name": "Lamborghini Urus",
    "brand": "Lamborghini",
    "model": "Urus",
    "year": 2022,
    "price": 1792269,
    "mileage": 1576,
    "engine": "Electric Dual-Motor",
    "transmission": "8-Speed Automatic",
    "fuelType": "Electric",
    "hp": 719,
    "acceleration": "3.1s",
    "topSpeed": "249 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Soft-close Doors",
      "Starlight Headliner",
      "Massage Seats",
      "Heads-up Display"
    ],
    "description": "A stunning example of Lamborghini engineering. This Urus offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-278",
    "name": "Bugatti Mistral",
    "brand": "Bugatti",
    "model": "Mistral",
    "year": 2020,
    "price": 1856783,
    "mileage": 7034,
    "engine": "Hybrid V12",
    "transmission": "8-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 643,
    "acceleration": "4.8s",
    "topSpeed": "156 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Reserved",
    "features": [
      "Soft-close Doors",
      "Starlight Headliner",
      "Massage Seats",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of Bugatti engineering. This Mistral offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-279",
    "name": "Mercedes-Benz S-Class Maybach",
    "brand": "Mercedes-Benz",
    "model": "S-Class Maybach",
    "year": 2024,
    "price": 1825516,
    "mileage": 922,
    "engine": "W16 Quad-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1007,
    "acceleration": "3.2s",
    "topSpeed": "170 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Massage Seats",
      "Active Aero",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This S-Class Maybach offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-280",
    "name": "McLaren 720S",
    "brand": "McLaren",
    "model": "720S",
    "year": 2021,
    "price": 1258781,
    "mileage": 7115,
    "engine": "V8 Biturbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 636,
    "acceleration": "2.5s",
    "topSpeed": "156 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Active Aero",
      "Carbon Fiber Trim",
      "Ceramic Brakes",
      "Massage Seats"
    ],
    "description": "A stunning example of McLaren engineering. This 720S offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-281",
    "name": "Rolls-Royce Cullinan",
    "brand": "Rolls-Royce",
    "model": "Cullinan",
    "year": 2024,
    "price": 1622513,
    "mileage": 9343,
    "engine": "Electric Dual-Motor",
    "transmission": "Single-Speed Electric",
    "fuelType": "Electric",
    "hp": 487,
    "acceleration": "3.7s",
    "topSpeed": "176 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Active Aero",
      "Ceramic Brakes",
      "Starlight Headliner"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Cullinan offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-282",
    "name": "Mercedes-Benz S-Class Maybach",
    "brand": "Mercedes-Benz",
    "model": "S-Class Maybach",
    "year": 2020,
    "price": 861336,
    "mileage": 4515,
    "engine": "V10 Natural",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 839,
    "acceleration": "3.0s",
    "topSpeed": "172 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Massage Seats",
      "Starlight Headliner",
      "Panoramic Roof",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This S-Class Maybach offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-283",
    "name": "Aston Martin DBX",
    "brand": "Aston Martin",
    "model": "DBX",
    "year": 2023,
    "price": 350701,
    "mileage": 660,
    "engine": "W16 Quad-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 613,
    "acceleration": "2.6s",
    "topSpeed": "248 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Night Vision",
      "Panoramic Roof",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Aston Martin engineering. This DBX offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-284",
    "name": "Aston Martin DB11",
    "brand": "Aston Martin",
    "model": "DB11",
    "year": 2024,
    "price": 365355,
    "mileage": 14436,
    "engine": "Electric Dual-Motor",
    "transmission": "9-Speed Automatic",
    "fuelType": "Electric",
    "hp": 416,
    "acceleration": "2.5s",
    "topSpeed": "158 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Active Aero",
      "Starlight Headliner",
      "Massage Seats"
    ],
    "description": "A stunning example of Aston Martin engineering. This DB11 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-285",
    "name": "McLaren Artura",
    "brand": "McLaren",
    "model": "Artura",
    "year": 2022,
    "price": 1711735,
    "mileage": 3899,
    "engine": "Electric Dual-Motor",
    "transmission": "9-Speed Automatic",
    "fuelType": "Electric",
    "hp": 1122,
    "acceleration": "4.1s",
    "topSpeed": "239 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Ceramic Brakes",
      "Carbon Fiber Trim",
      "Massage Seats"
    ],
    "description": "A stunning example of McLaren engineering. This Artura offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-286",
    "name": "Mercedes-Benz S-Class Maybach",
    "brand": "Mercedes-Benz",
    "model": "S-Class Maybach",
    "year": 2024,
    "price": 466672,
    "mileage": 637,
    "engine": "V12 Twin-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 657,
    "acceleration": "4.5s",
    "topSpeed": "187 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Reserved",
    "features": [
      "Massage Seats",
      "Ceramic Brakes",
      "Premium Audio System",
      "Heads-up Display"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This S-Class Maybach offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-287",
    "name": "Bugatti Mistral",
    "brand": "Bugatti",
    "model": "Mistral",
    "year": 2022,
    "price": 1194646,
    "mileage": 10041,
    "engine": "V12 Twin-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 684,
    "acceleration": "5.0s",
    "topSpeed": "208 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Heads-up Display",
      "Massage Seats",
      "Night Vision"
    ],
    "description": "A stunning example of Bugatti engineering. This Mistral offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-288",
    "name": "Lamborghini Aventador",
    "brand": "Lamborghini",
    "model": "Aventador",
    "year": 2023,
    "price": 1128007,
    "mileage": 2029,
    "engine": "V8 Biturbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1115,
    "acceleration": "4.6s",
    "topSpeed": "180 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Reserved",
    "features": [
      "Ceramic Brakes",
      "Carbon Fiber Trim",
      "Panoramic Roof",
      "Active Aero"
    ],
    "description": "A stunning example of Lamborghini engineering. This Aventador offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-289",
    "name": "Bugatti Mistral",
    "brand": "Bugatti",
    "model": "Mistral",
    "year": 2022,
    "price": 1959631,
    "mileage": 14398,
    "engine": "Electric Dual-Motor",
    "transmission": "8-Speed Automatic",
    "fuelType": "Electric",
    "hp": 1065,
    "acceleration": "3.7s",
    "topSpeed": "218 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Active Aero",
      "Starlight Headliner",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Bugatti engineering. This Mistral offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-290",
    "name": "Bentley Continental GT",
    "brand": "Bentley",
    "model": "Continental GT",
    "year": 2021,
    "price": 1558729,
    "mileage": 6351,
    "engine": "V12 Twin-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 810,
    "acceleration": "3.6s",
    "topSpeed": "205 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Reserved",
    "features": [
      "Soft-close Doors",
      "Night Vision",
      "Bespoke Leather Interior",
      "Starlight Headliner"
    ],
    "description": "A stunning example of Bentley engineering. This Continental GT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-291",
    "name": "Range Rover SV",
    "brand": "Range Rover",
    "model": "SV",
    "year": 2021,
    "price": 623222,
    "mileage": 10103,
    "engine": "Electric Dual-Motor",
    "transmission": "9-Speed Automatic",
    "fuelType": "Electric",
    "hp": 484,
    "acceleration": "2.3s",
    "topSpeed": "246 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Massage Seats",
      "Starlight Headliner",
      "Heads-up Display",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Range Rover engineering. This SV offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-292",
    "name": "Ferrari SF90 Stradale",
    "brand": "Ferrari",
    "model": "SF90 Stradale",
    "year": 2022,
    "price": 810043,
    "mileage": 14436,
    "engine": "Hybrid V12",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Hybrid",
    "hp": 466,
    "acceleration": "4.2s",
    "topSpeed": "176 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Night Vision",
      "Carbon Fiber Trim",
      "Massage Seats",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Ferrari engineering. This SF90 Stradale offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-293",
    "name": "Mercedes-Benz EQS 580",
    "brand": "Mercedes-Benz",
    "model": "EQS 580",
    "year": 2021,
    "price": 233276,
    "mileage": 8390,
    "engine": "V8 Biturbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 1131,
    "acceleration": "4.8s",
    "topSpeed": "171 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Ceramic Brakes",
      "Bespoke Leather Interior",
      "Massage Seats"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This EQS 580 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-294",
    "name": "Lamborghini Aventador",
    "brand": "Lamborghini",
    "model": "Aventador",
    "year": 2021,
    "price": 1021217,
    "mileage": 8673,
    "engine": "Electric Dual-Motor",
    "transmission": "Single-Speed Electric",
    "fuelType": "Electric",
    "hp": 1065,
    "acceleration": "2.1s",
    "topSpeed": "201 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Adaptive Suspension",
      "Night Vision",
      "Active Aero"
    ],
    "description": "A stunning example of Lamborghini engineering. This Aventador offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-295",
    "name": "Porsche 911 Turbo S",
    "brand": "Porsche",
    "model": "911 Turbo S",
    "year": 2021,
    "price": 814486,
    "mileage": 396,
    "engine": "W16 Quad-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 1050,
    "acceleration": "3.9s",
    "topSpeed": "159 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Soft-close Doors",
      "Massage Seats",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Porsche engineering. This 911 Turbo S offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-296",
    "name": "Ferrari Purosangue",
    "brand": "Ferrari",
    "model": "Purosangue",
    "year": 2021,
    "price": 771193,
    "mileage": 7343,
    "engine": "V12 Twin-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 1111,
    "acceleration": "3.8s",
    "topSpeed": "209 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Carbon Fiber Trim",
      "Bespoke Leather Interior",
      "Premium Audio System"
    ],
    "description": "A stunning example of Ferrari engineering. This Purosangue offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-297",
    "name": "Ferrari 812 Superfast",
    "brand": "Ferrari",
    "model": "812 Superfast",
    "year": 2024,
    "price": 1196302,
    "mileage": 12913,
    "engine": "W16 Quad-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 529,
    "acceleration": "2.7s",
    "topSpeed": "229 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Soft-close Doors",
      "Panoramic Roof",
      "Heads-up Display"
    ],
    "description": "A stunning example of Ferrari engineering. This 812 Superfast offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-298",
    "name": "McLaren 720S",
    "brand": "McLaren",
    "model": "720S",
    "year": 2024,
    "price": 321876,
    "mileage": 6288,
    "engine": "W16 Quad-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 479,
    "acceleration": "4.3s",
    "topSpeed": "168 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Massage Seats",
      "Adaptive Suspension",
      "Premium Audio System"
    ],
    "description": "A stunning example of McLaren engineering. This 720S offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-299",
    "name": "McLaren 720S",
    "brand": "McLaren",
    "model": "720S",
    "year": 2020,
    "price": 1794156,
    "mileage": 9163,
    "engine": "W16 Quad-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 734,
    "acceleration": "2.8s",
    "topSpeed": "192 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Carbon Fiber Trim",
      "Panoramic Roof",
      "Night Vision"
    ],
    "description": "A stunning example of McLaren engineering. This 720S offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-300",
    "name": "Bugatti Mistral",
    "brand": "Bugatti",
    "model": "Mistral",
    "year": 2021,
    "price": 891200,
    "mileage": 2901,
    "engine": "Electric Dual-Motor",
    "transmission": "Single-Speed Electric",
    "fuelType": "Electric",
    "hp": 1129,
    "acceleration": "3.1s",
    "topSpeed": "230 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Active Aero",
      "Ceramic Brakes",
      "Soft-close Doors"
    ],
    "description": "A stunning example of Bugatti engineering. This Mistral offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-301",
    "name": "McLaren 765LT",
    "brand": "McLaren",
    "model": "765LT",
    "year": 2020,
    "price": 1282269,
    "mileage": 3801,
    "engine": "Hybrid V12",
    "transmission": "Single-Speed Electric",
    "fuelType": "Hybrid",
    "hp": 539,
    "acceleration": "4.7s",
    "topSpeed": "248 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Reserved",
    "features": [
      "Carbon Fiber Trim",
      "Night Vision",
      "Active Aero",
      "Massage Seats"
    ],
    "description": "A stunning example of McLaren engineering. This 765LT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-302",
    "name": "Mercedes-Benz GT Black Series",
    "brand": "Mercedes-Benz",
    "model": "GT Black Series",
    "year": 2021,
    "price": 769019,
    "mileage": 12514,
    "engine": "V10 Natural",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 776,
    "acceleration": "3.1s",
    "topSpeed": "219 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Bespoke Leather Interior",
      "Panoramic Roof",
      "Starlight Headliner"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This GT Black Series offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-303",
    "name": "Bentley Bentayga",
    "brand": "Bentley",
    "model": "Bentayga",
    "year": 2022,
    "price": 601269,
    "mileage": 12290,
    "engine": "Hybrid V12",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Hybrid",
    "hp": 684,
    "acceleration": "3.7s",
    "topSpeed": "196 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Starlight Headliner",
      "Panoramic Roof",
      "Heads-up Display"
    ],
    "description": "A stunning example of Bentley engineering. This Bentayga offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-304",
    "name": "Lamborghini Revuelto",
    "brand": "Lamborghini",
    "model": "Revuelto",
    "year": 2020,
    "price": 253222,
    "mileage": 12820,
    "engine": "Flat-6 Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 879,
    "acceleration": "4.1s",
    "topSpeed": "245 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Soft-close Doors",
      "Night Vision",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of Lamborghini engineering. This Revuelto offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-305",
    "name": "Aston Martin DBS",
    "brand": "Aston Martin",
    "model": "DBS",
    "year": 2023,
    "price": 1091674,
    "mileage": 1549,
    "engine": "Electric Dual-Motor",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Electric",
    "hp": 976,
    "acceleration": "4.4s",
    "topSpeed": "177 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Adaptive Suspension",
      "Starlight Headliner",
      "Bespoke Leather Interior",
      "Heads-up Display"
    ],
    "description": "A stunning example of Aston Martin engineering. This DBS offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-306",
    "name": "McLaren P1",
    "brand": "McLaren",
    "model": "P1",
    "year": 2020,
    "price": 1459456,
    "mileage": 4206,
    "engine": "V8 Biturbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 781,
    "acceleration": "4.0s",
    "topSpeed": "170 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Soft-close Doors",
      "Premium Audio System",
      "Adaptive Suspension",
      "Starlight Headliner"
    ],
    "description": "A stunning example of McLaren engineering. This P1 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-307",
    "name": "Bugatti Chiron",
    "brand": "Bugatti",
    "model": "Chiron",
    "year": 2021,
    "price": 1195178,
    "mileage": 1465,
    "engine": "V12 Twin-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 926,
    "acceleration": "2.0s",
    "topSpeed": "249 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Active Aero",
      "Heads-up Display",
      "Starlight Headliner"
    ],
    "description": "A stunning example of Bugatti engineering. This Chiron offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-308",
    "name": "BMW i7 M70",
    "brand": "BMW",
    "model": "i7 M70",
    "year": 2021,
    "price": 1583656,
    "mileage": 14411,
    "engine": "W16 Quad-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 914,
    "acceleration": "4.0s",
    "topSpeed": "161 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Massage Seats",
      "Ceramic Brakes",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of BMW engineering. This i7 M70 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-309",
    "name": "Range Rover SV",
    "brand": "Range Rover",
    "model": "SV",
    "year": 2022,
    "price": 2027474,
    "mileage": 660,
    "engine": "W16 Quad-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 469,
    "acceleration": "3.4s",
    "topSpeed": "208 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Active Aero",
      "Starlight Headliner",
      "Massage Seats",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Range Rover engineering. This SV offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-310",
    "name": "McLaren Artura",
    "brand": "McLaren",
    "model": "Artura",
    "year": 2023,
    "price": 1539385,
    "mileage": 1398,
    "engine": "Electric Dual-Motor",
    "transmission": "9-Speed Automatic",
    "fuelType": "Electric",
    "hp": 1067,
    "acceleration": "4.6s",
    "topSpeed": "188 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Massage Seats",
      "Night Vision",
      "Premium Audio System"
    ],
    "description": "A stunning example of McLaren engineering. This Artura offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-311",
    "name": "Porsche 718 Cayman GT4",
    "brand": "Porsche",
    "model": "718 Cayman GT4",
    "year": 2022,
    "price": 1946883,
    "mileage": 1671,
    "engine": "V10 Natural",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1199,
    "acceleration": "2.3s",
    "topSpeed": "210 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Starlight Headliner",
      "Heads-up Display",
      "Massage Seats",
      "Night Vision"
    ],
    "description": "A stunning example of Porsche engineering. This 718 Cayman GT4 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-312",
    "name": "Bugatti Veyron",
    "brand": "Bugatti",
    "model": "Veyron",
    "year": 2020,
    "price": 201992,
    "mileage": 14676,
    "engine": "Hybrid V12",
    "transmission": "8-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 967,
    "acceleration": "4.9s",
    "topSpeed": "169 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Massage Seats",
      "Active Aero",
      "Heads-up Display",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of Bugatti engineering. This Veyron offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-313",
    "name": "McLaren Artura",
    "brand": "McLaren",
    "model": "Artura",
    "year": 2024,
    "price": 1155728,
    "mileage": 7192,
    "engine": "W16 Quad-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 1083,
    "acceleration": "4.1s",
    "topSpeed": "247 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Reserved",
    "features": [
      "Starlight Headliner",
      "Adaptive Suspension",
      "Carbon Fiber Trim",
      "Panoramic Roof"
    ],
    "description": "A stunning example of McLaren engineering. This Artura offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-314",
    "name": "Range Rover Velar",
    "brand": "Range Rover",
    "model": "Velar",
    "year": 2024,
    "price": 209704,
    "mileage": 3998,
    "engine": "W16 Quad-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 683,
    "acceleration": "4.6s",
    "topSpeed": "235 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Adaptive Suspension",
      "Ceramic Brakes",
      "Night Vision"
    ],
    "description": "A stunning example of Range Rover engineering. This Velar offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-315",
    "name": "Rolls-Royce Dawn",
    "brand": "Rolls-Royce",
    "model": "Dawn",
    "year": 2023,
    "price": 749786,
    "mileage": 1692,
    "engine": "W16 Quad-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 613,
    "acceleration": "4.5s",
    "topSpeed": "195 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Reserved",
    "features": [
      "Heads-up Display",
      "Premium Audio System",
      "Soft-close Doors",
      "Massage Seats"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Dawn offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-316",
    "name": "Porsche 718 Cayman GT4",
    "brand": "Porsche",
    "model": "718 Cayman GT4",
    "year": 2024,
    "price": 1328199,
    "mileage": 10500,
    "engine": "V8 Biturbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 768,
    "acceleration": "3.3s",
    "topSpeed": "162 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Massage Seats",
      "Active Aero",
      "Soft-close Doors"
    ],
    "description": "A stunning example of Porsche engineering. This 718 Cayman GT4 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-317",
    "name": "Bentley Mulsanne",
    "brand": "Bentley",
    "model": "Mulsanne",
    "year": 2023,
    "price": 1175788,
    "mileage": 5581,
    "engine": "W16 Quad-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 603,
    "acceleration": "5.0s",
    "topSpeed": "186 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Soft-close Doors",
      "Ceramic Brakes",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of Bentley engineering. This Mulsanne offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-318",
    "name": "McLaren 720S",
    "brand": "McLaren",
    "model": "720S",
    "year": 2023,
    "price": 138631,
    "mileage": 1875,
    "engine": "W16 Quad-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 800,
    "acceleration": "3.1s",
    "topSpeed": "170 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Bespoke Leather Interior",
      "Heads-up Display",
      "Starlight Headliner",
      "Panoramic Roof"
    ],
    "description": "A stunning example of McLaren engineering. This 720S offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-319",
    "name": "Range Rover Sport SVR",
    "brand": "Range Rover",
    "model": "Sport SVR",
    "year": 2021,
    "price": 1624522,
    "mileage": 8426,
    "engine": "V12 Twin-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 618,
    "acceleration": "2.9s",
    "topSpeed": "233 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Soft-close Doors",
      "Starlight Headliner",
      "Active Aero",
      "Massage Seats"
    ],
    "description": "A stunning example of Range Rover engineering. This Sport SVR offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-320",
    "name": "BMW M4 CSL",
    "brand": "BMW",
    "model": "M4 CSL",
    "year": 2020,
    "price": 2094148,
    "mileage": 9515,
    "engine": "V10 Natural",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 958,
    "acceleration": "3.5s",
    "topSpeed": "248 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Heads-up Display",
      "Premium Audio System",
      "Carbon Fiber Trim",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of BMW engineering. This M4 CSL offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-321",
    "name": "Porsche 911 Turbo S",
    "brand": "Porsche",
    "model": "911 Turbo S",
    "year": 2022,
    "price": 1887014,
    "mileage": 6415,
    "engine": "Hybrid V12",
    "transmission": "9-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 844,
    "acceleration": "2.6s",
    "topSpeed": "179 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Night Vision",
      "Starlight Headliner",
      "Ceramic Brakes",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Porsche engineering. This 911 Turbo S offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-322",
    "name": "Rolls-Royce Ghost",
    "brand": "Rolls-Royce",
    "model": "Ghost",
    "year": 2022,
    "price": 1556030,
    "mileage": 11150,
    "engine": "Hybrid V12",
    "transmission": "9-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 710,
    "acceleration": "2.5s",
    "topSpeed": "213 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Active Aero",
      "Massage Seats",
      "Starlight Headliner",
      "Night Vision"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Ghost offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-323",
    "name": "McLaren 720S",
    "brand": "McLaren",
    "model": "720S",
    "year": 2021,
    "price": 1681615,
    "mileage": 4359,
    "engine": "V10 Natural",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 1024,
    "acceleration": "3.3s",
    "topSpeed": "193 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Premium Audio System",
      "Ceramic Brakes",
      "Soft-close Doors"
    ],
    "description": "A stunning example of McLaren engineering. This 720S offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-324",
    "name": "BMW M8 Competition",
    "brand": "BMW",
    "model": "M8 Competition",
    "year": 2022,
    "price": 521756,
    "mileage": 8932,
    "engine": "Electric Dual-Motor",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Electric",
    "hp": 562,
    "acceleration": "2.7s",
    "topSpeed": "216 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Massage Seats",
      "Active Aero",
      "Heads-up Display",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of BMW engineering. This M8 Competition offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-325",
    "name": "Aston Martin DBS",
    "brand": "Aston Martin",
    "model": "DBS",
    "year": 2023,
    "price": 631429,
    "mileage": 6765,
    "engine": "V10 Natural",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 603,
    "acceleration": "4.6s",
    "topSpeed": "225 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Soft-close Doors",
      "Starlight Headliner",
      "Active Aero",
      "Massage Seats"
    ],
    "description": "A stunning example of Aston Martin engineering. This DBS offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-326",
    "name": "Aston Martin Vantage",
    "brand": "Aston Martin",
    "model": "Vantage",
    "year": 2023,
    "price": 814754,
    "mileage": 2737,
    "engine": "Hybrid V12",
    "transmission": "8-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 435,
    "acceleration": "2.6s",
    "topSpeed": "188 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Active Aero",
      "Adaptive Suspension",
      "Massage Seats",
      "Soft-close Doors"
    ],
    "description": "A stunning example of Aston Martin engineering. This Vantage offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-327",
    "name": "Lamborghini Aventador",
    "brand": "Lamborghini",
    "model": "Aventador",
    "year": 2022,
    "price": 874041,
    "mileage": 9129,
    "engine": "Hybrid V12",
    "transmission": "9-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 469,
    "acceleration": "3.9s",
    "topSpeed": "199 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Massage Seats",
      "Ceramic Brakes",
      "Panoramic Roof",
      "Active Aero"
    ],
    "description": "A stunning example of Lamborghini engineering. This Aventador offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-328",
    "name": "Mercedes-Benz S-Class Maybach",
    "brand": "Mercedes-Benz",
    "model": "S-Class Maybach",
    "year": 2024,
    "price": 345719,
    "mileage": 12422,
    "engine": "V8 Biturbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 463,
    "acceleration": "4.5s",
    "topSpeed": "164 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Soft-close Doors",
      "Night Vision",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This S-Class Maybach offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-329",
    "name": "Aston Martin DBX",
    "brand": "Aston Martin",
    "model": "DBX",
    "year": 2021,
    "price": 1633440,
    "mileage": 7606,
    "engine": "V10 Natural",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 1062,
    "acceleration": "2.8s",
    "topSpeed": "209 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Massage Seats",
      "Active Aero",
      "Starlight Headliner",
      "Heads-up Display"
    ],
    "description": "A stunning example of Aston Martin engineering. This DBX offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-330",
    "name": "Bugatti Chiron",
    "brand": "Bugatti",
    "model": "Chiron",
    "year": 2023,
    "price": 1647503,
    "mileage": 11366,
    "engine": "V12 Twin-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 535,
    "acceleration": "4.0s",
    "topSpeed": "177 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Starlight Headliner",
      "Active Aero",
      "Massage Seats"
    ],
    "description": "A stunning example of Bugatti engineering. This Chiron offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-331",
    "name": "Aston Martin Valhalla",
    "brand": "Aston Martin",
    "model": "Valhalla",
    "year": 2022,
    "price": 626703,
    "mileage": 11238,
    "engine": "V8 Biturbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 855,
    "acceleration": "3.0s",
    "topSpeed": "196 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Night Vision",
      "Panoramic Roof",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Aston Martin engineering. This Valhalla offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-332",
    "name": "McLaren 720S",
    "brand": "McLaren",
    "model": "720S",
    "year": 2021,
    "price": 1699291,
    "mileage": 10617,
    "engine": "V10 Natural",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1044,
    "acceleration": "4.5s",
    "topSpeed": "233 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Adaptive Suspension",
      "Active Aero",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of McLaren engineering. This 720S offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-333",
    "name": "McLaren 720S",
    "brand": "McLaren",
    "model": "720S",
    "year": 2022,
    "price": 975900,
    "mileage": 13006,
    "engine": "W16 Quad-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1115,
    "acceleration": "3.5s",
    "topSpeed": "233 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Reserved",
    "features": [
      "Ceramic Brakes",
      "Premium Audio System",
      "Adaptive Suspension",
      "Soft-close Doors"
    ],
    "description": "A stunning example of McLaren engineering. This 720S offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-334",
    "name": "Mercedes-Benz G 63 AMG",
    "brand": "Mercedes-Benz",
    "model": "G 63 AMG",
    "year": 2024,
    "price": 2080562,
    "mileage": 2864,
    "engine": "V10 Natural",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 615,
    "acceleration": "3.9s",
    "topSpeed": "208 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Bespoke Leather Interior",
      "Ceramic Brakes",
      "Massage Seats"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This G 63 AMG offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-335",
    "name": "Lamborghini Revuelto",
    "brand": "Lamborghini",
    "model": "Revuelto",
    "year": 2021,
    "price": 2098424,
    "mileage": 440,
    "engine": "V8 Biturbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 930,
    "acceleration": "4.3s",
    "topSpeed": "171 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Starlight Headliner",
      "Night Vision",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Lamborghini engineering. This Revuelto offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-336",
    "name": "Lamborghini Revuelto",
    "brand": "Lamborghini",
    "model": "Revuelto",
    "year": 2020,
    "price": 1629675,
    "mileage": 12721,
    "engine": "V8 Biturbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 645,
    "acceleration": "4.9s",
    "topSpeed": "169 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Night Vision",
      "Ceramic Brakes",
      "Premium Audio System",
      "Starlight Headliner"
    ],
    "description": "A stunning example of Lamborghini engineering. This Revuelto offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-337",
    "name": "BMW M4 CSL",
    "brand": "BMW",
    "model": "M4 CSL",
    "year": 2021,
    "price": 545585,
    "mileage": 433,
    "engine": "V10 Natural",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1068,
    "acceleration": "2.9s",
    "topSpeed": "194 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Massage Seats",
      "Night Vision",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of BMW engineering. This M4 CSL offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-338",
    "name": "Bugatti Veyron",
    "brand": "Bugatti",
    "model": "Veyron",
    "year": 2024,
    "price": 1578938,
    "mileage": 4831,
    "engine": "V10 Natural",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 701,
    "acceleration": "4.5s",
    "topSpeed": "163 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Reserved",
    "features": [
      "Starlight Headliner",
      "Massage Seats",
      "Ceramic Brakes",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of Bugatti engineering. This Veyron offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-339",
    "name": "Lamborghini Revuelto",
    "brand": "Lamborghini",
    "model": "Revuelto",
    "year": 2020,
    "price": 1599730,
    "mileage": 13405,
    "engine": "Hybrid V12",
    "transmission": "9-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 1048,
    "acceleration": "4.4s",
    "topSpeed": "211 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Night Vision",
      "Ceramic Brakes",
      "Heads-up Display"
    ],
    "description": "A stunning example of Lamborghini engineering. This Revuelto offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-340",
    "name": "Range Rover Velar",
    "brand": "Range Rover",
    "model": "Velar",
    "year": 2022,
    "price": 1315534,
    "mileage": 9065,
    "engine": "V8 Biturbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 820,
    "acceleration": "2.6s",
    "topSpeed": "166 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Bespoke Leather Interior",
      "Premium Audio System",
      "Ceramic Brakes",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of Range Rover engineering. This Velar offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-341",
    "name": "Bentley Flying Spur",
    "brand": "Bentley",
    "model": "Flying Spur",
    "year": 2024,
    "price": 176999,
    "mileage": 9963,
    "engine": "V10 Natural",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 945,
    "acceleration": "2.2s",
    "topSpeed": "221 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Premium Audio System",
      "Ceramic Brakes",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Bentley engineering. This Flying Spur offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-342",
    "name": "Range Rover Autobiography",
    "brand": "Range Rover",
    "model": "Autobiography",
    "year": 2020,
    "price": 1278885,
    "mileage": 14861,
    "engine": "V12 Twin-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 428,
    "acceleration": "3.8s",
    "topSpeed": "186 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Panoramic Roof",
      "Bespoke Leather Interior",
      "Heads-up Display",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of Range Rover engineering. This Autobiography offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-343",
    "name": "Rolls-Royce Spectre",
    "brand": "Rolls-Royce",
    "model": "Spectre",
    "year": 2024,
    "price": 1048726,
    "mileage": 443,
    "engine": "V10 Natural",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1014,
    "acceleration": "4.5s",
    "topSpeed": "236 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Panoramic Roof",
      "Soft-close Doors",
      "Carbon Fiber Trim",
      "Heads-up Display"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Spectre offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-344",
    "name": "Bugatti Divo",
    "brand": "Bugatti",
    "model": "Divo",
    "year": 2022,
    "price": 540955,
    "mileage": 14419,
    "engine": "Hybrid V12",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Hybrid",
    "hp": 941,
    "acceleration": "3.2s",
    "topSpeed": "245 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Reserved",
    "features": [
      "Panoramic Roof",
      "Soft-close Doors",
      "Starlight Headliner",
      "Night Vision"
    ],
    "description": "A stunning example of Bugatti engineering. This Divo offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-345",
    "name": "Porsche Panamera",
    "brand": "Porsche",
    "model": "Panamera",
    "year": 2022,
    "price": 507728,
    "mileage": 14512,
    "engine": "W16 Quad-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 649,
    "acceleration": "3.4s",
    "topSpeed": "239 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Carbon Fiber Trim",
      "Heads-up Display",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Porsche engineering. This Panamera offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-346",
    "name": "Range Rover Autobiography",
    "brand": "Range Rover",
    "model": "Autobiography",
    "year": 2022,
    "price": 1833963,
    "mileage": 11025,
    "engine": "Electric Dual-Motor",
    "transmission": "8-Speed Automatic",
    "fuelType": "Electric",
    "hp": 911,
    "acceleration": "4.2s",
    "topSpeed": "227 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Adaptive Suspension",
      "Bespoke Leather Interior",
      "Active Aero"
    ],
    "description": "A stunning example of Range Rover engineering. This Autobiography offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-347",
    "name": "McLaren GT",
    "brand": "McLaren",
    "model": "GT",
    "year": 2024,
    "price": 324633,
    "mileage": 5574,
    "engine": "Electric Dual-Motor",
    "transmission": "9-Speed Automatic",
    "fuelType": "Electric",
    "hp": 1099,
    "acceleration": "4.6s",
    "topSpeed": "201 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Reserved",
    "features": [
      "Premium Audio System",
      "Massage Seats",
      "Active Aero",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of McLaren engineering. This GT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-348",
    "name": "BMW i7 M70",
    "brand": "BMW",
    "model": "i7 M70",
    "year": 2024,
    "price": 425419,
    "mileage": 881,
    "engine": "Flat-6 Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 475,
    "acceleration": "3.4s",
    "topSpeed": "203 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Panoramic Roof",
      "Soft-close Doors",
      "Carbon Fiber Trim",
      "Night Vision"
    ],
    "description": "A stunning example of BMW engineering. This i7 M70 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-349",
    "name": "BMW i7 M70",
    "brand": "BMW",
    "model": "i7 M70",
    "year": 2021,
    "price": 1833364,
    "mileage": 1573,
    "engine": "Electric Dual-Motor",
    "transmission": "8-Speed Automatic",
    "fuelType": "Electric",
    "hp": 1113,
    "acceleration": "4.8s",
    "topSpeed": "195 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Massage Seats",
      "Starlight Headliner",
      "Adaptive Suspension",
      "Soft-close Doors"
    ],
    "description": "A stunning example of BMW engineering. This i7 M70 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-350",
    "name": "Bentley Continental GT",
    "brand": "Bentley",
    "model": "Continental GT",
    "year": 2020,
    "price": 750065,
    "mileage": 3491,
    "engine": "V10 Natural",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 810,
    "acceleration": "4.8s",
    "topSpeed": "241 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Massage Seats",
      "Starlight Headliner",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Bentley engineering. This Continental GT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-351",
    "name": "Ferrari 296 GTB",
    "brand": "Ferrari",
    "model": "296 GTB",
    "year": 2022,
    "price": 1275708,
    "mileage": 3078,
    "engine": "W16 Quad-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 897,
    "acceleration": "3.9s",
    "topSpeed": "162 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Night Vision",
      "Massage Seats",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of Ferrari engineering. This 296 GTB offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-352",
    "name": "Range Rover Sport SVR",
    "brand": "Range Rover",
    "model": "Sport SVR",
    "year": 2020,
    "price": 1185747,
    "mileage": 14292,
    "engine": "Flat-6 Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 876,
    "acceleration": "3.3s",
    "topSpeed": "160 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Panoramic Roof",
      "Starlight Headliner",
      "Heads-up Display",
      "Massage Seats"
    ],
    "description": "A stunning example of Range Rover engineering. This Sport SVR offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-353",
    "name": "Mercedes-Benz S-Class Maybach",
    "brand": "Mercedes-Benz",
    "model": "S-Class Maybach",
    "year": 2024,
    "price": 1951782,
    "mileage": 779,
    "engine": "V8 Biturbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1064,
    "acceleration": "4.3s",
    "topSpeed": "177 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Soft-close Doors",
      "Premium Audio System",
      "Starlight Headliner",
      "Heads-up Display"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This S-Class Maybach offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-354",
    "name": "Mercedes-Benz EQS 580",
    "brand": "Mercedes-Benz",
    "model": "EQS 580",
    "year": 2021,
    "price": 830171,
    "mileage": 9722,
    "engine": "Hybrid V12",
    "transmission": "9-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 534,
    "acceleration": "3.7s",
    "topSpeed": "230 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Adaptive Suspension",
      "Active Aero",
      "Soft-close Doors"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This EQS 580 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-355",
    "name": "Rolls-Royce Spectre",
    "brand": "Rolls-Royce",
    "model": "Spectre",
    "year": 2024,
    "price": 2029840,
    "mileage": 11047,
    "engine": "Flat-6 Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 1031,
    "acceleration": "3.5s",
    "topSpeed": "208 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Reserved",
    "features": [
      "Soft-close Doors",
      "Starlight Headliner",
      "Massage Seats",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Spectre offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-356",
    "name": "Bentley Bentayga",
    "brand": "Bentley",
    "model": "Bentayga",
    "year": 2024,
    "price": 1004687,
    "mileage": 317,
    "engine": "V10 Natural",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 468,
    "acceleration": "3.0s",
    "topSpeed": "171 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Night Vision",
      "Heads-up Display",
      "Active Aero"
    ],
    "description": "A stunning example of Bentley engineering. This Bentayga offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-357",
    "name": "Porsche Taycan",
    "brand": "Porsche",
    "model": "Taycan",
    "year": 2022,
    "price": 1001851,
    "mileage": 14051,
    "engine": "Flat-6 Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 732,
    "acceleration": "4.3s",
    "topSpeed": "222 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Ceramic Brakes",
      "Active Aero",
      "Massage Seats"
    ],
    "description": "A stunning example of Porsche engineering. This Taycan offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-358",
    "name": "Range Rover Autobiography",
    "brand": "Range Rover",
    "model": "Autobiography",
    "year": 2021,
    "price": 551029,
    "mileage": 6664,
    "engine": "V12 Twin-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 1064,
    "acceleration": "3.6s",
    "topSpeed": "165 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Carbon Fiber Trim",
      "Night Vision",
      "Active Aero"
    ],
    "description": "A stunning example of Range Rover engineering. This Autobiography offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-359",
    "name": "BMW X7 M60i",
    "brand": "BMW",
    "model": "X7 M60i",
    "year": 2023,
    "price": 2082170,
    "mileage": 6939,
    "engine": "Hybrid V12",
    "transmission": "9-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 762,
    "acceleration": "2.8s",
    "topSpeed": "213 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Starlight Headliner",
      "Ceramic Brakes",
      "Panoramic Roof"
    ],
    "description": "A stunning example of BMW engineering. This X7 M60i offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-360",
    "name": "Lamborghini Urus",
    "brand": "Lamborghini",
    "model": "Urus",
    "year": 2021,
    "price": 717524,
    "mileage": 4422,
    "engine": "Hybrid V12",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Hybrid",
    "hp": 604,
    "acceleration": "3.3s",
    "topSpeed": "216 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Massage Seats",
      "Premium Audio System",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Lamborghini engineering. This Urus offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-361",
    "name": "McLaren P1",
    "brand": "McLaren",
    "model": "P1",
    "year": 2021,
    "price": 642395,
    "mileage": 12590,
    "engine": "Electric Dual-Motor",
    "transmission": "9-Speed Automatic",
    "fuelType": "Electric",
    "hp": 673,
    "acceleration": "2.3s",
    "topSpeed": "239 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Bespoke Leather Interior",
      "Soft-close Doors",
      "Heads-up Display"
    ],
    "description": "A stunning example of McLaren engineering. This P1 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-362",
    "name": "Porsche Taycan",
    "brand": "Porsche",
    "model": "Taycan",
    "year": 2024,
    "price": 420228,
    "mileage": 10862,
    "engine": "V10 Natural",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 648,
    "acceleration": "3.7s",
    "topSpeed": "198 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Night Vision",
      "Heads-up Display",
      "Soft-close Doors",
      "Massage Seats"
    ],
    "description": "A stunning example of Porsche engineering. This Taycan offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-363",
    "name": "Bugatti Divo",
    "brand": "Bugatti",
    "model": "Divo",
    "year": 2022,
    "price": 1768117,
    "mileage": 1679,
    "engine": "V10 Natural",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 859,
    "acceleration": "2.5s",
    "topSpeed": "233 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Bespoke Leather Interior",
      "Panoramic Roof",
      "Adaptive Suspension",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Bugatti engineering. This Divo offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-364",
    "name": "Mercedes-Benz GT Black Series",
    "brand": "Mercedes-Benz",
    "model": "GT Black Series",
    "year": 2022,
    "price": 1166818,
    "mileage": 8162,
    "engine": "V12 Twin-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 449,
    "acceleration": "4.5s",
    "topSpeed": "164 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Reserved",
    "features": [
      "Soft-close Doors",
      "Heads-up Display",
      "Starlight Headliner",
      "Massage Seats"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This GT Black Series offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-365",
    "name": "Bentley Continental GT",
    "brand": "Bentley",
    "model": "Continental GT",
    "year": 2021,
    "price": 758223,
    "mileage": 14208,
    "engine": "Flat-6 Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 989,
    "acceleration": "4.7s",
    "topSpeed": "200 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Ceramic Brakes",
      "Active Aero",
      "Night Vision"
    ],
    "description": "A stunning example of Bentley engineering. This Continental GT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-366",
    "name": "Bentley Continental GT",
    "brand": "Bentley",
    "model": "Continental GT",
    "year": 2024,
    "price": 1620560,
    "mileage": 1140,
    "engine": "W16 Quad-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 587,
    "acceleration": "3.2s",
    "topSpeed": "195 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Soft-close Doors",
      "Heads-up Display",
      "Massage Seats"
    ],
    "description": "A stunning example of Bentley engineering. This Continental GT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-367",
    "name": "Ferrari 812 Superfast",
    "brand": "Ferrari",
    "model": "812 Superfast",
    "year": 2020,
    "price": 913957,
    "mileage": 7168,
    "engine": "V12 Twin-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 837,
    "acceleration": "4.5s",
    "topSpeed": "176 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Adaptive Suspension",
      "Soft-close Doors",
      "Massage Seats"
    ],
    "description": "A stunning example of Ferrari engineering. This 812 Superfast offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-368",
    "name": "Range Rover Autobiography",
    "brand": "Range Rover",
    "model": "Autobiography",
    "year": 2020,
    "price": 1129213,
    "mileage": 1399,
    "engine": "V12 Twin-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 895,
    "acceleration": "3.5s",
    "topSpeed": "164 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Night Vision",
      "Bespoke Leather Interior",
      "Active Aero"
    ],
    "description": "A stunning example of Range Rover engineering. This Autobiography offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-369",
    "name": "Aston Martin DBX",
    "brand": "Aston Martin",
    "model": "DBX",
    "year": 2023,
    "price": 974746,
    "mileage": 14388,
    "engine": "Electric Dual-Motor",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Electric",
    "hp": 618,
    "acceleration": "3.8s",
    "topSpeed": "182 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Massage Seats",
      "Starlight Headliner",
      "Adaptive Suspension",
      "Soft-close Doors"
    ],
    "description": "A stunning example of Aston Martin engineering. This DBX offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-370",
    "name": "Rolls-Royce Spectre",
    "brand": "Rolls-Royce",
    "model": "Spectre",
    "year": 2022,
    "price": 1477186,
    "mileage": 5569,
    "engine": "V12 Twin-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1055,
    "acceleration": "3.7s",
    "topSpeed": "194 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Active Aero",
      "Heads-up Display",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Spectre offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-371",
    "name": "Lamborghini Sian",
    "brand": "Lamborghini",
    "model": "Sian",
    "year": 2022,
    "price": 1135356,
    "mileage": 2452,
    "engine": "Hybrid V12",
    "transmission": "9-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 1040,
    "acceleration": "3.4s",
    "topSpeed": "153 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Reserved",
    "features": [
      "Soft-close Doors",
      "Bespoke Leather Interior",
      "Ceramic Brakes",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of Lamborghini engineering. This Sian offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-372",
    "name": "Aston Martin DBX",
    "brand": "Aston Martin",
    "model": "DBX",
    "year": 2021,
    "price": 695225,
    "mileage": 10373,
    "engine": "Flat-6 Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 1043,
    "acceleration": "4.5s",
    "topSpeed": "216 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Starlight Headliner",
      "Massage Seats",
      "Night Vision"
    ],
    "description": "A stunning example of Aston Martin engineering. This DBX offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-373",
    "name": "Bentley Bentayga",
    "brand": "Bentley",
    "model": "Bentayga",
    "year": 2023,
    "price": 506790,
    "mileage": 7832,
    "engine": "Flat-6 Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 420,
    "acceleration": "4.7s",
    "topSpeed": "227 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Heads-up Display",
      "Bespoke Leather Interior",
      "Massage Seats"
    ],
    "description": "A stunning example of Bentley engineering. This Bentayga offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-374",
    "name": "Mercedes-Benz S-Class Maybach",
    "brand": "Mercedes-Benz",
    "model": "S-Class Maybach",
    "year": 2020,
    "price": 660272,
    "mileage": 13483,
    "engine": "Hybrid V12",
    "transmission": "Single-Speed Electric",
    "fuelType": "Hybrid",
    "hp": 890,
    "acceleration": "5.0s",
    "topSpeed": "176 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Reserved",
    "features": [
      "Carbon Fiber Trim",
      "Heads-up Display",
      "Panoramic Roof",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This S-Class Maybach offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-375",
    "name": "Rolls-Royce Dawn",
    "brand": "Rolls-Royce",
    "model": "Dawn",
    "year": 2023,
    "price": 1584604,
    "mileage": 1115,
    "engine": "Hybrid V12",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Hybrid",
    "hp": 671,
    "acceleration": "3.0s",
    "topSpeed": "214 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Adaptive Suspension",
      "Bespoke Leather Interior",
      "Soft-close Doors"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Dawn offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-376",
    "name": "Bugatti Divo",
    "brand": "Bugatti",
    "model": "Divo",
    "year": 2023,
    "price": 444977,
    "mileage": 3835,
    "engine": "Hybrid V12",
    "transmission": "Single-Speed Electric",
    "fuelType": "Hybrid",
    "hp": 1049,
    "acceleration": "3.4s",
    "topSpeed": "210 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Premium Audio System",
      "Night Vision",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Bugatti engineering. This Divo offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-377",
    "name": "Bugatti Divo",
    "brand": "Bugatti",
    "model": "Divo",
    "year": 2024,
    "price": 839974,
    "mileage": 11384,
    "engine": "Flat-6 Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 561,
    "acceleration": "2.8s",
    "topSpeed": "157 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Premium Audio System",
      "Starlight Headliner",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Bugatti engineering. This Divo offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-378",
    "name": "Bentley Continental GT",
    "brand": "Bentley",
    "model": "Continental GT",
    "year": 2022,
    "price": 580962,
    "mileage": 10573,
    "engine": "V10 Natural",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1005,
    "acceleration": "2.5s",
    "topSpeed": "242 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Heads-up Display",
      "Ceramic Brakes",
      "Night Vision"
    ],
    "description": "A stunning example of Bentley engineering. This Continental GT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-379",
    "name": "Ferrari F8 Tributo",
    "brand": "Ferrari",
    "model": "F8 Tributo",
    "year": 2022,
    "price": 282761,
    "mileage": 10979,
    "engine": "V12 Twin-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 552,
    "acceleration": "3.7s",
    "topSpeed": "223 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Heads-up Display",
      "Bespoke Leather Interior",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of Ferrari engineering. This F8 Tributo offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-380",
    "name": "Lamborghini Hurac├ín",
    "brand": "Lamborghini",
    "model": "Hurac├ín",
    "year": 2020,
    "price": 397771,
    "mileage": 13798,
    "engine": "Flat-6 Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 863,
    "acceleration": "3.9s",
    "topSpeed": "170 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Premium Audio System",
      "Starlight Headliner",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Lamborghini engineering. This Hurac├ín offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-381",
    "name": "Rolls-Royce Dawn",
    "brand": "Rolls-Royce",
    "model": "Dawn",
    "year": 2023,
    "price": 2029225,
    "mileage": 8565,
    "engine": "V8 Biturbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 877,
    "acceleration": "2.6s",
    "topSpeed": "197 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Premium Audio System",
      "Bespoke Leather Interior",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Dawn offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-382",
    "name": "Bugatti Veyron",
    "brand": "Bugatti",
    "model": "Veyron",
    "year": 2024,
    "price": 920812,
    "mileage": 9437,
    "engine": "W16 Quad-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 888,
    "acceleration": "3.8s",
    "topSpeed": "152 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Massage Seats",
      "Heads-up Display",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Bugatti engineering. This Veyron offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-383",
    "name": "BMW i7 M70",
    "brand": "BMW",
    "model": "i7 M70",
    "year": 2022,
    "price": 142347,
    "mileage": 3270,
    "engine": "Hybrid V12",
    "transmission": "8-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 639,
    "acceleration": "3.6s",
    "topSpeed": "246 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Adaptive Suspension",
      "Bespoke Leather Interior",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of BMW engineering. This i7 M70 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-384",
    "name": "Porsche Taycan",
    "brand": "Porsche",
    "model": "Taycan",
    "year": 2021,
    "price": 713690,
    "mileage": 7887,
    "engine": "Electric Dual-Motor",
    "transmission": "8-Speed Automatic",
    "fuelType": "Electric",
    "hp": 823,
    "acceleration": "3.3s",
    "topSpeed": "246 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Panoramic Roof",
      "Adaptive Suspension",
      "Heads-up Display",
      "Night Vision"
    ],
    "description": "A stunning example of Porsche engineering. This Taycan offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-385",
    "name": "Bentley Flying Spur",
    "brand": "Bentley",
    "model": "Flying Spur",
    "year": 2023,
    "price": 1335218,
    "mileage": 7648,
    "engine": "W16 Quad-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 499,
    "acceleration": "4.5s",
    "topSpeed": "207 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Ceramic Brakes",
      "Soft-close Doors",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Bentley engineering. This Flying Spur offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-386",
    "name": "Porsche Taycan",
    "brand": "Porsche",
    "model": "Taycan",
    "year": 2023,
    "price": 1240742,
    "mileage": 597,
    "engine": "W16 Quad-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 451,
    "acceleration": "4.1s",
    "topSpeed": "223 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Heads-up Display",
      "Carbon Fiber Trim",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of Porsche engineering. This Taycan offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-387",
    "name": "Bugatti Divo",
    "brand": "Bugatti",
    "model": "Divo",
    "year": 2024,
    "price": 1001020,
    "mileage": 831,
    "engine": "Flat-6 Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 770,
    "acceleration": "2.8s",
    "topSpeed": "243 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Premium Audio System",
      "Soft-close Doors",
      "Starlight Headliner"
    ],
    "description": "A stunning example of Bugatti engineering. This Divo offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-388",
    "name": "Ferrari SF90 Stradale",
    "brand": "Ferrari",
    "model": "SF90 Stradale",
    "year": 2021,
    "price": 895610,
    "mileage": 11162,
    "engine": "W16 Quad-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 657,
    "acceleration": "3.2s",
    "topSpeed": "195 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Adaptive Suspension",
      "Night Vision",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Ferrari engineering. This SF90 Stradale offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-389",
    "name": "Bugatti Divo",
    "brand": "Bugatti",
    "model": "Divo",
    "year": 2023,
    "price": 397540,
    "mileage": 9342,
    "engine": "W16 Quad-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 705,
    "acceleration": "2.9s",
    "topSpeed": "212 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Reserved",
    "features": [
      "Active Aero",
      "Massage Seats",
      "Starlight Headliner",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Bugatti engineering. This Divo offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-390",
    "name": "Range Rover SV",
    "brand": "Range Rover",
    "model": "SV",
    "year": 2021,
    "price": 635871,
    "mileage": 2223,
    "engine": "Hybrid V12",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Hybrid",
    "hp": 711,
    "acceleration": "4.1s",
    "topSpeed": "210 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Night Vision",
      "Premium Audio System",
      "Heads-up Display",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Range Rover engineering. This SV offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-391",
    "name": "Range Rover Velar",
    "brand": "Range Rover",
    "model": "Velar",
    "year": 2022,
    "price": 1305105,
    "mileage": 4037,
    "engine": "V10 Natural",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 472,
    "acceleration": "4.0s",
    "topSpeed": "217 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Active Aero",
      "Premium Audio System",
      "Soft-close Doors",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Range Rover engineering. This Velar offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-392",
    "name": "Aston Martin DBS",
    "brand": "Aston Martin",
    "model": "DBS",
    "year": 2022,
    "price": 1361793,
    "mileage": 3269,
    "engine": "Flat-6 Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 605,
    "acceleration": "3.4s",
    "topSpeed": "218 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Night Vision",
      "Bespoke Leather Interior",
      "Premium Audio System",
      "Soft-close Doors"
    ],
    "description": "A stunning example of Aston Martin engineering. This DBS offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-393",
    "name": "Bentley Bentayga",
    "brand": "Bentley",
    "model": "Bentayga",
    "year": 2020,
    "price": 1067887,
    "mileage": 5594,
    "engine": "V8 Biturbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1052,
    "acceleration": "2.2s",
    "topSpeed": "188 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Carbon Fiber Trim",
      "Heads-up Display",
      "Massage Seats"
    ],
    "description": "A stunning example of Bentley engineering. This Bentayga offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-394",
    "name": "Lamborghini Aventador",
    "brand": "Lamborghini",
    "model": "Aventador",
    "year": 2024,
    "price": 983772,
    "mileage": 3627,
    "engine": "Hybrid V12",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Hybrid",
    "hp": 985,
    "acceleration": "4.7s",
    "topSpeed": "157 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Reserved",
    "features": [
      "Heads-up Display",
      "Night Vision",
      "Massage Seats",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Lamborghini engineering. This Aventador offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-395",
    "name": "McLaren GT",
    "brand": "McLaren",
    "model": "GT",
    "year": 2022,
    "price": 410565,
    "mileage": 1756,
    "engine": "V8 Biturbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 1127,
    "acceleration": "4.5s",
    "topSpeed": "192 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Bespoke Leather Interior",
      "Massage Seats",
      "Starlight Headliner"
    ],
    "description": "A stunning example of McLaren engineering. This GT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-396",
    "name": "Mercedes-Benz G 63 AMG",
    "brand": "Mercedes-Benz",
    "model": "G 63 AMG",
    "year": 2024,
    "price": 976552,
    "mileage": 12909,
    "engine": "Flat-6 Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 994,
    "acceleration": "3.3s",
    "topSpeed": "172 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Heads-up Display",
      "Active Aero",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This G 63 AMG offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-397",
    "name": "Ferrari 812 Superfast",
    "brand": "Ferrari",
    "model": "812 Superfast",
    "year": 2021,
    "price": 737012,
    "mileage": 13051,
    "engine": "Hybrid V12",
    "transmission": "9-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 545,
    "acceleration": "3.6s",
    "topSpeed": "198 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Soft-close Doors",
      "Carbon Fiber Trim",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Ferrari engineering. This 812 Superfast offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-398",
    "name": "Bugatti Veyron",
    "brand": "Bugatti",
    "model": "Veyron",
    "year": 2020,
    "price": 1318254,
    "mileage": 9292,
    "engine": "Flat-6 Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1057,
    "acceleration": "2.4s",
    "topSpeed": "244 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Soft-close Doors",
      "Adaptive Suspension",
      "Heads-up Display"
    ],
    "description": "A stunning example of Bugatti engineering. This Veyron offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-399",
    "name": "Ferrari Purosangue",
    "brand": "Ferrari",
    "model": "Purosangue",
    "year": 2024,
    "price": 660736,
    "mileage": 11355,
    "engine": "V12 Twin-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 950,
    "acceleration": "2.9s",
    "topSpeed": "166 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Active Aero",
      "Night Vision",
      "Starlight Headliner"
    ],
    "description": "A stunning example of Ferrari engineering. This Purosangue offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-400",
    "name": "BMW X7 M60i",
    "brand": "BMW",
    "model": "X7 M60i",
    "year": 2022,
    "price": 371959,
    "mileage": 13251,
    "engine": "V10 Natural",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1028,
    "acceleration": "2.8s",
    "topSpeed": "161 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Starlight Headliner",
      "Night Vision",
      "Panoramic Roof",
      "Heads-up Display"
    ],
    "description": "A stunning example of BMW engineering. This X7 M60i offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-401",
    "name": "BMW i7 M70",
    "brand": "BMW",
    "model": "i7 M70",
    "year": 2020,
    "price": 2056900,
    "mileage": 14789,
    "engine": "V12 Twin-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 730,
    "acceleration": "2.9s",
    "topSpeed": "194 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Heads-up Display",
      "Active Aero",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of BMW engineering. This i7 M70 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-402",
    "name": "Aston Martin Vantage",
    "brand": "Aston Martin",
    "model": "Vantage",
    "year": 2021,
    "price": 516580,
    "mileage": 10380,
    "engine": "W16 Quad-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 750,
    "acceleration": "2.1s",
    "topSpeed": "189 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Night Vision",
      "Active Aero",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Aston Martin engineering. This Vantage offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-403",
    "name": "Mercedes-Benz G 63 AMG",
    "brand": "Mercedes-Benz",
    "model": "G 63 AMG",
    "year": 2024,
    "price": 888041,
    "mileage": 8741,
    "engine": "Flat-6 Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 407,
    "acceleration": "4.7s",
    "topSpeed": "194 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Reserved",
    "features": [
      "Carbon Fiber Trim",
      "Night Vision",
      "Active Aero",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This G 63 AMG offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-404",
    "name": "Range Rover Sport SVR",
    "brand": "Range Rover",
    "model": "Sport SVR",
    "year": 2021,
    "price": 220439,
    "mileage": 12577,
    "engine": "Flat-6 Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 402,
    "acceleration": "2.5s",
    "topSpeed": "220 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Carbon Fiber Trim",
      "Adaptive Suspension",
      "Heads-up Display"
    ],
    "description": "A stunning example of Range Rover engineering. This Sport SVR offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-405",
    "name": "Bugatti Chiron",
    "brand": "Bugatti",
    "model": "Chiron",
    "year": 2022,
    "price": 1091498,
    "mileage": 255,
    "engine": "W16 Quad-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 1069,
    "acceleration": "4.9s",
    "topSpeed": "152 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Premium Audio System",
      "Heads-up Display",
      "Active Aero"
    ],
    "description": "A stunning example of Bugatti engineering. This Chiron offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-406",
    "name": "Porsche 911 Turbo S",
    "brand": "Porsche",
    "model": "911 Turbo S",
    "year": 2021,
    "price": 350633,
    "mileage": 3999,
    "engine": "Hybrid V12",
    "transmission": "8-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 700,
    "acceleration": "4.6s",
    "topSpeed": "206 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Heads-up Display",
      "Adaptive Suspension",
      "Night Vision",
      "Premium Audio System"
    ],
    "description": "A stunning example of Porsche engineering. This 911 Turbo S offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-407",
    "name": "Aston Martin DB11",
    "brand": "Aston Martin",
    "model": "DB11",
    "year": 2020,
    "price": 716050,
    "mileage": 8800,
    "engine": "W16 Quad-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 1181,
    "acceleration": "3.9s",
    "topSpeed": "165 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Premium Audio System",
      "Adaptive Suspension",
      "Ceramic Brakes",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of Aston Martin engineering. This DB11 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-408",
    "name": "Porsche Cayenne Turbo",
    "brand": "Porsche",
    "model": "Cayenne Turbo",
    "year": 2024,
    "price": 617963,
    "mileage": 10875,
    "engine": "V12 Twin-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 736,
    "acceleration": "2.9s",
    "topSpeed": "201 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Ceramic Brakes",
      "Soft-close Doors",
      "Night Vision"
    ],
    "description": "A stunning example of Porsche engineering. This Cayenne Turbo offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-409",
    "name": "Aston Martin DBX",
    "brand": "Aston Martin",
    "model": "DBX",
    "year": 2022,
    "price": 730085,
    "mileage": 12219,
    "engine": "Hybrid V12",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Hybrid",
    "hp": 718,
    "acceleration": "3.6s",
    "topSpeed": "197 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Panoramic Roof",
      "Ceramic Brakes",
      "Heads-up Display"
    ],
    "description": "A stunning example of Aston Martin engineering. This DBX offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-410",
    "name": "Porsche 718 Cayman GT4",
    "brand": "Porsche",
    "model": "718 Cayman GT4",
    "year": 2022,
    "price": 147786,
    "mileage": 12184,
    "engine": "W16 Quad-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 447,
    "acceleration": "3.9s",
    "topSpeed": "225 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Active Aero",
      "Starlight Headliner",
      "Massage Seats",
      "Soft-close Doors"
    ],
    "description": "A stunning example of Porsche engineering. This 718 Cayman GT4 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-411",
    "name": "McLaren P1",
    "brand": "McLaren",
    "model": "P1",
    "year": 2022,
    "price": 1367167,
    "mileage": 3274,
    "engine": "V8 Biturbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1185,
    "acceleration": "4.8s",
    "topSpeed": "242 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Starlight Headliner",
      "Active Aero",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of McLaren engineering. This P1 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-412",
    "name": "McLaren GT",
    "brand": "McLaren",
    "model": "GT",
    "year": 2024,
    "price": 2079982,
    "mileage": 12313,
    "engine": "Flat-6 Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 868,
    "acceleration": "3.8s",
    "topSpeed": "241 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Soft-close Doors",
      "Ceramic Brakes",
      "Heads-up Display"
    ],
    "description": "A stunning example of McLaren engineering. This GT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-413",
    "name": "Bentley Mulsanne",
    "brand": "Bentley",
    "model": "Mulsanne",
    "year": 2020,
    "price": 413428,
    "mileage": 4589,
    "engine": "V8 Biturbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 989,
    "acceleration": "2.1s",
    "topSpeed": "227 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Ceramic Brakes",
      "Premium Audio System",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Bentley engineering. This Mulsanne offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-414",
    "name": "Bugatti Mistral",
    "brand": "Bugatti",
    "model": "Mistral",
    "year": 2023,
    "price": 824204,
    "mileage": 13618,
    "engine": "V10 Natural",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 989,
    "acceleration": "2.3s",
    "topSpeed": "225 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Carbon Fiber Trim",
      "Soft-close Doors",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Bugatti engineering. This Mistral offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-415",
    "name": "Bentley Flying Spur",
    "brand": "Bentley",
    "model": "Flying Spur",
    "year": 2024,
    "price": 585009,
    "mileage": 2382,
    "engine": "V10 Natural",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 756,
    "acceleration": "4.9s",
    "topSpeed": "243 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Carbon Fiber Trim",
      "Active Aero",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Bentley engineering. This Flying Spur offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-416",
    "name": "Bugatti Divo",
    "brand": "Bugatti",
    "model": "Divo",
    "year": 2021,
    "price": 1121129,
    "mileage": 2200,
    "engine": "V10 Natural",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 629,
    "acceleration": "4.6s",
    "topSpeed": "202 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Soft-close Doors",
      "Night Vision",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Bugatti engineering. This Divo offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-417",
    "name": "Aston Martin Valhalla",
    "brand": "Aston Martin",
    "model": "Valhalla",
    "year": 2023,
    "price": 774896,
    "mileage": 13427,
    "engine": "Flat-6 Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1134,
    "acceleration": "4.1s",
    "topSpeed": "223 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Active Aero",
      "Massage Seats",
      "Soft-close Doors"
    ],
    "description": "A stunning example of Aston Martin engineering. This Valhalla offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-418",
    "name": "Bugatti Veyron",
    "brand": "Bugatti",
    "model": "Veyron",
    "year": 2022,
    "price": 1829705,
    "mileage": 9203,
    "engine": "V8 Biturbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 427,
    "acceleration": "2.7s",
    "topSpeed": "195 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Active Aero",
      "Panoramic Roof",
      "Massage Seats"
    ],
    "description": "A stunning example of Bugatti engineering. This Veyron offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-419",
    "name": "Bentley Bentayga",
    "brand": "Bentley",
    "model": "Bentayga",
    "year": 2024,
    "price": 358393,
    "mileage": 3123,
    "engine": "V10 Natural",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 476,
    "acceleration": "4.9s",
    "topSpeed": "187 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Massage Seats",
      "Starlight Headliner",
      "Carbon Fiber Trim",
      "Night Vision"
    ],
    "description": "A stunning example of Bentley engineering. This Bentayga offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-420",
    "name": "Bentley Flying Spur",
    "brand": "Bentley",
    "model": "Flying Spur",
    "year": 2024,
    "price": 940023,
    "mileage": 7065,
    "engine": "Flat-6 Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 484,
    "acceleration": "2.9s",
    "topSpeed": "187 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Bespoke Leather Interior",
      "Night Vision",
      "Massage Seats"
    ],
    "description": "A stunning example of Bentley engineering. This Flying Spur offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-421",
    "name": "Bentley Flying Spur",
    "brand": "Bentley",
    "model": "Flying Spur",
    "year": 2023,
    "price": 850810,
    "mileage": 13996,
    "engine": "Flat-6 Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 585,
    "acceleration": "2.8s",
    "topSpeed": "220 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Night Vision",
      "Panoramic Roof",
      "Starlight Headliner",
      "Massage Seats"
    ],
    "description": "A stunning example of Bentley engineering. This Flying Spur offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-422",
    "name": "Bugatti Mistral",
    "brand": "Bugatti",
    "model": "Mistral",
    "year": 2024,
    "price": 1525309,
    "mileage": 7099,
    "engine": "W16 Quad-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 520,
    "acceleration": "3.9s",
    "topSpeed": "160 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Massage Seats",
      "Carbon Fiber Trim",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Bugatti engineering. This Mistral offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-423",
    "name": "Ferrari SF90 Stradale",
    "brand": "Ferrari",
    "model": "SF90 Stradale",
    "year": 2024,
    "price": 487349,
    "mileage": 13033,
    "engine": "V10 Natural",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 456,
    "acceleration": "4.0s",
    "topSpeed": "169 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Ceramic Brakes",
      "Massage Seats",
      "Premium Audio System"
    ],
    "description": "A stunning example of Ferrari engineering. This SF90 Stradale offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-424",
    "name": "Aston Martin Valhalla",
    "brand": "Aston Martin",
    "model": "Valhalla",
    "year": 2024,
    "price": 538337,
    "mileage": 12546,
    "engine": "V8 Biturbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 999,
    "acceleration": "4.9s",
    "topSpeed": "182 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Adaptive Suspension",
      "Active Aero",
      "Starlight Headliner"
    ],
    "description": "A stunning example of Aston Martin engineering. This Valhalla offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-425",
    "name": "Bugatti Veyron",
    "brand": "Bugatti",
    "model": "Veyron",
    "year": 2020,
    "price": 1205415,
    "mileage": 6333,
    "engine": "V8 Biturbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 672,
    "acceleration": "3.1s",
    "topSpeed": "163 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Bespoke Leather Interior",
      "Massage Seats",
      "Starlight Headliner"
    ],
    "description": "A stunning example of Bugatti engineering. This Veyron offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-426",
    "name": "Rolls-Royce Dawn",
    "brand": "Rolls-Royce",
    "model": "Dawn",
    "year": 2022,
    "price": 1824056,
    "mileage": 2302,
    "engine": "Electric Dual-Motor",
    "transmission": "9-Speed Automatic",
    "fuelType": "Electric",
    "hp": 803,
    "acceleration": "4.0s",
    "topSpeed": "230 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Night Vision",
      "Carbon Fiber Trim",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Dawn offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-427",
    "name": "Range Rover Autobiography",
    "brand": "Range Rover",
    "model": "Autobiography",
    "year": 2020,
    "price": 1975294,
    "mileage": 12347,
    "engine": "W16 Quad-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 697,
    "acceleration": "2.2s",
    "topSpeed": "188 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Reserved",
    "features": [
      "Adaptive Suspension",
      "Bespoke Leather Interior",
      "Ceramic Brakes",
      "Soft-close Doors"
    ],
    "description": "A stunning example of Range Rover engineering. This Autobiography offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-428",
    "name": "Aston Martin DB11",
    "brand": "Aston Martin",
    "model": "DB11",
    "year": 2021,
    "price": 1626824,
    "mileage": 6822,
    "engine": "V8 Biturbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 745,
    "acceleration": "2.7s",
    "topSpeed": "211 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Carbon Fiber Trim",
      "Ceramic Brakes",
      "Bespoke Leather Interior",
      "Heads-up Display"
    ],
    "description": "A stunning example of Aston Martin engineering. This DB11 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-429",
    "name": "Aston Martin DBX",
    "brand": "Aston Martin",
    "model": "DBX",
    "year": 2021,
    "price": 1997963,
    "mileage": 12260,
    "engine": "W16 Quad-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1011,
    "acceleration": "2.9s",
    "topSpeed": "240 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Massage Seats",
      "Heads-up Display",
      "Starlight Headliner",
      "Night Vision"
    ],
    "description": "A stunning example of Aston Martin engineering. This DBX offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-430",
    "name": "BMW M8 Competition",
    "brand": "BMW",
    "model": "M8 Competition",
    "year": 2020,
    "price": 1890923,
    "mileage": 11912,
    "engine": "Flat-6 Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 1017,
    "acceleration": "3.8s",
    "topSpeed": "177 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Night Vision",
      "Soft-close Doors",
      "Heads-up Display"
    ],
    "description": "A stunning example of BMW engineering. This M8 Competition offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-431",
    "name": "Ferrari F8 Tributo",
    "brand": "Ferrari",
    "model": "F8 Tributo",
    "year": 2020,
    "price": 905798,
    "mileage": 4047,
    "engine": "V8 Biturbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 900,
    "acceleration": "3.3s",
    "topSpeed": "240 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Heads-up Display",
      "Starlight Headliner",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of Ferrari engineering. This F8 Tributo offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-432",
    "name": "Lamborghini Sian",
    "brand": "Lamborghini",
    "model": "Sian",
    "year": 2022,
    "price": 117244,
    "mileage": 1553,
    "engine": "V12 Twin-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1176,
    "acceleration": "3.5s",
    "topSpeed": "177 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Active Aero",
      "Heads-up Display",
      "Adaptive Suspension",
      "Night Vision"
    ],
    "description": "A stunning example of Lamborghini engineering. This Sian offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-433",
    "name": "Lamborghini Revuelto",
    "brand": "Lamborghini",
    "model": "Revuelto",
    "year": 2023,
    "price": 444129,
    "mileage": 3199,
    "engine": "W16 Quad-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 457,
    "acceleration": "2.9s",
    "topSpeed": "160 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Panoramic Roof",
      "Night Vision",
      "Premium Audio System",
      "Soft-close Doors"
    ],
    "description": "A stunning example of Lamborghini engineering. This Revuelto offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-434",
    "name": "Bentley Mulsanne",
    "brand": "Bentley",
    "model": "Mulsanne",
    "year": 2024,
    "price": 335567,
    "mileage": 9240,
    "engine": "V10 Natural",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 916,
    "acceleration": "4.7s",
    "topSpeed": "240 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Soft-close Doors",
      "Carbon Fiber Trim",
      "Starlight Headliner",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of Bentley engineering. This Mulsanne offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-435",
    "name": "Lamborghini Hurac├ín",
    "brand": "Lamborghini",
    "model": "Hurac├ín",
    "year": 2023,
    "price": 1121525,
    "mileage": 14710,
    "engine": "Electric Dual-Motor",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Electric",
    "hp": 974,
    "acceleration": "4.7s",
    "topSpeed": "207 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Reserved",
    "features": [
      "Ceramic Brakes",
      "Heads-up Display",
      "Active Aero",
      "Starlight Headliner"
    ],
    "description": "A stunning example of Lamborghini engineering. This Hurac├ín offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-436",
    "name": "Range Rover SV",
    "brand": "Range Rover",
    "model": "SV",
    "year": 2024,
    "price": 1473353,
    "mileage": 10834,
    "engine": "V8 Biturbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 1138,
    "acceleration": "2.7s",
    "topSpeed": "153 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Massage Seats",
      "Ceramic Brakes",
      "Active Aero",
      "Heads-up Display"
    ],
    "description": "A stunning example of Range Rover engineering. This SV offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-437",
    "name": "Range Rover Velar",
    "brand": "Range Rover",
    "model": "Velar",
    "year": 2024,
    "price": 587765,
    "mileage": 2989,
    "engine": "Hybrid V12",
    "transmission": "9-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 974,
    "acceleration": "3.6s",
    "topSpeed": "199 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Massage Seats",
      "Premium Audio System",
      "Night Vision"
    ],
    "description": "A stunning example of Range Rover engineering. This Velar offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-438",
    "name": "BMW i7 M70",
    "brand": "BMW",
    "model": "i7 M70",
    "year": 2024,
    "price": 1612667,
    "mileage": 12809,
    "engine": "Electric Dual-Motor",
    "transmission": "Single-Speed Electric",
    "fuelType": "Electric",
    "hp": 938,
    "acceleration": "3.0s",
    "topSpeed": "221 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Starlight Headliner",
      "Massage Seats",
      "Heads-up Display",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of BMW engineering. This i7 M70 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-439",
    "name": "Porsche Taycan",
    "brand": "Porsche",
    "model": "Taycan",
    "year": 2022,
    "price": 626052,
    "mileage": 13953,
    "engine": "Hybrid V12",
    "transmission": "9-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 533,
    "acceleration": "3.4s",
    "topSpeed": "158 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Soft-close Doors",
      "Ceramic Brakes",
      "Premium Audio System",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Porsche engineering. This Taycan offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-440",
    "name": "McLaren Artura",
    "brand": "McLaren",
    "model": "Artura",
    "year": 2023,
    "price": 320240,
    "mileage": 12779,
    "engine": "V8 Biturbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 1178,
    "acceleration": "3.7s",
    "topSpeed": "244 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Night Vision",
      "Heads-up Display",
      "Starlight Headliner"
    ],
    "description": "A stunning example of McLaren engineering. This Artura offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-441",
    "name": "Aston Martin Valhalla",
    "brand": "Aston Martin",
    "model": "Valhalla",
    "year": 2023,
    "price": 300658,
    "mileage": 10607,
    "engine": "W16 Quad-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 680,
    "acceleration": "2.3s",
    "topSpeed": "205 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Massage Seats",
      "Active Aero",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Aston Martin engineering. This Valhalla offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-442",
    "name": "Ferrari F8 Tributo",
    "brand": "Ferrari",
    "model": "F8 Tributo",
    "year": 2024,
    "price": 1007916,
    "mileage": 9163,
    "engine": "V12 Twin-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 823,
    "acceleration": "3.5s",
    "topSpeed": "229 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Panoramic Roof",
      "Bespoke Leather Interior",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of Ferrari engineering. This F8 Tributo offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-443",
    "name": "Rolls-Royce Phantom",
    "brand": "Rolls-Royce",
    "model": "Phantom",
    "year": 2021,
    "price": 1857285,
    "mileage": 8558,
    "engine": "V12 Twin-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 562,
    "acceleration": "4.1s",
    "topSpeed": "153 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Night Vision",
      "Starlight Headliner",
      "Soft-close Doors",
      "Active Aero"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Phantom offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-444",
    "name": "Bugatti Divo",
    "brand": "Bugatti",
    "model": "Divo",
    "year": 2021,
    "price": 1258544,
    "mileage": 5891,
    "engine": "V12 Twin-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 1140,
    "acceleration": "3.8s",
    "topSpeed": "160 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Bespoke Leather Interior",
      "Ceramic Brakes",
      "Heads-up Display",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of Bugatti engineering. This Divo offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-445",
    "name": "Range Rover Velar",
    "brand": "Range Rover",
    "model": "Velar",
    "year": 2021,
    "price": 2009116,
    "mileage": 2478,
    "engine": "Electric Dual-Motor",
    "transmission": "8-Speed Automatic",
    "fuelType": "Electric",
    "hp": 926,
    "acceleration": "3.6s",
    "topSpeed": "218 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Night Vision",
      "Ceramic Brakes",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Range Rover engineering. This Velar offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-446",
    "name": "Rolls-Royce Ghost",
    "brand": "Rolls-Royce",
    "model": "Ghost",
    "year": 2020,
    "price": 2058398,
    "mileage": 2659,
    "engine": "Hybrid V12",
    "transmission": "9-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 1190,
    "acceleration": "4.5s",
    "topSpeed": "192 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Reserved",
    "features": [
      "Adaptive Suspension",
      "Active Aero",
      "Panoramic Roof",
      "Soft-close Doors"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Ghost offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-447",
    "name": "Rolls-Royce Phantom",
    "brand": "Rolls-Royce",
    "model": "Phantom",
    "year": 2024,
    "price": 725049,
    "mileage": 13603,
    "engine": "W16 Quad-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 742,
    "acceleration": "3.8s",
    "topSpeed": "238 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Carbon Fiber Trim",
      "Active Aero",
      "Premium Audio System"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Phantom offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-448",
    "name": "Aston Martin Valhalla",
    "brand": "Aston Martin",
    "model": "Valhalla",
    "year": 2022,
    "price": 2089216,
    "mileage": 4443,
    "engine": "W16 Quad-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 791,
    "acceleration": "2.2s",
    "topSpeed": "152 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Massage Seats",
      "Ceramic Brakes",
      "Night Vision",
      "Heads-up Display"
    ],
    "description": "A stunning example of Aston Martin engineering. This Valhalla offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-449",
    "name": "Mercedes-Benz S-Class Maybach",
    "brand": "Mercedes-Benz",
    "model": "S-Class Maybach",
    "year": 2020,
    "price": 1938015,
    "mileage": 6810,
    "engine": "Flat-6 Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 598,
    "acceleration": "3.1s",
    "topSpeed": "189 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Panoramic Roof",
      "Soft-close Doors",
      "Heads-up Display"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This S-Class Maybach offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-450",
    "name": "Lamborghini Urus",
    "brand": "Lamborghini",
    "model": "Urus",
    "year": 2020,
    "price": 1784229,
    "mileage": 6272,
    "engine": "Electric Dual-Motor",
    "transmission": "9-Speed Automatic",
    "fuelType": "Electric",
    "hp": 662,
    "acceleration": "3.4s",
    "topSpeed": "174 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Active Aero",
      "Adaptive Suspension",
      "Ceramic Brakes",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of Lamborghini engineering. This Urus offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-451",
    "name": "McLaren 765LT",
    "brand": "McLaren",
    "model": "765LT",
    "year": 2022,
    "price": 450947,
    "mileage": 1208,
    "engine": "V12 Twin-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 1107,
    "acceleration": "3.0s",
    "topSpeed": "208 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Carbon Fiber Trim",
      "Starlight Headliner",
      "Massage Seats"
    ],
    "description": "A stunning example of McLaren engineering. This 765LT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-452",
    "name": "Bugatti Divo",
    "brand": "Bugatti",
    "model": "Divo",
    "year": 2023,
    "price": 2095482,
    "mileage": 4842,
    "engine": "V8 Biturbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 560,
    "acceleration": "4.9s",
    "topSpeed": "209 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Night Vision",
      "Massage Seats",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of Bugatti engineering. This Divo offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-453",
    "name": "Aston Martin Vantage",
    "brand": "Aston Martin",
    "model": "Vantage",
    "year": 2021,
    "price": 1626491,
    "mileage": 1010,
    "engine": "Flat-6 Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 980,
    "acceleration": "3.2s",
    "topSpeed": "178 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Adaptive Suspension",
      "Premium Audio System",
      "Night Vision",
      "Active Aero"
    ],
    "description": "A stunning example of Aston Martin engineering. This Vantage offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-454",
    "name": "Aston Martin Valhalla",
    "brand": "Aston Martin",
    "model": "Valhalla",
    "year": 2022,
    "price": 755645,
    "mileage": 3916,
    "engine": "V10 Natural",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 791,
    "acceleration": "4.7s",
    "topSpeed": "152 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Soft-close Doors",
      "Active Aero",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Aston Martin engineering. This Valhalla offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-455",
    "name": "Aston Martin DB11",
    "brand": "Aston Martin",
    "model": "DB11",
    "year": 2023,
    "price": 1259608,
    "mileage": 13471,
    "engine": "Hybrid V12",
    "transmission": "9-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 920,
    "acceleration": "2.8s",
    "topSpeed": "155 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Carbon Fiber Trim",
      "Premium Audio System",
      "Starlight Headliner",
      "Soft-close Doors"
    ],
    "description": "A stunning example of Aston Martin engineering. This DB11 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-456",
    "name": "BMW M8 Competition",
    "brand": "BMW",
    "model": "M8 Competition",
    "year": 2024,
    "price": 1806852,
    "mileage": 1283,
    "engine": "V8 Biturbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 502,
    "acceleration": "3.9s",
    "topSpeed": "198 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Adaptive Suspension",
      "Soft-close Doors",
      "Massage Seats",
      "Active Aero"
    ],
    "description": "A stunning example of BMW engineering. This M8 Competition offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-457",
    "name": "Porsche Taycan",
    "brand": "Porsche",
    "model": "Taycan",
    "year": 2024,
    "price": 798788,
    "mileage": 3565,
    "engine": "Hybrid V12",
    "transmission": "8-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 681,
    "acceleration": "3.5s",
    "topSpeed": "208 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Adaptive Suspension",
      "Soft-close Doors",
      "Active Aero",
      "Night Vision"
    ],
    "description": "A stunning example of Porsche engineering. This Taycan offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-458",
    "name": "Aston Martin DB11",
    "brand": "Aston Martin",
    "model": "DB11",
    "year": 2023,
    "price": 1059074,
    "mileage": 12300,
    "engine": "Flat-6 Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 928,
    "acceleration": "3.3s",
    "topSpeed": "199 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Starlight Headliner",
      "Premium Audio System",
      "Night Vision"
    ],
    "description": "A stunning example of Aston Martin engineering. This DB11 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-459",
    "name": "Bugatti Veyron",
    "brand": "Bugatti",
    "model": "Veyron",
    "year": 2023,
    "price": 1756039,
    "mileage": 14052,
    "engine": "V10 Natural",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1042,
    "acceleration": "3.1s",
    "topSpeed": "153 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Reserved",
    "features": [
      "Panoramic Roof",
      "Bespoke Leather Interior",
      "Heads-up Display",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of Bugatti engineering. This Veyron offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-460",
    "name": "BMW M4 CSL",
    "brand": "BMW",
    "model": "M4 CSL",
    "year": 2022,
    "price": 729039,
    "mileage": 963,
    "engine": "V10 Natural",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 1161,
    "acceleration": "3.7s",
    "topSpeed": "249 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Ceramic Brakes",
      "Panoramic Roof",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of BMW engineering. This M4 CSL offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-461",
    "name": "Ferrari SF90 Stradale",
    "brand": "Ferrari",
    "model": "SF90 Stradale",
    "year": 2021,
    "price": 1348803,
    "mileage": 10453,
    "engine": "Electric Dual-Motor",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Electric",
    "hp": 987,
    "acceleration": "4.1s",
    "topSpeed": "223 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Night Vision",
      "Ceramic Brakes",
      "Massage Seats"
    ],
    "description": "A stunning example of Ferrari engineering. This SF90 Stradale offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-462",
    "name": "Bugatti Chiron",
    "brand": "Bugatti",
    "model": "Chiron",
    "year": 2023,
    "price": 962411,
    "mileage": 6892,
    "engine": "V8 Biturbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 816,
    "acceleration": "4.2s",
    "topSpeed": "159 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Starlight Headliner",
      "Bespoke Leather Interior",
      "Massage Seats"
    ],
    "description": "A stunning example of Bugatti engineering. This Chiron offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-463",
    "name": "Bugatti Mistral",
    "brand": "Bugatti",
    "model": "Mistral",
    "year": 2023,
    "price": 321403,
    "mileage": 3368,
    "engine": "W16 Quad-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 714,
    "acceleration": "3.2s",
    "topSpeed": "191 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Massage Seats",
      "Active Aero",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Bugatti engineering. This Mistral offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-464",
    "name": "Bentley Flying Spur",
    "brand": "Bentley",
    "model": "Flying Spur",
    "year": 2020,
    "price": 754667,
    "mileage": 2998,
    "engine": "V10 Natural",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 1035,
    "acceleration": "2.7s",
    "topSpeed": "181 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Reserved",
    "features": [
      "Ceramic Brakes",
      "Bespoke Leather Interior",
      "Premium Audio System",
      "Active Aero"
    ],
    "description": "A stunning example of Bentley engineering. This Flying Spur offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-465",
    "name": "Lamborghini Revuelto",
    "brand": "Lamborghini",
    "model": "Revuelto",
    "year": 2020,
    "price": 831553,
    "mileage": 14001,
    "engine": "V8 Biturbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 813,
    "acceleration": "3.6s",
    "topSpeed": "201 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Night Vision",
      "Panoramic Roof",
      "Premium Audio System"
    ],
    "description": "A stunning example of Lamborghini engineering. This Revuelto offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-466",
    "name": "Bugatti Chiron",
    "brand": "Bugatti",
    "model": "Chiron",
    "year": 2020,
    "price": 184626,
    "mileage": 2546,
    "engine": "Electric Dual-Motor",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Electric",
    "hp": 797,
    "acceleration": "2.4s",
    "topSpeed": "186 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Premium Audio System",
      "Heads-up Display",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Bugatti engineering. This Chiron offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-467",
    "name": "Range Rover Sport SVR",
    "brand": "Range Rover",
    "model": "Sport SVR",
    "year": 2024,
    "price": 1591707,
    "mileage": 4664,
    "engine": "V12 Twin-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 1115,
    "acceleration": "4.1s",
    "topSpeed": "178 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Ceramic Brakes",
      "Night Vision",
      "Starlight Headliner"
    ],
    "description": "A stunning example of Range Rover engineering. This Sport SVR offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-468",
    "name": "Ferrari Purosangue",
    "brand": "Ferrari",
    "model": "Purosangue",
    "year": 2020,
    "price": 188956,
    "mileage": 7242,
    "engine": "V8 Biturbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 1182,
    "acceleration": "2.7s",
    "topSpeed": "244 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Night Vision",
      "Premium Audio System",
      "Soft-close Doors",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Ferrari engineering. This Purosangue offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-469",
    "name": "Bentley Bentayga",
    "brand": "Bentley",
    "model": "Bentayga",
    "year": 2024,
    "price": 1802153,
    "mileage": 14092,
    "engine": "W16 Quad-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 876,
    "acceleration": "3.2s",
    "topSpeed": "215 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Reserved",
    "features": [
      "Night Vision",
      "Ceramic Brakes",
      "Heads-up Display",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of Bentley engineering. This Bentayga offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-470",
    "name": "Mercedes-Benz GT Black Series",
    "brand": "Mercedes-Benz",
    "model": "GT Black Series",
    "year": 2020,
    "price": 1838441,
    "mileage": 9640,
    "engine": "Hybrid V12",
    "transmission": "9-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 1082,
    "acceleration": "2.8s",
    "topSpeed": "190 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Reserved",
    "features": [
      "Premium Audio System",
      "Soft-close Doors",
      "Active Aero",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This GT Black Series offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-471",
    "name": "Lamborghini Urus",
    "brand": "Lamborghini",
    "model": "Urus",
    "year": 2024,
    "price": 1462342,
    "mileage": 4922,
    "engine": "V12 Twin-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 902,
    "acceleration": "2.2s",
    "topSpeed": "181 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Active Aero",
      "Carbon Fiber Trim",
      "Adaptive Suspension",
      "Soft-close Doors"
    ],
    "description": "A stunning example of Lamborghini engineering. This Urus offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-472",
    "name": "Mercedes-Benz S-Class Maybach",
    "brand": "Mercedes-Benz",
    "model": "S-Class Maybach",
    "year": 2020,
    "price": 1355120,
    "mileage": 8042,
    "engine": "V10 Natural",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 443,
    "acceleration": "2.5s",
    "topSpeed": "217 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Panoramic Roof",
      "Premium Audio System",
      "Ceramic Brakes",
      "Night Vision"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This S-Class Maybach offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-473",
    "name": "Range Rover Autobiography",
    "brand": "Range Rover",
    "model": "Autobiography",
    "year": 2021,
    "price": 1972263,
    "mileage": 8666,
    "engine": "Electric Dual-Motor",
    "transmission": "9-Speed Automatic",
    "fuelType": "Electric",
    "hp": 423,
    "acceleration": "3.6s",
    "topSpeed": "211 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Soft-close Doors",
      "Massage Seats",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Range Rover engineering. This Autobiography offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-474",
    "name": "Bugatti Veyron",
    "brand": "Bugatti",
    "model": "Veyron",
    "year": 2020,
    "price": 1600937,
    "mileage": 3932,
    "engine": "V12 Twin-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 1047,
    "acceleration": "3.1s",
    "topSpeed": "193 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Bespoke Leather Interior",
      "Ceramic Brakes",
      "Massage Seats",
      "Soft-close Doors"
    ],
    "description": "A stunning example of Bugatti engineering. This Veyron offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-475",
    "name": "Lamborghini Sian",
    "brand": "Lamborghini",
    "model": "Sian",
    "year": 2022,
    "price": 1993545,
    "mileage": 6351,
    "engine": "V8 Biturbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 428,
    "acceleration": "3.7s",
    "topSpeed": "223 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Reserved",
    "features": [
      "Night Vision",
      "Adaptive Suspension",
      "Premium Audio System",
      "Starlight Headliner"
    ],
    "description": "A stunning example of Lamborghini engineering. This Sian offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-476",
    "name": "BMW i7 M70",
    "brand": "BMW",
    "model": "i7 M70",
    "year": 2023,
    "price": 2037262,
    "mileage": 10948,
    "engine": "Electric Dual-Motor",
    "transmission": "8-Speed Automatic",
    "fuelType": "Electric",
    "hp": 1155,
    "acceleration": "4.2s",
    "topSpeed": "209 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Active Aero",
      "Bespoke Leather Interior",
      "Soft-close Doors"
    ],
    "description": "A stunning example of BMW engineering. This i7 M70 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-477",
    "name": "Bugatti Mistral",
    "brand": "Bugatti",
    "model": "Mistral",
    "year": 2021,
    "price": 604977,
    "mileage": 3029,
    "engine": "Hybrid V12",
    "transmission": "9-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 993,
    "acceleration": "4.5s",
    "topSpeed": "183 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Massage Seats",
      "Ceramic Brakes",
      "Soft-close Doors",
      "Active Aero"
    ],
    "description": "A stunning example of Bugatti engineering. This Mistral offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-478",
    "name": "Lamborghini Aventador",
    "brand": "Lamborghini",
    "model": "Aventador",
    "year": 2021,
    "price": 480790,
    "mileage": 6459,
    "engine": "Electric Dual-Motor",
    "transmission": "8-Speed Automatic",
    "fuelType": "Electric",
    "hp": 823,
    "acceleration": "4.5s",
    "topSpeed": "216 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Ceramic Brakes",
      "Bespoke Leather Interior",
      "Soft-close Doors"
    ],
    "description": "A stunning example of Lamborghini engineering. This Aventador offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-479",
    "name": "Bentley Flying Spur",
    "brand": "Bentley",
    "model": "Flying Spur",
    "year": 2022,
    "price": 1565672,
    "mileage": 1970,
    "engine": "Electric Dual-Motor",
    "transmission": "Single-Speed Electric",
    "fuelType": "Electric",
    "hp": 967,
    "acceleration": "3.0s",
    "topSpeed": "211 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Carbon Fiber Trim",
      "Heads-up Display",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Bentley engineering. This Flying Spur offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-480",
    "name": "Aston Martin DBX",
    "brand": "Aston Martin",
    "model": "DBX",
    "year": 2020,
    "price": 1917629,
    "mileage": 3793,
    "engine": "Electric Dual-Motor",
    "transmission": "9-Speed Automatic",
    "fuelType": "Electric",
    "hp": 672,
    "acceleration": "2.3s",
    "topSpeed": "185 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Soft-close Doors",
      "Active Aero",
      "Starlight Headliner"
    ],
    "description": "A stunning example of Aston Martin engineering. This DBX offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-481",
    "name": "Rolls-Royce Ghost",
    "brand": "Rolls-Royce",
    "model": "Ghost",
    "year": 2020,
    "price": 227623,
    "mileage": 8676,
    "engine": "Hybrid V12",
    "transmission": "8-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 554,
    "acceleration": "3.0s",
    "topSpeed": "163 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Heads-up Display",
      "Panoramic Roof",
      "Soft-close Doors"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Ghost offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-482",
    "name": "Ferrari Purosangue",
    "brand": "Ferrari",
    "model": "Purosangue",
    "year": 2020,
    "price": 874220,
    "mileage": 1515,
    "engine": "W16 Quad-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 808,
    "acceleration": "4.0s",
    "topSpeed": "242 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Ceramic Brakes",
      "Panoramic Roof",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of Ferrari engineering. This Purosangue offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-483",
    "name": "BMW i7 M70",
    "brand": "BMW",
    "model": "i7 M70",
    "year": 2023,
    "price": 903699,
    "mileage": 8920,
    "engine": "V10 Natural",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 659,
    "acceleration": "2.8s",
    "topSpeed": "187 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Bespoke Leather Interior",
      "Adaptive Suspension",
      "Massage Seats",
      "Starlight Headliner"
    ],
    "description": "A stunning example of BMW engineering. This i7 M70 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-484",
    "name": "Mercedes-Benz GT Black Series",
    "brand": "Mercedes-Benz",
    "model": "GT Black Series",
    "year": 2024,
    "price": 236669,
    "mileage": 13623,
    "engine": "V10 Natural",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 525,
    "acceleration": "2.7s",
    "topSpeed": "228 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Massage Seats",
      "Bespoke Leather Interior",
      "Heads-up Display"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This GT Black Series offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-485",
    "name": "Bugatti Mistral",
    "brand": "Bugatti",
    "model": "Mistral",
    "year": 2020,
    "price": 1216651,
    "mileage": 12683,
    "engine": "V10 Natural",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 771,
    "acceleration": "3.8s",
    "topSpeed": "225 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Starlight Headliner",
      "Massage Seats",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of Bugatti engineering. This Mistral offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-486",
    "name": "Bugatti Veyron",
    "brand": "Bugatti",
    "model": "Veyron",
    "year": 2020,
    "price": 164386,
    "mileage": 4785,
    "engine": "Flat-6 Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 1124,
    "acceleration": "2.9s",
    "topSpeed": "159 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Night Vision",
      "Starlight Headliner",
      "Soft-close Doors",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Bugatti engineering. This Veyron offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-487",
    "name": "Bugatti Divo",
    "brand": "Bugatti",
    "model": "Divo",
    "year": 2021,
    "price": 587442,
    "mileage": 11241,
    "engine": "Electric Dual-Motor",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Electric",
    "hp": 609,
    "acceleration": "4.0s",
    "topSpeed": "220 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Bespoke Leather Interior",
      "Panoramic Roof",
      "Soft-close Doors"
    ],
    "description": "A stunning example of Bugatti engineering. This Divo offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-488",
    "name": "Bentley Flying Spur",
    "brand": "Bentley",
    "model": "Flying Spur",
    "year": 2021,
    "price": 185780,
    "mileage": 3487,
    "engine": "W16 Quad-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 692,
    "acceleration": "2.6s",
    "topSpeed": "212 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Reserved",
    "features": [
      "Carbon Fiber Trim",
      "Massage Seats",
      "Night Vision",
      "Active Aero"
    ],
    "description": "A stunning example of Bentley engineering. This Flying Spur offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-489",
    "name": "Ferrari F8 Tributo",
    "brand": "Ferrari",
    "model": "F8 Tributo",
    "year": 2020,
    "price": 1031194,
    "mileage": 889,
    "engine": "V12 Twin-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 855,
    "acceleration": "3.7s",
    "topSpeed": "151 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Night Vision",
      "Starlight Headliner",
      "Carbon Fiber Trim",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Ferrari engineering. This F8 Tributo offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-490",
    "name": "BMW X7 M60i",
    "brand": "BMW",
    "model": "X7 M60i",
    "year": 2024,
    "price": 1371327,
    "mileage": 5007,
    "engine": "V8 Biturbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 691,
    "acceleration": "4.0s",
    "topSpeed": "152 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Starlight Headliner",
      "Panoramic Roof",
      "Ceramic Brakes",
      "Soft-close Doors"
    ],
    "description": "A stunning example of BMW engineering. This X7 M60i offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-491",
    "name": "BMW X7 M60i",
    "brand": "BMW",
    "model": "X7 M60i",
    "year": 2020,
    "price": 1609759,
    "mileage": 48,
    "engine": "V12 Twin-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 1172,
    "acceleration": "3.1s",
    "topSpeed": "165 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Bespoke Leather Interior",
      "Heads-up Display",
      "Active Aero",
      "Massage Seats"
    ],
    "description": "A stunning example of BMW engineering. This X7 M60i offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-492",
    "name": "Ferrari SF90 Stradale",
    "brand": "Ferrari",
    "model": "SF90 Stradale",
    "year": 2024,
    "price": 651931,
    "mileage": 1071,
    "engine": "V12 Twin-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 1135,
    "acceleration": "4.0s",
    "topSpeed": "158 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Adaptive Suspension",
      "Starlight Headliner",
      "Active Aero"
    ],
    "description": "A stunning example of Ferrari engineering. This SF90 Stradale offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-493",
    "name": "Rolls-Royce Spectre",
    "brand": "Rolls-Royce",
    "model": "Spectre",
    "year": 2021,
    "price": 1926582,
    "mileage": 14906,
    "engine": "W16 Quad-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1034,
    "acceleration": "2.8s",
    "topSpeed": "231 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Panoramic Roof",
      "Bespoke Leather Interior",
      "Premium Audio System"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Spectre offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-494",
    "name": "Mercedes-Benz G 63 AMG",
    "brand": "Mercedes-Benz",
    "model": "G 63 AMG",
    "year": 2021,
    "price": 1874982,
    "mileage": 2876,
    "engine": "V10 Natural",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 976,
    "acceleration": "4.0s",
    "topSpeed": "216 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Ceramic Brakes",
      "Active Aero",
      "Night Vision"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This G 63 AMG offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-495",
    "name": "BMW i7 M70",
    "brand": "BMW",
    "model": "i7 M70",
    "year": 2022,
    "price": 1220120,
    "mileage": 8387,
    "engine": "V10 Natural",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 647,
    "acceleration": "3.9s",
    "topSpeed": "166 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Active Aero",
      "Carbon Fiber Trim",
      "Panoramic Roof",
      "Massage Seats"
    ],
    "description": "A stunning example of BMW engineering. This i7 M70 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-496",
    "name": "Bentley Bentayga",
    "brand": "Bentley",
    "model": "Bentayga",
    "year": 2023,
    "price": 2092172,
    "mileage": 213,
    "engine": "Flat-6 Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 577,
    "acceleration": "2.3s",
    "topSpeed": "228 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Adaptive Suspension",
      "Ceramic Brakes",
      "Heads-up Display"
    ],
    "description": "A stunning example of Bentley engineering. This Bentayga offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-497",
    "name": "Range Rover Velar",
    "brand": "Range Rover",
    "model": "Velar",
    "year": 2020,
    "price": 1181766,
    "mileage": 2452,
    "engine": "V8 Biturbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 452,
    "acceleration": "3.2s",
    "topSpeed": "247 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Adaptive Suspension",
      "Massage Seats",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Range Rover engineering. This Velar offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-498",
    "name": "Ferrari 296 GTB",
    "brand": "Ferrari",
    "model": "296 GTB",
    "year": 2023,
    "price": 565954,
    "mileage": 934,
    "engine": "V12 Twin-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 674,
    "acceleration": "5.0s",
    "topSpeed": "155 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Night Vision",
      "Massage Seats",
      "Heads-up Display",
      "Soft-close Doors"
    ],
    "description": "A stunning example of Ferrari engineering. This 296 GTB offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-499",
    "name": "BMW M4 CSL",
    "brand": "BMW",
    "model": "M4 CSL",
    "year": 2023,
    "price": 709680,
    "mileage": 2821,
    "engine": "Electric Dual-Motor",
    "transmission": "Single-Speed Electric",
    "fuelType": "Electric",
    "hp": 751,
    "acceleration": "2.2s",
    "topSpeed": "248 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Bespoke Leather Interior",
      "Carbon Fiber Trim",
      "Massage Seats",
      "Heads-up Display"
    ],
    "description": "A stunning example of BMW engineering. This M4 CSL offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-500",
    "name": "Lamborghini Revuelto",
    "brand": "Lamborghini",
    "model": "Revuelto",
    "year": 2023,
    "price": 1384788,
    "mileage": 5399,
    "engine": "Hybrid V12",
    "transmission": "Single-Speed Electric",
    "fuelType": "Hybrid",
    "hp": 727,
    "acceleration": "3.2s",
    "topSpeed": "236 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Reserved",
    "features": [
      "Premium Audio System",
      "Heads-up Display",
      "Active Aero",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Lamborghini engineering. This Revuelto offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-501",
    "name": "Bentley Bentayga",
    "brand": "Bentley",
    "model": "Bentayga",
    "year": 2024,
    "price": 1536128,
    "mileage": 12516,
    "engine": "W16 Quad-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 870,
    "acceleration": "3.0s",
    "topSpeed": "209 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Massage Seats",
      "Carbon Fiber Trim",
      "Soft-close Doors"
    ],
    "description": "A stunning example of Bentley engineering. This Bentayga offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-502",
    "name": "Mercedes-Benz EQS 580",
    "brand": "Mercedes-Benz",
    "model": "EQS 580",
    "year": 2021,
    "price": 2022976,
    "mileage": 4730,
    "engine": "V8 Biturbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 620,
    "acceleration": "3.4s",
    "topSpeed": "174 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Reserved",
    "features": [
      "Heads-up Display",
      "Adaptive Suspension",
      "Active Aero",
      "Starlight Headliner"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This EQS 580 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-503",
    "name": "Rolls-Royce Cullinan",
    "brand": "Rolls-Royce",
    "model": "Cullinan",
    "year": 2022,
    "price": 137741,
    "mileage": 6242,
    "engine": "V8 Biturbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 983,
    "acceleration": "4.8s",
    "topSpeed": "195 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Massage Seats",
      "Active Aero",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Cullinan offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-504",
    "name": "Bugatti Veyron",
    "brand": "Bugatti",
    "model": "Veyron",
    "year": 2023,
    "price": 1188912,
    "mileage": 6270,
    "engine": "V10 Natural",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 425,
    "acceleration": "4.9s",
    "topSpeed": "221 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Massage Seats",
      "Premium Audio System",
      "Active Aero"
    ],
    "description": "A stunning example of Bugatti engineering. This Veyron offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-505",
    "name": "Bentley Bentayga",
    "brand": "Bentley",
    "model": "Bentayga",
    "year": 2024,
    "price": 738442,
    "mileage": 6591,
    "engine": "V10 Natural",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 727,
    "acceleration": "3.1s",
    "topSpeed": "174 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Soft-close Doors",
      "Massage Seats",
      "Bespoke Leather Interior",
      "Starlight Headliner"
    ],
    "description": "A stunning example of Bentley engineering. This Bentayga offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-506",
    "name": "Bugatti Mistral",
    "brand": "Bugatti",
    "model": "Mistral",
    "year": 2023,
    "price": 817311,
    "mileage": 3916,
    "engine": "Electric Dual-Motor",
    "transmission": "Single-Speed Electric",
    "fuelType": "Electric",
    "hp": 813,
    "acceleration": "2.9s",
    "topSpeed": "218 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Carbon Fiber Trim",
      "Night Vision",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Bugatti engineering. This Mistral offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-507",
    "name": "Rolls-Royce Dawn",
    "brand": "Rolls-Royce",
    "model": "Dawn",
    "year": 2023,
    "price": 962921,
    "mileage": 10152,
    "engine": "Hybrid V12",
    "transmission": "Single-Speed Electric",
    "fuelType": "Hybrid",
    "hp": 666,
    "acceleration": "3.8s",
    "topSpeed": "173 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Premium Audio System",
      "Ceramic Brakes",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Dawn offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-508",
    "name": "McLaren 720S",
    "brand": "McLaren",
    "model": "720S",
    "year": 2023,
    "price": 1918880,
    "mileage": 2427,
    "engine": "Electric Dual-Motor",
    "transmission": "9-Speed Automatic",
    "fuelType": "Electric",
    "hp": 700,
    "acceleration": "2.3s",
    "topSpeed": "167 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Active Aero",
      "Massage Seats",
      "Adaptive Suspension",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of McLaren engineering. This 720S offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-509",
    "name": "Rolls-Royce Ghost",
    "brand": "Rolls-Royce",
    "model": "Ghost",
    "year": 2024,
    "price": 386238,
    "mileage": 4439,
    "engine": "Electric Dual-Motor",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Electric",
    "hp": 559,
    "acceleration": "2.6s",
    "topSpeed": "244 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Reserved",
    "features": [
      "Starlight Headliner",
      "Massage Seats",
      "Bespoke Leather Interior",
      "Soft-close Doors"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Ghost offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-510",
    "name": "BMW M8 Competition",
    "brand": "BMW",
    "model": "M8 Competition",
    "year": 2020,
    "price": 810713,
    "mileage": 6289,
    "engine": "Flat-6 Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 709,
    "acceleration": "2.3s",
    "topSpeed": "204 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Soft-close Doors",
      "Heads-up Display",
      "Bespoke Leather Interior",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of BMW engineering. This M8 Competition offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-511",
    "name": "McLaren 720S",
    "brand": "McLaren",
    "model": "720S",
    "year": 2022,
    "price": 614108,
    "mileage": 701,
    "engine": "V12 Twin-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 737,
    "acceleration": "3.8s",
    "topSpeed": "178 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Heads-up Display",
      "Soft-close Doors",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of McLaren engineering. This 720S offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-512",
    "name": "BMW M8 Competition",
    "brand": "BMW",
    "model": "M8 Competition",
    "year": 2023,
    "price": 594033,
    "mileage": 14827,
    "engine": "W16 Quad-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 716,
    "acceleration": "3.7s",
    "topSpeed": "188 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Soft-close Doors",
      "Night Vision",
      "Premium Audio System",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of BMW engineering. This M8 Competition offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-513",
    "name": "Rolls-Royce Cullinan",
    "brand": "Rolls-Royce",
    "model": "Cullinan",
    "year": 2020,
    "price": 1863739,
    "mileage": 14148,
    "engine": "V10 Natural",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 595,
    "acceleration": "3.1s",
    "topSpeed": "207 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Heads-up Display",
      "Massage Seats",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Cullinan offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-514",
    "name": "Lamborghini Urus",
    "brand": "Lamborghini",
    "model": "Urus",
    "year": 2020,
    "price": 340849,
    "mileage": 13969,
    "engine": "V8 Biturbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1153,
    "acceleration": "3.9s",
    "topSpeed": "208 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Ceramic Brakes",
      "Heads-up Display",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Lamborghini engineering. This Urus offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-515",
    "name": "McLaren P1",
    "brand": "McLaren",
    "model": "P1",
    "year": 2023,
    "price": 377296,
    "mileage": 14942,
    "engine": "V12 Twin-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 717,
    "acceleration": "4.2s",
    "topSpeed": "192 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Massage Seats",
      "Night Vision",
      "Heads-up Display",
      "Starlight Headliner"
    ],
    "description": "A stunning example of McLaren engineering. This P1 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-516",
    "name": "Ferrari 296 GTB",
    "brand": "Ferrari",
    "model": "296 GTB",
    "year": 2023,
    "price": 1318017,
    "mileage": 8073,
    "engine": "V12 Twin-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 574,
    "acceleration": "3.8s",
    "topSpeed": "187 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Night Vision",
      "Starlight Headliner",
      "Heads-up Display",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Ferrari engineering. This 296 GTB offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-517",
    "name": "Ferrari Purosangue",
    "brand": "Ferrari",
    "model": "Purosangue",
    "year": 2024,
    "price": 1507117,
    "mileage": 8892,
    "engine": "V12 Twin-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 967,
    "acceleration": "2.9s",
    "topSpeed": "165 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Bespoke Leather Interior",
      "Premium Audio System",
      "Soft-close Doors",
      "Heads-up Display"
    ],
    "description": "A stunning example of Ferrari engineering. This Purosangue offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-518",
    "name": "Range Rover Velar",
    "brand": "Range Rover",
    "model": "Velar",
    "year": 2021,
    "price": 179414,
    "mileage": 9128,
    "engine": "Electric Dual-Motor",
    "transmission": "Single-Speed Electric",
    "fuelType": "Electric",
    "hp": 971,
    "acceleration": "4.0s",
    "topSpeed": "199 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Premium Audio System",
      "Active Aero",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Range Rover engineering. This Velar offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-519",
    "name": "Ferrari 296 GTB",
    "brand": "Ferrari",
    "model": "296 GTB",
    "year": 2022,
    "price": 2087597,
    "mileage": 3939,
    "engine": "V8 Biturbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 995,
    "acceleration": "3.0s",
    "topSpeed": "224 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Panoramic Roof",
      "Massage Seats",
      "Soft-close Doors"
    ],
    "description": "A stunning example of Ferrari engineering. This 296 GTB offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-520",
    "name": "Bentley Continental GT",
    "brand": "Bentley",
    "model": "Continental GT",
    "year": 2022,
    "price": 526667,
    "mileage": 11315,
    "engine": "Hybrid V12",
    "transmission": "9-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 692,
    "acceleration": "4.3s",
    "topSpeed": "161 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Ceramic Brakes",
      "Premium Audio System",
      "Active Aero"
    ],
    "description": "A stunning example of Bentley engineering. This Continental GT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-521",
    "name": "Range Rover Sport SVR",
    "brand": "Range Rover",
    "model": "Sport SVR",
    "year": 2022,
    "price": 1142206,
    "mileage": 7478,
    "engine": "Electric Dual-Motor",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Electric",
    "hp": 452,
    "acceleration": "3.1s",
    "topSpeed": "164 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Bespoke Leather Interior",
      "Premium Audio System",
      "Ceramic Brakes",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of Range Rover engineering. This Sport SVR offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-522",
    "name": "Porsche Panamera",
    "brand": "Porsche",
    "model": "Panamera",
    "year": 2021,
    "price": 1033402,
    "mileage": 14444,
    "engine": "Hybrid V12",
    "transmission": "8-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 1059,
    "acceleration": "4.8s",
    "topSpeed": "195 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Soft-close Doors",
      "Massage Seats",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of Porsche engineering. This Panamera offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-523",
    "name": "Aston Martin DBS",
    "brand": "Aston Martin",
    "model": "DBS",
    "year": 2021,
    "price": 1703422,
    "mileage": 1120,
    "engine": "Hybrid V12",
    "transmission": "9-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 563,
    "acceleration": "2.9s",
    "topSpeed": "217 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Ceramic Brakes",
      "Panoramic Roof",
      "Active Aero"
    ],
    "description": "A stunning example of Aston Martin engineering. This DBS offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-524",
    "name": "BMW M4 CSL",
    "brand": "BMW",
    "model": "M4 CSL",
    "year": 2021,
    "price": 303995,
    "mileage": 957,
    "engine": "Electric Dual-Motor",
    "transmission": "Single-Speed Electric",
    "fuelType": "Electric",
    "hp": 646,
    "acceleration": "4.7s",
    "topSpeed": "175 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Massage Seats",
      "Active Aero",
      "Night Vision"
    ],
    "description": "A stunning example of BMW engineering. This M4 CSL offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-525",
    "name": "Bugatti Mistral",
    "brand": "Bugatti",
    "model": "Mistral",
    "year": 2022,
    "price": 163886,
    "mileage": 1811,
    "engine": "Hybrid V12",
    "transmission": "Single-Speed Electric",
    "fuelType": "Hybrid",
    "hp": 1086,
    "acceleration": "4.2s",
    "topSpeed": "197 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Reserved",
    "features": [
      "Night Vision",
      "Ceramic Brakes",
      "Adaptive Suspension",
      "Active Aero"
    ],
    "description": "A stunning example of Bugatti engineering. This Mistral offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-526",
    "name": "Aston Martin Vantage",
    "brand": "Aston Martin",
    "model": "Vantage",
    "year": 2022,
    "price": 550457,
    "mileage": 10039,
    "engine": "W16 Quad-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1016,
    "acceleration": "3.8s",
    "topSpeed": "206 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Active Aero",
      "Premium Audio System",
      "Night Vision"
    ],
    "description": "A stunning example of Aston Martin engineering. This Vantage offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-527",
    "name": "Lamborghini Sian",
    "brand": "Lamborghini",
    "model": "Sian",
    "year": 2023,
    "price": 1430370,
    "mileage": 7291,
    "engine": "W16 Quad-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 665,
    "acceleration": "2.8s",
    "topSpeed": "196 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Bespoke Leather Interior",
      "Massage Seats",
      "Heads-up Display",
      "Starlight Headliner"
    ],
    "description": "A stunning example of Lamborghini engineering. This Sian offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-528",
    "name": "Bugatti Veyron",
    "brand": "Bugatti",
    "model": "Veyron",
    "year": 2023,
    "price": 144317,
    "mileage": 14301,
    "engine": "Flat-6 Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 960,
    "acceleration": "3.6s",
    "topSpeed": "194 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Starlight Headliner",
      "Panoramic Roof",
      "Heads-up Display"
    ],
    "description": "A stunning example of Bugatti engineering. This Veyron offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-529",
    "name": "Porsche Taycan",
    "brand": "Porsche",
    "model": "Taycan",
    "year": 2020,
    "price": 1574590,
    "mileage": 13160,
    "engine": "Flat-6 Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 596,
    "acceleration": "2.7s",
    "topSpeed": "216 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Heads-up Display",
      "Carbon Fiber Trim",
      "Massage Seats"
    ],
    "description": "A stunning example of Porsche engineering. This Taycan offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-530",
    "name": "BMW X7 M60i",
    "brand": "BMW",
    "model": "X7 M60i",
    "year": 2020,
    "price": 864168,
    "mileage": 13643,
    "engine": "Hybrid V12",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Hybrid",
    "hp": 1014,
    "acceleration": "4.1s",
    "topSpeed": "222 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Starlight Headliner",
      "Soft-close Doors",
      "Massage Seats"
    ],
    "description": "A stunning example of BMW engineering. This X7 M60i offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-531",
    "name": "Ferrari F8 Tributo",
    "brand": "Ferrari",
    "model": "F8 Tributo",
    "year": 2021,
    "price": 809707,
    "mileage": 12681,
    "engine": "V8 Biturbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 412,
    "acceleration": "3.2s",
    "topSpeed": "158 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Ceramic Brakes",
      "Massage Seats",
      "Active Aero",
      "Soft-close Doors"
    ],
    "description": "A stunning example of Ferrari engineering. This F8 Tributo offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-532",
    "name": "Aston Martin DBX",
    "brand": "Aston Martin",
    "model": "DBX",
    "year": 2022,
    "price": 1310639,
    "mileage": 10630,
    "engine": "Flat-6 Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 1129,
    "acceleration": "4.8s",
    "topSpeed": "206 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Bespoke Leather Interior",
      "Ceramic Brakes",
      "Starlight Headliner",
      "Massage Seats"
    ],
    "description": "A stunning example of Aston Martin engineering. This DBX offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-533",
    "name": "Bugatti Veyron",
    "brand": "Bugatti",
    "model": "Veyron",
    "year": 2024,
    "price": 996590,
    "mileage": 10817,
    "engine": "V10 Natural",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 917,
    "acceleration": "3.0s",
    "topSpeed": "220 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Carbon Fiber Trim",
      "Panoramic Roof",
      "Heads-up Display"
    ],
    "description": "A stunning example of Bugatti engineering. This Veyron offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-534",
    "name": "BMW X7 M60i",
    "brand": "BMW",
    "model": "X7 M60i",
    "year": 2023,
    "price": 1539445,
    "mileage": 512,
    "engine": "Flat-6 Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 1009,
    "acceleration": "3.4s",
    "topSpeed": "196 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Night Vision",
      "Starlight Headliner",
      "Active Aero",
      "Panoramic Roof"
    ],
    "description": "A stunning example of BMW engineering. This X7 M60i offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-535",
    "name": "Mercedes-Benz EQS 580",
    "brand": "Mercedes-Benz",
    "model": "EQS 580",
    "year": 2020,
    "price": 1214365,
    "mileage": 11701,
    "engine": "Electric Dual-Motor",
    "transmission": "8-Speed Automatic",
    "fuelType": "Electric",
    "hp": 492,
    "acceleration": "2.8s",
    "topSpeed": "179 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Reserved",
    "features": [
      "Night Vision",
      "Carbon Fiber Trim",
      "Active Aero",
      "Heads-up Display"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This EQS 580 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-536",
    "name": "Lamborghini Revuelto",
    "brand": "Lamborghini",
    "model": "Revuelto",
    "year": 2022,
    "price": 1633624,
    "mileage": 12414,
    "engine": "Flat-6 Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 621,
    "acceleration": "2.7s",
    "topSpeed": "222 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Massage Seats",
      "Active Aero",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of Lamborghini engineering. This Revuelto offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-537",
    "name": "Lamborghini Revuelto",
    "brand": "Lamborghini",
    "model": "Revuelto",
    "year": 2021,
    "price": 949113,
    "mileage": 7777,
    "engine": "W16 Quad-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1056,
    "acceleration": "2.7s",
    "topSpeed": "214 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Panoramic Roof",
      "Adaptive Suspension",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Lamborghini engineering. This Revuelto offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-538",
    "name": "Bugatti Mistral",
    "brand": "Bugatti",
    "model": "Mistral",
    "year": 2020,
    "price": 394001,
    "mileage": 1508,
    "engine": "Hybrid V12",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Hybrid",
    "hp": 643,
    "acceleration": "4.6s",
    "topSpeed": "209 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Soft-close Doors",
      "Starlight Headliner",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Bugatti engineering. This Mistral offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-539",
    "name": "Lamborghini Aventador",
    "brand": "Lamborghini",
    "model": "Aventador",
    "year": 2021,
    "price": 1764082,
    "mileage": 11643,
    "engine": "V8 Biturbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 550,
    "acceleration": "3.5s",
    "topSpeed": "216 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Reserved",
    "features": [
      "Bespoke Leather Interior",
      "Starlight Headliner",
      "Soft-close Doors",
      "Massage Seats"
    ],
    "description": "A stunning example of Lamborghini engineering. This Aventador offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-540",
    "name": "Aston Martin Vantage",
    "brand": "Aston Martin",
    "model": "Vantage",
    "year": 2022,
    "price": 1210041,
    "mileage": 5687,
    "engine": "Flat-6 Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 461,
    "acceleration": "2.8s",
    "topSpeed": "179 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Soft-close Doors",
      "Heads-up Display",
      "Panoramic Roof",
      "Night Vision"
    ],
    "description": "A stunning example of Aston Martin engineering. This Vantage offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-541",
    "name": "McLaren 720S",
    "brand": "McLaren",
    "model": "720S",
    "year": 2023,
    "price": 1768962,
    "mileage": 4613,
    "engine": "V8 Biturbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 871,
    "acceleration": "4.5s",
    "topSpeed": "156 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Soft-close Doors",
      "Bespoke Leather Interior",
      "Carbon Fiber Trim",
      "Premium Audio System"
    ],
    "description": "A stunning example of McLaren engineering. This 720S offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-542",
    "name": "Bentley Bentayga",
    "brand": "Bentley",
    "model": "Bentayga",
    "year": 2020,
    "price": 146853,
    "mileage": 3984,
    "engine": "W16 Quad-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 912,
    "acceleration": "2.7s",
    "topSpeed": "208 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Adaptive Suspension",
      "Massage Seats",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Bentley engineering. This Bentayga offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-543",
    "name": "Rolls-Royce Phantom",
    "brand": "Rolls-Royce",
    "model": "Phantom",
    "year": 2022,
    "price": 953192,
    "mileage": 4277,
    "engine": "V12 Twin-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1196,
    "acceleration": "4.3s",
    "topSpeed": "208 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Ceramic Brakes",
      "Adaptive Suspension",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Phantom offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-544",
    "name": "Aston Martin Valhalla",
    "brand": "Aston Martin",
    "model": "Valhalla",
    "year": 2022,
    "price": 2052151,
    "mileage": 12849,
    "engine": "Hybrid V12",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Hybrid",
    "hp": 831,
    "acceleration": "3.2s",
    "topSpeed": "237 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Premium Audio System",
      "Soft-close Doors",
      "Heads-up Display"
    ],
    "description": "A stunning example of Aston Martin engineering. This Valhalla offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-545",
    "name": "Bugatti Mistral",
    "brand": "Bugatti",
    "model": "Mistral",
    "year": 2023,
    "price": 289934,
    "mileage": 10645,
    "engine": "W16 Quad-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 859,
    "acceleration": "3.9s",
    "topSpeed": "175 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Massage Seats",
      "Carbon Fiber Trim",
      "Heads-up Display"
    ],
    "description": "A stunning example of Bugatti engineering. This Mistral offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-546",
    "name": "Range Rover Sport SVR",
    "brand": "Range Rover",
    "model": "Sport SVR",
    "year": 2020,
    "price": 171425,
    "mileage": 1295,
    "engine": "Electric Dual-Motor",
    "transmission": "8-Speed Automatic",
    "fuelType": "Electric",
    "hp": 779,
    "acceleration": "2.2s",
    "topSpeed": "186 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Massage Seats",
      "Soft-close Doors",
      "Heads-up Display"
    ],
    "description": "A stunning example of Range Rover engineering. This Sport SVR offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-547",
    "name": "Bugatti Mistral",
    "brand": "Bugatti",
    "model": "Mistral",
    "year": 2020,
    "price": 1302851,
    "mileage": 5515,
    "engine": "Electric Dual-Motor",
    "transmission": "9-Speed Automatic",
    "fuelType": "Electric",
    "hp": 1083,
    "acceleration": "2.8s",
    "topSpeed": "208 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Reserved",
    "features": [
      "Massage Seats",
      "Heads-up Display",
      "Soft-close Doors",
      "Starlight Headliner"
    ],
    "description": "A stunning example of Bugatti engineering. This Mistral offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-548",
    "name": "McLaren 765LT",
    "brand": "McLaren",
    "model": "765LT",
    "year": 2023,
    "price": 1882155,
    "mileage": 10256,
    "engine": "V8 Biturbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1131,
    "acceleration": "2.7s",
    "topSpeed": "227 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Panoramic Roof",
      "Active Aero",
      "Night Vision"
    ],
    "description": "A stunning example of McLaren engineering. This 765LT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-549",
    "name": "Rolls-Royce Dawn",
    "brand": "Rolls-Royce",
    "model": "Dawn",
    "year": 2021,
    "price": 1357798,
    "mileage": 6289,
    "engine": "Hybrid V12",
    "transmission": "8-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 523,
    "acceleration": "4.4s",
    "topSpeed": "217 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Night Vision",
      "Panoramic Roof",
      "Soft-close Doors",
      "Active Aero"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Dawn offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-550",
    "name": "Bentley Continental GT",
    "brand": "Bentley",
    "model": "Continental GT",
    "year": 2023,
    "price": 744476,
    "mileage": 1983,
    "engine": "Hybrid V12",
    "transmission": "8-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 842,
    "acceleration": "4.9s",
    "topSpeed": "178 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Soft-close Doors",
      "Active Aero",
      "Night Vision"
    ],
    "description": "A stunning example of Bentley engineering. This Continental GT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-551",
    "name": "Porsche 718 Cayman GT4",
    "brand": "Porsche",
    "model": "718 Cayman GT4",
    "year": 2024,
    "price": 1848113,
    "mileage": 1585,
    "engine": "Electric Dual-Motor",
    "transmission": "Single-Speed Electric",
    "fuelType": "Electric",
    "hp": 557,
    "acceleration": "2.6s",
    "topSpeed": "156 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Massage Seats",
      "Active Aero",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of Porsche engineering. This 718 Cayman GT4 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-552",
    "name": "BMW X7 M60i",
    "brand": "BMW",
    "model": "X7 M60i",
    "year": 2022,
    "price": 1397893,
    "mileage": 2280,
    "engine": "W16 Quad-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 482,
    "acceleration": "3.1s",
    "topSpeed": "211 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Bespoke Leather Interior",
      "Heads-up Display",
      "Ceramic Brakes",
      "Night Vision"
    ],
    "description": "A stunning example of BMW engineering. This X7 M60i offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-553",
    "name": "Range Rover Autobiography",
    "brand": "Range Rover",
    "model": "Autobiography",
    "year": 2020,
    "price": 1385830,
    "mileage": 11642,
    "engine": "V10 Natural",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 408,
    "acceleration": "4.9s",
    "topSpeed": "165 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Massage Seats",
      "Active Aero",
      "Heads-up Display"
    ],
    "description": "A stunning example of Range Rover engineering. This Autobiography offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-554",
    "name": "Bugatti Chiron",
    "brand": "Bugatti",
    "model": "Chiron",
    "year": 2024,
    "price": 1191487,
    "mileage": 5331,
    "engine": "W16 Quad-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 588,
    "acceleration": "2.1s",
    "topSpeed": "205 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Night Vision",
      "Premium Audio System",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Bugatti engineering. This Chiron offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-555",
    "name": "Mercedes-Benz GT Black Series",
    "brand": "Mercedes-Benz",
    "model": "GT Black Series",
    "year": 2023,
    "price": 1948909,
    "mileage": 13066,
    "engine": "V10 Natural",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 842,
    "acceleration": "3.6s",
    "topSpeed": "230 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Heads-up Display",
      "Panoramic Roof",
      "Starlight Headliner"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This GT Black Series offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-556",
    "name": "Porsche 718 Cayman GT4",
    "brand": "Porsche",
    "model": "718 Cayman GT4",
    "year": 2022,
    "price": 949835,
    "mileage": 8011,
    "engine": "V10 Natural",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 1123,
    "acceleration": "2.9s",
    "topSpeed": "170 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Ceramic Brakes",
      "Night Vision",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Porsche engineering. This 718 Cayman GT4 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-557",
    "name": "McLaren Artura",
    "brand": "McLaren",
    "model": "Artura",
    "year": 2022,
    "price": 392687,
    "mileage": 12580,
    "engine": "Flat-6 Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 980,
    "acceleration": "2.4s",
    "topSpeed": "182 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Adaptive Suspension",
      "Panoramic Roof",
      "Starlight Headliner"
    ],
    "description": "A stunning example of McLaren engineering. This Artura offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-558",
    "name": "Mercedes-Benz G 63 AMG",
    "brand": "Mercedes-Benz",
    "model": "G 63 AMG",
    "year": 2020,
    "price": 995508,
    "mileage": 228,
    "engine": "W16 Quad-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 477,
    "acceleration": "4.3s",
    "topSpeed": "153 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Panoramic Roof",
      "Active Aero",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This G 63 AMG offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-559",
    "name": "Lamborghini Aventador",
    "brand": "Lamborghini",
    "model": "Aventador",
    "year": 2024,
    "price": 1322899,
    "mileage": 12452,
    "engine": "Hybrid V12",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Hybrid",
    "hp": 482,
    "acceleration": "5.0s",
    "topSpeed": "182 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Active Aero",
      "Adaptive Suspension",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Lamborghini engineering. This Aventador offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-560",
    "name": "Mercedes-Benz EQS 580",
    "brand": "Mercedes-Benz",
    "model": "EQS 580",
    "year": 2021,
    "price": 2029844,
    "mileage": 1793,
    "engine": "V12 Twin-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 645,
    "acceleration": "4.7s",
    "topSpeed": "240 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Bespoke Leather Interior",
      "Heads-up Display",
      "Carbon Fiber Trim",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This EQS 580 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-561",
    "name": "Bentley Mulsanne",
    "brand": "Bentley",
    "model": "Mulsanne",
    "year": 2020,
    "price": 1054257,
    "mileage": 9582,
    "engine": "V12 Twin-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 659,
    "acceleration": "2.4s",
    "topSpeed": "228 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Active Aero",
      "Bespoke Leather Interior",
      "Carbon Fiber Trim",
      "Massage Seats"
    ],
    "description": "A stunning example of Bentley engineering. This Mulsanne offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-562",
    "name": "Bentley Continental GT",
    "brand": "Bentley",
    "model": "Continental GT",
    "year": 2023,
    "price": 921840,
    "mileage": 6795,
    "engine": "Flat-6 Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1012,
    "acceleration": "4.1s",
    "topSpeed": "223 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Panoramic Roof",
      "Soft-close Doors",
      "Starlight Headliner",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Bentley engineering. This Continental GT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-563",
    "name": "Rolls-Royce Cullinan",
    "brand": "Rolls-Royce",
    "model": "Cullinan",
    "year": 2023,
    "price": 2042944,
    "mileage": 9483,
    "engine": "Hybrid V12",
    "transmission": "Single-Speed Electric",
    "fuelType": "Hybrid",
    "hp": 411,
    "acceleration": "3.1s",
    "topSpeed": "239 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Bespoke Leather Interior",
      "Adaptive Suspension",
      "Heads-up Display",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Cullinan offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-564",
    "name": "Lamborghini Aventador",
    "brand": "Lamborghini",
    "model": "Aventador",
    "year": 2024,
    "price": 1027386,
    "mileage": 2457,
    "engine": "Flat-6 Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 939,
    "acceleration": "2.1s",
    "topSpeed": "195 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Active Aero",
      "Starlight Headliner",
      "Night Vision"
    ],
    "description": "A stunning example of Lamborghini engineering. This Aventador offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-565",
    "name": "Range Rover Autobiography",
    "brand": "Range Rover",
    "model": "Autobiography",
    "year": 2021,
    "price": 341313,
    "mileage": 8537,
    "engine": "Flat-6 Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 448,
    "acceleration": "2.4s",
    "topSpeed": "173 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Premium Audio System",
      "Bespoke Leather Interior",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of Range Rover engineering. This Autobiography offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-566",
    "name": "Porsche 911 Turbo S",
    "brand": "Porsche",
    "model": "911 Turbo S",
    "year": 2023,
    "price": 1493927,
    "mileage": 6266,
    "engine": "Flat-6 Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 664,
    "acceleration": "2.4s",
    "topSpeed": "241 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Panoramic Roof",
      "Soft-close Doors",
      "Starlight Headliner"
    ],
    "description": "A stunning example of Porsche engineering. This 911 Turbo S offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-567",
    "name": "Aston Martin DBS",
    "brand": "Aston Martin",
    "model": "DBS",
    "year": 2022,
    "price": 199814,
    "mileage": 8195,
    "engine": "Flat-6 Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 1142,
    "acceleration": "3.3s",
    "topSpeed": "217 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Night Vision",
      "Ceramic Brakes",
      "Active Aero",
      "Premium Audio System"
    ],
    "description": "A stunning example of Aston Martin engineering. This DBS offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-568",
    "name": "Ferrari Purosangue",
    "brand": "Ferrari",
    "model": "Purosangue",
    "year": 2024,
    "price": 1785576,
    "mileage": 10993,
    "engine": "Hybrid V12",
    "transmission": "9-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 476,
    "acceleration": "2.1s",
    "topSpeed": "185 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Panoramic Roof",
      "Massage Seats",
      "Premium Audio System"
    ],
    "description": "A stunning example of Ferrari engineering. This Purosangue offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-569",
    "name": "Ferrari F8 Tributo",
    "brand": "Ferrari",
    "model": "F8 Tributo",
    "year": 2024,
    "price": 786970,
    "mileage": 6396,
    "engine": "V12 Twin-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 485,
    "acceleration": "2.1s",
    "topSpeed": "155 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Soft-close Doors",
      "Night Vision",
      "Ceramic Brakes",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of Ferrari engineering. This F8 Tributo offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-570",
    "name": "Range Rover SV",
    "brand": "Range Rover",
    "model": "SV",
    "year": 2021,
    "price": 811671,
    "mileage": 10820,
    "engine": "Hybrid V12",
    "transmission": "9-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 491,
    "acceleration": "2.5s",
    "topSpeed": "153 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Panoramic Roof",
      "Heads-up Display",
      "Active Aero",
      "Starlight Headliner"
    ],
    "description": "A stunning example of Range Rover engineering. This SV offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-571",
    "name": "Range Rover Autobiography",
    "brand": "Range Rover",
    "model": "Autobiography",
    "year": 2023,
    "price": 1332313,
    "mileage": 3364,
    "engine": "V8 Biturbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 507,
    "acceleration": "3.6s",
    "topSpeed": "220 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Active Aero",
      "Carbon Fiber Trim",
      "Starlight Headliner",
      "Night Vision"
    ],
    "description": "A stunning example of Range Rover engineering. This Autobiography offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-572",
    "name": "Mercedes-Benz EQS 580",
    "brand": "Mercedes-Benz",
    "model": "EQS 580",
    "year": 2021,
    "price": 967803,
    "mileage": 6927,
    "engine": "Electric Dual-Motor",
    "transmission": "8-Speed Automatic",
    "fuelType": "Electric",
    "hp": 620,
    "acceleration": "4.5s",
    "topSpeed": "239 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Carbon Fiber Trim",
      "Heads-up Display",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This EQS 580 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-573",
    "name": "Bentley Flying Spur",
    "brand": "Bentley",
    "model": "Flying Spur",
    "year": 2020,
    "price": 433238,
    "mileage": 10209,
    "engine": "Hybrid V12",
    "transmission": "8-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 876,
    "acceleration": "3.5s",
    "topSpeed": "220 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Reserved",
    "features": [
      "Starlight Headliner",
      "Massage Seats",
      "Night Vision",
      "Heads-up Display"
    ],
    "description": "A stunning example of Bentley engineering. This Flying Spur offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-574",
    "name": "BMW M4 CSL",
    "brand": "BMW",
    "model": "M4 CSL",
    "year": 2021,
    "price": 478428,
    "mileage": 756,
    "engine": "W16 Quad-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 1042,
    "acceleration": "3.6s",
    "topSpeed": "247 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Starlight Headliner",
      "Night Vision",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of BMW engineering. This M4 CSL offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-575",
    "name": "Rolls-Royce Dawn",
    "brand": "Rolls-Royce",
    "model": "Dawn",
    "year": 2023,
    "price": 1834488,
    "mileage": 7711,
    "engine": "V10 Natural",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 496,
    "acceleration": "2.3s",
    "topSpeed": "233 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Panoramic Roof",
      "Carbon Fiber Trim",
      "Soft-close Doors"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Dawn offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-576",
    "name": "Rolls-Royce Phantom",
    "brand": "Rolls-Royce",
    "model": "Phantom",
    "year": 2020,
    "price": 950899,
    "mileage": 7347,
    "engine": "W16 Quad-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 504,
    "acceleration": "2.4s",
    "topSpeed": "188 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Massage Seats",
      "Panoramic Roof",
      "Night Vision",
      "Soft-close Doors"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Phantom offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-577",
    "name": "Aston Martin DBS",
    "brand": "Aston Martin",
    "model": "DBS",
    "year": 2022,
    "price": 1306417,
    "mileage": 6079,
    "engine": "V12 Twin-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 692,
    "acceleration": "4.8s",
    "topSpeed": "187 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Night Vision",
      "Starlight Headliner",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Aston Martin engineering. This DBS offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-578",
    "name": "McLaren GT",
    "brand": "McLaren",
    "model": "GT",
    "year": 2021,
    "price": 1000685,
    "mileage": 9981,
    "engine": "V10 Natural",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 796,
    "acceleration": "4.5s",
    "topSpeed": "169 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Active Aero",
      "Panoramic Roof",
      "Bespoke Leather Interior",
      "Night Vision"
    ],
    "description": "A stunning example of McLaren engineering. This GT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-579",
    "name": "Aston Martin DBS",
    "brand": "Aston Martin",
    "model": "DBS",
    "year": 2021,
    "price": 1367748,
    "mileage": 7585,
    "engine": "Flat-6 Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 490,
    "acceleration": "4.2s",
    "topSpeed": "240 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Ceramic Brakes",
      "Carbon Fiber Trim",
      "Night Vision",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Aston Martin engineering. This DBS offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-580",
    "name": "Bugatti Divo",
    "brand": "Bugatti",
    "model": "Divo",
    "year": 2021,
    "price": 841343,
    "mileage": 1848,
    "engine": "Hybrid V12",
    "transmission": "9-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 405,
    "acceleration": "3.3s",
    "topSpeed": "205 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Soft-close Doors",
      "Active Aero",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Bugatti engineering. This Divo offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-581",
    "name": "Bugatti Divo",
    "brand": "Bugatti",
    "model": "Divo",
    "year": 2024,
    "price": 433037,
    "mileage": 7220,
    "engine": "Electric Dual-Motor",
    "transmission": "8-Speed Automatic",
    "fuelType": "Electric",
    "hp": 1159,
    "acceleration": "2.3s",
    "topSpeed": "201 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Soft-close Doors",
      "Massage Seats",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Bugatti engineering. This Divo offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-582",
    "name": "Bentley Mulsanne",
    "brand": "Bentley",
    "model": "Mulsanne",
    "year": 2020,
    "price": 1915581,
    "mileage": 10592,
    "engine": "V10 Natural",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1110,
    "acceleration": "2.4s",
    "topSpeed": "240 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Reserved",
    "features": [
      "Adaptive Suspension",
      "Ceramic Brakes",
      "Soft-close Doors",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Bentley engineering. This Mulsanne offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-583",
    "name": "Mercedes-Benz G 63 AMG",
    "brand": "Mercedes-Benz",
    "model": "G 63 AMG",
    "year": 2022,
    "price": 855632,
    "mileage": 14674,
    "engine": "Flat-6 Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 655,
    "acceleration": "4.5s",
    "topSpeed": "167 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Panoramic Roof",
      "Starlight Headliner",
      "Active Aero",
      "Premium Audio System"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This G 63 AMG offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-584",
    "name": "Rolls-Royce Cullinan",
    "brand": "Rolls-Royce",
    "model": "Cullinan",
    "year": 2021,
    "price": 1275827,
    "mileage": 7588,
    "engine": "Flat-6 Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 941,
    "acceleration": "4.9s",
    "topSpeed": "178 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Bespoke Leather Interior",
      "Premium Audio System",
      "Panoramic Roof",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Cullinan offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-585",
    "name": "Range Rover SV",
    "brand": "Range Rover",
    "model": "SV",
    "year": 2023,
    "price": 241424,
    "mileage": 12668,
    "engine": "V10 Natural",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 672,
    "acceleration": "3.8s",
    "topSpeed": "150 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Reserved",
    "features": [
      "Starlight Headliner",
      "Panoramic Roof",
      "Bespoke Leather Interior",
      "Massage Seats"
    ],
    "description": "A stunning example of Range Rover engineering. This SV offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-586",
    "name": "Ferrari Purosangue",
    "brand": "Ferrari",
    "model": "Purosangue",
    "year": 2021,
    "price": 1454539,
    "mileage": 5918,
    "engine": "Hybrid V12",
    "transmission": "8-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 797,
    "acceleration": "3.1s",
    "topSpeed": "190 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Massage Seats",
      "Ceramic Brakes",
      "Night Vision",
      "Premium Audio System"
    ],
    "description": "A stunning example of Ferrari engineering. This Purosangue offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-587",
    "name": "BMW M8 Competition",
    "brand": "BMW",
    "model": "M8 Competition",
    "year": 2021,
    "price": 1253642,
    "mileage": 10049,
    "engine": "Flat-6 Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 917,
    "acceleration": "4.2s",
    "topSpeed": "174 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Panoramic Roof",
      "Night Vision",
      "Soft-close Doors",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of BMW engineering. This M8 Competition offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-588",
    "name": "Bentley Bentayga",
    "brand": "Bentley",
    "model": "Bentayga",
    "year": 2020,
    "price": 310833,
    "mileage": 6589,
    "engine": "W16 Quad-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 1175,
    "acceleration": "2.6s",
    "topSpeed": "195 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Reserved",
    "features": [
      "Carbon Fiber Trim",
      "Soft-close Doors",
      "Active Aero",
      "Premium Audio System"
    ],
    "description": "A stunning example of Bentley engineering. This Bentayga offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-589",
    "name": "Mercedes-Benz GT Black Series",
    "brand": "Mercedes-Benz",
    "model": "GT Black Series",
    "year": 2020,
    "price": 1016117,
    "mileage": 11332,
    "engine": "V12 Twin-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 424,
    "acceleration": "3.7s",
    "topSpeed": "154 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Premium Audio System",
      "Active Aero",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This GT Black Series offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-590",
    "name": "Bentley Mulsanne",
    "brand": "Bentley",
    "model": "Mulsanne",
    "year": 2021,
    "price": 402701,
    "mileage": 4658,
    "engine": "Electric Dual-Motor",
    "transmission": "9-Speed Automatic",
    "fuelType": "Electric",
    "hp": 610,
    "acceleration": "2.7s",
    "topSpeed": "154 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Panoramic Roof",
      "Adaptive Suspension",
      "Active Aero"
    ],
    "description": "A stunning example of Bentley engineering. This Mulsanne offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-591",
    "name": "BMW M8 Competition",
    "brand": "BMW",
    "model": "M8 Competition",
    "year": 2022,
    "price": 1820688,
    "mileage": 11559,
    "engine": "W16 Quad-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 729,
    "acceleration": "4.4s",
    "topSpeed": "199 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Carbon Fiber Trim",
      "Massage Seats",
      "Starlight Headliner"
    ],
    "description": "A stunning example of BMW engineering. This M8 Competition offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-592",
    "name": "Mercedes-Benz GT Black Series",
    "brand": "Mercedes-Benz",
    "model": "GT Black Series",
    "year": 2024,
    "price": 1155150,
    "mileage": 6708,
    "engine": "Flat-6 Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 838,
    "acceleration": "2.7s",
    "topSpeed": "214 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Bespoke Leather Interior",
      "Massage Seats",
      "Soft-close Doors"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This GT Black Series offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-593",
    "name": "Aston Martin DBS",
    "brand": "Aston Martin",
    "model": "DBS",
    "year": 2022,
    "price": 1964126,
    "mileage": 9986,
    "engine": "Hybrid V12",
    "transmission": "Single-Speed Electric",
    "fuelType": "Hybrid",
    "hp": 1047,
    "acceleration": "2.1s",
    "topSpeed": "203 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Adaptive Suspension",
      "Massage Seats",
      "Starlight Headliner"
    ],
    "description": "A stunning example of Aston Martin engineering. This DBS offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-594",
    "name": "Porsche 911 Turbo S",
    "brand": "Porsche",
    "model": "911 Turbo S",
    "year": 2024,
    "price": 1568632,
    "mileage": 109,
    "engine": "W16 Quad-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 738,
    "acceleration": "4.1s",
    "topSpeed": "211 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Panoramic Roof",
      "Premium Audio System",
      "Active Aero",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of Porsche engineering. This 911 Turbo S offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-595",
    "name": "Aston Martin Vantage",
    "brand": "Aston Martin",
    "model": "Vantage",
    "year": 2020,
    "price": 173679,
    "mileage": 13882,
    "engine": "Flat-6 Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 744,
    "acceleration": "3.7s",
    "topSpeed": "224 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Starlight Headliner",
      "Heads-up Display",
      "Soft-close Doors"
    ],
    "description": "A stunning example of Aston Martin engineering. This Vantage offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-596",
    "name": "BMW M4 CSL",
    "brand": "BMW",
    "model": "M4 CSL",
    "year": 2024,
    "price": 225067,
    "mileage": 425,
    "engine": "V10 Natural",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1012,
    "acceleration": "2.9s",
    "topSpeed": "237 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Active Aero",
      "Night Vision",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of BMW engineering. This M4 CSL offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-597",
    "name": "Porsche 911 Turbo S",
    "brand": "Porsche",
    "model": "911 Turbo S",
    "year": 2023,
    "price": 524304,
    "mileage": 5263,
    "engine": "V12 Twin-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 1014,
    "acceleration": "3.2s",
    "topSpeed": "153 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Active Aero",
      "Ceramic Brakes",
      "Adaptive Suspension",
      "Heads-up Display"
    ],
    "description": "A stunning example of Porsche engineering. This 911 Turbo S offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-598",
    "name": "Bentley Flying Spur",
    "brand": "Bentley",
    "model": "Flying Spur",
    "year": 2024,
    "price": 1714592,
    "mileage": 10125,
    "engine": "W16 Quad-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 958,
    "acceleration": "3.8s",
    "topSpeed": "197 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Active Aero",
      "Soft-close Doors",
      "Massage Seats"
    ],
    "description": "A stunning example of Bentley engineering. This Flying Spur offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-599",
    "name": "Lamborghini Urus",
    "brand": "Lamborghini",
    "model": "Urus",
    "year": 2020,
    "price": 579448,
    "mileage": 11657,
    "engine": "V10 Natural",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 659,
    "acceleration": "2.8s",
    "topSpeed": "231 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Heads-up Display",
      "Massage Seats",
      "Premium Audio System"
    ],
    "description": "A stunning example of Lamborghini engineering. This Urus offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-600",
    "name": "Mercedes-Benz GT Black Series",
    "brand": "Mercedes-Benz",
    "model": "GT Black Series",
    "year": 2023,
    "price": 1796284,
    "mileage": 14181,
    "engine": "V8 Biturbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 947,
    "acceleration": "3.4s",
    "topSpeed": "166 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Active Aero",
      "Ceramic Brakes",
      "Starlight Headliner",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This GT Black Series offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-601",
    "name": "McLaren P1",
    "brand": "McLaren",
    "model": "P1",
    "year": 2021,
    "price": 398142,
    "mileage": 12087,
    "engine": "V12 Twin-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 746,
    "acceleration": "4.1s",
    "topSpeed": "158 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Night Vision",
      "Heads-up Display",
      "Ceramic Brakes",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of McLaren engineering. This P1 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-602",
    "name": "Bentley Mulsanne",
    "brand": "Bentley",
    "model": "Mulsanne",
    "year": 2022,
    "price": 291096,
    "mileage": 7021,
    "engine": "Electric Dual-Motor",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Electric",
    "hp": 413,
    "acceleration": "2.6s",
    "topSpeed": "176 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Bespoke Leather Interior",
      "Heads-up Display",
      "Active Aero",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of Bentley engineering. This Mulsanne offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-603",
    "name": "Rolls-Royce Cullinan",
    "brand": "Rolls-Royce",
    "model": "Cullinan",
    "year": 2023,
    "price": 659083,
    "mileage": 13887,
    "engine": "V8 Biturbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1096,
    "acceleration": "3.9s",
    "topSpeed": "183 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Heads-up Display",
      "Active Aero",
      "Massage Seats"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Cullinan offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-604",
    "name": "Porsche 718 Cayman GT4",
    "brand": "Porsche",
    "model": "718 Cayman GT4",
    "year": 2022,
    "price": 728327,
    "mileage": 10098,
    "engine": "Hybrid V12",
    "transmission": "8-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 465,
    "acceleration": "3.7s",
    "topSpeed": "169 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Ceramic Brakes",
      "Starlight Headliner",
      "Premium Audio System"
    ],
    "description": "A stunning example of Porsche engineering. This 718 Cayman GT4 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-605",
    "name": "Bugatti Veyron",
    "brand": "Bugatti",
    "model": "Veyron",
    "year": 2023,
    "price": 1074352,
    "mileage": 10092,
    "engine": "V8 Biturbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 778,
    "acceleration": "4.9s",
    "topSpeed": "185 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Starlight Headliner",
      "Premium Audio System",
      "Soft-close Doors"
    ],
    "description": "A stunning example of Bugatti engineering. This Veyron offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-606",
    "name": "Porsche 911 Turbo S",
    "brand": "Porsche",
    "model": "911 Turbo S",
    "year": 2021,
    "price": 212100,
    "mileage": 3555,
    "engine": "Flat-6 Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 834,
    "acceleration": "4.0s",
    "topSpeed": "245 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Premium Audio System",
      "Starlight Headliner",
      "Heads-up Display"
    ],
    "description": "A stunning example of Porsche engineering. This 911 Turbo S offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-607",
    "name": "Mercedes-Benz S-Class Maybach",
    "brand": "Mercedes-Benz",
    "model": "S-Class Maybach",
    "year": 2023,
    "price": 1467631,
    "mileage": 2461,
    "engine": "Hybrid V12",
    "transmission": "9-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 755,
    "acceleration": "2.5s",
    "topSpeed": "159 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Reserved",
    "features": [
      "Ceramic Brakes",
      "Adaptive Suspension",
      "Soft-close Doors",
      "Heads-up Display"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This S-Class Maybach offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-608",
    "name": "Mercedes-Benz EQS 580",
    "brand": "Mercedes-Benz",
    "model": "EQS 580",
    "year": 2023,
    "price": 146050,
    "mileage": 1924,
    "engine": "V8 Biturbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1163,
    "acceleration": "2.7s",
    "topSpeed": "235 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Reserved",
    "features": [
      "Heads-up Display",
      "Carbon Fiber Trim",
      "Soft-close Doors",
      "Night Vision"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This EQS 580 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-609",
    "name": "Range Rover Sport SVR",
    "brand": "Range Rover",
    "model": "Sport SVR",
    "year": 2023,
    "price": 871478,
    "mileage": 5777,
    "engine": "V10 Natural",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1023,
    "acceleration": "3.0s",
    "topSpeed": "219 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Active Aero",
      "Soft-close Doors",
      "Starlight Headliner",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Range Rover engineering. This Sport SVR offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-610",
    "name": "Ferrari 296 GTB",
    "brand": "Ferrari",
    "model": "296 GTB",
    "year": 2022,
    "price": 1080156,
    "mileage": 11915,
    "engine": "V8 Biturbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 675,
    "acceleration": "4.3s",
    "topSpeed": "201 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Premium Audio System",
      "Soft-close Doors",
      "Starlight Headliner",
      "Massage Seats"
    ],
    "description": "A stunning example of Ferrari engineering. This 296 GTB offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-611",
    "name": "Aston Martin Valhalla",
    "brand": "Aston Martin",
    "model": "Valhalla",
    "year": 2021,
    "price": 827135,
    "mileage": 6642,
    "engine": "Hybrid V12",
    "transmission": "Single-Speed Electric",
    "fuelType": "Hybrid",
    "hp": 545,
    "acceleration": "4.3s",
    "topSpeed": "205 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Massage Seats",
      "Night Vision",
      "Premium Audio System"
    ],
    "description": "A stunning example of Aston Martin engineering. This Valhalla offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-612",
    "name": "McLaren P1",
    "brand": "McLaren",
    "model": "P1",
    "year": 2022,
    "price": 1088592,
    "mileage": 8978,
    "engine": "Electric Dual-Motor",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Electric",
    "hp": 798,
    "acceleration": "4.9s",
    "topSpeed": "215 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Night Vision",
      "Premium Audio System",
      "Adaptive Suspension",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of McLaren engineering. This P1 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-613",
    "name": "BMW M8 Competition",
    "brand": "BMW",
    "model": "M8 Competition",
    "year": 2024,
    "price": 988648,
    "mileage": 1546,
    "engine": "Flat-6 Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 824,
    "acceleration": "2.6s",
    "topSpeed": "192 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Starlight Headliner",
      "Bespoke Leather Interior",
      "Night Vision"
    ],
    "description": "A stunning example of BMW engineering. This M8 Competition offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-614",
    "name": "Rolls-Royce Ghost",
    "brand": "Rolls-Royce",
    "model": "Ghost",
    "year": 2023,
    "price": 1977320,
    "mileage": 12242,
    "engine": "Flat-6 Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 867,
    "acceleration": "2.3s",
    "topSpeed": "243 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Active Aero",
      "Adaptive Suspension",
      "Heads-up Display",
      "Massage Seats"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Ghost offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-615",
    "name": "Rolls-Royce Ghost",
    "brand": "Rolls-Royce",
    "model": "Ghost",
    "year": 2022,
    "price": 259764,
    "mileage": 9918,
    "engine": "V8 Biturbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 605,
    "acceleration": "2.5s",
    "topSpeed": "215 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Massage Seats",
      "Ceramic Brakes",
      "Soft-close Doors",
      "Active Aero"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Ghost offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-616",
    "name": "Rolls-Royce Phantom",
    "brand": "Rolls-Royce",
    "model": "Phantom",
    "year": 2021,
    "price": 1096331,
    "mileage": 10619,
    "engine": "Flat-6 Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 947,
    "acceleration": "2.4s",
    "topSpeed": "211 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Adaptive Suspension",
      "Massage Seats",
      "Heads-up Display"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Phantom offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-617",
    "name": "Bugatti Mistral",
    "brand": "Bugatti",
    "model": "Mistral",
    "year": 2021,
    "price": 1744352,
    "mileage": 12903,
    "engine": "Flat-6 Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1155,
    "acceleration": "2.4s",
    "topSpeed": "238 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Bespoke Leather Interior",
      "Massage Seats",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of Bugatti engineering. This Mistral offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-618",
    "name": "McLaren P1",
    "brand": "McLaren",
    "model": "P1",
    "year": 2021,
    "price": 442630,
    "mileage": 11223,
    "engine": "Hybrid V12",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Hybrid",
    "hp": 1097,
    "acceleration": "2.5s",
    "topSpeed": "164 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Adaptive Suspension",
      "Soft-close Doors",
      "Heads-up Display"
    ],
    "description": "A stunning example of McLaren engineering. This P1 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-619",
    "name": "Ferrari SF90 Stradale",
    "brand": "Ferrari",
    "model": "SF90 Stradale",
    "year": 2022,
    "price": 539702,
    "mileage": 5476,
    "engine": "V12 Twin-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 452,
    "acceleration": "2.2s",
    "topSpeed": "179 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Panoramic Roof",
      "Starlight Headliner",
      "Night Vision",
      "Massage Seats"
    ],
    "description": "A stunning example of Ferrari engineering. This SF90 Stradale offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-620",
    "name": "Bentley Bentayga",
    "brand": "Bentley",
    "model": "Bentayga",
    "year": 2021,
    "price": 908440,
    "mileage": 14019,
    "engine": "W16 Quad-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 583,
    "acceleration": "4.7s",
    "topSpeed": "218 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Premium Audio System",
      "Ceramic Brakes",
      "Massage Seats"
    ],
    "description": "A stunning example of Bentley engineering. This Bentayga offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-621",
    "name": "Rolls-Royce Dawn",
    "brand": "Rolls-Royce",
    "model": "Dawn",
    "year": 2022,
    "price": 719978,
    "mileage": 11612,
    "engine": "W16 Quad-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 982,
    "acceleration": "4.7s",
    "topSpeed": "196 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Heads-up Display",
      "Ceramic Brakes",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Dawn offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-622",
    "name": "Range Rover Velar",
    "brand": "Range Rover",
    "model": "Velar",
    "year": 2021,
    "price": 139978,
    "mileage": 5028,
    "engine": "Hybrid V12",
    "transmission": "Single-Speed Electric",
    "fuelType": "Hybrid",
    "hp": 718,
    "acceleration": "4.0s",
    "topSpeed": "178 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Soft-close Doors",
      "Heads-up Display",
      "Active Aero",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of Range Rover engineering. This Velar offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-623",
    "name": "Bentley Mulsanne",
    "brand": "Bentley",
    "model": "Mulsanne",
    "year": 2020,
    "price": 275326,
    "mileage": 12258,
    "engine": "W16 Quad-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 858,
    "acceleration": "2.5s",
    "topSpeed": "213 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Active Aero",
      "Ceramic Brakes",
      "Massage Seats"
    ],
    "description": "A stunning example of Bentley engineering. This Mulsanne offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-624",
    "name": "Mercedes-Benz GT Black Series",
    "brand": "Mercedes-Benz",
    "model": "GT Black Series",
    "year": 2022,
    "price": 1822321,
    "mileage": 10561,
    "engine": "Hybrid V12",
    "transmission": "9-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 577,
    "acceleration": "2.2s",
    "topSpeed": "155 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Ceramic Brakes",
      "Soft-close Doors",
      "Night Vision"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This GT Black Series offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-625",
    "name": "BMW M8 Competition",
    "brand": "BMW",
    "model": "M8 Competition",
    "year": 2023,
    "price": 1424129,
    "mileage": 8108,
    "engine": "V12 Twin-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 819,
    "acceleration": "4.1s",
    "topSpeed": "217 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Bespoke Leather Interior",
      "Starlight Headliner",
      "Premium Audio System",
      "Night Vision"
    ],
    "description": "A stunning example of BMW engineering. This M8 Competition offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-626",
    "name": "BMW M8 Competition",
    "brand": "BMW",
    "model": "M8 Competition",
    "year": 2023,
    "price": 340362,
    "mileage": 3603,
    "engine": "V8 Biturbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 642,
    "acceleration": "3.5s",
    "topSpeed": "216 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Ceramic Brakes",
      "Heads-up Display",
      "Carbon Fiber Trim",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of BMW engineering. This M8 Competition offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-627",
    "name": "Lamborghini Sian",
    "brand": "Lamborghini",
    "model": "Sian",
    "year": 2020,
    "price": 933601,
    "mileage": 6401,
    "engine": "Electric Dual-Motor",
    "transmission": "9-Speed Automatic",
    "fuelType": "Electric",
    "hp": 1103,
    "acceleration": "4.1s",
    "topSpeed": "232 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Massage Seats",
      "Heads-up Display",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of Lamborghini engineering. This Sian offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-628",
    "name": "Lamborghini Aventador",
    "brand": "Lamborghini",
    "model": "Aventador",
    "year": 2021,
    "price": 194481,
    "mileage": 12749,
    "engine": "V8 Biturbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 684,
    "acceleration": "2.3s",
    "topSpeed": "186 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Reserved",
    "features": [
      "Heads-up Display",
      "Starlight Headliner",
      "Bespoke Leather Interior",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Lamborghini engineering. This Aventador offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-629",
    "name": "Lamborghini Hurac├ín",
    "brand": "Lamborghini",
    "model": "Hurac├ín",
    "year": 2023,
    "price": 2050777,
    "mileage": 6211,
    "engine": "V12 Twin-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 784,
    "acceleration": "4.5s",
    "topSpeed": "189 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Starlight Headliner",
      "Active Aero",
      "Massage Seats"
    ],
    "description": "A stunning example of Lamborghini engineering. This Hurac├ín offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-630",
    "name": "Mercedes-Benz S-Class Maybach",
    "brand": "Mercedes-Benz",
    "model": "S-Class Maybach",
    "year": 2024,
    "price": 1845426,
    "mileage": 12074,
    "engine": "Hybrid V12",
    "transmission": "Single-Speed Electric",
    "fuelType": "Hybrid",
    "hp": 524,
    "acceleration": "2.8s",
    "topSpeed": "214 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Soft-close Doors",
      "Active Aero",
      "Ceramic Brakes",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This S-Class Maybach offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-631",
    "name": "Aston Martin Valhalla",
    "brand": "Aston Martin",
    "model": "Valhalla",
    "year": 2022,
    "price": 1097865,
    "mileage": 13128,
    "engine": "W16 Quad-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 606,
    "acceleration": "4.1s",
    "topSpeed": "183 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Panoramic Roof",
      "Massage Seats",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of Aston Martin engineering. This Valhalla offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-632",
    "name": "BMW i7 M70",
    "brand": "BMW",
    "model": "i7 M70",
    "year": 2022,
    "price": 981826,
    "mileage": 3943,
    "engine": "V12 Twin-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 521,
    "acceleration": "3.1s",
    "topSpeed": "233 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Heads-up Display",
      "Active Aero",
      "Soft-close Doors"
    ],
    "description": "A stunning example of BMW engineering. This i7 M70 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-633",
    "name": "Porsche 718 Cayman GT4",
    "brand": "Porsche",
    "model": "718 Cayman GT4",
    "year": 2020,
    "price": 238471,
    "mileage": 9618,
    "engine": "Hybrid V12",
    "transmission": "8-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 1158,
    "acceleration": "2.9s",
    "topSpeed": "248 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Massage Seats",
      "Carbon Fiber Trim",
      "Soft-close Doors"
    ],
    "description": "A stunning example of Porsche engineering. This 718 Cayman GT4 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-634",
    "name": "Bentley Mulsanne",
    "brand": "Bentley",
    "model": "Mulsanne",
    "year": 2023,
    "price": 1709731,
    "mileage": 9377,
    "engine": "V8 Biturbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 444,
    "acceleration": "4.0s",
    "topSpeed": "154 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Massage Seats",
      "Carbon Fiber Trim",
      "Soft-close Doors",
      "Night Vision"
    ],
    "description": "A stunning example of Bentley engineering. This Mulsanne offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-635",
    "name": "Range Rover Autobiography",
    "brand": "Range Rover",
    "model": "Autobiography",
    "year": 2022,
    "price": 426147,
    "mileage": 10768,
    "engine": "V8 Biturbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 648,
    "acceleration": "4.2s",
    "topSpeed": "151 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Reserved",
    "features": [
      "Adaptive Suspension",
      "Night Vision",
      "Premium Audio System",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Range Rover engineering. This Autobiography offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-636",
    "name": "Range Rover Sport SVR",
    "brand": "Range Rover",
    "model": "Sport SVR",
    "year": 2022,
    "price": 1191655,
    "mileage": 8478,
    "engine": "Hybrid V12",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Hybrid",
    "hp": 493,
    "acceleration": "3.1s",
    "topSpeed": "216 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Reserved",
    "features": [
      "Panoramic Roof",
      "Ceramic Brakes",
      "Soft-close Doors",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Range Rover engineering. This Sport SVR offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-637",
    "name": "Rolls-Royce Spectre",
    "brand": "Rolls-Royce",
    "model": "Spectre",
    "year": 2021,
    "price": 1016067,
    "mileage": 10411,
    "engine": "W16 Quad-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 890,
    "acceleration": "2.1s",
    "topSpeed": "169 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Reserved",
    "features": [
      "Ceramic Brakes",
      "Soft-close Doors",
      "Active Aero",
      "Massage Seats"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Spectre offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-638",
    "name": "Aston Martin Vantage",
    "brand": "Aston Martin",
    "model": "Vantage",
    "year": 2021,
    "price": 2089761,
    "mileage": 587,
    "engine": "V8 Biturbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 471,
    "acceleration": "4.7s",
    "topSpeed": "212 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Massage Seats",
      "Bespoke Leather Interior",
      "Soft-close Doors",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of Aston Martin engineering. This Vantage offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-639",
    "name": "McLaren 720S",
    "brand": "McLaren",
    "model": "720S",
    "year": 2022,
    "price": 696405,
    "mileage": 763,
    "engine": "Hybrid V12",
    "transmission": "9-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 905,
    "acceleration": "2.3s",
    "topSpeed": "246 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Adaptive Suspension",
      "Ceramic Brakes",
      "Active Aero"
    ],
    "description": "A stunning example of McLaren engineering. This 720S offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-640",
    "name": "BMW X7 M60i",
    "brand": "BMW",
    "model": "X7 M60i",
    "year": 2021,
    "price": 916337,
    "mileage": 115,
    "engine": "Electric Dual-Motor",
    "transmission": "8-Speed Automatic",
    "fuelType": "Electric",
    "hp": 1051,
    "acceleration": "4.1s",
    "topSpeed": "165 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Heads-up Display",
      "Massage Seats",
      "Premium Audio System"
    ],
    "description": "A stunning example of BMW engineering. This X7 M60i offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-641",
    "name": "BMW i7 M70",
    "brand": "BMW",
    "model": "i7 M70",
    "year": 2023,
    "price": 660401,
    "mileage": 3241,
    "engine": "V12 Twin-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 495,
    "acceleration": "2.9s",
    "topSpeed": "208 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Soft-close Doors",
      "Carbon Fiber Trim",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of BMW engineering. This i7 M70 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-642",
    "name": "Lamborghini Sian",
    "brand": "Lamborghini",
    "model": "Sian",
    "year": 2021,
    "price": 2076152,
    "mileage": 8949,
    "engine": "V8 Biturbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 813,
    "acceleration": "4.8s",
    "topSpeed": "243 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Starlight Headliner",
      "Carbon Fiber Trim",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Lamborghini engineering. This Sian offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-643",
    "name": "Aston Martin DBS",
    "brand": "Aston Martin",
    "model": "DBS",
    "year": 2023,
    "price": 1902284,
    "mileage": 12471,
    "engine": "Electric Dual-Motor",
    "transmission": "Single-Speed Electric",
    "fuelType": "Electric",
    "hp": 868,
    "acceleration": "2.3s",
    "topSpeed": "223 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Bespoke Leather Interior",
      "Soft-close Doors",
      "Active Aero"
    ],
    "description": "A stunning example of Aston Martin engineering. This DBS offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-644",
    "name": "Bugatti Divo",
    "brand": "Bugatti",
    "model": "Divo",
    "year": 2024,
    "price": 1088142,
    "mileage": 5350,
    "engine": "W16 Quad-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 461,
    "acceleration": "3.7s",
    "topSpeed": "231 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Reserved",
    "features": [
      "Adaptive Suspension",
      "Massage Seats",
      "Starlight Headliner",
      "Heads-up Display"
    ],
    "description": "A stunning example of Bugatti engineering. This Divo offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-645",
    "name": "Rolls-Royce Ghost",
    "brand": "Rolls-Royce",
    "model": "Ghost",
    "year": 2020,
    "price": 141791,
    "mileage": 6496,
    "engine": "Electric Dual-Motor",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Electric",
    "hp": 688,
    "acceleration": "4.2s",
    "topSpeed": "210 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Massage Seats",
      "Starlight Headliner",
      "Ceramic Brakes",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Ghost offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-646",
    "name": "Bentley Mulsanne",
    "brand": "Bentley",
    "model": "Mulsanne",
    "year": 2022,
    "price": 506151,
    "mileage": 14486,
    "engine": "Hybrid V12",
    "transmission": "8-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 773,
    "acceleration": "2.4s",
    "topSpeed": "154 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Carbon Fiber Trim",
      "Active Aero",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Bentley engineering. This Mulsanne offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-647",
    "name": "Mercedes-Benz GT Black Series",
    "brand": "Mercedes-Benz",
    "model": "GT Black Series",
    "year": 2024,
    "price": 2022783,
    "mileage": 8890,
    "engine": "V10 Natural",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 987,
    "acceleration": "2.7s",
    "topSpeed": "233 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Soft-close Doors",
      "Premium Audio System",
      "Starlight Headliner",
      "Active Aero"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This GT Black Series offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-648",
    "name": "Aston Martin DB11",
    "brand": "Aston Martin",
    "model": "DB11",
    "year": 2024,
    "price": 1026370,
    "mileage": 5885,
    "engine": "V12 Twin-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 861,
    "acceleration": "3.8s",
    "topSpeed": "159 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Heads-up Display",
      "Active Aero",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Aston Martin engineering. This DB11 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-649",
    "name": "Bugatti Divo",
    "brand": "Bugatti",
    "model": "Divo",
    "year": 2023,
    "price": 1953439,
    "mileage": 9638,
    "engine": "V10 Natural",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 791,
    "acceleration": "4.1s",
    "topSpeed": "157 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Night Vision",
      "Ceramic Brakes",
      "Massage Seats"
    ],
    "description": "A stunning example of Bugatti engineering. This Divo offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-650",
    "name": "Mercedes-Benz S-Class Maybach",
    "brand": "Mercedes-Benz",
    "model": "S-Class Maybach",
    "year": 2022,
    "price": 497630,
    "mileage": 10104,
    "engine": "Electric Dual-Motor",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Electric",
    "hp": 898,
    "acceleration": "3.1s",
    "topSpeed": "180 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Heads-up Display",
      "Soft-close Doors",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This S-Class Maybach offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-651",
    "name": "BMW M8 Competition",
    "brand": "BMW",
    "model": "M8 Competition",
    "year": 2020,
    "price": 207237,
    "mileage": 3002,
    "engine": "Flat-6 Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 1196,
    "acceleration": "3.3s",
    "topSpeed": "210 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Soft-close Doors",
      "Night Vision",
      "Adaptive Suspension",
      "Heads-up Display"
    ],
    "description": "A stunning example of BMW engineering. This M8 Competition offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-652",
    "name": "Mercedes-Benz G 63 AMG",
    "brand": "Mercedes-Benz",
    "model": "G 63 AMG",
    "year": 2020,
    "price": 941215,
    "mileage": 822,
    "engine": "V10 Natural",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 729,
    "acceleration": "2.9s",
    "topSpeed": "183 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Massage Seats",
      "Premium Audio System",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This G 63 AMG offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-653",
    "name": "Bentley Bentayga",
    "brand": "Bentley",
    "model": "Bentayga",
    "year": 2024,
    "price": 1927561,
    "mileage": 1905,
    "engine": "W16 Quad-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 785,
    "acceleration": "3.5s",
    "topSpeed": "211 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Soft-close Doors",
      "Bespoke Leather Interior",
      "Active Aero",
      "Starlight Headliner"
    ],
    "description": "A stunning example of Bentley engineering. This Bentayga offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-654",
    "name": "Rolls-Royce Phantom",
    "brand": "Rolls-Royce",
    "model": "Phantom",
    "year": 2021,
    "price": 494802,
    "mileage": 5572,
    "engine": "V12 Twin-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 673,
    "acceleration": "3.9s",
    "topSpeed": "189 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Panoramic Roof",
      "Carbon Fiber Trim",
      "Massage Seats",
      "Premium Audio System"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Phantom offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-655",
    "name": "Lamborghini Hurac├ín",
    "brand": "Lamborghini",
    "model": "Hurac├ín",
    "year": 2020,
    "price": 1697611,
    "mileage": 4902,
    "engine": "V8 Biturbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 1102,
    "acceleration": "2.6s",
    "topSpeed": "188 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Heads-up Display",
      "Adaptive Suspension",
      "Massage Seats"
    ],
    "description": "A stunning example of Lamborghini engineering. This Hurac├ín offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-656",
    "name": "Range Rover Sport SVR",
    "brand": "Range Rover",
    "model": "Sport SVR",
    "year": 2021,
    "price": 1311056,
    "mileage": 1983,
    "engine": "V10 Natural",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1179,
    "acceleration": "2.5s",
    "topSpeed": "162 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Massage Seats",
      "Heads-up Display",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of Range Rover engineering. This Sport SVR offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-657",
    "name": "Mercedes-Benz GT Black Series",
    "brand": "Mercedes-Benz",
    "model": "GT Black Series",
    "year": 2024,
    "price": 359977,
    "mileage": 12926,
    "engine": "V12 Twin-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 543,
    "acceleration": "2.7s",
    "topSpeed": "192 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Bespoke Leather Interior",
      "Active Aero",
      "Premium Audio System",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This GT Black Series offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-658",
    "name": "McLaren GT",
    "brand": "McLaren",
    "model": "GT",
    "year": 2020,
    "price": 1633825,
    "mileage": 1444,
    "engine": "V10 Natural",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 1145,
    "acceleration": "3.9s",
    "topSpeed": "189 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Night Vision",
      "Adaptive Suspension",
      "Panoramic Roof"
    ],
    "description": "A stunning example of McLaren engineering. This GT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-659",
    "name": "Rolls-Royce Cullinan",
    "brand": "Rolls-Royce",
    "model": "Cullinan",
    "year": 2022,
    "price": 209498,
    "mileage": 3643,
    "engine": "V12 Twin-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 897,
    "acceleration": "3.5s",
    "topSpeed": "221 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Starlight Headliner",
      "Ceramic Brakes",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Cullinan offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-660",
    "name": "BMW X7 M60i",
    "brand": "BMW",
    "model": "X7 M60i",
    "year": 2023,
    "price": 1750905,
    "mileage": 12373,
    "engine": "Electric Dual-Motor",
    "transmission": "8-Speed Automatic",
    "fuelType": "Electric",
    "hp": 1174,
    "acceleration": "4.3s",
    "topSpeed": "216 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Panoramic Roof",
      "Carbon Fiber Trim",
      "Premium Audio System"
    ],
    "description": "A stunning example of BMW engineering. This X7 M60i offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-661",
    "name": "Lamborghini Aventador",
    "brand": "Lamborghini",
    "model": "Aventador",
    "year": 2023,
    "price": 523056,
    "mileage": 875,
    "engine": "W16 Quad-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 936,
    "acceleration": "4.5s",
    "topSpeed": "202 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Massage Seats",
      "Carbon Fiber Trim",
      "Heads-up Display",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Lamborghini engineering. This Aventador offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-662",
    "name": "Mercedes-Benz EQS 580",
    "brand": "Mercedes-Benz",
    "model": "EQS 580",
    "year": 2024,
    "price": 1061615,
    "mileage": 5037,
    "engine": "V10 Natural",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 840,
    "acceleration": "2.6s",
    "topSpeed": "249 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Panoramic Roof",
      "Adaptive Suspension",
      "Heads-up Display",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This EQS 580 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-663",
    "name": "BMW M4 CSL",
    "brand": "BMW",
    "model": "M4 CSL",
    "year": 2022,
    "price": 1084052,
    "mileage": 4868,
    "engine": "Flat-6 Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 624,
    "acceleration": "4.4s",
    "topSpeed": "176 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Massage Seats",
      "Carbon Fiber Trim",
      "Active Aero"
    ],
    "description": "A stunning example of BMW engineering. This M4 CSL offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-664",
    "name": "Porsche Panamera",
    "brand": "Porsche",
    "model": "Panamera",
    "year": 2022,
    "price": 465869,
    "mileage": 8058,
    "engine": "W16 Quad-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 669,
    "acceleration": "3.4s",
    "topSpeed": "223 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Active Aero",
      "Starlight Headliner",
      "Premium Audio System"
    ],
    "description": "A stunning example of Porsche engineering. This Panamera offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-665",
    "name": "McLaren 720S",
    "brand": "McLaren",
    "model": "720S",
    "year": 2020,
    "price": 415495,
    "mileage": 3007,
    "engine": "W16 Quad-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 692,
    "acceleration": "3.8s",
    "topSpeed": "241 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Reserved",
    "features": [
      "Carbon Fiber Trim",
      "Massage Seats",
      "Heads-up Display",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of McLaren engineering. This 720S offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-666",
    "name": "Aston Martin Valhalla",
    "brand": "Aston Martin",
    "model": "Valhalla",
    "year": 2021,
    "price": 1930820,
    "mileage": 12120,
    "engine": "Electric Dual-Motor",
    "transmission": "9-Speed Automatic",
    "fuelType": "Electric",
    "hp": 864,
    "acceleration": "2.1s",
    "topSpeed": "198 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Bespoke Leather Interior",
      "Panoramic Roof",
      "Starlight Headliner"
    ],
    "description": "A stunning example of Aston Martin engineering. This Valhalla offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-667",
    "name": "Bentley Mulsanne",
    "brand": "Bentley",
    "model": "Mulsanne",
    "year": 2023,
    "price": 744285,
    "mileage": 10550,
    "engine": "V12 Twin-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1087,
    "acceleration": "4.3s",
    "topSpeed": "154 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Reserved",
    "features": [
      "Starlight Headliner",
      "Night Vision",
      "Panoramic Roof",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Bentley engineering. This Mulsanne offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-668",
    "name": "Bentley Bentayga",
    "brand": "Bentley",
    "model": "Bentayga",
    "year": 2021,
    "price": 1249965,
    "mileage": 9894,
    "engine": "W16 Quad-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 618,
    "acceleration": "4.3s",
    "topSpeed": "191 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Bespoke Leather Interior",
      "Night Vision",
      "Ceramic Brakes",
      "Heads-up Display"
    ],
    "description": "A stunning example of Bentley engineering. This Bentayga offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-669",
    "name": "Bugatti Divo",
    "brand": "Bugatti",
    "model": "Divo",
    "year": 2020,
    "price": 691921,
    "mileage": 12283,
    "engine": "V10 Natural",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 839,
    "acceleration": "3.5s",
    "topSpeed": "209 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Premium Audio System",
      "Soft-close Doors",
      "Massage Seats"
    ],
    "description": "A stunning example of Bugatti engineering. This Divo offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-670",
    "name": "Bentley Continental GT",
    "brand": "Bentley",
    "model": "Continental GT",
    "year": 2023,
    "price": 1889884,
    "mileage": 2322,
    "engine": "Electric Dual-Motor",
    "transmission": "Single-Speed Electric",
    "fuelType": "Electric",
    "hp": 1045,
    "acceleration": "2.3s",
    "topSpeed": "177 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Premium Audio System",
      "Active Aero",
      "Night Vision"
    ],
    "description": "A stunning example of Bentley engineering. This Continental GT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-671",
    "name": "Bugatti Veyron",
    "brand": "Bugatti",
    "model": "Veyron",
    "year": 2021,
    "price": 1104628,
    "mileage": 1909,
    "engine": "Flat-6 Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 456,
    "acceleration": "2.9s",
    "topSpeed": "190 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Bespoke Leather Interior",
      "Heads-up Display",
      "Adaptive Suspension",
      "Night Vision"
    ],
    "description": "A stunning example of Bugatti engineering. This Veyron offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-672",
    "name": "BMW X7 M60i",
    "brand": "BMW",
    "model": "X7 M60i",
    "year": 2022,
    "price": 1781883,
    "mileage": 6723,
    "engine": "Hybrid V12",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Hybrid",
    "hp": 630,
    "acceleration": "3.6s",
    "topSpeed": "169 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Massage Seats",
      "Premium Audio System",
      "Night Vision",
      "Panoramic Roof"
    ],
    "description": "A stunning example of BMW engineering. This X7 M60i offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-673",
    "name": "Bentley Flying Spur",
    "brand": "Bentley",
    "model": "Flying Spur",
    "year": 2020,
    "price": 2089024,
    "mileage": 11836,
    "engine": "Flat-6 Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 947,
    "acceleration": "2.9s",
    "topSpeed": "235 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Carbon Fiber Trim",
      "Heads-up Display",
      "Premium Audio System"
    ],
    "description": "A stunning example of Bentley engineering. This Flying Spur offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-674",
    "name": "Bugatti Divo",
    "brand": "Bugatti",
    "model": "Divo",
    "year": 2022,
    "price": 967317,
    "mileage": 1365,
    "engine": "W16 Quad-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 541,
    "acceleration": "3.2s",
    "topSpeed": "220 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Reserved",
    "features": [
      "Ceramic Brakes",
      "Carbon Fiber Trim",
      "Soft-close Doors",
      "Massage Seats"
    ],
    "description": "A stunning example of Bugatti engineering. This Divo offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-675",
    "name": "Rolls-Royce Phantom",
    "brand": "Rolls-Royce",
    "model": "Phantom",
    "year": 2020,
    "price": 124832,
    "mileage": 14906,
    "engine": "V10 Natural",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 762,
    "acceleration": "2.7s",
    "topSpeed": "210 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Active Aero",
      "Starlight Headliner",
      "Premium Audio System",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Phantom offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-676",
    "name": "Porsche Cayenne Turbo",
    "brand": "Porsche",
    "model": "Cayenne Turbo",
    "year": 2023,
    "price": 112541,
    "mileage": 4423,
    "engine": "V8 Biturbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 923,
    "acceleration": "3.0s",
    "topSpeed": "243 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Bespoke Leather Interior",
      "Night Vision",
      "Massage Seats",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of Porsche engineering. This Cayenne Turbo offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-677",
    "name": "Ferrari 296 GTB",
    "brand": "Ferrari",
    "model": "296 GTB",
    "year": 2024,
    "price": 961115,
    "mileage": 917,
    "engine": "Hybrid V12",
    "transmission": "Single-Speed Electric",
    "fuelType": "Hybrid",
    "hp": 682,
    "acceleration": "4.1s",
    "topSpeed": "170 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Active Aero",
      "Massage Seats",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Ferrari engineering. This 296 GTB offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-678",
    "name": "McLaren GT",
    "brand": "McLaren",
    "model": "GT",
    "year": 2021,
    "price": 789920,
    "mileage": 5581,
    "engine": "V10 Natural",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 574,
    "acceleration": "2.4s",
    "topSpeed": "242 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Massage Seats",
      "Starlight Headliner",
      "Night Vision",
      "Panoramic Roof"
    ],
    "description": "A stunning example of McLaren engineering. This GT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-679",
    "name": "McLaren Artura",
    "brand": "McLaren",
    "model": "Artura",
    "year": 2023,
    "price": 743341,
    "mileage": 5514,
    "engine": "W16 Quad-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 474,
    "acceleration": "2.6s",
    "topSpeed": "227 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Adaptive Suspension",
      "Active Aero",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of McLaren engineering. This Artura offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-680",
    "name": "Lamborghini Hurac├ín",
    "brand": "Lamborghini",
    "model": "Hurac├ín",
    "year": 2023,
    "price": 307018,
    "mileage": 12198,
    "engine": "W16 Quad-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1177,
    "acceleration": "2.3s",
    "topSpeed": "237 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Reserved",
    "features": [
      "Heads-up Display",
      "Ceramic Brakes",
      "Carbon Fiber Trim",
      "Night Vision"
    ],
    "description": "A stunning example of Lamborghini engineering. This Hurac├ín offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-681",
    "name": "BMW M4 CSL",
    "brand": "BMW",
    "model": "M4 CSL",
    "year": 2022,
    "price": 409271,
    "mileage": 6404,
    "engine": "V10 Natural",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 660,
    "acceleration": "3.0s",
    "topSpeed": "173 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Panoramic Roof",
      "Starlight Headliner",
      "Heads-up Display"
    ],
    "description": "A stunning example of BMW engineering. This M4 CSL offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-682",
    "name": "Rolls-Royce Ghost",
    "brand": "Rolls-Royce",
    "model": "Ghost",
    "year": 2023,
    "price": 444858,
    "mileage": 8939,
    "engine": "Flat-6 Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 493,
    "acceleration": "4.3s",
    "topSpeed": "205 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Carbon Fiber Trim",
      "Massage Seats",
      "Active Aero"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Ghost offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-683",
    "name": "Lamborghini Hurac├ín",
    "brand": "Lamborghini",
    "model": "Hurac├ín",
    "year": 2021,
    "price": 1620452,
    "mileage": 14887,
    "engine": "W16 Quad-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 1159,
    "acceleration": "2.3s",
    "topSpeed": "221 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Starlight Headliner",
      "Active Aero",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Lamborghini engineering. This Hurac├ín offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-684",
    "name": "Mercedes-Benz GT Black Series",
    "brand": "Mercedes-Benz",
    "model": "GT Black Series",
    "year": 2020,
    "price": 1575631,
    "mileage": 14792,
    "engine": "Flat-6 Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 598,
    "acceleration": "4.5s",
    "topSpeed": "185 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Massage Seats",
      "Panoramic Roof",
      "Soft-close Doors",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This GT Black Series offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-685",
    "name": "McLaren 765LT",
    "brand": "McLaren",
    "model": "765LT",
    "year": 2024,
    "price": 570536,
    "mileage": 12557,
    "engine": "V10 Natural",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 1037,
    "acceleration": "3.2s",
    "topSpeed": "245 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Carbon Fiber Trim",
      "Active Aero",
      "Panoramic Roof"
    ],
    "description": "A stunning example of McLaren engineering. This 765LT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-686",
    "name": "Bugatti Mistral",
    "brand": "Bugatti",
    "model": "Mistral",
    "year": 2024,
    "price": 1276542,
    "mileage": 1330,
    "engine": "W16 Quad-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 792,
    "acceleration": "2.0s",
    "topSpeed": "152 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Premium Audio System",
      "Active Aero",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Bugatti engineering. This Mistral offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-687",
    "name": "Porsche Taycan",
    "brand": "Porsche",
    "model": "Taycan",
    "year": 2020,
    "price": 1948666,
    "mileage": 9594,
    "engine": "Hybrid V12",
    "transmission": "Single-Speed Electric",
    "fuelType": "Hybrid",
    "hp": 729,
    "acceleration": "3.4s",
    "topSpeed": "187 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Night Vision",
      "Bespoke Leather Interior",
      "Soft-close Doors"
    ],
    "description": "A stunning example of Porsche engineering. This Taycan offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-688",
    "name": "Bentley Flying Spur",
    "brand": "Bentley",
    "model": "Flying Spur",
    "year": 2021,
    "price": 514673,
    "mileage": 4353,
    "engine": "Flat-6 Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 581,
    "acceleration": "2.1s",
    "topSpeed": "200 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Massage Seats",
      "Ceramic Brakes",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Bentley engineering. This Flying Spur offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-689",
    "name": "Rolls-Royce Cullinan",
    "brand": "Rolls-Royce",
    "model": "Cullinan",
    "year": 2021,
    "price": 865076,
    "mileage": 9501,
    "engine": "W16 Quad-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 509,
    "acceleration": "4.6s",
    "topSpeed": "242 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Active Aero",
      "Starlight Headliner",
      "Adaptive Suspension",
      "Heads-up Display"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Cullinan offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-690",
    "name": "Bentley Bentayga",
    "brand": "Bentley",
    "model": "Bentayga",
    "year": 2020,
    "price": 1399596,
    "mileage": 7468,
    "engine": "Electric Dual-Motor",
    "transmission": "Single-Speed Electric",
    "fuelType": "Electric",
    "hp": 978,
    "acceleration": "2.2s",
    "topSpeed": "160 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Bespoke Leather Interior",
      "Adaptive Suspension",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Bentley engineering. This Bentayga offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-691",
    "name": "Rolls-Royce Dawn",
    "brand": "Rolls-Royce",
    "model": "Dawn",
    "year": 2022,
    "price": 919534,
    "mileage": 4932,
    "engine": "Electric Dual-Motor",
    "transmission": "Single-Speed Electric",
    "fuelType": "Electric",
    "hp": 471,
    "acceleration": "2.2s",
    "topSpeed": "205 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Massage Seats",
      "Night Vision",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Dawn offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-692",
    "name": "Ferrari Purosangue",
    "brand": "Ferrari",
    "model": "Purosangue",
    "year": 2024,
    "price": 317597,
    "mileage": 14669,
    "engine": "V8 Biturbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 497,
    "acceleration": "2.3s",
    "topSpeed": "230 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Night Vision",
      "Heads-up Display",
      "Soft-close Doors",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Ferrari engineering. This Purosangue offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-693",
    "name": "Mercedes-Benz EQS 580",
    "brand": "Mercedes-Benz",
    "model": "EQS 580",
    "year": 2021,
    "price": 1502231,
    "mileage": 6843,
    "engine": "V12 Twin-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 414,
    "acceleration": "3.6s",
    "topSpeed": "217 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Reserved",
    "features": [
      "Adaptive Suspension",
      "Night Vision",
      "Carbon Fiber Trim",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This EQS 580 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-694",
    "name": "Bugatti Divo",
    "brand": "Bugatti",
    "model": "Divo",
    "year": 2023,
    "price": 265999,
    "mileage": 2876,
    "engine": "Electric Dual-Motor",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Electric",
    "hp": 592,
    "acceleration": "3.6s",
    "topSpeed": "162 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Massage Seats",
      "Carbon Fiber Trim",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Bugatti engineering. This Divo offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-695",
    "name": "Bentley Mulsanne",
    "brand": "Bentley",
    "model": "Mulsanne",
    "year": 2022,
    "price": 1651354,
    "mileage": 4769,
    "engine": "V12 Twin-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 642,
    "acceleration": "3.3s",
    "topSpeed": "216 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Adaptive Suspension",
      "Ceramic Brakes",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Bentley engineering. This Mulsanne offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-696",
    "name": "BMW i7 M70",
    "brand": "BMW",
    "model": "i7 M70",
    "year": 2021,
    "price": 1488562,
    "mileage": 14320,
    "engine": "V8 Biturbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 404,
    "acceleration": "4.3s",
    "topSpeed": "243 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Ceramic Brakes",
      "Carbon Fiber Trim",
      "Active Aero"
    ],
    "description": "A stunning example of BMW engineering. This i7 M70 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-697",
    "name": "Ferrari F8 Tributo",
    "brand": "Ferrari",
    "model": "F8 Tributo",
    "year": 2020,
    "price": 1216996,
    "mileage": 4134,
    "engine": "Flat-6 Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 607,
    "acceleration": "4.8s",
    "topSpeed": "232 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Soft-close Doors",
      "Massage Seats",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of Ferrari engineering. This F8 Tributo offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-698",
    "name": "Bentley Mulsanne",
    "brand": "Bentley",
    "model": "Mulsanne",
    "year": 2020,
    "price": 388497,
    "mileage": 14671,
    "engine": "Hybrid V12",
    "transmission": "8-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 851,
    "acceleration": "2.6s",
    "topSpeed": "208 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Massage Seats",
      "Carbon Fiber Trim",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Bentley engineering. This Mulsanne offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-699",
    "name": "Aston Martin Valhalla",
    "brand": "Aston Martin",
    "model": "Valhalla",
    "year": 2023,
    "price": 1534543,
    "mileage": 7774,
    "engine": "Hybrid V12",
    "transmission": "9-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 563,
    "acceleration": "2.4s",
    "topSpeed": "170 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Carbon Fiber Trim",
      "Bespoke Leather Interior",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Aston Martin engineering. This Valhalla offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-700",
    "name": "Bugatti Chiron",
    "brand": "Bugatti",
    "model": "Chiron",
    "year": 2020,
    "price": 313491,
    "mileage": 506,
    "engine": "V8 Biturbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 894,
    "acceleration": "3.7s",
    "topSpeed": "223 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Panoramic Roof",
      "Starlight Headliner",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Bugatti engineering. This Chiron offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-701",
    "name": "Bentley Bentayga",
    "brand": "Bentley",
    "model": "Bentayga",
    "year": 2020,
    "price": 1077101,
    "mileage": 13650,
    "engine": "V12 Twin-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 810,
    "acceleration": "3.8s",
    "topSpeed": "231 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Night Vision",
      "Adaptive Suspension",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Bentley engineering. This Bentayga offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-702",
    "name": "BMW M4 CSL",
    "brand": "BMW",
    "model": "M4 CSL",
    "year": 2022,
    "price": 163549,
    "mileage": 7392,
    "engine": "Hybrid V12",
    "transmission": "8-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 1021,
    "acceleration": "2.2s",
    "topSpeed": "213 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Starlight Headliner",
      "Heads-up Display",
      "Night Vision"
    ],
    "description": "A stunning example of BMW engineering. This M4 CSL offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-703",
    "name": "Aston Martin Valhalla",
    "brand": "Aston Martin",
    "model": "Valhalla",
    "year": 2022,
    "price": 809243,
    "mileage": 13632,
    "engine": "V12 Twin-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 741,
    "acceleration": "2.9s",
    "topSpeed": "151 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Soft-close Doors",
      "Premium Audio System",
      "Ceramic Brakes",
      "Night Vision"
    ],
    "description": "A stunning example of Aston Martin engineering. This Valhalla offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-704",
    "name": "Range Rover Autobiography",
    "brand": "Range Rover",
    "model": "Autobiography",
    "year": 2020,
    "price": 850567,
    "mileage": 10968,
    "engine": "Flat-6 Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 673,
    "acceleration": "4.7s",
    "topSpeed": "171 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Ceramic Brakes",
      "Soft-close Doors",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Range Rover engineering. This Autobiography offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-705",
    "name": "Ferrari SF90 Stradale",
    "brand": "Ferrari",
    "model": "SF90 Stradale",
    "year": 2020,
    "price": 309972,
    "mileage": 2172,
    "engine": "W16 Quad-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 496,
    "acceleration": "2.3s",
    "topSpeed": "181 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Night Vision",
      "Premium Audio System",
      "Starlight Headliner",
      "Active Aero"
    ],
    "description": "A stunning example of Ferrari engineering. This SF90 Stradale offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-706",
    "name": "BMW M8 Competition",
    "brand": "BMW",
    "model": "M8 Competition",
    "year": 2022,
    "price": 577421,
    "mileage": 9338,
    "engine": "Electric Dual-Motor",
    "transmission": "8-Speed Automatic",
    "fuelType": "Electric",
    "hp": 690,
    "acceleration": "2.1s",
    "topSpeed": "176 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Carbon Fiber Trim",
      "Night Vision",
      "Panoramic Roof"
    ],
    "description": "A stunning example of BMW engineering. This M8 Competition offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-707",
    "name": "Mercedes-Benz EQS 580",
    "brand": "Mercedes-Benz",
    "model": "EQS 580",
    "year": 2022,
    "price": 252851,
    "mileage": 338,
    "engine": "Hybrid V12",
    "transmission": "8-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 1058,
    "acceleration": "4.8s",
    "topSpeed": "159 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Carbon Fiber Trim",
      "Panoramic Roof",
      "Massage Seats"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This EQS 580 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-708",
    "name": "Aston Martin DBS",
    "brand": "Aston Martin",
    "model": "DBS",
    "year": 2024,
    "price": 1626543,
    "mileage": 4852,
    "engine": "V8 Biturbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 409,
    "acceleration": "2.1s",
    "topSpeed": "221 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Night Vision",
      "Adaptive Suspension",
      "Heads-up Display",
      "Massage Seats"
    ],
    "description": "A stunning example of Aston Martin engineering. This DBS offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-709",
    "name": "Ferrari 812 Superfast",
    "brand": "Ferrari",
    "model": "812 Superfast",
    "year": 2022,
    "price": 1013732,
    "mileage": 4225,
    "engine": "V10 Natural",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 890,
    "acceleration": "3.9s",
    "topSpeed": "236 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Ceramic Brakes",
      "Carbon Fiber Trim",
      "Premium Audio System"
    ],
    "description": "A stunning example of Ferrari engineering. This 812 Superfast offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-710",
    "name": "Mercedes-Benz EQS 580",
    "brand": "Mercedes-Benz",
    "model": "EQS 580",
    "year": 2023,
    "price": 1640339,
    "mileage": 7267,
    "engine": "Electric Dual-Motor",
    "transmission": "Single-Speed Electric",
    "fuelType": "Electric",
    "hp": 932,
    "acceleration": "3.7s",
    "topSpeed": "220 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Night Vision",
      "Starlight Headliner",
      "Active Aero",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This EQS 580 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-711",
    "name": "Bentley Continental GT",
    "brand": "Bentley",
    "model": "Continental GT",
    "year": 2021,
    "price": 299830,
    "mileage": 14599,
    "engine": "V12 Twin-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 485,
    "acceleration": "4.8s",
    "topSpeed": "167 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Panoramic Roof",
      "Adaptive Suspension",
      "Heads-up Display",
      "Starlight Headliner"
    ],
    "description": "A stunning example of Bentley engineering. This Continental GT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-712",
    "name": "Aston Martin Valhalla",
    "brand": "Aston Martin",
    "model": "Valhalla",
    "year": 2021,
    "price": 1231722,
    "mileage": 1968,
    "engine": "Electric Dual-Motor",
    "transmission": "8-Speed Automatic",
    "fuelType": "Electric",
    "hp": 1010,
    "acceleration": "2.7s",
    "topSpeed": "217 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Heads-up Display",
      "Premium Audio System",
      "Active Aero",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of Aston Martin engineering. This Valhalla offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-713",
    "name": "Rolls-Royce Spectre",
    "brand": "Rolls-Royce",
    "model": "Spectre",
    "year": 2021,
    "price": 992729,
    "mileage": 5397,
    "engine": "Hybrid V12",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Hybrid",
    "hp": 643,
    "acceleration": "3.5s",
    "topSpeed": "191 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Soft-close Doors",
      "Starlight Headliner",
      "Massage Seats",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Spectre offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-714",
    "name": "Lamborghini Aventador",
    "brand": "Lamborghini",
    "model": "Aventador",
    "year": 2021,
    "price": 165201,
    "mileage": 9663,
    "engine": "W16 Quad-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 721,
    "acceleration": "2.5s",
    "topSpeed": "169 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Panoramic Roof",
      "Massage Seats",
      "Ceramic Brakes",
      "Premium Audio System"
    ],
    "description": "A stunning example of Lamborghini engineering. This Aventador offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-715",
    "name": "Porsche 911 Turbo S",
    "brand": "Porsche",
    "model": "911 Turbo S",
    "year": 2023,
    "price": 1712421,
    "mileage": 11550,
    "engine": "V8 Biturbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 1123,
    "acceleration": "4.9s",
    "topSpeed": "168 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Massage Seats",
      "Panoramic Roof",
      "Ceramic Brakes",
      "Soft-close Doors"
    ],
    "description": "A stunning example of Porsche engineering. This 911 Turbo S offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-716",
    "name": "Porsche Cayenne Turbo",
    "brand": "Porsche",
    "model": "Cayenne Turbo",
    "year": 2023,
    "price": 815649,
    "mileage": 2738,
    "engine": "V12 Twin-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 584,
    "acceleration": "3.7s",
    "topSpeed": "187 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Massage Seats",
      "Night Vision",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of Porsche engineering. This Cayenne Turbo offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-717",
    "name": "BMW M4 CSL",
    "brand": "BMW",
    "model": "M4 CSL",
    "year": 2022,
    "price": 888334,
    "mileage": 14047,
    "engine": "V8 Biturbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 797,
    "acceleration": "2.3s",
    "topSpeed": "151 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Massage Seats",
      "Carbon Fiber Trim",
      "Ceramic Brakes",
      "Heads-up Display"
    ],
    "description": "A stunning example of BMW engineering. This M4 CSL offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-718",
    "name": "BMW X7 M60i",
    "brand": "BMW",
    "model": "X7 M60i",
    "year": 2022,
    "price": 1573223,
    "mileage": 839,
    "engine": "V12 Twin-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 419,
    "acceleration": "4.1s",
    "topSpeed": "239 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Bespoke Leather Interior",
      "Starlight Headliner",
      "Soft-close Doors"
    ],
    "description": "A stunning example of BMW engineering. This X7 M60i offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-719",
    "name": "Rolls-Royce Spectre",
    "brand": "Rolls-Royce",
    "model": "Spectre",
    "year": 2023,
    "price": 1350826,
    "mileage": 624,
    "engine": "Flat-6 Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 632,
    "acceleration": "2.8s",
    "topSpeed": "169 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Night Vision",
      "Heads-up Display",
      "Premium Audio System",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Spectre offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-720",
    "name": "Rolls-Royce Cullinan",
    "brand": "Rolls-Royce",
    "model": "Cullinan",
    "year": 2023,
    "price": 920322,
    "mileage": 10078,
    "engine": "V8 Biturbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 916,
    "acceleration": "4.3s",
    "topSpeed": "176 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Bespoke Leather Interior",
      "Night Vision",
      "Panoramic Roof",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Cullinan offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-721",
    "name": "Lamborghini Sian",
    "brand": "Lamborghini",
    "model": "Sian",
    "year": 2023,
    "price": 1471463,
    "mileage": 6545,
    "engine": "Electric Dual-Motor",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Electric",
    "hp": 1028,
    "acceleration": "5.0s",
    "topSpeed": "158 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Night Vision",
      "Starlight Headliner",
      "Premium Audio System",
      "Massage Seats"
    ],
    "description": "A stunning example of Lamborghini engineering. This Sian offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-722",
    "name": "BMW X7 M60i",
    "brand": "BMW",
    "model": "X7 M60i",
    "year": 2024,
    "price": 2029957,
    "mileage": 10701,
    "engine": "V12 Twin-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 957,
    "acceleration": "3.7s",
    "topSpeed": "164 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Ceramic Brakes",
      "Carbon Fiber Trim",
      "Panoramic Roof",
      "Massage Seats"
    ],
    "description": "A stunning example of BMW engineering. This X7 M60i offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-723",
    "name": "Range Rover Sport SVR",
    "brand": "Range Rover",
    "model": "Sport SVR",
    "year": 2021,
    "price": 730204,
    "mileage": 14673,
    "engine": "Electric Dual-Motor",
    "transmission": "8-Speed Automatic",
    "fuelType": "Electric",
    "hp": 826,
    "acceleration": "2.7s",
    "topSpeed": "231 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Reserved",
    "features": [
      "Soft-close Doors",
      "Active Aero",
      "Bespoke Leather Interior",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Range Rover engineering. This Sport SVR offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-724",
    "name": "BMW i7 M70",
    "brand": "BMW",
    "model": "i7 M70",
    "year": 2023,
    "price": 1594267,
    "mileage": 7479,
    "engine": "V8 Biturbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 960,
    "acceleration": "2.0s",
    "topSpeed": "214 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Active Aero",
      "Starlight Headliner",
      "Night Vision",
      "Heads-up Display"
    ],
    "description": "A stunning example of BMW engineering. This i7 M70 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-725",
    "name": "Porsche Panamera",
    "brand": "Porsche",
    "model": "Panamera",
    "year": 2021,
    "price": 1477583,
    "mileage": 10377,
    "engine": "Electric Dual-Motor",
    "transmission": "9-Speed Automatic",
    "fuelType": "Electric",
    "hp": 855,
    "acceleration": "4.7s",
    "topSpeed": "187 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Bespoke Leather Interior",
      "Adaptive Suspension",
      "Starlight Headliner",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Porsche engineering. This Panamera offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-726",
    "name": "Bentley Flying Spur",
    "brand": "Bentley",
    "model": "Flying Spur",
    "year": 2023,
    "price": 207103,
    "mileage": 13167,
    "engine": "Hybrid V12",
    "transmission": "Single-Speed Electric",
    "fuelType": "Hybrid",
    "hp": 1032,
    "acceleration": "2.2s",
    "topSpeed": "238 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Night Vision",
      "Carbon Fiber Trim",
      "Heads-up Display"
    ],
    "description": "A stunning example of Bentley engineering. This Flying Spur offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-727",
    "name": "Porsche Cayenne Turbo",
    "brand": "Porsche",
    "model": "Cayenne Turbo",
    "year": 2023,
    "price": 1639595,
    "mileage": 6143,
    "engine": "W16 Quad-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 595,
    "acceleration": "3.5s",
    "topSpeed": "228 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Ceramic Brakes",
      "Carbon Fiber Trim",
      "Soft-close Doors"
    ],
    "description": "A stunning example of Porsche engineering. This Cayenne Turbo offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-728",
    "name": "Lamborghini Sian",
    "brand": "Lamborghini",
    "model": "Sian",
    "year": 2021,
    "price": 2090377,
    "mileage": 11310,
    "engine": "W16 Quad-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 627,
    "acceleration": "3.7s",
    "topSpeed": "212 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Ceramic Brakes",
      "Carbon Fiber Trim",
      "Massage Seats"
    ],
    "description": "A stunning example of Lamborghini engineering. This Sian offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-729",
    "name": "McLaren 720S",
    "brand": "McLaren",
    "model": "720S",
    "year": 2020,
    "price": 932617,
    "mileage": 6695,
    "engine": "V12 Twin-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 507,
    "acceleration": "2.1s",
    "topSpeed": "245 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Heads-up Display",
      "Ceramic Brakes",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of McLaren engineering. This 720S offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-730",
    "name": "Mercedes-Benz S-Class Maybach",
    "brand": "Mercedes-Benz",
    "model": "S-Class Maybach",
    "year": 2024,
    "price": 725235,
    "mileage": 13109,
    "engine": "Electric Dual-Motor",
    "transmission": "8-Speed Automatic",
    "fuelType": "Electric",
    "hp": 749,
    "acceleration": "4.6s",
    "topSpeed": "171 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Bespoke Leather Interior",
      "Ceramic Brakes",
      "Carbon Fiber Trim",
      "Premium Audio System"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This S-Class Maybach offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-731",
    "name": "Porsche Panamera",
    "brand": "Porsche",
    "model": "Panamera",
    "year": 2021,
    "price": 1313391,
    "mileage": 12656,
    "engine": "Electric Dual-Motor",
    "transmission": "8-Speed Automatic",
    "fuelType": "Electric",
    "hp": 638,
    "acceleration": "2.4s",
    "topSpeed": "160 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Starlight Headliner",
      "Heads-up Display",
      "Massage Seats",
      "Night Vision"
    ],
    "description": "A stunning example of Porsche engineering. This Panamera offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-732",
    "name": "McLaren P1",
    "brand": "McLaren",
    "model": "P1",
    "year": 2023,
    "price": 1060173,
    "mileage": 4907,
    "engine": "Electric Dual-Motor",
    "transmission": "8-Speed Automatic",
    "fuelType": "Electric",
    "hp": 966,
    "acceleration": "2.0s",
    "topSpeed": "241 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Night Vision",
      "Premium Audio System",
      "Massage Seats"
    ],
    "description": "A stunning example of McLaren engineering. This P1 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-733",
    "name": "Rolls-Royce Spectre",
    "brand": "Rolls-Royce",
    "model": "Spectre",
    "year": 2022,
    "price": 1825211,
    "mileage": 14593,
    "engine": "V8 Biturbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 1141,
    "acceleration": "3.6s",
    "topSpeed": "159 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Panoramic Roof",
      "Starlight Headliner",
      "Active Aero"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Spectre offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-734",
    "name": "Rolls-Royce Dawn",
    "brand": "Rolls-Royce",
    "model": "Dawn",
    "year": 2022,
    "price": 1178569,
    "mileage": 14210,
    "engine": "Electric Dual-Motor",
    "transmission": "Single-Speed Electric",
    "fuelType": "Electric",
    "hp": 547,
    "acceleration": "3.6s",
    "topSpeed": "156 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Massage Seats",
      "Soft-close Doors",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Dawn offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-735",
    "name": "Lamborghini Aventador",
    "brand": "Lamborghini",
    "model": "Aventador",
    "year": 2023,
    "price": 227600,
    "mileage": 5789,
    "engine": "V12 Twin-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 732,
    "acceleration": "4.7s",
    "topSpeed": "177 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Bespoke Leather Interior",
      "Soft-close Doors",
      "Massage Seats"
    ],
    "description": "A stunning example of Lamborghini engineering. This Aventador offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-736",
    "name": "Rolls-Royce Dawn",
    "brand": "Rolls-Royce",
    "model": "Dawn",
    "year": 2020,
    "price": 744441,
    "mileage": 10574,
    "engine": "Flat-6 Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 674,
    "acceleration": "2.5s",
    "topSpeed": "207 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Soft-close Doors",
      "Adaptive Suspension",
      "Starlight Headliner",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Dawn offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-737",
    "name": "Range Rover Velar",
    "brand": "Range Rover",
    "model": "Velar",
    "year": 2021,
    "price": 1576384,
    "mileage": 10569,
    "engine": "Hybrid V12",
    "transmission": "Single-Speed Electric",
    "fuelType": "Hybrid",
    "hp": 706,
    "acceleration": "2.0s",
    "topSpeed": "174 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Massage Seats",
      "Premium Audio System",
      "Soft-close Doors",
      "Starlight Headliner"
    ],
    "description": "A stunning example of Range Rover engineering. This Velar offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-738",
    "name": "BMW i7 M70",
    "brand": "BMW",
    "model": "i7 M70",
    "year": 2023,
    "price": 2003793,
    "mileage": 81,
    "engine": "V10 Natural",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 496,
    "acceleration": "4.9s",
    "topSpeed": "182 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Night Vision",
      "Massage Seats",
      "Panoramic Roof"
    ],
    "description": "A stunning example of BMW engineering. This i7 M70 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-739",
    "name": "BMW X7 M60i",
    "brand": "BMW",
    "model": "X7 M60i",
    "year": 2022,
    "price": 865136,
    "mileage": 9802,
    "engine": "V10 Natural",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 713,
    "acceleration": "2.2s",
    "topSpeed": "188 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Active Aero",
      "Soft-close Doors",
      "Starlight Headliner",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of BMW engineering. This X7 M60i offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-740",
    "name": "Bentley Bentayga",
    "brand": "Bentley",
    "model": "Bentayga",
    "year": 2024,
    "price": 333016,
    "mileage": 103,
    "engine": "Flat-6 Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 565,
    "acceleration": "3.8s",
    "topSpeed": "175 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Premium Audio System",
      "Panoramic Roof",
      "Night Vision"
    ],
    "description": "A stunning example of Bentley engineering. This Bentayga offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-741",
    "name": "McLaren 720S",
    "brand": "McLaren",
    "model": "720S",
    "year": 2023,
    "price": 892502,
    "mileage": 13510,
    "engine": "Hybrid V12",
    "transmission": "9-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 1094,
    "acceleration": "3.8s",
    "topSpeed": "189 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Carbon Fiber Trim",
      "Night Vision",
      "Massage Seats"
    ],
    "description": "A stunning example of McLaren engineering. This 720S offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-742",
    "name": "McLaren 765LT",
    "brand": "McLaren",
    "model": "765LT",
    "year": 2022,
    "price": 493899,
    "mileage": 1584,
    "engine": "W16 Quad-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1162,
    "acceleration": "2.1s",
    "topSpeed": "172 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Massage Seats",
      "Active Aero",
      "Carbon Fiber Trim",
      "Starlight Headliner"
    ],
    "description": "A stunning example of McLaren engineering. This 765LT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-743",
    "name": "McLaren P1",
    "brand": "McLaren",
    "model": "P1",
    "year": 2022,
    "price": 908187,
    "mileage": 13348,
    "engine": "W16 Quad-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 703,
    "acceleration": "4.3s",
    "topSpeed": "179 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Panoramic Roof",
      "Night Vision",
      "Starlight Headliner",
      "Premium Audio System"
    ],
    "description": "A stunning example of McLaren engineering. This P1 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-744",
    "name": "Bentley Bentayga",
    "brand": "Bentley",
    "model": "Bentayga",
    "year": 2023,
    "price": 943674,
    "mileage": 11915,
    "engine": "V8 Biturbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 609,
    "acceleration": "3.3s",
    "topSpeed": "241 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Reserved",
    "features": [
      "Adaptive Suspension",
      "Premium Audio System",
      "Soft-close Doors",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Bentley engineering. This Bentayga offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-745",
    "name": "Ferrari 296 GTB",
    "brand": "Ferrari",
    "model": "296 GTB",
    "year": 2023,
    "price": 1825749,
    "mileage": 1120,
    "engine": "Hybrid V12",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Hybrid",
    "hp": 672,
    "acceleration": "3.3s",
    "topSpeed": "184 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Active Aero",
      "Adaptive Suspension",
      "Starlight Headliner"
    ],
    "description": "A stunning example of Ferrari engineering. This 296 GTB offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-746",
    "name": "BMW i7 M70",
    "brand": "BMW",
    "model": "i7 M70",
    "year": 2021,
    "price": 177172,
    "mileage": 5823,
    "engine": "V12 Twin-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 548,
    "acceleration": "4.1s",
    "topSpeed": "196 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Premium Audio System",
      "Massage Seats",
      "Soft-close Doors"
    ],
    "description": "A stunning example of BMW engineering. This i7 M70 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-747",
    "name": "Lamborghini Urus",
    "brand": "Lamborghini",
    "model": "Urus",
    "year": 2020,
    "price": 425480,
    "mileage": 182,
    "engine": "W16 Quad-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 454,
    "acceleration": "2.9s",
    "topSpeed": "196 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Panoramic Roof",
      "Starlight Headliner",
      "Active Aero"
    ],
    "description": "A stunning example of Lamborghini engineering. This Urus offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-748",
    "name": "Range Rover SV",
    "brand": "Range Rover",
    "model": "SV",
    "year": 2024,
    "price": 264209,
    "mileage": 4513,
    "engine": "V8 Biturbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 839,
    "acceleration": "4.9s",
    "topSpeed": "159 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Heads-up Display",
      "Panoramic Roof",
      "Premium Audio System"
    ],
    "description": "A stunning example of Range Rover engineering. This SV offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-749",
    "name": "Bugatti Divo",
    "brand": "Bugatti",
    "model": "Divo",
    "year": 2021,
    "price": 273229,
    "mileage": 12513,
    "engine": "W16 Quad-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 892,
    "acceleration": "3.5s",
    "topSpeed": "196 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Soft-close Doors",
      "Massage Seats",
      "Starlight Headliner"
    ],
    "description": "A stunning example of Bugatti engineering. This Divo offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-750",
    "name": "Ferrari 812 Superfast",
    "brand": "Ferrari",
    "model": "812 Superfast",
    "year": 2020,
    "price": 1356683,
    "mileage": 12415,
    "engine": "V10 Natural",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 1116,
    "acceleration": "4.7s",
    "topSpeed": "165 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Panoramic Roof",
      "Adaptive Suspension",
      "Massage Seats"
    ],
    "description": "A stunning example of Ferrari engineering. This 812 Superfast offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-751",
    "name": "Ferrari SF90 Stradale",
    "brand": "Ferrari",
    "model": "SF90 Stradale",
    "year": 2023,
    "price": 1961902,
    "mileage": 116,
    "engine": "Hybrid V12",
    "transmission": "8-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 1078,
    "acceleration": "2.1s",
    "topSpeed": "182 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Starlight Headliner",
      "Active Aero",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of Ferrari engineering. This SF90 Stradale offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-752",
    "name": "Range Rover Autobiography",
    "brand": "Range Rover",
    "model": "Autobiography",
    "year": 2022,
    "price": 1136148,
    "mileage": 5468,
    "engine": "V10 Natural",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 816,
    "acceleration": "2.1s",
    "topSpeed": "172 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Active Aero",
      "Adaptive Suspension",
      "Carbon Fiber Trim",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Range Rover engineering. This Autobiography offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-753",
    "name": "Bugatti Chiron",
    "brand": "Bugatti",
    "model": "Chiron",
    "year": 2022,
    "price": 1725122,
    "mileage": 14878,
    "engine": "V8 Biturbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 713,
    "acceleration": "2.2s",
    "topSpeed": "201 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Panoramic Roof",
      "Starlight Headliner",
      "Massage Seats",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Bugatti engineering. This Chiron offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-754",
    "name": "Range Rover Velar",
    "brand": "Range Rover",
    "model": "Velar",
    "year": 2021,
    "price": 1689138,
    "mileage": 2478,
    "engine": "Hybrid V12",
    "transmission": "Single-Speed Electric",
    "fuelType": "Hybrid",
    "hp": 482,
    "acceleration": "3.6s",
    "topSpeed": "235 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Adaptive Suspension",
      "Carbon Fiber Trim",
      "Night Vision"
    ],
    "description": "A stunning example of Range Rover engineering. This Velar offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-755",
    "name": "Mercedes-Benz GT Black Series",
    "brand": "Mercedes-Benz",
    "model": "GT Black Series",
    "year": 2022,
    "price": 1537085,
    "mileage": 1442,
    "engine": "Flat-6 Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 881,
    "acceleration": "2.8s",
    "topSpeed": "235 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Starlight Headliner",
      "Night Vision",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This GT Black Series offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-756",
    "name": "Aston Martin DB11",
    "brand": "Aston Martin",
    "model": "DB11",
    "year": 2021,
    "price": 1822204,
    "mileage": 13050,
    "engine": "V12 Twin-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 480,
    "acceleration": "3.0s",
    "topSpeed": "230 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Active Aero",
      "Adaptive Suspension",
      "Soft-close Doors",
      "Premium Audio System"
    ],
    "description": "A stunning example of Aston Martin engineering. This DB11 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-757",
    "name": "Ferrari Purosangue",
    "brand": "Ferrari",
    "model": "Purosangue",
    "year": 2022,
    "price": 1648655,
    "mileage": 11080,
    "engine": "Electric Dual-Motor",
    "transmission": "9-Speed Automatic",
    "fuelType": "Electric",
    "hp": 872,
    "acceleration": "4.9s",
    "topSpeed": "202 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Bespoke Leather Interior",
      "Soft-close Doors",
      "Heads-up Display"
    ],
    "description": "A stunning example of Ferrari engineering. This Purosangue offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-758",
    "name": "Bentley Continental GT",
    "brand": "Bentley",
    "model": "Continental GT",
    "year": 2024,
    "price": 1608694,
    "mileage": 10562,
    "engine": "V12 Twin-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 451,
    "acceleration": "3.5s",
    "topSpeed": "234 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Starlight Headliner",
      "Massage Seats",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Bentley engineering. This Continental GT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-759",
    "name": "Mercedes-Benz EQS 580",
    "brand": "Mercedes-Benz",
    "model": "EQS 580",
    "year": 2020,
    "price": 1946689,
    "mileage": 10330,
    "engine": "Electric Dual-Motor",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Electric",
    "hp": 1118,
    "acceleration": "3.6s",
    "topSpeed": "209 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Premium Audio System",
      "Heads-up Display",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This EQS 580 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-760",
    "name": "Bentley Flying Spur",
    "brand": "Bentley",
    "model": "Flying Spur",
    "year": 2021,
    "price": 205382,
    "mileage": 5484,
    "engine": "Hybrid V12",
    "transmission": "8-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 537,
    "acceleration": "2.1s",
    "topSpeed": "191 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Reserved",
    "features": [
      "Active Aero",
      "Ceramic Brakes",
      "Carbon Fiber Trim",
      "Premium Audio System"
    ],
    "description": "A stunning example of Bentley engineering. This Flying Spur offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-761",
    "name": "McLaren P1",
    "brand": "McLaren",
    "model": "P1",
    "year": 2020,
    "price": 1499786,
    "mileage": 5452,
    "engine": "W16 Quad-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 611,
    "acceleration": "4.9s",
    "topSpeed": "166 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Ceramic Brakes",
      "Active Aero",
      "Starlight Headliner"
    ],
    "description": "A stunning example of McLaren engineering. This P1 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-762",
    "name": "BMW M4 CSL",
    "brand": "BMW",
    "model": "M4 CSL",
    "year": 2024,
    "price": 1971652,
    "mileage": 5689,
    "engine": "Hybrid V12",
    "transmission": "Single-Speed Electric",
    "fuelType": "Hybrid",
    "hp": 703,
    "acceleration": "4.9s",
    "topSpeed": "173 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Massage Seats",
      "Heads-up Display",
      "Premium Audio System",
      "Active Aero"
    ],
    "description": "A stunning example of BMW engineering. This M4 CSL offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-763",
    "name": "BMW M8 Competition",
    "brand": "BMW",
    "model": "M8 Competition",
    "year": 2020,
    "price": 1750649,
    "mileage": 2847,
    "engine": "Electric Dual-Motor",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Electric",
    "hp": 610,
    "acceleration": "3.1s",
    "topSpeed": "245 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Adaptive Suspension",
      "Ceramic Brakes",
      "Active Aero",
      "Massage Seats"
    ],
    "description": "A stunning example of BMW engineering. This M8 Competition offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-764",
    "name": "Aston Martin DBS",
    "brand": "Aston Martin",
    "model": "DBS",
    "year": 2020,
    "price": 645204,
    "mileage": 5913,
    "engine": "V8 Biturbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 1118,
    "acceleration": "2.8s",
    "topSpeed": "201 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Starlight Headliner",
      "Soft-close Doors",
      "Premium Audio System"
    ],
    "description": "A stunning example of Aston Martin engineering. This DBS offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-765",
    "name": "Lamborghini Revuelto",
    "brand": "Lamborghini",
    "model": "Revuelto",
    "year": 2020,
    "price": 1875242,
    "mileage": 3947,
    "engine": "V8 Biturbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 516,
    "acceleration": "3.5s",
    "topSpeed": "229 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Bespoke Leather Interior",
      "Soft-close Doors",
      "Massage Seats",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of Lamborghini engineering. This Revuelto offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-766",
    "name": "Bugatti Mistral",
    "brand": "Bugatti",
    "model": "Mistral",
    "year": 2020,
    "price": 439926,
    "mileage": 12361,
    "engine": "Electric Dual-Motor",
    "transmission": "9-Speed Automatic",
    "fuelType": "Electric",
    "hp": 894,
    "acceleration": "2.9s",
    "topSpeed": "179 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Night Vision",
      "Premium Audio System",
      "Panoramic Roof",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of Bugatti engineering. This Mistral offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-767",
    "name": "BMW M4 CSL",
    "brand": "BMW",
    "model": "M4 CSL",
    "year": 2023,
    "price": 1049236,
    "mileage": 5913,
    "engine": "Flat-6 Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 722,
    "acceleration": "3.0s",
    "topSpeed": "176 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Massage Seats",
      "Panoramic Roof",
      "Starlight Headliner",
      "Heads-up Display"
    ],
    "description": "A stunning example of BMW engineering. This M4 CSL offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-768",
    "name": "Lamborghini Aventador",
    "brand": "Lamborghini",
    "model": "Aventador",
    "year": 2024,
    "price": 645560,
    "mileage": 4455,
    "engine": "W16 Quad-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 890,
    "acceleration": "2.5s",
    "topSpeed": "152 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Massage Seats",
      "Panoramic Roof",
      "Premium Audio System",
      "Starlight Headliner"
    ],
    "description": "A stunning example of Lamborghini engineering. This Aventador offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-769",
    "name": "Mercedes-Benz G 63 AMG",
    "brand": "Mercedes-Benz",
    "model": "G 63 AMG",
    "year": 2024,
    "price": 1160443,
    "mileage": 14382,
    "engine": "Flat-6 Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 940,
    "acceleration": "4.3s",
    "topSpeed": "224 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Ceramic Brakes",
      "Massage Seats",
      "Active Aero"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This G 63 AMG offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-770",
    "name": "Mercedes-Benz EQS 580",
    "brand": "Mercedes-Benz",
    "model": "EQS 580",
    "year": 2023,
    "price": 999480,
    "mileage": 92,
    "engine": "Electric Dual-Motor",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Electric",
    "hp": 930,
    "acceleration": "3.6s",
    "topSpeed": "155 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Ceramic Brakes",
      "Night Vision",
      "Starlight Headliner"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This EQS 580 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-771",
    "name": "Bentley Bentayga",
    "brand": "Bentley",
    "model": "Bentayga",
    "year": 2021,
    "price": 676864,
    "mileage": 12185,
    "engine": "Flat-6 Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 1012,
    "acceleration": "2.0s",
    "topSpeed": "241 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Massage Seats",
      "Adaptive Suspension",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of Bentley engineering. This Bentayga offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-772",
    "name": "Bugatti Divo",
    "brand": "Bugatti",
    "model": "Divo",
    "year": 2023,
    "price": 1873491,
    "mileage": 6713,
    "engine": "V12 Twin-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 661,
    "acceleration": "4.9s",
    "topSpeed": "237 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Starlight Headliner",
      "Bespoke Leather Interior",
      "Massage Seats"
    ],
    "description": "A stunning example of Bugatti engineering. This Divo offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-773",
    "name": "BMW i7 M70",
    "brand": "BMW",
    "model": "i7 M70",
    "year": 2024,
    "price": 1776325,
    "mileage": 3191,
    "engine": "Flat-6 Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1125,
    "acceleration": "4.8s",
    "topSpeed": "243 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Soft-close Doors",
      "Premium Audio System",
      "Massage Seats",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of BMW engineering. This i7 M70 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-774",
    "name": "Bentley Flying Spur",
    "brand": "Bentley",
    "model": "Flying Spur",
    "year": 2024,
    "price": 1685195,
    "mileage": 120,
    "engine": "V8 Biturbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 760,
    "acceleration": "5.0s",
    "topSpeed": "164 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Panoramic Roof",
      "Soft-close Doors",
      "Starlight Headliner"
    ],
    "description": "A stunning example of Bentley engineering. This Flying Spur offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-775",
    "name": "Ferrari Purosangue",
    "brand": "Ferrari",
    "model": "Purosangue",
    "year": 2022,
    "price": 1692191,
    "mileage": 1272,
    "engine": "W16 Quad-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 685,
    "acceleration": "3.4s",
    "topSpeed": "213 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Soft-close Doors",
      "Panoramic Roof",
      "Massage Seats",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Ferrari engineering. This Purosangue offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-776",
    "name": "Lamborghini Urus",
    "brand": "Lamborghini",
    "model": "Urus",
    "year": 2020,
    "price": 851341,
    "mileage": 670,
    "engine": "Flat-6 Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 1123,
    "acceleration": "2.7s",
    "topSpeed": "203 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Night Vision",
      "Massage Seats",
      "Soft-close Doors",
      "Active Aero"
    ],
    "description": "A stunning example of Lamborghini engineering. This Urus offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-777",
    "name": "Range Rover SV",
    "brand": "Range Rover",
    "model": "SV",
    "year": 2020,
    "price": 492771,
    "mileage": 13024,
    "engine": "Flat-6 Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 878,
    "acceleration": "2.7s",
    "topSpeed": "198 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Night Vision",
      "Starlight Headliner",
      "Heads-up Display"
    ],
    "description": "A stunning example of Range Rover engineering. This SV offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-778",
    "name": "Lamborghini Hurac├ín",
    "brand": "Lamborghini",
    "model": "Hurac├ín",
    "year": 2020,
    "price": 1960201,
    "mileage": 4455,
    "engine": "Flat-6 Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 751,
    "acceleration": "4.2s",
    "topSpeed": "190 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Starlight Headliner",
      "Active Aero",
      "Soft-close Doors"
    ],
    "description": "A stunning example of Lamborghini engineering. This Hurac├ín offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-779",
    "name": "Bentley Flying Spur",
    "brand": "Bentley",
    "model": "Flying Spur",
    "year": 2022,
    "price": 1551153,
    "mileage": 14566,
    "engine": "Hybrid V12",
    "transmission": "9-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 686,
    "acceleration": "2.4s",
    "topSpeed": "232 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Starlight Headliner",
      "Night Vision",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of Bentley engineering. This Flying Spur offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-780",
    "name": "Rolls-Royce Cullinan",
    "brand": "Rolls-Royce",
    "model": "Cullinan",
    "year": 2024,
    "price": 434109,
    "mileage": 3088,
    "engine": "V10 Natural",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 402,
    "acceleration": "4.5s",
    "topSpeed": "226 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Bespoke Leather Interior",
      "Active Aero",
      "Heads-up Display",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Cullinan offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-781",
    "name": "Porsche Taycan",
    "brand": "Porsche",
    "model": "Taycan",
    "year": 2020,
    "price": 1434224,
    "mileage": 14204,
    "engine": "W16 Quad-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1024,
    "acceleration": "3.8s",
    "topSpeed": "174 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Premium Audio System",
      "Heads-up Display",
      "Bespoke Leather Interior",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Porsche engineering. This Taycan offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-782",
    "name": "Lamborghini Urus",
    "brand": "Lamborghini",
    "model": "Urus",
    "year": 2020,
    "price": 487836,
    "mileage": 372,
    "engine": "Flat-6 Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 708,
    "acceleration": "4.2s",
    "topSpeed": "232 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Soft-close Doors",
      "Adaptive Suspension",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Lamborghini engineering. This Urus offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-783",
    "name": "Range Rover Velar",
    "brand": "Range Rover",
    "model": "Velar",
    "year": 2023,
    "price": 1581896,
    "mileage": 13958,
    "engine": "V12 Twin-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 536,
    "acceleration": "2.2s",
    "topSpeed": "242 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Ceramic Brakes",
      "Massage Seats",
      "Heads-up Display"
    ],
    "description": "A stunning example of Range Rover engineering. This Velar offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-784",
    "name": "McLaren P1",
    "brand": "McLaren",
    "model": "P1",
    "year": 2023,
    "price": 1491262,
    "mileage": 8452,
    "engine": "Electric Dual-Motor",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Electric",
    "hp": 522,
    "acceleration": "2.0s",
    "topSpeed": "169 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Heads-up Display",
      "Ceramic Brakes",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of McLaren engineering. This P1 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-785",
    "name": "Lamborghini Hurac├ín",
    "brand": "Lamborghini",
    "model": "Hurac├ín",
    "year": 2021,
    "price": 1522579,
    "mileage": 6470,
    "engine": "V8 Biturbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 674,
    "acceleration": "2.3s",
    "topSpeed": "166 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Massage Seats",
      "Active Aero",
      "Premium Audio System"
    ],
    "description": "A stunning example of Lamborghini engineering. This Hurac├ín offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-786",
    "name": "BMW M4 CSL",
    "brand": "BMW",
    "model": "M4 CSL",
    "year": 2022,
    "price": 1521965,
    "mileage": 8788,
    "engine": "V10 Natural",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 686,
    "acceleration": "4.5s",
    "topSpeed": "168 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Ceramic Brakes",
      "Heads-up Display",
      "Premium Audio System"
    ],
    "description": "A stunning example of BMW engineering. This M4 CSL offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-787",
    "name": "McLaren GT",
    "brand": "McLaren",
    "model": "GT",
    "year": 2023,
    "price": 109468,
    "mileage": 13381,
    "engine": "V8 Biturbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 969,
    "acceleration": "3.3s",
    "topSpeed": "174 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Premium Audio System",
      "Adaptive Suspension",
      "Starlight Headliner"
    ],
    "description": "A stunning example of McLaren engineering. This GT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-788",
    "name": "Lamborghini Revuelto",
    "brand": "Lamborghini",
    "model": "Revuelto",
    "year": 2024,
    "price": 1932303,
    "mileage": 2914,
    "engine": "V8 Biturbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1061,
    "acceleration": "3.2s",
    "topSpeed": "192 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Active Aero",
      "Soft-close Doors",
      "Starlight Headliner"
    ],
    "description": "A stunning example of Lamborghini engineering. This Revuelto offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-789",
    "name": "Ferrari Purosangue",
    "brand": "Ferrari",
    "model": "Purosangue",
    "year": 2020,
    "price": 1306430,
    "mileage": 13604,
    "engine": "W16 Quad-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 1091,
    "acceleration": "4.2s",
    "topSpeed": "204 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Starlight Headliner",
      "Massage Seats",
      "Carbon Fiber Trim",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Ferrari engineering. This Purosangue offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-790",
    "name": "Aston Martin DBS",
    "brand": "Aston Martin",
    "model": "DBS",
    "year": 2020,
    "price": 1405784,
    "mileage": 5442,
    "engine": "W16 Quad-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 498,
    "acceleration": "3.8s",
    "topSpeed": "221 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Active Aero",
      "Carbon Fiber Trim",
      "Ceramic Brakes",
      "Starlight Headliner"
    ],
    "description": "A stunning example of Aston Martin engineering. This DBS offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-791",
    "name": "Range Rover Velar",
    "brand": "Range Rover",
    "model": "Velar",
    "year": 2021,
    "price": 662225,
    "mileage": 5570,
    "engine": "V12 Twin-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 910,
    "acceleration": "4.5s",
    "topSpeed": "193 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Massage Seats",
      "Heads-up Display",
      "Soft-close Doors"
    ],
    "description": "A stunning example of Range Rover engineering. This Velar offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-792",
    "name": "BMW M4 CSL",
    "brand": "BMW",
    "model": "M4 CSL",
    "year": 2022,
    "price": 713102,
    "mileage": 14481,
    "engine": "V8 Biturbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 575,
    "acceleration": "3.1s",
    "topSpeed": "157 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Soft-close Doors",
      "Carbon Fiber Trim",
      "Ceramic Brakes",
      "Active Aero"
    ],
    "description": "A stunning example of BMW engineering. This M4 CSL offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-793",
    "name": "Ferrari SF90 Stradale",
    "brand": "Ferrari",
    "model": "SF90 Stradale",
    "year": 2021,
    "price": 1722618,
    "mileage": 9860,
    "engine": "V10 Natural",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 782,
    "acceleration": "2.9s",
    "topSpeed": "154 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Adaptive Suspension",
      "Night Vision",
      "Premium Audio System"
    ],
    "description": "A stunning example of Ferrari engineering. This SF90 Stradale offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-794",
    "name": "BMW M8 Competition",
    "brand": "BMW",
    "model": "M8 Competition",
    "year": 2023,
    "price": 373637,
    "mileage": 14510,
    "engine": "Hybrid V12",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Hybrid",
    "hp": 963,
    "acceleration": "3.4s",
    "topSpeed": "202 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Soft-close Doors",
      "Adaptive Suspension",
      "Starlight Headliner",
      "Massage Seats"
    ],
    "description": "A stunning example of BMW engineering. This M8 Competition offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-795",
    "name": "Aston Martin DBX",
    "brand": "Aston Martin",
    "model": "DBX",
    "year": 2022,
    "price": 1406003,
    "mileage": 13457,
    "engine": "V8 Biturbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 981,
    "acceleration": "4.4s",
    "topSpeed": "227 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Night Vision",
      "Heads-up Display",
      "Soft-close Doors",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Aston Martin engineering. This DBX offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-796",
    "name": "Mercedes-Benz GT Black Series",
    "brand": "Mercedes-Benz",
    "model": "GT Black Series",
    "year": 2021,
    "price": 433661,
    "mileage": 14991,
    "engine": "Flat-6 Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 906,
    "acceleration": "3.2s",
    "topSpeed": "155 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Active Aero",
      "Massage Seats",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This GT Black Series offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-797",
    "name": "Bentley Flying Spur",
    "brand": "Bentley",
    "model": "Flying Spur",
    "year": 2024,
    "price": 588561,
    "mileage": 4909,
    "engine": "Flat-6 Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 728,
    "acceleration": "2.7s",
    "topSpeed": "197 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Panoramic Roof",
      "Bespoke Leather Interior",
      "Ceramic Brakes",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of Bentley engineering. This Flying Spur offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-798",
    "name": "Range Rover SV",
    "brand": "Range Rover",
    "model": "SV",
    "year": 2024,
    "price": 414910,
    "mileage": 6825,
    "engine": "Electric Dual-Motor",
    "transmission": "9-Speed Automatic",
    "fuelType": "Electric",
    "hp": 710,
    "acceleration": "2.2s",
    "topSpeed": "182 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Night Vision",
      "Carbon Fiber Trim",
      "Soft-close Doors",
      "Active Aero"
    ],
    "description": "A stunning example of Range Rover engineering. This SV offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-799",
    "name": "Bugatti Veyron",
    "brand": "Bugatti",
    "model": "Veyron",
    "year": 2021,
    "price": 735500,
    "mileage": 7631,
    "engine": "Flat-6 Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 781,
    "acceleration": "4.1s",
    "topSpeed": "173 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Reserved",
    "features": [
      "Premium Audio System",
      "Ceramic Brakes",
      "Heads-up Display",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Bugatti engineering. This Veyron offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-800",
    "name": "McLaren 765LT",
    "brand": "McLaren",
    "model": "765LT",
    "year": 2021,
    "price": 405798,
    "mileage": 14968,
    "engine": "Flat-6 Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1083,
    "acceleration": "3.9s",
    "topSpeed": "207 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Reserved",
    "features": [
      "Soft-close Doors",
      "Starlight Headliner",
      "Massage Seats",
      "Active Aero"
    ],
    "description": "A stunning example of McLaren engineering. This 765LT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-801",
    "name": "Ferrari F8 Tributo",
    "brand": "Ferrari",
    "model": "F8 Tributo",
    "year": 2020,
    "price": 509245,
    "mileage": 8794,
    "engine": "V12 Twin-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 1154,
    "acceleration": "5.0s",
    "topSpeed": "209 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Ceramic Brakes",
      "Carbon Fiber Trim",
      "Massage Seats"
    ],
    "description": "A stunning example of Ferrari engineering. This F8 Tributo offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-802",
    "name": "Porsche Taycan",
    "brand": "Porsche",
    "model": "Taycan",
    "year": 2020,
    "price": 1453928,
    "mileage": 10157,
    "engine": "Flat-6 Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 637,
    "acceleration": "4.2s",
    "topSpeed": "202 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Night Vision",
      "Massage Seats",
      "Active Aero",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Porsche engineering. This Taycan offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-803",
    "name": "Bentley Bentayga",
    "brand": "Bentley",
    "model": "Bentayga",
    "year": 2022,
    "price": 419229,
    "mileage": 4356,
    "engine": "Electric Dual-Motor",
    "transmission": "8-Speed Automatic",
    "fuelType": "Electric",
    "hp": 587,
    "acceleration": "4.6s",
    "topSpeed": "169 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Active Aero",
      "Ceramic Brakes",
      "Carbon Fiber Trim",
      "Premium Audio System"
    ],
    "description": "A stunning example of Bentley engineering. This Bentayga offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-804",
    "name": "Mercedes-Benz G 63 AMG",
    "brand": "Mercedes-Benz",
    "model": "G 63 AMG",
    "year": 2024,
    "price": 1830839,
    "mileage": 11513,
    "engine": "Hybrid V12",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Hybrid",
    "hp": 1052,
    "acceleration": "2.4s",
    "topSpeed": "237 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Heads-up Display",
      "Night Vision",
      "Premium Audio System"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This G 63 AMG offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-805",
    "name": "Bentley Continental GT",
    "brand": "Bentley",
    "model": "Continental GT",
    "year": 2023,
    "price": 363306,
    "mileage": 10214,
    "engine": "W16 Quad-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 665,
    "acceleration": "3.9s",
    "topSpeed": "190 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Bespoke Leather Interior",
      "Starlight Headliner",
      "Ceramic Brakes",
      "Active Aero"
    ],
    "description": "A stunning example of Bentley engineering. This Continental GT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-806",
    "name": "Bugatti Veyron",
    "brand": "Bugatti",
    "model": "Veyron",
    "year": 2021,
    "price": 285283,
    "mileage": 14731,
    "engine": "V8 Biturbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1001,
    "acceleration": "4.1s",
    "topSpeed": "207 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Panoramic Roof",
      "Soft-close Doors",
      "Heads-up Display",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Bugatti engineering. This Veyron offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-807",
    "name": "Mercedes-Benz G 63 AMG",
    "brand": "Mercedes-Benz",
    "model": "G 63 AMG",
    "year": 2020,
    "price": 2026202,
    "mileage": 3376,
    "engine": "V8 Biturbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 928,
    "acceleration": "4.8s",
    "topSpeed": "209 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Active Aero",
      "Massage Seats",
      "Heads-up Display"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This G 63 AMG offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-808",
    "name": "BMW X7 M60i",
    "brand": "BMW",
    "model": "X7 M60i",
    "year": 2020,
    "price": 560794,
    "mileage": 3607,
    "engine": "Flat-6 Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 848,
    "acceleration": "2.2s",
    "topSpeed": "217 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Starlight Headliner",
      "Massage Seats",
      "Carbon Fiber Trim",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of BMW engineering. This X7 M60i offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-809",
    "name": "Aston Martin Vantage",
    "brand": "Aston Martin",
    "model": "Vantage",
    "year": 2021,
    "price": 504879,
    "mileage": 6570,
    "engine": "W16 Quad-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 869,
    "acceleration": "3.3s",
    "topSpeed": "164 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Panoramic Roof",
      "Carbon Fiber Trim",
      "Active Aero",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Aston Martin engineering. This Vantage offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-810",
    "name": "Ferrari F8 Tributo",
    "brand": "Ferrari",
    "model": "F8 Tributo",
    "year": 2023,
    "price": 503513,
    "mileage": 11912,
    "engine": "Hybrid V12",
    "transmission": "8-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 829,
    "acceleration": "3.1s",
    "topSpeed": "229 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Soft-close Doors",
      "Premium Audio System",
      "Active Aero"
    ],
    "description": "A stunning example of Ferrari engineering. This F8 Tributo offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-811",
    "name": "Range Rover Velar",
    "brand": "Range Rover",
    "model": "Velar",
    "year": 2023,
    "price": 1964635,
    "mileage": 13226,
    "engine": "V8 Biturbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 959,
    "acceleration": "3.1s",
    "topSpeed": "157 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Reserved",
    "features": [
      "Premium Audio System",
      "Heads-up Display",
      "Carbon Fiber Trim",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Range Rover engineering. This Velar offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-812",
    "name": "Porsche Taycan",
    "brand": "Porsche",
    "model": "Taycan",
    "year": 2024,
    "price": 414356,
    "mileage": 2527,
    "engine": "V10 Natural",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1151,
    "acceleration": "2.8s",
    "topSpeed": "200 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Massage Seats",
      "Soft-close Doors",
      "Active Aero",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of Porsche engineering. This Taycan offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-813",
    "name": "Ferrari 812 Superfast",
    "brand": "Ferrari",
    "model": "812 Superfast",
    "year": 2024,
    "price": 1433076,
    "mileage": 658,
    "engine": "Hybrid V12",
    "transmission": "Single-Speed Electric",
    "fuelType": "Hybrid",
    "hp": 545,
    "acceleration": "3.8s",
    "topSpeed": "211 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Panoramic Roof",
      "Starlight Headliner",
      "Premium Audio System"
    ],
    "description": "A stunning example of Ferrari engineering. This 812 Superfast offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-814",
    "name": "Ferrari F8 Tributo",
    "brand": "Ferrari",
    "model": "F8 Tributo",
    "year": 2021,
    "price": 905135,
    "mileage": 10120,
    "engine": "Hybrid V12",
    "transmission": "8-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 789,
    "acceleration": "3.9s",
    "topSpeed": "181 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Night Vision",
      "Starlight Headliner",
      "Panoramic Roof",
      "Massage Seats"
    ],
    "description": "A stunning example of Ferrari engineering. This F8 Tributo offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-815",
    "name": "BMW M4 CSL",
    "brand": "BMW",
    "model": "M4 CSL",
    "year": 2024,
    "price": 293472,
    "mileage": 12484,
    "engine": "Flat-6 Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 826,
    "acceleration": "3.8s",
    "topSpeed": "205 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Adaptive Suspension",
      "Night Vision",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of BMW engineering. This M4 CSL offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-816",
    "name": "Aston Martin DB11",
    "brand": "Aston Martin",
    "model": "DB11",
    "year": 2023,
    "price": 1640230,
    "mileage": 10721,
    "engine": "V10 Natural",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 921,
    "acceleration": "4.1s",
    "topSpeed": "239 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Massage Seats",
      "Adaptive Suspension",
      "Heads-up Display"
    ],
    "description": "A stunning example of Aston Martin engineering. This DB11 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-817",
    "name": "Porsche Panamera",
    "brand": "Porsche",
    "model": "Panamera",
    "year": 2022,
    "price": 1503075,
    "mileage": 12763,
    "engine": "V8 Biturbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 872,
    "acceleration": "3.2s",
    "topSpeed": "176 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Soft-close Doors",
      "Starlight Headliner",
      "Massage Seats"
    ],
    "description": "A stunning example of Porsche engineering. This Panamera offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-818",
    "name": "Porsche Panamera",
    "brand": "Porsche",
    "model": "Panamera",
    "year": 2021,
    "price": 1909722,
    "mileage": 2843,
    "engine": "Flat-6 Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 854,
    "acceleration": "2.3s",
    "topSpeed": "184 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Adaptive Suspension",
      "Heads-up Display",
      "Massage Seats"
    ],
    "description": "A stunning example of Porsche engineering. This Panamera offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-819",
    "name": "Aston Martin DB11",
    "brand": "Aston Martin",
    "model": "DB11",
    "year": 2020,
    "price": 652059,
    "mileage": 10092,
    "engine": "Hybrid V12",
    "transmission": "8-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 581,
    "acceleration": "3.7s",
    "topSpeed": "238 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Heads-up Display",
      "Soft-close Doors",
      "Massage Seats"
    ],
    "description": "A stunning example of Aston Martin engineering. This DB11 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-820",
    "name": "BMW M4 CSL",
    "brand": "BMW",
    "model": "M4 CSL",
    "year": 2020,
    "price": 930562,
    "mileage": 3886,
    "engine": "Flat-6 Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1135,
    "acceleration": "4.3s",
    "topSpeed": "171 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Massage Seats",
      "Premium Audio System",
      "Panoramic Roof"
    ],
    "description": "A stunning example of BMW engineering. This M4 CSL offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-821",
    "name": "Ferrari 812 Superfast",
    "brand": "Ferrari",
    "model": "812 Superfast",
    "year": 2021,
    "price": 1460005,
    "mileage": 2601,
    "engine": "V8 Biturbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 848,
    "acceleration": "2.1s",
    "topSpeed": "161 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Soft-close Doors",
      "Starlight Headliner",
      "Heads-up Display"
    ],
    "description": "A stunning example of Ferrari engineering. This 812 Superfast offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-822",
    "name": "Bugatti Veyron",
    "brand": "Bugatti",
    "model": "Veyron",
    "year": 2022,
    "price": 1967045,
    "mileage": 12650,
    "engine": "Electric Dual-Motor",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Electric",
    "hp": 951,
    "acceleration": "2.6s",
    "topSpeed": "163 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Massage Seats",
      "Active Aero",
      "Starlight Headliner"
    ],
    "description": "A stunning example of Bugatti engineering. This Veyron offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-823",
    "name": "Mercedes-Benz G 63 AMG",
    "brand": "Mercedes-Benz",
    "model": "G 63 AMG",
    "year": 2022,
    "price": 1427460,
    "mileage": 6595,
    "engine": "V8 Biturbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 1009,
    "acceleration": "4.4s",
    "topSpeed": "166 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Massage Seats",
      "Carbon Fiber Trim",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This G 63 AMG offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-824",
    "name": "BMW i7 M70",
    "brand": "BMW",
    "model": "i7 M70",
    "year": 2023,
    "price": 995728,
    "mileage": 4810,
    "engine": "V8 Biturbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 623,
    "acceleration": "3.6s",
    "topSpeed": "242 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Active Aero",
      "Night Vision",
      "Adaptive Suspension",
      "Soft-close Doors"
    ],
    "description": "A stunning example of BMW engineering. This i7 M70 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-825",
    "name": "Lamborghini Sian",
    "brand": "Lamborghini",
    "model": "Sian",
    "year": 2024,
    "price": 1674053,
    "mileage": 12346,
    "engine": "W16 Quad-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 469,
    "acceleration": "2.7s",
    "topSpeed": "220 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Night Vision",
      "Soft-close Doors",
      "Massage Seats"
    ],
    "description": "A stunning example of Lamborghini engineering. This Sian offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-826",
    "name": "Aston Martin DB11",
    "brand": "Aston Martin",
    "model": "DB11",
    "year": 2020,
    "price": 2079810,
    "mileage": 12626,
    "engine": "V8 Biturbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 887,
    "acceleration": "4.3s",
    "topSpeed": "167 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Heads-up Display",
      "Night Vision",
      "Ceramic Brakes",
      "Premium Audio System"
    ],
    "description": "A stunning example of Aston Martin engineering. This DB11 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-827",
    "name": "McLaren P1",
    "brand": "McLaren",
    "model": "P1",
    "year": 2024,
    "price": 1010380,
    "mileage": 14797,
    "engine": "Hybrid V12",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Hybrid",
    "hp": 1163,
    "acceleration": "3.5s",
    "topSpeed": "176 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Heads-up Display",
      "Active Aero",
      "Night Vision"
    ],
    "description": "A stunning example of McLaren engineering. This P1 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-828",
    "name": "BMW M8 Competition",
    "brand": "BMW",
    "model": "M8 Competition",
    "year": 2021,
    "price": 257089,
    "mileage": 5283,
    "engine": "Electric Dual-Motor",
    "transmission": "8-Speed Automatic",
    "fuelType": "Electric",
    "hp": 585,
    "acceleration": "4.4s",
    "topSpeed": "212 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Adaptive Suspension",
      "Bespoke Leather Interior",
      "Premium Audio System"
    ],
    "description": "A stunning example of BMW engineering. This M8 Competition offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-829",
    "name": "Lamborghini Revuelto",
    "brand": "Lamborghini",
    "model": "Revuelto",
    "year": 2024,
    "price": 1929168,
    "mileage": 915,
    "engine": "Electric Dual-Motor",
    "transmission": "8-Speed Automatic",
    "fuelType": "Electric",
    "hp": 838,
    "acceleration": "2.7s",
    "topSpeed": "197 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Starlight Headliner",
      "Soft-close Doors",
      "Massage Seats"
    ],
    "description": "A stunning example of Lamborghini engineering. This Revuelto offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-830",
    "name": "McLaren 765LT",
    "brand": "McLaren",
    "model": "765LT",
    "year": 2021,
    "price": 767377,
    "mileage": 5662,
    "engine": "W16 Quad-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 468,
    "acceleration": "2.1s",
    "topSpeed": "204 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Massage Seats",
      "Active Aero",
      "Panoramic Roof"
    ],
    "description": "A stunning example of McLaren engineering. This 765LT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-831",
    "name": "Range Rover SV",
    "brand": "Range Rover",
    "model": "SV",
    "year": 2022,
    "price": 1690393,
    "mileage": 9371,
    "engine": "V10 Natural",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1157,
    "acceleration": "2.3s",
    "topSpeed": "238 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Soft-close Doors",
      "Bespoke Leather Interior",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Range Rover engineering. This SV offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-832",
    "name": "BMW M4 CSL",
    "brand": "BMW",
    "model": "M4 CSL",
    "year": 2020,
    "price": 1950657,
    "mileage": 10042,
    "engine": "Electric Dual-Motor",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Electric",
    "hp": 654,
    "acceleration": "3.3s",
    "topSpeed": "242 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Massage Seats",
      "Carbon Fiber Trim",
      "Premium Audio System",
      "Panoramic Roof"
    ],
    "description": "A stunning example of BMW engineering. This M4 CSL offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-833",
    "name": "McLaren Artura",
    "brand": "McLaren",
    "model": "Artura",
    "year": 2022,
    "price": 1997874,
    "mileage": 11362,
    "engine": "V10 Natural",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 462,
    "acceleration": "3.4s",
    "topSpeed": "190 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Massage Seats",
      "Heads-up Display",
      "Night Vision",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of McLaren engineering. This Artura offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-834",
    "name": "Bugatti Mistral",
    "brand": "Bugatti",
    "model": "Mistral",
    "year": 2020,
    "price": 1241879,
    "mileage": 6559,
    "engine": "W16 Quad-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 491,
    "acceleration": "2.7s",
    "topSpeed": "214 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Reserved",
    "features": [
      "Bespoke Leather Interior",
      "Premium Audio System",
      "Soft-close Doors",
      "Night Vision"
    ],
    "description": "A stunning example of Bugatti engineering. This Mistral offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-835",
    "name": "Bentley Continental GT",
    "brand": "Bentley",
    "model": "Continental GT",
    "year": 2023,
    "price": 1172171,
    "mileage": 6608,
    "engine": "V8 Biturbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 686,
    "acceleration": "2.1s",
    "topSpeed": "185 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Soft-close Doors",
      "Ceramic Brakes",
      "Heads-up Display"
    ],
    "description": "A stunning example of Bentley engineering. This Continental GT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-836",
    "name": "Mercedes-Benz EQS 580",
    "brand": "Mercedes-Benz",
    "model": "EQS 580",
    "year": 2021,
    "price": 347657,
    "mileage": 50,
    "engine": "V8 Biturbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1097,
    "acceleration": "2.8s",
    "topSpeed": "170 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Reserved",
    "features": [
      "Panoramic Roof",
      "Carbon Fiber Trim",
      "Active Aero",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This EQS 580 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-837",
    "name": "McLaren 765LT",
    "brand": "McLaren",
    "model": "765LT",
    "year": 2021,
    "price": 1872202,
    "mileage": 12947,
    "engine": "Hybrid V12",
    "transmission": "Single-Speed Electric",
    "fuelType": "Hybrid",
    "hp": 1128,
    "acceleration": "3.8s",
    "topSpeed": "223 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Reserved",
    "features": [
      "Premium Audio System",
      "Panoramic Roof",
      "Active Aero",
      "Massage Seats"
    ],
    "description": "A stunning example of McLaren engineering. This 765LT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-838",
    "name": "Aston Martin DBX",
    "brand": "Aston Martin",
    "model": "DBX",
    "year": 2021,
    "price": 1901402,
    "mileage": 6054,
    "engine": "V10 Natural",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 1092,
    "acceleration": "4.5s",
    "topSpeed": "212 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Massage Seats",
      "Soft-close Doors",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Aston Martin engineering. This DBX offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-839",
    "name": "Mercedes-Benz EQS 580",
    "brand": "Mercedes-Benz",
    "model": "EQS 580",
    "year": 2024,
    "price": 697362,
    "mileage": 3971,
    "engine": "W16 Quad-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1019,
    "acceleration": "4.1s",
    "topSpeed": "236 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Ceramic Brakes",
      "Carbon Fiber Trim",
      "Night Vision"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This EQS 580 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-840",
    "name": "Bentley Flying Spur",
    "brand": "Bentley",
    "model": "Flying Spur",
    "year": 2023,
    "price": 558268,
    "mileage": 14052,
    "engine": "Flat-6 Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1014,
    "acceleration": "2.8s",
    "topSpeed": "154 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Panoramic Roof",
      "Carbon Fiber Trim",
      "Premium Audio System"
    ],
    "description": "A stunning example of Bentley engineering. This Flying Spur offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-841",
    "name": "Mercedes-Benz EQS 580",
    "brand": "Mercedes-Benz",
    "model": "EQS 580",
    "year": 2022,
    "price": 1064904,
    "mileage": 10016,
    "engine": "V12 Twin-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 511,
    "acceleration": "2.8s",
    "topSpeed": "151 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Night Vision",
      "Active Aero",
      "Massage Seats"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This EQS 580 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-842",
    "name": "Ferrari Purosangue",
    "brand": "Ferrari",
    "model": "Purosangue",
    "year": 2021,
    "price": 1764488,
    "mileage": 13631,
    "engine": "V12 Twin-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 926,
    "acceleration": "3.7s",
    "topSpeed": "187 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Massage Seats",
      "Panoramic Roof",
      "Night Vision"
    ],
    "description": "A stunning example of Ferrari engineering. This Purosangue offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-843",
    "name": "Lamborghini Aventador",
    "brand": "Lamborghini",
    "model": "Aventador",
    "year": 2021,
    "price": 641415,
    "mileage": 4934,
    "engine": "V10 Natural",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 452,
    "acceleration": "4.2s",
    "topSpeed": "248 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Bespoke Leather Interior",
      "Starlight Headliner",
      "Night Vision"
    ],
    "description": "A stunning example of Lamborghini engineering. This Aventador offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-844",
    "name": "Range Rover Autobiography",
    "brand": "Range Rover",
    "model": "Autobiography",
    "year": 2021,
    "price": 1597542,
    "mileage": 5073,
    "engine": "V12 Twin-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 450,
    "acceleration": "4.1s",
    "topSpeed": "241 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Massage Seats",
      "Starlight Headliner",
      "Premium Audio System",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of Range Rover engineering. This Autobiography offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-845",
    "name": "Rolls-Royce Spectre",
    "brand": "Rolls-Royce",
    "model": "Spectre",
    "year": 2024,
    "price": 805554,
    "mileage": 11426,
    "engine": "V12 Twin-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 641,
    "acceleration": "4.8s",
    "topSpeed": "202 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Panoramic Roof",
      "Heads-up Display",
      "Active Aero"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Spectre offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-846",
    "name": "BMW i7 M70",
    "brand": "BMW",
    "model": "i7 M70",
    "year": 2024,
    "price": 861271,
    "mileage": 516,
    "engine": "V10 Natural",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 1012,
    "acceleration": "3.5s",
    "topSpeed": "246 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Ceramic Brakes",
      "Soft-close Doors",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of BMW engineering. This i7 M70 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-847",
    "name": "Ferrari 812 Superfast",
    "brand": "Ferrari",
    "model": "812 Superfast",
    "year": 2023,
    "price": 2054567,
    "mileage": 9682,
    "engine": "W16 Quad-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 1037,
    "acceleration": "2.7s",
    "topSpeed": "207 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Panoramic Roof",
      "Active Aero",
      "Starlight Headliner"
    ],
    "description": "A stunning example of Ferrari engineering. This 812 Superfast offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-848",
    "name": "Aston Martin Vantage",
    "brand": "Aston Martin",
    "model": "Vantage",
    "year": 2023,
    "price": 2040720,
    "mileage": 13169,
    "engine": "Flat-6 Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 1132,
    "acceleration": "4.0s",
    "topSpeed": "218 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Active Aero",
      "Panoramic Roof",
      "Night Vision",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of Aston Martin engineering. This Vantage offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-849",
    "name": "Range Rover Sport SVR",
    "brand": "Range Rover",
    "model": "Sport SVR",
    "year": 2024,
    "price": 1977118,
    "mileage": 6364,
    "engine": "Electric Dual-Motor",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Electric",
    "hp": 825,
    "acceleration": "3.5s",
    "topSpeed": "173 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Reserved",
    "features": [
      "Heads-up Display",
      "Night Vision",
      "Starlight Headliner",
      "Massage Seats"
    ],
    "description": "A stunning example of Range Rover engineering. This Sport SVR offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-850",
    "name": "Mercedes-Benz S-Class Maybach",
    "brand": "Mercedes-Benz",
    "model": "S-Class Maybach",
    "year": 2023,
    "price": 508965,
    "mileage": 2197,
    "engine": "Flat-6 Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 470,
    "acceleration": "2.7s",
    "topSpeed": "232 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Massage Seats",
      "Ceramic Brakes",
      "Starlight Headliner",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This S-Class Maybach offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-851",
    "name": "Range Rover Autobiography",
    "brand": "Range Rover",
    "model": "Autobiography",
    "year": 2021,
    "price": 1376382,
    "mileage": 14363,
    "engine": "Electric Dual-Motor",
    "transmission": "9-Speed Automatic",
    "fuelType": "Electric",
    "hp": 448,
    "acceleration": "4.3s",
    "topSpeed": "209 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Reserved",
    "features": [
      "Starlight Headliner",
      "Panoramic Roof",
      "Heads-up Display",
      "Night Vision"
    ],
    "description": "A stunning example of Range Rover engineering. This Autobiography offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-852",
    "name": "Mercedes-Benz S-Class Maybach",
    "brand": "Mercedes-Benz",
    "model": "S-Class Maybach",
    "year": 2020,
    "price": 1892847,
    "mileage": 2567,
    "engine": "V8 Biturbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 427,
    "acceleration": "4.4s",
    "topSpeed": "174 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Adaptive Suspension",
      "Active Aero",
      "Heads-up Display"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This S-Class Maybach offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-853",
    "name": "Bentley Flying Spur",
    "brand": "Bentley",
    "model": "Flying Spur",
    "year": 2022,
    "price": 576482,
    "mileage": 14456,
    "engine": "Flat-6 Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 642,
    "acceleration": "3.4s",
    "topSpeed": "231 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Reserved",
    "features": [
      "Active Aero",
      "Soft-close Doors",
      "Panoramic Roof",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Bentley engineering. This Flying Spur offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-854",
    "name": "Range Rover Autobiography",
    "brand": "Range Rover",
    "model": "Autobiography",
    "year": 2021,
    "price": 552888,
    "mileage": 5861,
    "engine": "Flat-6 Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 806,
    "acceleration": "5.0s",
    "topSpeed": "202 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Reserved",
    "features": [
      "Soft-close Doors",
      "Adaptive Suspension",
      "Ceramic Brakes",
      "Heads-up Display"
    ],
    "description": "A stunning example of Range Rover engineering. This Autobiography offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-855",
    "name": "Lamborghini Revuelto",
    "brand": "Lamborghini",
    "model": "Revuelto",
    "year": 2023,
    "price": 1843340,
    "mileage": 10454,
    "engine": "Electric Dual-Motor",
    "transmission": "Single-Speed Electric",
    "fuelType": "Electric",
    "hp": 1193,
    "acceleration": "3.8s",
    "topSpeed": "198 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Reserved",
    "features": [
      "Night Vision",
      "Adaptive Suspension",
      "Active Aero",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Lamborghini engineering. This Revuelto offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-856",
    "name": "Aston Martin DBX",
    "brand": "Aston Martin",
    "model": "DBX",
    "year": 2020,
    "price": 752070,
    "mileage": 11823,
    "engine": "V12 Twin-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 741,
    "acceleration": "4.0s",
    "topSpeed": "178 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Adaptive Suspension",
      "Massage Seats",
      "Heads-up Display"
    ],
    "description": "A stunning example of Aston Martin engineering. This DBX offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-857",
    "name": "BMW M8 Competition",
    "brand": "BMW",
    "model": "M8 Competition",
    "year": 2021,
    "price": 143463,
    "mileage": 4154,
    "engine": "Electric Dual-Motor",
    "transmission": "Single-Speed Electric",
    "fuelType": "Electric",
    "hp": 966,
    "acceleration": "2.6s",
    "topSpeed": "156 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Active Aero",
      "Adaptive Suspension",
      "Starlight Headliner",
      "Massage Seats"
    ],
    "description": "A stunning example of BMW engineering. This M8 Competition offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-858",
    "name": "McLaren 765LT",
    "brand": "McLaren",
    "model": "765LT",
    "year": 2023,
    "price": 131245,
    "mileage": 9589,
    "engine": "V12 Twin-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 543,
    "acceleration": "2.0s",
    "topSpeed": "174 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Bespoke Leather Interior",
      "Starlight Headliner",
      "Carbon Fiber Trim",
      "Heads-up Display"
    ],
    "description": "A stunning example of McLaren engineering. This 765LT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-859",
    "name": "McLaren GT",
    "brand": "McLaren",
    "model": "GT",
    "year": 2023,
    "price": 209631,
    "mileage": 2692,
    "engine": "Electric Dual-Motor",
    "transmission": "Single-Speed Electric",
    "fuelType": "Electric",
    "hp": 970,
    "acceleration": "3.7s",
    "topSpeed": "176 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Massage Seats",
      "Carbon Fiber Trim",
      "Night Vision"
    ],
    "description": "A stunning example of McLaren engineering. This GT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-860",
    "name": "Rolls-Royce Ghost",
    "brand": "Rolls-Royce",
    "model": "Ghost",
    "year": 2021,
    "price": 855244,
    "mileage": 12074,
    "engine": "V12 Twin-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1074,
    "acceleration": "4.3s",
    "topSpeed": "214 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Massage Seats",
      "Active Aero",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Ghost offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-861",
    "name": "Bentley Flying Spur",
    "brand": "Bentley",
    "model": "Flying Spur",
    "year": 2022,
    "price": 1375967,
    "mileage": 5863,
    "engine": "V10 Natural",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 782,
    "acceleration": "2.1s",
    "topSpeed": "220 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Panoramic Roof",
      "Starlight Headliner",
      "Soft-close Doors",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Bentley engineering. This Flying Spur offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-862",
    "name": "McLaren GT",
    "brand": "McLaren",
    "model": "GT",
    "year": 2022,
    "price": 1538360,
    "mileage": 1377,
    "engine": "V12 Twin-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 769,
    "acceleration": "3.9s",
    "topSpeed": "211 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Night Vision",
      "Premium Audio System",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of McLaren engineering. This GT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-863",
    "name": "Ferrari F8 Tributo",
    "brand": "Ferrari",
    "model": "F8 Tributo",
    "year": 2020,
    "price": 692459,
    "mileage": 546,
    "engine": "W16 Quad-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 536,
    "acceleration": "3.0s",
    "topSpeed": "175 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Massage Seats",
      "Heads-up Display",
      "Ceramic Brakes",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Ferrari engineering. This F8 Tributo offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-864",
    "name": "Ferrari 812 Superfast",
    "brand": "Ferrari",
    "model": "812 Superfast",
    "year": 2022,
    "price": 326798,
    "mileage": 1016,
    "engine": "Electric Dual-Motor",
    "transmission": "8-Speed Automatic",
    "fuelType": "Electric",
    "hp": 480,
    "acceleration": "4.9s",
    "topSpeed": "173 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Heads-up Display",
      "Carbon Fiber Trim",
      "Night Vision"
    ],
    "description": "A stunning example of Ferrari engineering. This 812 Superfast offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-865",
    "name": "Porsche Panamera",
    "brand": "Porsche",
    "model": "Panamera",
    "year": 2023,
    "price": 807854,
    "mileage": 4434,
    "engine": "Flat-6 Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 873,
    "acceleration": "4.9s",
    "topSpeed": "232 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Ceramic Brakes",
      "Massage Seats",
      "Premium Audio System"
    ],
    "description": "A stunning example of Porsche engineering. This Panamera offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-866",
    "name": "McLaren Artura",
    "brand": "McLaren",
    "model": "Artura",
    "year": 2021,
    "price": 2085131,
    "mileage": 13837,
    "engine": "V8 Biturbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1189,
    "acceleration": "3.2s",
    "topSpeed": "221 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Night Vision",
      "Premium Audio System",
      "Soft-close Doors",
      "Massage Seats"
    ],
    "description": "A stunning example of McLaren engineering. This Artura offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-867",
    "name": "Mercedes-Benz G 63 AMG",
    "brand": "Mercedes-Benz",
    "model": "G 63 AMG",
    "year": 2022,
    "price": 1695141,
    "mileage": 8868,
    "engine": "Flat-6 Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 970,
    "acceleration": "3.7s",
    "topSpeed": "202 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Reserved",
    "features": [
      "Soft-close Doors",
      "Starlight Headliner",
      "Massage Seats",
      "Night Vision"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This G 63 AMG offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-868",
    "name": "BMW M4 CSL",
    "brand": "BMW",
    "model": "M4 CSL",
    "year": 2020,
    "price": 1360902,
    "mileage": 14394,
    "engine": "W16 Quad-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 791,
    "acceleration": "3.2s",
    "topSpeed": "216 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Night Vision",
      "Adaptive Suspension",
      "Starlight Headliner",
      "Active Aero"
    ],
    "description": "A stunning example of BMW engineering. This M4 CSL offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-869",
    "name": "BMW i7 M70",
    "brand": "BMW",
    "model": "i7 M70",
    "year": 2023,
    "price": 833467,
    "mileage": 6840,
    "engine": "W16 Quad-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 896,
    "acceleration": "2.7s",
    "topSpeed": "239 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Massage Seats",
      "Panoramic Roof",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of BMW engineering. This i7 M70 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-870",
    "name": "Bugatti Mistral",
    "brand": "Bugatti",
    "model": "Mistral",
    "year": 2021,
    "price": 952633,
    "mileage": 6073,
    "engine": "Hybrid V12",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Hybrid",
    "hp": 1192,
    "acceleration": "2.2s",
    "topSpeed": "166 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Heads-up Display",
      "Starlight Headliner",
      "Premium Audio System"
    ],
    "description": "A stunning example of Bugatti engineering. This Mistral offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-871",
    "name": "Aston Martin DBS",
    "brand": "Aston Martin",
    "model": "DBS",
    "year": 2024,
    "price": 352969,
    "mileage": 1980,
    "engine": "V12 Twin-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 928,
    "acceleration": "2.6s",
    "topSpeed": "237 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Carbon Fiber Trim",
      "Ceramic Brakes",
      "Night Vision",
      "Active Aero"
    ],
    "description": "A stunning example of Aston Martin engineering. This DBS offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-872",
    "name": "Rolls-Royce Dawn",
    "brand": "Rolls-Royce",
    "model": "Dawn",
    "year": 2020,
    "price": 611937,
    "mileage": 2514,
    "engine": "Electric Dual-Motor",
    "transmission": "Single-Speed Electric",
    "fuelType": "Electric",
    "hp": 758,
    "acceleration": "4.5s",
    "topSpeed": "205 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Reserved",
    "features": [
      "Active Aero",
      "Heads-up Display",
      "Night Vision",
      "Starlight Headliner"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Dawn offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-873",
    "name": "Bentley Mulsanne",
    "brand": "Bentley",
    "model": "Mulsanne",
    "year": 2023,
    "price": 866608,
    "mileage": 8990,
    "engine": "V8 Biturbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 850,
    "acceleration": "3.8s",
    "topSpeed": "225 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Massage Seats",
      "Starlight Headliner",
      "Night Vision",
      "Premium Audio System"
    ],
    "description": "A stunning example of Bentley engineering. This Mulsanne offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-874",
    "name": "BMW i7 M70",
    "brand": "BMW",
    "model": "i7 M70",
    "year": 2024,
    "price": 492836,
    "mileage": 3564,
    "engine": "Flat-6 Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 1018,
    "acceleration": "3.3s",
    "topSpeed": "237 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Massage Seats",
      "Heads-up Display",
      "Night Vision",
      "Active Aero"
    ],
    "description": "A stunning example of BMW engineering. This i7 M70 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-875",
    "name": "Lamborghini Aventador",
    "brand": "Lamborghini",
    "model": "Aventador",
    "year": 2021,
    "price": 1000712,
    "mileage": 5710,
    "engine": "W16 Quad-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1099,
    "acceleration": "3.2s",
    "topSpeed": "176 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Ceramic Brakes",
      "Adaptive Suspension",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Lamborghini engineering. This Aventador offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-876",
    "name": "Lamborghini Revuelto",
    "brand": "Lamborghini",
    "model": "Revuelto",
    "year": 2021,
    "price": 1019070,
    "mileage": 2134,
    "engine": "V10 Natural",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1013,
    "acceleration": "4.2s",
    "topSpeed": "157 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Active Aero",
      "Bespoke Leather Interior",
      "Adaptive Suspension",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Lamborghini engineering. This Revuelto offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-877",
    "name": "Lamborghini Urus",
    "brand": "Lamborghini",
    "model": "Urus",
    "year": 2024,
    "price": 498060,
    "mileage": 14693,
    "engine": "Flat-6 Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 925,
    "acceleration": "4.3s",
    "topSpeed": "156 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Reserved",
    "features": [
      "Adaptive Suspension",
      "Massage Seats",
      "Starlight Headliner",
      "Premium Audio System"
    ],
    "description": "A stunning example of Lamborghini engineering. This Urus offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-878",
    "name": "Lamborghini Sian",
    "brand": "Lamborghini",
    "model": "Sian",
    "year": 2024,
    "price": 925580,
    "mileage": 2853,
    "engine": "V10 Natural",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 611,
    "acceleration": "4.3s",
    "topSpeed": "205 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Panoramic Roof",
      "Starlight Headliner",
      "Heads-up Display",
      "Massage Seats"
    ],
    "description": "A stunning example of Lamborghini engineering. This Sian offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-879",
    "name": "Aston Martin DBX",
    "brand": "Aston Martin",
    "model": "DBX",
    "year": 2023,
    "price": 205671,
    "mileage": 7704,
    "engine": "V12 Twin-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 478,
    "acceleration": "2.7s",
    "topSpeed": "166 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Active Aero",
      "Carbon Fiber Trim",
      "Massage Seats",
      "Heads-up Display"
    ],
    "description": "A stunning example of Aston Martin engineering. This DBX offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-880",
    "name": "Range Rover SV",
    "brand": "Range Rover",
    "model": "SV",
    "year": 2022,
    "price": 1331476,
    "mileage": 6139,
    "engine": "Hybrid V12",
    "transmission": "Single-Speed Electric",
    "fuelType": "Hybrid",
    "hp": 898,
    "acceleration": "4.7s",
    "topSpeed": "156 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Carbon Fiber Trim",
      "Adaptive Suspension",
      "Active Aero"
    ],
    "description": "A stunning example of Range Rover engineering. This SV offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-881",
    "name": "BMW M8 Competition",
    "brand": "BMW",
    "model": "M8 Competition",
    "year": 2024,
    "price": 854910,
    "mileage": 12067,
    "engine": "V10 Natural",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 681,
    "acceleration": "4.5s",
    "topSpeed": "227 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Soft-close Doors",
      "Night Vision",
      "Premium Audio System"
    ],
    "description": "A stunning example of BMW engineering. This M8 Competition offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-882",
    "name": "Porsche Taycan",
    "brand": "Porsche",
    "model": "Taycan",
    "year": 2021,
    "price": 113235,
    "mileage": 5778,
    "engine": "W16 Quad-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 759,
    "acceleration": "4.1s",
    "topSpeed": "162 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Premium Audio System",
      "Starlight Headliner",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Porsche engineering. This Taycan offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-883",
    "name": "Aston Martin Vantage",
    "brand": "Aston Martin",
    "model": "Vantage",
    "year": 2021,
    "price": 966437,
    "mileage": 3659,
    "engine": "Electric Dual-Motor",
    "transmission": "8-Speed Automatic",
    "fuelType": "Electric",
    "hp": 651,
    "acceleration": "2.4s",
    "topSpeed": "215 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Ceramic Brakes",
      "Soft-close Doors",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Aston Martin engineering. This Vantage offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-884",
    "name": "Bentley Mulsanne",
    "brand": "Bentley",
    "model": "Mulsanne",
    "year": 2022,
    "price": 455692,
    "mileage": 2586,
    "engine": "Hybrid V12",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Hybrid",
    "hp": 745,
    "acceleration": "2.3s",
    "topSpeed": "192 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Reserved",
    "features": [
      "Starlight Headliner",
      "Night Vision",
      "Heads-up Display",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of Bentley engineering. This Mulsanne offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-885",
    "name": "BMW X7 M60i",
    "brand": "BMW",
    "model": "X7 M60i",
    "year": 2020,
    "price": 358495,
    "mileage": 3866,
    "engine": "V12 Twin-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 479,
    "acceleration": "2.9s",
    "topSpeed": "165 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Soft-close Doors",
      "Adaptive Suspension",
      "Night Vision"
    ],
    "description": "A stunning example of BMW engineering. This X7 M60i offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-886",
    "name": "Bentley Continental GT",
    "brand": "Bentley",
    "model": "Continental GT",
    "year": 2023,
    "price": 1643671,
    "mileage": 8174,
    "engine": "W16 Quad-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 611,
    "acceleration": "2.7s",
    "topSpeed": "195 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Active Aero",
      "Carbon Fiber Trim",
      "Panoramic Roof",
      "Night Vision"
    ],
    "description": "A stunning example of Bentley engineering. This Continental GT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-887",
    "name": "Rolls-Royce Dawn",
    "brand": "Rolls-Royce",
    "model": "Dawn",
    "year": 2022,
    "price": 189896,
    "mileage": 14787,
    "engine": "Flat-6 Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 951,
    "acceleration": "3.0s",
    "topSpeed": "231 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Panoramic Roof",
      "Starlight Headliner",
      "Massage Seats",
      "Night Vision"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Dawn offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-888",
    "name": "McLaren P1",
    "brand": "McLaren",
    "model": "P1",
    "year": 2021,
    "price": 253296,
    "mileage": 2428,
    "engine": "V8 Biturbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 687,
    "acceleration": "2.2s",
    "topSpeed": "150 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Soft-close Doors",
      "Night Vision",
      "Panoramic Roof",
      "Starlight Headliner"
    ],
    "description": "A stunning example of McLaren engineering. This P1 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-889",
    "name": "Range Rover SV",
    "brand": "Range Rover",
    "model": "SV",
    "year": 2020,
    "price": 223376,
    "mileage": 8746,
    "engine": "V8 Biturbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 757,
    "acceleration": "3.4s",
    "topSpeed": "230 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Panoramic Roof",
      "Massage Seats",
      "Active Aero"
    ],
    "description": "A stunning example of Range Rover engineering. This SV offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-890",
    "name": "Rolls-Royce Phantom",
    "brand": "Rolls-Royce",
    "model": "Phantom",
    "year": 2021,
    "price": 2094886,
    "mileage": 5397,
    "engine": "V10 Natural",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 794,
    "acceleration": "2.2s",
    "topSpeed": "244 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Night Vision",
      "Massage Seats",
      "Carbon Fiber Trim",
      "Heads-up Display"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Phantom offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-891",
    "name": "Bentley Bentayga",
    "brand": "Bentley",
    "model": "Bentayga",
    "year": 2021,
    "price": 728893,
    "mileage": 3358,
    "engine": "V10 Natural",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 813,
    "acceleration": "2.4s",
    "topSpeed": "170 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Massage Seats",
      "Starlight Headliner",
      "Night Vision",
      "Active Aero"
    ],
    "description": "A stunning example of Bentley engineering. This Bentayga offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-892",
    "name": "Rolls-Royce Cullinan",
    "brand": "Rolls-Royce",
    "model": "Cullinan",
    "year": 2022,
    "price": 181314,
    "mileage": 4576,
    "engine": "Electric Dual-Motor",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Electric",
    "hp": 494,
    "acceleration": "3.0s",
    "topSpeed": "249 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Premium Audio System",
      "Carbon Fiber Trim",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Cullinan offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-893",
    "name": "Porsche Taycan",
    "brand": "Porsche",
    "model": "Taycan",
    "year": 2021,
    "price": 993074,
    "mileage": 2914,
    "engine": "V10 Natural",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 596,
    "acceleration": "4.3s",
    "topSpeed": "185 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Active Aero",
      "Starlight Headliner",
      "Massage Seats",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Porsche engineering. This Taycan offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-894",
    "name": "Bentley Bentayga",
    "brand": "Bentley",
    "model": "Bentayga",
    "year": 2020,
    "price": 1041995,
    "mileage": 6214,
    "engine": "Hybrid V12",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Hybrid",
    "hp": 1174,
    "acceleration": "3.8s",
    "topSpeed": "215 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Active Aero",
      "Starlight Headliner",
      "Panoramic Roof",
      "Massage Seats"
    ],
    "description": "A stunning example of Bentley engineering. This Bentayga offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-895",
    "name": "Range Rover Sport SVR",
    "brand": "Range Rover",
    "model": "Sport SVR",
    "year": 2024,
    "price": 1393677,
    "mileage": 12050,
    "engine": "V12 Twin-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 448,
    "acceleration": "3.5s",
    "topSpeed": "221 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Active Aero",
      "Heads-up Display",
      "Adaptive Suspension",
      "Starlight Headliner"
    ],
    "description": "A stunning example of Range Rover engineering. This Sport SVR offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-896",
    "name": "McLaren Artura",
    "brand": "McLaren",
    "model": "Artura",
    "year": 2022,
    "price": 1348547,
    "mileage": 775,
    "engine": "Hybrid V12",
    "transmission": "Single-Speed Electric",
    "fuelType": "Hybrid",
    "hp": 459,
    "acceleration": "3.1s",
    "topSpeed": "229 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Massage Seats",
      "Carbon Fiber Trim",
      "Panoramic Roof"
    ],
    "description": "A stunning example of McLaren engineering. This Artura offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-897",
    "name": "Aston Martin DBS",
    "brand": "Aston Martin",
    "model": "DBS",
    "year": 2021,
    "price": 103782,
    "mileage": 11865,
    "engine": "W16 Quad-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 406,
    "acceleration": "3.6s",
    "topSpeed": "156 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Soft-close Doors",
      "Panoramic Roof",
      "Heads-up Display"
    ],
    "description": "A stunning example of Aston Martin engineering. This DBS offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-898",
    "name": "Porsche 911 Turbo S",
    "brand": "Porsche",
    "model": "911 Turbo S",
    "year": 2022,
    "price": 1505785,
    "mileage": 7770,
    "engine": "V8 Biturbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 835,
    "acceleration": "2.6s",
    "topSpeed": "240 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Adaptive Suspension",
      "Carbon Fiber Trim",
      "Night Vision"
    ],
    "description": "A stunning example of Porsche engineering. This 911 Turbo S offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-899",
    "name": "Porsche Taycan",
    "brand": "Porsche",
    "model": "Taycan",
    "year": 2020,
    "price": 1540117,
    "mileage": 2928,
    "engine": "Flat-6 Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 475,
    "acceleration": "2.7s",
    "topSpeed": "241 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Night Vision",
      "Massage Seats",
      "Panoramic Roof",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Porsche engineering. This Taycan offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-900",
    "name": "McLaren Artura",
    "brand": "McLaren",
    "model": "Artura",
    "year": 2023,
    "price": 1831425,
    "mileage": 4585,
    "engine": "Electric Dual-Motor",
    "transmission": "Single-Speed Electric",
    "fuelType": "Electric",
    "hp": 494,
    "acceleration": "4.0s",
    "topSpeed": "157 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Massage Seats",
      "Soft-close Doors",
      "Active Aero"
    ],
    "description": "A stunning example of McLaren engineering. This Artura offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-901",
    "name": "McLaren GT",
    "brand": "McLaren",
    "model": "GT",
    "year": 2024,
    "price": 1948781,
    "mileage": 10790,
    "engine": "Electric Dual-Motor",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Electric",
    "hp": 1197,
    "acceleration": "2.2s",
    "topSpeed": "225 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Starlight Headliner",
      "Soft-close Doors",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of McLaren engineering. This GT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-902",
    "name": "Bentley Mulsanne",
    "brand": "Bentley",
    "model": "Mulsanne",
    "year": 2024,
    "price": 1576194,
    "mileage": 6688,
    "engine": "V10 Natural",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 684,
    "acceleration": "4.0s",
    "topSpeed": "204 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Night Vision",
      "Bespoke Leather Interior",
      "Premium Audio System"
    ],
    "description": "A stunning example of Bentley engineering. This Mulsanne offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-903",
    "name": "Porsche Taycan",
    "brand": "Porsche",
    "model": "Taycan",
    "year": 2022,
    "price": 1749104,
    "mileage": 1914,
    "engine": "Electric Dual-Motor",
    "transmission": "9-Speed Automatic",
    "fuelType": "Electric",
    "hp": 1027,
    "acceleration": "3.3s",
    "topSpeed": "215 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Ceramic Brakes",
      "Night Vision",
      "Carbon Fiber Trim",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Porsche engineering. This Taycan offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-904",
    "name": "Mercedes-Benz EQS 580",
    "brand": "Mercedes-Benz",
    "model": "EQS 580",
    "year": 2021,
    "price": 1210188,
    "mileage": 352,
    "engine": "Electric Dual-Motor",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Electric",
    "hp": 828,
    "acceleration": "3.0s",
    "topSpeed": "184 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Massage Seats",
      "Active Aero",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This EQS 580 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-905",
    "name": "Lamborghini Revuelto",
    "brand": "Lamborghini",
    "model": "Revuelto",
    "year": 2022,
    "price": 1725513,
    "mileage": 430,
    "engine": "Hybrid V12",
    "transmission": "9-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 973,
    "acceleration": "2.4s",
    "topSpeed": "161 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Carbon Fiber Trim",
      "Adaptive Suspension",
      "Massage Seats"
    ],
    "description": "A stunning example of Lamborghini engineering. This Revuelto offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-906",
    "name": "Mercedes-Benz EQS 580",
    "brand": "Mercedes-Benz",
    "model": "EQS 580",
    "year": 2021,
    "price": 1972130,
    "mileage": 203,
    "engine": "Hybrid V12",
    "transmission": "Single-Speed Electric",
    "fuelType": "Hybrid",
    "hp": 940,
    "acceleration": "3.3s",
    "topSpeed": "174 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Reserved",
    "features": [
      "Ceramic Brakes",
      "Carbon Fiber Trim",
      "Bespoke Leather Interior",
      "Active Aero"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This EQS 580 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-907",
    "name": "Bentley Flying Spur",
    "brand": "Bentley",
    "model": "Flying Spur",
    "year": 2024,
    "price": 166463,
    "mileage": 7014,
    "engine": "W16 Quad-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1123,
    "acceleration": "3.0s",
    "topSpeed": "194 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Reserved",
    "features": [
      "Night Vision",
      "Soft-close Doors",
      "Bespoke Leather Interior",
      "Starlight Headliner"
    ],
    "description": "A stunning example of Bentley engineering. This Flying Spur offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-908",
    "name": "Aston Martin DBX",
    "brand": "Aston Martin",
    "model": "DBX",
    "year": 2022,
    "price": 1104018,
    "mileage": 12153,
    "engine": "W16 Quad-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 847,
    "acceleration": "3.5s",
    "topSpeed": "198 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Ceramic Brakes",
      "Heads-up Display",
      "Starlight Headliner",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of Aston Martin engineering. This DBX offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-909",
    "name": "Bentley Flying Spur",
    "brand": "Bentley",
    "model": "Flying Spur",
    "year": 2023,
    "price": 831441,
    "mileage": 4484,
    "engine": "Flat-6 Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1184,
    "acceleration": "3.9s",
    "topSpeed": "229 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Bespoke Leather Interior",
      "Heads-up Display",
      "Soft-close Doors",
      "Starlight Headliner"
    ],
    "description": "A stunning example of Bentley engineering. This Flying Spur offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-910",
    "name": "Rolls-Royce Spectre",
    "brand": "Rolls-Royce",
    "model": "Spectre",
    "year": 2024,
    "price": 1043698,
    "mileage": 11468,
    "engine": "Hybrid V12",
    "transmission": "Single-Speed Electric",
    "fuelType": "Hybrid",
    "hp": 1147,
    "acceleration": "2.8s",
    "topSpeed": "189 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Heads-up Display",
      "Soft-close Doors",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Spectre offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-911",
    "name": "Ferrari Purosangue",
    "brand": "Ferrari",
    "model": "Purosangue",
    "year": 2020,
    "price": 898160,
    "mileage": 5186,
    "engine": "Flat-6 Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 513,
    "acceleration": "3.8s",
    "topSpeed": "184 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Active Aero",
      "Ceramic Brakes",
      "Night Vision",
      "Heads-up Display"
    ],
    "description": "A stunning example of Ferrari engineering. This Purosangue offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-912",
    "name": "Rolls-Royce Spectre",
    "brand": "Rolls-Royce",
    "model": "Spectre",
    "year": 2020,
    "price": 1324996,
    "mileage": 9591,
    "engine": "V12 Twin-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 1151,
    "acceleration": "4.4s",
    "topSpeed": "187 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Reserved",
    "features": [
      "Starlight Headliner",
      "Carbon Fiber Trim",
      "Panoramic Roof",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Spectre offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-913",
    "name": "Bugatti Veyron",
    "brand": "Bugatti",
    "model": "Veyron",
    "year": 2022,
    "price": 1042558,
    "mileage": 12093,
    "engine": "Electric Dual-Motor",
    "transmission": "9-Speed Automatic",
    "fuelType": "Electric",
    "hp": 975,
    "acceleration": "2.0s",
    "topSpeed": "160 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Soft-close Doors",
      "Night Vision",
      "Carbon Fiber Trim",
      "Active Aero"
    ],
    "description": "A stunning example of Bugatti engineering. This Veyron offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-914",
    "name": "Aston Martin DBX",
    "brand": "Aston Martin",
    "model": "DBX",
    "year": 2022,
    "price": 1646560,
    "mileage": 211,
    "engine": "Flat-6 Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 460,
    "acceleration": "4.4s",
    "topSpeed": "189 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Active Aero",
      "Massage Seats",
      "Ceramic Brakes",
      "Heads-up Display"
    ],
    "description": "A stunning example of Aston Martin engineering. This DBX offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-915",
    "name": "Ferrari SF90 Stradale",
    "brand": "Ferrari",
    "model": "SF90 Stradale",
    "year": 2020,
    "price": 539256,
    "mileage": 1549,
    "engine": "V10 Natural",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 855,
    "acceleration": "2.5s",
    "topSpeed": "162 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Ceramic Brakes",
      "Soft-close Doors",
      "Night Vision"
    ],
    "description": "A stunning example of Ferrari engineering. This SF90 Stradale offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-916",
    "name": "McLaren 765LT",
    "brand": "McLaren",
    "model": "765LT",
    "year": 2022,
    "price": 1258710,
    "mileage": 12934,
    "engine": "W16 Quad-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 673,
    "acceleration": "4.6s",
    "topSpeed": "200 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Night Vision",
      "Premium Audio System",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of McLaren engineering. This 765LT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-917",
    "name": "Rolls-Royce Ghost",
    "brand": "Rolls-Royce",
    "model": "Ghost",
    "year": 2023,
    "price": 250972,
    "mileage": 12227,
    "engine": "Electric Dual-Motor",
    "transmission": "Single-Speed Electric",
    "fuelType": "Electric",
    "hp": 1108,
    "acceleration": "2.6s",
    "topSpeed": "223 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Soft-close Doors",
      "Panoramic Roof",
      "Night Vision",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Ghost offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-918",
    "name": "Rolls-Royce Spectre",
    "brand": "Rolls-Royce",
    "model": "Spectre",
    "year": 2023,
    "price": 1780692,
    "mileage": 11243,
    "engine": "W16 Quad-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 759,
    "acceleration": "2.5s",
    "topSpeed": "179 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Reserved",
    "features": [
      "Adaptive Suspension",
      "Active Aero",
      "Starlight Headliner",
      "Premium Audio System"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Spectre offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-919",
    "name": "Bugatti Chiron",
    "brand": "Bugatti",
    "model": "Chiron",
    "year": 2024,
    "price": 1318281,
    "mileage": 2484,
    "engine": "W16 Quad-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 853,
    "acceleration": "3.6s",
    "topSpeed": "165 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Bespoke Leather Interior",
      "Heads-up Display",
      "Starlight Headliner"
    ],
    "description": "A stunning example of Bugatti engineering. This Chiron offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-920",
    "name": "Ferrari SF90 Stradale",
    "brand": "Ferrari",
    "model": "SF90 Stradale",
    "year": 2022,
    "price": 2097325,
    "mileage": 7787,
    "engine": "Flat-6 Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 748,
    "acceleration": "4.3s",
    "topSpeed": "198 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Premium Audio System",
      "Ceramic Brakes",
      "Active Aero",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Ferrari engineering. This SF90 Stradale offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-921",
    "name": "Rolls-Royce Dawn",
    "brand": "Rolls-Royce",
    "model": "Dawn",
    "year": 2022,
    "price": 1130846,
    "mileage": 13997,
    "engine": "Flat-6 Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 583,
    "acceleration": "2.6s",
    "topSpeed": "221 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Carbon Fiber Trim",
      "Premium Audio System",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Dawn offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-922",
    "name": "McLaren Artura",
    "brand": "McLaren",
    "model": "Artura",
    "year": 2021,
    "price": 1429267,
    "mileage": 4956,
    "engine": "Hybrid V12",
    "transmission": "Single-Speed Electric",
    "fuelType": "Hybrid",
    "hp": 523,
    "acceleration": "3.7s",
    "topSpeed": "175 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Active Aero",
      "Night Vision",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of McLaren engineering. This Artura offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-923",
    "name": "BMW M8 Competition",
    "brand": "BMW",
    "model": "M8 Competition",
    "year": 2022,
    "price": 1611840,
    "mileage": 14024,
    "engine": "Hybrid V12",
    "transmission": "8-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 931,
    "acceleration": "4.7s",
    "topSpeed": "214 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Night Vision",
      "Active Aero",
      "Soft-close Doors",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of BMW engineering. This M8 Competition offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-924",
    "name": "Lamborghini Hurac├ín",
    "brand": "Lamborghini",
    "model": "Hurac├ín",
    "year": 2021,
    "price": 323680,
    "mileage": 5914,
    "engine": "W16 Quad-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 846,
    "acceleration": "2.9s",
    "topSpeed": "190 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Night Vision",
      "Premium Audio System",
      "Panoramic Roof",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Lamborghini engineering. This Hurac├ín offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-925",
    "name": "Range Rover SV",
    "brand": "Range Rover",
    "model": "SV",
    "year": 2024,
    "price": 1590335,
    "mileage": 10806,
    "engine": "V8 Biturbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 417,
    "acceleration": "2.1s",
    "topSpeed": "248 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Heads-up Display",
      "Panoramic Roof",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Range Rover engineering. This SV offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-926",
    "name": "Bentley Bentayga",
    "brand": "Bentley",
    "model": "Bentayga",
    "year": 2021,
    "price": 304965,
    "mileage": 4552,
    "engine": "Hybrid V12",
    "transmission": "8-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 416,
    "acceleration": "2.2s",
    "topSpeed": "159 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Starlight Headliner",
      "Active Aero",
      "Massage Seats"
    ],
    "description": "A stunning example of Bentley engineering. This Bentayga offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-927",
    "name": "McLaren 720S",
    "brand": "McLaren",
    "model": "720S",
    "year": 2021,
    "price": 269513,
    "mileage": 6098,
    "engine": "V8 Biturbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 436,
    "acceleration": "2.8s",
    "topSpeed": "234 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Active Aero",
      "Starlight Headliner",
      "Massage Seats",
      "Night Vision"
    ],
    "description": "A stunning example of McLaren engineering. This 720S offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-928",
    "name": "Ferrari 296 GTB",
    "brand": "Ferrari",
    "model": "296 GTB",
    "year": 2024,
    "price": 2029745,
    "mileage": 13711,
    "engine": "Hybrid V12",
    "transmission": "8-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 553,
    "acceleration": "4.5s",
    "topSpeed": "249 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Massage Seats",
      "Starlight Headliner",
      "Bespoke Leather Interior",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of Ferrari engineering. This 296 GTB offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-929",
    "name": "Mercedes-Benz G 63 AMG",
    "brand": "Mercedes-Benz",
    "model": "G 63 AMG",
    "year": 2021,
    "price": 1175885,
    "mileage": 904,
    "engine": "V12 Twin-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 934,
    "acceleration": "4.5s",
    "topSpeed": "178 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Reserved",
    "features": [
      "Starlight Headliner",
      "Ceramic Brakes",
      "Carbon Fiber Trim",
      "Premium Audio System"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This G 63 AMG offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-930",
    "name": "Porsche Taycan",
    "brand": "Porsche",
    "model": "Taycan",
    "year": 2020,
    "price": 441854,
    "mileage": 11102,
    "engine": "V12 Twin-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 946,
    "acceleration": "2.0s",
    "topSpeed": "246 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Panoramic Roof",
      "Premium Audio System",
      "Adaptive Suspension",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Porsche engineering. This Taycan offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-931",
    "name": "Mercedes-Benz G 63 AMG",
    "brand": "Mercedes-Benz",
    "model": "G 63 AMG",
    "year": 2022,
    "price": 1061371,
    "mileage": 6486,
    "engine": "W16 Quad-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 787,
    "acceleration": "2.7s",
    "topSpeed": "181 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Carbon Fiber Trim",
      "Soft-close Doors",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This G 63 AMG offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-932",
    "name": "Aston Martin DB11",
    "brand": "Aston Martin",
    "model": "DB11",
    "year": 2022,
    "price": 2048397,
    "mileage": 14194,
    "engine": "Hybrid V12",
    "transmission": "Single-Speed Electric",
    "fuelType": "Hybrid",
    "hp": 690,
    "acceleration": "3.9s",
    "topSpeed": "237 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Bespoke Leather Interior",
      "Active Aero",
      "Ceramic Brakes",
      "Premium Audio System"
    ],
    "description": "A stunning example of Aston Martin engineering. This DB11 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-933",
    "name": "Ferrari 296 GTB",
    "brand": "Ferrari",
    "model": "296 GTB",
    "year": 2022,
    "price": 931496,
    "mileage": 11837,
    "engine": "Electric Dual-Motor",
    "transmission": "Single-Speed Electric",
    "fuelType": "Electric",
    "hp": 1025,
    "acceleration": "4.9s",
    "topSpeed": "183 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Soft-close Doors",
      "Night Vision",
      "Active Aero",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of Ferrari engineering. This 296 GTB offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-934",
    "name": "Range Rover SV",
    "brand": "Range Rover",
    "model": "SV",
    "year": 2023,
    "price": 1527011,
    "mileage": 14829,
    "engine": "V10 Natural",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 532,
    "acceleration": "4.7s",
    "topSpeed": "203 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Carbon Fiber Trim",
      "Panoramic Roof",
      "Soft-close Doors"
    ],
    "description": "A stunning example of Range Rover engineering. This SV offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-935",
    "name": "Ferrari SF90 Stradale",
    "brand": "Ferrari",
    "model": "SF90 Stradale",
    "year": 2023,
    "price": 576372,
    "mileage": 8571,
    "engine": "V8 Biturbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 617,
    "acceleration": "3.6s",
    "topSpeed": "179 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Night Vision",
      "Panoramic Roof",
      "Heads-up Display"
    ],
    "description": "A stunning example of Ferrari engineering. This SF90 Stradale offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-936",
    "name": "Lamborghini Hurac├ín",
    "brand": "Lamborghini",
    "model": "Hurac├ín",
    "year": 2020,
    "price": 1905884,
    "mileage": 13350,
    "engine": "V10 Natural",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 618,
    "acceleration": "3.7s",
    "topSpeed": "240 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Adaptive Suspension",
      "Starlight Headliner",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Lamborghini engineering. This Hurac├ín offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-937",
    "name": "Lamborghini Revuelto",
    "brand": "Lamborghini",
    "model": "Revuelto",
    "year": 2022,
    "price": 1398941,
    "mileage": 1498,
    "engine": "Flat-6 Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 670,
    "acceleration": "2.1s",
    "topSpeed": "240 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Active Aero",
      "Bespoke Leather Interior",
      "Night Vision",
      "Premium Audio System"
    ],
    "description": "A stunning example of Lamborghini engineering. This Revuelto offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-938",
    "name": "Porsche Panamera",
    "brand": "Porsche",
    "model": "Panamera",
    "year": 2021,
    "price": 2060874,
    "mileage": 13059,
    "engine": "V10 Natural",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 992,
    "acceleration": "3.3s",
    "topSpeed": "191 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Carbon Fiber Trim",
      "Massage Seats",
      "Night Vision",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Porsche engineering. This Panamera offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-939",
    "name": "Bugatti Veyron",
    "brand": "Bugatti",
    "model": "Veyron",
    "year": 2022,
    "price": 945836,
    "mileage": 3987,
    "engine": "V10 Natural",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 479,
    "acceleration": "3.7s",
    "topSpeed": "232 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Starlight Headliner",
      "Active Aero",
      "Heads-up Display"
    ],
    "description": "A stunning example of Bugatti engineering. This Veyron offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-940",
    "name": "Lamborghini Sian",
    "brand": "Lamborghini",
    "model": "Sian",
    "year": 2020,
    "price": 1603103,
    "mileage": 4050,
    "engine": "W16 Quad-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 865,
    "acceleration": "2.2s",
    "topSpeed": "180 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Soft-close Doors",
      "Ceramic Brakes",
      "Carbon Fiber Trim",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Lamborghini engineering. This Sian offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-941",
    "name": "McLaren GT",
    "brand": "McLaren",
    "model": "GT",
    "year": 2020,
    "price": 763704,
    "mileage": 7263,
    "engine": "Electric Dual-Motor",
    "transmission": "9-Speed Automatic",
    "fuelType": "Electric",
    "hp": 1172,
    "acceleration": "4.3s",
    "topSpeed": "240 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Soft-close Doors",
      "Bespoke Leather Interior",
      "Active Aero",
      "Premium Audio System"
    ],
    "description": "A stunning example of McLaren engineering. This GT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-942",
    "name": "BMW X7 M60i",
    "brand": "BMW",
    "model": "X7 M60i",
    "year": 2021,
    "price": 716558,
    "mileage": 1336,
    "engine": "V12 Twin-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1082,
    "acceleration": "2.7s",
    "topSpeed": "215 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Night Vision",
      "Heads-up Display",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of BMW engineering. This X7 M60i offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-943",
    "name": "Range Rover Sport SVR",
    "brand": "Range Rover",
    "model": "Sport SVR",
    "year": 2021,
    "price": 1976179,
    "mileage": 8909,
    "engine": "V12 Twin-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 726,
    "acceleration": "2.7s",
    "topSpeed": "169 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Panoramic Roof",
      "Starlight Headliner",
      "Ceramic Brakes",
      "Premium Audio System"
    ],
    "description": "A stunning example of Range Rover engineering. This Sport SVR offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-944",
    "name": "Mercedes-Benz G 63 AMG",
    "brand": "Mercedes-Benz",
    "model": "G 63 AMG",
    "year": 2022,
    "price": 398063,
    "mileage": 4387,
    "engine": "Flat-6 Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1097,
    "acceleration": "4.2s",
    "topSpeed": "190 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Carbon Fiber Trim",
      "Ceramic Brakes",
      "Active Aero"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This G 63 AMG offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-945",
    "name": "Rolls-Royce Phantom",
    "brand": "Rolls-Royce",
    "model": "Phantom",
    "year": 2022,
    "price": 559780,
    "mileage": 8424,
    "engine": "W16 Quad-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 475,
    "acceleration": "2.0s",
    "topSpeed": "202 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Active Aero",
      "Premium Audio System",
      "Bespoke Leather Interior",
      "Soft-close Doors"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Phantom offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-946",
    "name": "Bugatti Chiron",
    "brand": "Bugatti",
    "model": "Chiron",
    "year": 2021,
    "price": 2079458,
    "mileage": 611,
    "engine": "Flat-6 Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 626,
    "acceleration": "3.7s",
    "topSpeed": "181 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Reserved",
    "features": [
      "Premium Audio System",
      "Active Aero",
      "Soft-close Doors",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Bugatti engineering. This Chiron offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-947",
    "name": "Ferrari 296 GTB",
    "brand": "Ferrari",
    "model": "296 GTB",
    "year": 2022,
    "price": 689844,
    "mileage": 5772,
    "engine": "Electric Dual-Motor",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Electric",
    "hp": 946,
    "acceleration": "2.5s",
    "topSpeed": "198 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Massage Seats",
      "Premium Audio System",
      "Panoramic Roof",
      "Night Vision"
    ],
    "description": "A stunning example of Ferrari engineering. This 296 GTB offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-948",
    "name": "Bentley Bentayga",
    "brand": "Bentley",
    "model": "Bentayga",
    "year": 2021,
    "price": 1586289,
    "mileage": 3421,
    "engine": "Electric Dual-Motor",
    "transmission": "8-Speed Automatic",
    "fuelType": "Electric",
    "hp": 726,
    "acceleration": "3.9s",
    "topSpeed": "191 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Massage Seats",
      "Carbon Fiber Trim",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Bentley engineering. This Bentayga offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-949",
    "name": "Lamborghini Hurac├ín",
    "brand": "Lamborghini",
    "model": "Hurac├ín",
    "year": 2023,
    "price": 1556418,
    "mileage": 12497,
    "engine": "Electric Dual-Motor",
    "transmission": "8-Speed Automatic",
    "fuelType": "Electric",
    "hp": 1045,
    "acceleration": "4.6s",
    "topSpeed": "215 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Soft-close Doors",
      "Night Vision",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Lamborghini engineering. This Hurac├ín offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-950",
    "name": "Bentley Mulsanne",
    "brand": "Bentley",
    "model": "Mulsanne",
    "year": 2021,
    "price": 1334766,
    "mileage": 6472,
    "engine": "V10 Natural",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 666,
    "acceleration": "3.0s",
    "topSpeed": "156 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Reserved",
    "features": [
      "Starlight Headliner",
      "Bespoke Leather Interior",
      "Active Aero",
      "Premium Audio System"
    ],
    "description": "A stunning example of Bentley engineering. This Mulsanne offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-951",
    "name": "Rolls-Royce Cullinan",
    "brand": "Rolls-Royce",
    "model": "Cullinan",
    "year": 2023,
    "price": 2027004,
    "mileage": 5919,
    "engine": "Electric Dual-Motor",
    "transmission": "Single-Speed Electric",
    "fuelType": "Electric",
    "hp": 695,
    "acceleration": "2.6s",
    "topSpeed": "198 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Massage Seats",
      "Bespoke Leather Interior",
      "Soft-close Doors",
      "Night Vision"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Cullinan offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-952",
    "name": "Aston Martin Vantage",
    "brand": "Aston Martin",
    "model": "Vantage",
    "year": 2020,
    "price": 1821178,
    "mileage": 5198,
    "engine": "Flat-6 Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 792,
    "acceleration": "4.0s",
    "topSpeed": "224 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Active Aero",
      "Ceramic Brakes",
      "Night Vision",
      "Starlight Headliner"
    ],
    "description": "A stunning example of Aston Martin engineering. This Vantage offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-953",
    "name": "BMW M8 Competition",
    "brand": "BMW",
    "model": "M8 Competition",
    "year": 2024,
    "price": 851836,
    "mileage": 11349,
    "engine": "Hybrid V12",
    "transmission": "Single-Speed Electric",
    "fuelType": "Hybrid",
    "hp": 1126,
    "acceleration": "3.1s",
    "topSpeed": "194 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Massage Seats",
      "Night Vision",
      "Heads-up Display"
    ],
    "description": "A stunning example of BMW engineering. This M8 Competition offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-954",
    "name": "Bugatti Mistral",
    "brand": "Bugatti",
    "model": "Mistral",
    "year": 2023,
    "price": 510970,
    "mileage": 126,
    "engine": "V8 Biturbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 1045,
    "acceleration": "3.2s",
    "topSpeed": "202 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Heads-up Display",
      "Ceramic Brakes",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Bugatti engineering. This Mistral offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-955",
    "name": "Rolls-Royce Spectre",
    "brand": "Rolls-Royce",
    "model": "Spectre",
    "year": 2023,
    "price": 958012,
    "mileage": 11418,
    "engine": "Flat-6 Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 441,
    "acceleration": "2.7s",
    "topSpeed": "161 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Active Aero",
      "Panoramic Roof",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Spectre offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-956",
    "name": "McLaren 765LT",
    "brand": "McLaren",
    "model": "765LT",
    "year": 2020,
    "price": 1264330,
    "mileage": 5688,
    "engine": "V12 Twin-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 625,
    "acceleration": "3.8s",
    "topSpeed": "184 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Reserved",
    "features": [
      "Heads-up Display",
      "Panoramic Roof",
      "Premium Audio System",
      "Active Aero"
    ],
    "description": "A stunning example of McLaren engineering. This 765LT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-957",
    "name": "Lamborghini Revuelto",
    "brand": "Lamborghini",
    "model": "Revuelto",
    "year": 2023,
    "price": 1360410,
    "mileage": 3757,
    "engine": "V10 Natural",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 916,
    "acceleration": "2.3s",
    "topSpeed": "233 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Soft-close Doors",
      "Active Aero",
      "Ceramic Brakes",
      "Starlight Headliner"
    ],
    "description": "A stunning example of Lamborghini engineering. This Revuelto offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-958",
    "name": "Bentley Continental GT",
    "brand": "Bentley",
    "model": "Continental GT",
    "year": 2022,
    "price": 674095,
    "mileage": 968,
    "engine": "V10 Natural",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 1108,
    "acceleration": "4.9s",
    "topSpeed": "211 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Starlight Headliner",
      "Active Aero",
      "Soft-close Doors"
    ],
    "description": "A stunning example of Bentley engineering. This Continental GT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-959",
    "name": "McLaren P1",
    "brand": "McLaren",
    "model": "P1",
    "year": 2023,
    "price": 888583,
    "mileage": 12403,
    "engine": "Electric Dual-Motor",
    "transmission": "9-Speed Automatic",
    "fuelType": "Electric",
    "hp": 957,
    "acceleration": "4.1s",
    "topSpeed": "239 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Reserved",
    "features": [
      "Massage Seats",
      "Premium Audio System",
      "Panoramic Roof",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of McLaren engineering. This P1 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-960",
    "name": "BMW M8 Competition",
    "brand": "BMW",
    "model": "M8 Competition",
    "year": 2024,
    "price": 351377,
    "mileage": 6115,
    "engine": "V10 Natural",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 573,
    "acceleration": "2.5s",
    "topSpeed": "213 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Starlight Headliner",
      "Soft-close Doors",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of BMW engineering. This M8 Competition offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-961",
    "name": "Mercedes-Benz GT Black Series",
    "brand": "Mercedes-Benz",
    "model": "GT Black Series",
    "year": 2022,
    "price": 1378959,
    "mileage": 14099,
    "engine": "Hybrid V12",
    "transmission": "8-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 737,
    "acceleration": "4.5s",
    "topSpeed": "206 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Reserved",
    "features": [
      "Premium Audio System",
      "Night Vision",
      "Starlight Headliner",
      "Massage Seats"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This GT Black Series offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-962",
    "name": "Mercedes-Benz G 63 AMG",
    "brand": "Mercedes-Benz",
    "model": "G 63 AMG",
    "year": 2022,
    "price": 2076877,
    "mileage": 13022,
    "engine": "W16 Quad-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 1093,
    "acceleration": "2.6s",
    "topSpeed": "224 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Massage Seats",
      "Active Aero",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This G 63 AMG offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-963",
    "name": "Rolls-Royce Spectre",
    "brand": "Rolls-Royce",
    "model": "Spectre",
    "year": 2021,
    "price": 1352834,
    "mileage": 11147,
    "engine": "Flat-6 Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 450,
    "acceleration": "2.3s",
    "topSpeed": "167 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Massage Seats",
      "Carbon Fiber Trim",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Spectre offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-964",
    "name": "Porsche 911 Turbo S",
    "brand": "Porsche",
    "model": "911 Turbo S",
    "year": 2023,
    "price": 1506545,
    "mileage": 5284,
    "engine": "V10 Natural",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 792,
    "acceleration": "4.4s",
    "topSpeed": "174 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Adaptive Suspension",
      "Massage Seats",
      "Premium Audio System"
    ],
    "description": "A stunning example of Porsche engineering. This 911 Turbo S offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-965",
    "name": "Porsche 911 Turbo S",
    "brand": "Porsche",
    "model": "911 Turbo S",
    "year": 2023,
    "price": 1822268,
    "mileage": 14060,
    "engine": "V12 Twin-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 814,
    "acceleration": "3.7s",
    "topSpeed": "150 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Massage Seats",
      "Bespoke Leather Interior",
      "Active Aero",
      "Soft-close Doors"
    ],
    "description": "A stunning example of Porsche engineering. This 911 Turbo S offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-966",
    "name": "Ferrari 812 Superfast",
    "brand": "Ferrari",
    "model": "812 Superfast",
    "year": 2020,
    "price": 1002114,
    "mileage": 10176,
    "engine": "W16 Quad-Turbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1077,
    "acceleration": "4.5s",
    "topSpeed": "198 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Heads-up Display",
      "Active Aero",
      "Massage Seats"
    ],
    "description": "A stunning example of Ferrari engineering. This 812 Superfast offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-967",
    "name": "BMW X7 M60i",
    "brand": "BMW",
    "model": "X7 M60i",
    "year": 2020,
    "price": 1933193,
    "mileage": 12401,
    "engine": "Hybrid V12",
    "transmission": "8-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 796,
    "acceleration": "3.0s",
    "topSpeed": "153 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Reserved",
    "features": [
      "Ceramic Brakes",
      "Carbon Fiber Trim",
      "Active Aero",
      "Night Vision"
    ],
    "description": "A stunning example of BMW engineering. This X7 M60i offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-968",
    "name": "Ferrari SF90 Stradale",
    "brand": "Ferrari",
    "model": "SF90 Stradale",
    "year": 2021,
    "price": 1857430,
    "mileage": 14196,
    "engine": "V8 Biturbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 651,
    "acceleration": "2.2s",
    "topSpeed": "238 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Premium Audio System",
      "Panoramic Roof",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Ferrari engineering. This SF90 Stradale offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-969",
    "name": "Porsche Cayenne Turbo",
    "brand": "Porsche",
    "model": "Cayenne Turbo",
    "year": 2023,
    "price": 1153354,
    "mileage": 10471,
    "engine": "V12 Twin-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 683,
    "acceleration": "4.2s",
    "topSpeed": "191 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Night Vision",
      "Panoramic Roof",
      "Heads-up Display",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of Porsche engineering. This Cayenne Turbo offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-970",
    "name": "Bugatti Chiron",
    "brand": "Bugatti",
    "model": "Chiron",
    "year": 2023,
    "price": 1084738,
    "mileage": 1138,
    "engine": "Electric Dual-Motor",
    "transmission": "8-Speed Automatic",
    "fuelType": "Electric",
    "hp": 606,
    "acceleration": "3.1s",
    "topSpeed": "208 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Carbon Fiber Trim",
      "Night Vision",
      "Massage Seats",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Bugatti engineering. This Chiron offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-971",
    "name": "Aston Martin Vantage",
    "brand": "Aston Martin",
    "model": "Vantage",
    "year": 2022,
    "price": 1545129,
    "mileage": 2177,
    "engine": "V10 Natural",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 688,
    "acceleration": "4.9s",
    "topSpeed": "170 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Soft-close Doors",
      "Ceramic Brakes",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of Aston Martin engineering. This Vantage offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-972",
    "name": "Rolls-Royce Dawn",
    "brand": "Rolls-Royce",
    "model": "Dawn",
    "year": 2021,
    "price": 717143,
    "mileage": 1963,
    "engine": "Flat-6 Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 760,
    "acceleration": "4.5s",
    "topSpeed": "241 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Active Aero",
      "Starlight Headliner",
      "Heads-up Display",
      "Massage Seats"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Dawn offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-973",
    "name": "Porsche Taycan",
    "brand": "Porsche",
    "model": "Taycan",
    "year": 2022,
    "price": 1581807,
    "mileage": 4834,
    "engine": "V10 Natural",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 720,
    "acceleration": "3.5s",
    "topSpeed": "222 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Bespoke Leather Interior",
      "Active Aero",
      "Ceramic Brakes",
      "Starlight Headliner"
    ],
    "description": "A stunning example of Porsche engineering. This Taycan offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-974",
    "name": "Aston Martin DB11",
    "brand": "Aston Martin",
    "model": "DB11",
    "year": 2023,
    "price": 1526619,
    "mileage": 9661,
    "engine": "V12 Twin-Turbo",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Petrol",
    "hp": 485,
    "acceleration": "4.8s",
    "topSpeed": "175 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Carbon Fiber Trim",
      "Massage Seats",
      "Ceramic Brakes"
    ],
    "description": "A stunning example of Aston Martin engineering. This DB11 offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-975",
    "name": "Porsche Taycan",
    "brand": "Porsche",
    "model": "Taycan",
    "year": 2022,
    "price": 1995180,
    "mileage": 13222,
    "engine": "Electric Dual-Motor",
    "transmission": "8-Speed Automatic",
    "fuelType": "Electric",
    "hp": 1055,
    "acceleration": "3.2s",
    "topSpeed": "197 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Ceramic Brakes",
      "Panoramic Roof",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of Porsche engineering. This Taycan offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-976",
    "name": "Ferrari 812 Superfast",
    "brand": "Ferrari",
    "model": "812 Superfast",
    "year": 2020,
    "price": 2097786,
    "mileage": 891,
    "engine": "Hybrid V12",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Hybrid",
    "hp": 1150,
    "acceleration": "5.0s",
    "topSpeed": "163 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Active Aero",
      "Adaptive Suspension",
      "Ceramic Brakes",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Ferrari engineering. This 812 Superfast offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-977",
    "name": "Rolls-Royce Dawn",
    "brand": "Rolls-Royce",
    "model": "Dawn",
    "year": 2022,
    "price": 1394495,
    "mileage": 3252,
    "engine": "W16 Quad-Turbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 900,
    "acceleration": "2.1s",
    "topSpeed": "176 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Reserved",
    "features": [
      "Soft-close Doors",
      "Active Aero",
      "Panoramic Roof",
      "Night Vision"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Dawn offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-978",
    "name": "Rolls-Royce Phantom",
    "brand": "Rolls-Royce",
    "model": "Phantom",
    "year": 2021,
    "price": 1678315,
    "mileage": 9937,
    "engine": "Electric Dual-Motor",
    "transmission": "9-Speed Automatic",
    "fuelType": "Electric",
    "hp": 489,
    "acceleration": "2.2s",
    "topSpeed": "244 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Massage Seats",
      "Panoramic Roof",
      "Active Aero",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Phantom offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-979",
    "name": "Mercedes-Benz G 63 AMG",
    "brand": "Mercedes-Benz",
    "model": "G 63 AMG",
    "year": 2020,
    "price": 1991384,
    "mileage": 7388,
    "engine": "W16 Quad-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 794,
    "acceleration": "3.3s",
    "topSpeed": "204 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Reserved",
    "features": [
      "Active Aero",
      "Heads-up Display",
      "Starlight Headliner",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This G 63 AMG offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-980",
    "name": "Rolls-Royce Dawn",
    "brand": "Rolls-Royce",
    "model": "Dawn",
    "year": 2021,
    "price": 556092,
    "mileage": 13532,
    "engine": "V10 Natural",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 818,
    "acceleration": "2.1s",
    "topSpeed": "247 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Bespoke Leather Interior",
      "Active Aero",
      "Starlight Headliner",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Dawn offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-981",
    "name": "Porsche Cayenne Turbo",
    "brand": "Porsche",
    "model": "Cayenne Turbo",
    "year": 2020,
    "price": 1555273,
    "mileage": 13215,
    "engine": "Hybrid V12",
    "transmission": "8-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 787,
    "acceleration": "4.2s",
    "topSpeed": "233 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Starlight Headliner",
      "Massage Seats",
      "Active Aero"
    ],
    "description": "A stunning example of Porsche engineering. This Cayenne Turbo offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-982",
    "name": "Aston Martin Valhalla",
    "brand": "Aston Martin",
    "model": "Valhalla",
    "year": 2020,
    "price": 418917,
    "mileage": 6614,
    "engine": "V8 Biturbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 847,
    "acceleration": "4.1s",
    "topSpeed": "207 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Bespoke Leather Interior",
      "Adaptive Suspension",
      "Starlight Headliner",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Aston Martin engineering. This Valhalla offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-983",
    "name": "Bentley Bentayga",
    "brand": "Bentley",
    "model": "Bentayga",
    "year": 2022,
    "price": 858891,
    "mileage": 3877,
    "engine": "V10 Natural",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1177,
    "acceleration": "4.2s",
    "topSpeed": "188 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Night Vision",
      "Premium Audio System",
      "Bespoke Leather Interior",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of Bentley engineering. This Bentayga offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-984",
    "name": "Mercedes-Benz GT Black Series",
    "brand": "Mercedes-Benz",
    "model": "GT Black Series",
    "year": 2020,
    "price": 1472837,
    "mileage": 1569,
    "engine": "Hybrid V12",
    "transmission": "8-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 562,
    "acceleration": "3.5s",
    "topSpeed": "184 mph",
    "images": [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Adaptive Suspension",
      "Carbon Fiber Trim",
      "Panoramic Roof"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This GT Black Series offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-985",
    "name": "Ferrari F8 Tributo",
    "brand": "Ferrari",
    "model": "F8 Tributo",
    "year": 2021,
    "price": 1919239,
    "mileage": 9471,
    "engine": "V10 Natural",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 1013,
    "acceleration": "2.1s",
    "topSpeed": "180 mph",
    "images": [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Massage Seats",
      "Active Aero",
      "Starlight Headliner"
    ],
    "description": "A stunning example of Ferrari engineering. This F8 Tributo offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-986",
    "name": "Mercedes-Benz G 63 AMG",
    "brand": "Mercedes-Benz",
    "model": "G 63 AMG",
    "year": 2020,
    "price": 933607,
    "mileage": 1207,
    "engine": "Flat-6 Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 1065,
    "acceleration": "2.4s",
    "topSpeed": "178 mph",
    "images": [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Panoramic Roof",
      "Starlight Headliner",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of Mercedes-Benz engineering. This G 63 AMG offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-987",
    "name": "Range Rover Velar",
    "brand": "Range Rover",
    "model": "Velar",
    "year": 2020,
    "price": 144081,
    "mileage": 9448,
    "engine": "Hybrid V12",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Hybrid",
    "hp": 992,
    "acceleration": "3.9s",
    "topSpeed": "177 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "SUV",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Panoramic Roof",
      "Active Aero",
      "Soft-close Doors"
    ],
    "description": "A stunning example of Range Rover engineering. This Velar offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-988",
    "name": "McLaren 720S",
    "brand": "McLaren",
    "model": "720S",
    "year": 2021,
    "price": 2046947,
    "mileage": 457,
    "engine": "Hybrid V12",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Hybrid",
    "hp": 1089,
    "acceleration": "4.1s",
    "topSpeed": "215 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Premium Audio System",
      "Ceramic Brakes",
      "Heads-up Display",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of McLaren engineering. This 720S offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-989",
    "name": "Ferrari 296 GTB",
    "brand": "Ferrari",
    "model": "296 GTB",
    "year": 2021,
    "price": 486235,
    "mileage": 1332,
    "engine": "V8 Biturbo",
    "transmission": "9-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 601,
    "acceleration": "2.3s",
    "topSpeed": "201 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Starlight Headliner",
      "Soft-close Doors",
      "Night Vision"
    ],
    "description": "A stunning example of Ferrari engineering. This 296 GTB offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-990",
    "name": "Bugatti Chiron",
    "brand": "Bugatti",
    "model": "Chiron",
    "year": 2022,
    "price": 768491,
    "mileage": 3987,
    "engine": "V8 Biturbo",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 892,
    "acceleration": "2.4s",
    "topSpeed": "225 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Night Vision",
      "Bespoke Leather Interior",
      "Active Aero",
      "Carbon Fiber Trim"
    ],
    "description": "A stunning example of Bugatti engineering. This Chiron offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-991",
    "name": "Rolls-Royce Cullinan",
    "brand": "Rolls-Royce",
    "model": "Cullinan",
    "year": 2024,
    "price": 881071,
    "mileage": 7108,
    "engine": "Flat-6 Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 1024,
    "acceleration": "2.9s",
    "topSpeed": "223 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Adaptive Suspension",
      "Active Aero",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Rolls-Royce engineering. This Cullinan offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-992",
    "name": "Porsche Cayenne Turbo",
    "brand": "Porsche",
    "model": "Cayenne Turbo",
    "year": 2021,
    "price": 1357444,
    "mileage": 14592,
    "engine": "Hybrid V12",
    "transmission": "9-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 945,
    "acceleration": "3.5s",
    "topSpeed": "209 mph",
    "images": [
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Adaptive Suspension",
      "Panoramic Roof",
      "Night Vision",
      "Premium Audio System"
    ],
    "description": "A stunning example of Porsche engineering. This Cayenne Turbo offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-993",
    "name": "BMW X7 M60i",
    "brand": "BMW",
    "model": "X7 M60i",
    "year": 2024,
    "price": 760059,
    "mileage": 14450,
    "engine": "Electric Dual-Motor",
    "transmission": "8-Speed Automatic",
    "fuelType": "Electric",
    "hp": 727,
    "acceleration": "3.3s",
    "topSpeed": "234 mph",
    "images": [
      "https://images.unsplash.com/photo-1542362567-b058c02b0147?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Starlight Headliner",
      "Massage Seats",
      "Adaptive Suspension",
      "Night Vision"
    ],
    "description": "A stunning example of BMW engineering. This X7 M60i offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-994",
    "name": "Porsche Panamera",
    "brand": "Porsche",
    "model": "Panamera",
    "year": 2022,
    "price": 1126439,
    "mileage": 7195,
    "engine": "W16 Quad-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 491,
    "acceleration": "4.2s",
    "topSpeed": "233 mph",
    "images": [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Night Vision",
      "Starlight Headliner",
      "Adaptive Suspension",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Porsche engineering. This Panamera offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-995",
    "name": "Lamborghini Aventador",
    "brand": "Lamborghini",
    "model": "Aventador",
    "year": 2023,
    "price": 626055,
    "mileage": 7500,
    "engine": "Hybrid V12",
    "transmission": "8-Speed Automatic",
    "fuelType": "Hybrid",
    "hp": 1017,
    "acceleration": "3.6s",
    "topSpeed": "213 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Reserved",
    "features": [
      "Massage Seats",
      "Ceramic Brakes",
      "Adaptive Suspension",
      "Night Vision"
    ],
    "description": "A stunning example of Lamborghini engineering. This Aventador offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-996",
    "name": "Bentley Continental GT",
    "brand": "Bentley",
    "model": "Continental GT",
    "year": 2021,
    "price": 684524,
    "mileage": 4193,
    "engine": "Electric Dual-Motor",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Electric",
    "hp": 634,
    "acceleration": "4.9s",
    "topSpeed": "228 mph",
    "images": [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Premium Audio System",
      "Soft-close Doors",
      "Night Vision"
    ],
    "description": "A stunning example of Bentley engineering. This Continental GT offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-997",
    "name": "Bentley Bentayga",
    "brand": "Bentley",
    "model": "Bentayga",
    "year": 2024,
    "price": 802985,
    "mileage": 13262,
    "engine": "Electric Dual-Motor",
    "transmission": "7-Speed Dual-Clutch",
    "fuelType": "Electric",
    "hp": 555,
    "acceleration": "2.5s",
    "topSpeed": "163 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Luxury",
    "status": "Available",
    "features": [
      "Soft-close Doors",
      "Massage Seats",
      "Carbon Fiber Trim",
      "Premium Audio System"
    ],
    "description": "A stunning example of Bentley engineering. This Bentayga offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-998",
    "name": "Bugatti Chiron",
    "brand": "Bugatti",
    "model": "Chiron",
    "year": 2022,
    "price": 1916777,
    "mileage": 7195,
    "engine": "W16 Quad-Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 667,
    "acceleration": "4.8s",
    "topSpeed": "197 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Hypercar",
    "status": "Available",
    "features": [
      "Ceramic Brakes",
      "Starlight Headliner",
      "Bespoke Leather Interior",
      "Night Vision"
    ],
    "description": "A stunning example of Bugatti engineering. This Chiron offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-999",
    "name": "Aston Martin DBX",
    "brand": "Aston Martin",
    "model": "DBX",
    "year": 2022,
    "price": 158504,
    "mileage": 14559,
    "engine": "V10 Natural",
    "transmission": "8-Speed Automatic",
    "fuelType": "Petrol",
    "hp": 855,
    "acceleration": "4.4s",
    "topSpeed": "201 mph",
    "images": [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Heads-up Display",
      "Active Aero",
      "Night Vision",
      "Bespoke Leather Interior"
    ],
    "description": "A stunning example of Aston Martin engineering. This DBX offers a perfect blend of performance and luxury."
  },
  {
    "id": "gen-1000",
    "name": "Ferrari Purosangue",
    "brand": "Ferrari",
    "model": "Purosangue",
    "year": 2024,
    "price": 332282,
    "mileage": 5113,
    "engine": "Flat-6 Turbo",
    "transmission": "Single-Speed Electric",
    "fuelType": "Petrol",
    "hp": 929,
    "acceleration": "4.9s",
    "topSpeed": "223 mph",
    "images": [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop"
    ],
    "category": "Sports",
    "status": "Available",
    "features": [
      "Massage Seats",
      "Carbon Fiber Trim",
      "Active Aero",
      "Adaptive Suspension"
    ],
    "description": "A stunning example of Ferrari engineering. This Purosangue offers a perfect blend of performance and luxury."
  }
];
