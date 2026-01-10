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
