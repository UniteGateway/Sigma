export type PageId =
  | 'home'
  | 'about'
  | 'partners'
  | 'wind'
  | 'solar'
  | 'bess'
  | 'hybrid'
  | 'solutions'
  | 'projects'
  | 'technology'
  | 'sustainability'
  | 'careers'
  | 'contact';

export interface PartnerItem {
  id: string;
  name: string;
  category: 'Tier-1 Technology & OEM' | 'EPC & Civil Infrastructure' | 'BESS & Electrochemical Storage' | 'Grid SCADA & Power Systems' | 'Bankability & Technical Audit';
  experienceYears: string;
  gwTrackRecord: string;
  description: string;
  scope: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Wind' | 'Solar' | 'BESS' | 'Hybrid' | 'Commercial & Industrial';
  capacity: string; // e.g. "340 MW" or "120 MW / 240 MWh"
  location: string;
  country: string;
  year: string;
  image: string;
  description: string;
  highlights: string[];
  co2OffsetPerYear: string;
  homesPowered: string;
  offtaker: string;
  technology: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: 'EPC & Construction' | 'Renewable Engineering' | 'BESS & Storage Systems' | 'Asset Management & SCADA' | 'Business Development';
  location: string;
  type: 'Full-time' | 'On-site' | 'Hybrid';
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export interface LeadershipMember {
  name: string;
  role: string;
  department: string;
  bio: string;
  image: string;
}
