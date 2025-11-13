export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  provider: "google" | "facebook" | "email";
  membershipLevel: "bronze" | "silver" | "gold" | "platinum";
  personalInfo: PersonalInfo;
  contactInfo: ContactInfo;
}

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  fullName: string;
  gender: "male" | "female" | "other";
  dateOfBirth: {
    day: number;
    month: number;
    year: number;
  };
  city: string;
  country: string;
}

export interface ContactInfo {
  emails: EmailInfo[];
  phoneNumbers: PhoneInfo[];
}

export interface EmailInfo {
  id: string;
  email: string;
  isPrimary: boolean;
  isVerified: boolean;
  receiveNotifications: boolean;
}

export interface PhoneInfo {
  id: string;
  number: string;
  countryCode: string;
  isPrimary: boolean;
  isVerified: boolean;
}

export interface ProfileTabType {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  count?: number;
  badge?: boolean;
}

export type ProfileTab =
  | "personal"
  | "cards"
  | "bookings"
  | "transactions"
  | "refunds"
  | "notifications"
  | "passenger"
  | "settings"
  | "account"
  | "logout";
