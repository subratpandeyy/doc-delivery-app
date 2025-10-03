import { Medicine } from '@/types/medicine';

export const mockMedicines: Medicine[] = [
  {
    id: '1',
    name: 'Paracetamol 500mg',
    description: 'Pain relief and fever reducer. Safe and effective for adults and children.',
    price: 25,
    category: 'Pain Relief',
    stock: 150,
    requiresPrescription: false,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400',
    manufacturer: 'PharmaCorp'
  },
  {
    id: '2',
    name: 'Amoxicillin 250mg',
    description: 'Antibiotic for bacterial infections. Requires prescription.',
    price: 120,
    category: 'Antibiotics',
    stock: 80,
    requiresPrescription: true,
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400',
    manufacturer: 'MediLife'
  },
  {
    id: '3',
    name: 'Vitamin D3 60K',
    description: 'Vitamin D supplement for bone health and immunity.',
    price: 85,
    category: 'Vitamins',
    stock: 200,
    requiresPrescription: false,
    image: 'https://images.unsplash.com/photo-1550572017-4efa8e8b5815?w=400',
    manufacturer: 'HealthPlus'
  },
  {
    id: '4',
    name: 'Cough Syrup',
    description: 'Relief from dry and wet cough. Suitable for all ages.',
    price: 95,
    category: 'Cold & Flu',
    stock: 120,
    requiresPrescription: false,
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400',
    manufacturer: 'CarePlus'
  },
  {
    id: '5',
    name: 'Omeprazole 20mg',
    description: 'Treats acid reflux and heartburn. Take once daily.',
    price: 65,
    category: 'Digestive',
    stock: 90,
    requiresPrescription: true,
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400',
    manufacturer: 'PharmaCorp'
  },
  {
    id: '6',
    name: 'Aspirin 75mg',
    description: 'Blood thinner and pain relief. Low dose for heart health.',
    price: 40,
    category: 'Cardiovascular',
    stock: 180,
    requiresPrescription: false,
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=400',
    manufacturer: 'MediLife'
  },
  {
    id: '7',
    name: 'Cetirizine 10mg',
    description: 'Antihistamine for allergy relief. Non-drowsy formula.',
    price: 55,
    category: 'Allergy',
    stock: 140,
    requiresPrescription: false,
    image: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=400',
    manufacturer: 'HealthPlus'
  },
  {
    id: '8',
    name: 'Insulin Glargine',
    description: 'Long-acting insulin for diabetes management.',
    price: 850,
    category: 'Diabetes',
    stock: 45,
    requiresPrescription: true,
    image: 'https://images.unsplash.com/photo-1615486363969-0d660f6c6088?w=400',
    manufacturer: 'DiabetCare'
  }
];
