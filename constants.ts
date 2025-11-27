import { MenuItem, Testimonial, FAQItem, TeamMember } from './types';

export const BUSINESS_INFO = {
  name: "Bottega",
  city: "San Francisco",
  address: "1234 Market St, San Francisco, CA 94105",
  phone: "(415) 555-0199",
  email: "hello@bottega.com",
  hours: "Mon–Sun 11:00 AM – 10:00 PM",
};

export const MENU_ITEMS: MenuItem[] = [
  {
    name: "Burrata alla Caprese",
    description: "Creamy burrata, cherry tomatoes, basil, balsamic",
    price: "$18",
    category: "antipasti",
    dietary: ["veg", "gf"]
  },
  {
    name: "Polpette al Sugo",
    description: "House meatballs, San Marzano tomato sauce",
    price: "$16",
    category: "antipasti"
  },
  {
    name: "Fritti",
    description: "Crispy seasonal vegetables, lemon aioli",
    price: "$14",
    category: "antipasti",
    dietary: ["veg"]
  },
  {
    name: "Spaghetti alle Polpette",
    description: "San Marzano tomato, basil, house meatballs",
    price: "$24",
    category: "pasta"
  },
  {
    name: "Fettuccine Alfredo",
    description: "House egg pasta, butter, parmesan",
    price: "$22",
    category: "pasta",
    dietary: ["veg"]
  },
  {
    name: "Ravioli ai Funghi",
    description: "Ricotta & porcini, brown butter sage",
    price: "$26",
    category: "pasta",
    dietary: ["veg"]
  },
  {
    name: "Margherita",
    description: "Tomato, fior di latte, basil",
    price: "$19",
    category: "pizza",
    dietary: ["veg"]
  },
  {
    name: "Salsiccia",
    description: "Italian sausage, mushrooms, onion, tomato",
    price: "$22",
    category: "pizza"
  },
  {
    name: "Tartufo",
    description: "Wild mushrooms, black truffle cream",
    price: "$25",
    category: "pizza",
    dietary: ["veg"]
  },
  {
    name: "Pollo Parmigiana",
    description: "Breaded chicken, marinara, mozzarella",
    price: "$28",
    category: "mains"
  },
  {
    name: "Branzino al Forno",
    description: "Oven-roasted Mediterranean sea bass, lemon, herbs",
    price: "$34",
    category: "mains",
    dietary: ["gf"]
  },
  {
    name: "Tiramisu",
    description: "Classic espresso-soaked ladyfingers, mascarpone",
    price: "$12",
    category: "dessert",
    dietary: ["veg"]
  },
  {
    name: "Panna Cotta",
    description: "Seasonal compote",
    price: "$11",
    category: "dessert",
    dietary: ["gf"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { text: "The house-made pasta is incredible — silky and perfectly seasoned. Great neighborhood spot.", author: "Anna R.", rating: 5 },
  { text: "Authentic flavors and a warm service team. The truffle ravioli is a must.", author: "Marcus T.", rating: 5 },
  { text: "Perfect for group dinners. Quick reservation response and flexible menu options.", author: "Priya S.", rating: 5 },
];

export const FAQS: FAQItem[] = [
  { question: "Do you take reservations?", answer: `Yes — we recommend reservations for dinner and weekend seating. Reserve online or call ${BUSINESS_INFO.phone}.` },
  { question: "Do you offer vegetarian / vegan options?", answer: "Yes — we have seasonal vegetarian pastas, salads, and can adapt several dishes on request." },
  { question: "Do you offer takeout / delivery?", answer: "We offer takeout by phone and delivery through select partners." },
  { question: "Do you cater events?", answer: `Yes. Email ${BUSINESS_INFO.email} or use the Catering form for a custom proposal.` },
  { question: "Are you wheelchair accessible?", answer: "Yes. The main dining room is accessible. Contact us for assistance." }
];

export const TEAM: TeamMember[] = [
  { name: "Marco Rossi", role: "Head Chef", bio: "Trained in Bologna, Marco brings 20 years of authentic pasta craftsmanship.", image: "https://picsum.photos/400/500?random=10" },
  { name: "Sarah Jenkins", role: "General Manager", bio: "Ensuring every guest feels like family with over a decade in hospitality.", image: "https://picsum.photos/400/500?random=11" }
];