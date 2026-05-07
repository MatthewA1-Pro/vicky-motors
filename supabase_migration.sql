-- LUXE Auto Gallery Database Schema

-- 1. Create Vehicles Table
CREATE TABLE IF NOT EXISTS vehicles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    brand TEXT NOT NULL,
    model TEXT NOT NULL,
    year INTEGER NOT NULL,
    price NUMERIC NOT NULL,
    mileage INTEGER NOT NULL,
    engine TEXT,
    transmission TEXT,
    fuel_type TEXT,
    hp INTEGER,
    acceleration TEXT,
    top_speed TEXT,
    images TEXT[] DEFAULT '{}',
    category TEXT CHECK (category IN ('Sports', 'Luxury', 'SUV', 'Hypercar', 'Electric')),
    status TEXT DEFAULT 'Available' CHECK (status IN ('Available', 'Sold', 'Reserved')),
    features TEXT[] DEFAULT '{}',
    description TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Create Inquiries Table
CREATE TABLE IF NOT EXISTS inquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    interest TEXT,
    message TEXT,
    status TEXT DEFAULT 'Pending' CHECK (status IN ('Pending', 'Priority', 'Closed')),
    vehicle_id UUID REFERENCES vehicles(id),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE vehicles ENABLE ROW LEVEL SECURITY;
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- 4. Create Policies
-- Vehicles: Anyone can read, only authenticated admins can modify
CREATE POLICY "Public read access for vehicles" ON vehicles FOR SELECT USING (true);
CREATE POLICY "Admin full access for vehicles" ON vehicles FOR ALL USING (auth.role() = 'authenticated');

-- Inquiries: Anyone can insert, only authenticated admins can read/modify
CREATE POLICY "Public insert access for inquiries" ON inquiries FOR INSERT WITH CHECK (true);
CREATE POLICY "Admin full access for inquiries" ON inquiries FOR ALL USING (auth.role() = 'authenticated');

-- 5. Insert Initial Seed Data
INSERT INTO vehicles (name, brand, model, year, price, mileage, engine, transmission, fuel_type, hp, acceleration, top_speed, images, category, status, features, description)
VALUES 
(
    'Rolls-Royce Phantom Series II', 'Rolls-Royce', 'Phantom', 2024, 460000, 120, 
    '6.75L V12 Twin-Turbo', '8-Speed Automatic', 'Petrol', 563, '5.1s', '155 mph', 
    ARRAY['https://images.unsplash.com/photo-1631214503951-375126d85444?q=80&w=2000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop'],
    'Luxury', 'Available', 
    ARRAY['Starlight Headliner', 'Coach Doors', 'Whisper-quiet Cabin', 'Deep-pile Floor Mats'],
    'The pinnacle of luxury. The Phantom Series II provides an unparalleled experience of elegance and serenity.'
),
(
    'Lamborghini Revuelto', 'Lamborghini', 'Revuelto', 2024, 608000, 50, 
    '6.5L V12 Hybrid', '8-Speed Dual-Clutch', 'Hybrid', 1001, '2.5s', '217 mph', 
    ARRAY['https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?q=80&w=2000&auto=format&fit=crop'],
    'Hypercar', 'Available', 
    ARRAY['Active Aerodynamics', 'Carbon Fiber Monocoque', 'Hybrid Powertrain', 'Y-shaped LED'],
    'A new era of performance. The Revuelto combines the raw power of a V12 with cutting-edge hybrid technology.'
),
(
    'Mercedes-AMG G 63', 'Mercedes-Benz', 'G-Class', 2023, 179000, 1500, 
    '4.0L V8 Biturbo', '9-Speed Automatic', 'Petrol', 577, '4.5s', '137 mph', 
    ARRAY['https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=2000&auto=format&fit=crop'],
    'SUV', 'Available', 
    ARRAY['Three Differential Locks', 'AMG Ride Control', 'Burmester Surround Sound', 'Widescreen Cockpit'],
    'An icon of off-road capability and luxury. The G 63 is the ultimate statement SUV.'
);
