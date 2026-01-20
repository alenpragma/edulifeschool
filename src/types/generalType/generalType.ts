export interface SiteSettingsResponse {
  success: boolean;
  message: string;
  data: SiteSettingsData;
}

export interface SiteSettingsData {
  hero: Hero;
  social: SocialLinks;
  contact: ContactItem[];
  campuses: Campus[];
  openingHours: OpeningHourss;
  testimonials: Testimonial[];
  highlights: Highlights;
  features: Features;
  whyChooseUs: WhyChooseUs;
}

export interface Hero {
  title: string;
  subtitle: string;
  heroImage: string;
}

export interface SocialLinks {
  twitter: string;
  youtube: string;
  facebook: string;
  instagram: string;
}

export interface ContactItem {
  name: string;
  value: string;
  description: string;
}

export interface Campus {
  name: string;
  phone: string;
  address: string;
  googleMapUrl: string;
}

export interface OpeningHourss {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

export interface Testimonial {
  name: string;
  title: string;
  value: string;
  subtitle: string;
}

export interface Highlights {
  highlight1: HighlightItem;
  highlight2: HighlightItem;
  highlight3: HighlightItem;
}

export interface HighlightItem {
  title: string;
  description: string;
}

export interface Features {
  feature1: FeatureItem;
  feature2: FeatureItem;
  feature3: FeatureItem;
  feature4: FeatureItem;
  feature5: FeatureItem;
  feature6: FeatureItem;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface WhyChooseUs {
  title: string;
  description: string;
  bannerImage: string;
  points: WhyChoosePoint[];
}

export interface WhyChoosePoint {
  description: string;
}
