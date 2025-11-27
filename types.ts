export interface MenuItem {
  name: string;
  description: string;
  price: string;
  category: 'antipasti' | 'pasta' | 'pizza' | 'mains' | 'dessert';
  dietary?: ('veg' | 'gf' | 'vegan')[];
}

export interface Testimonial {
  text: string;
  author: string;
  rating: number;
  source?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}