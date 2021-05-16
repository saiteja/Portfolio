export interface Profile {
    meta: Meta;
    basics: Basics;
    education?: (EducationEntity)[] | null;
    references?: (ReferencesEntity)[] | null;
    skills?: (SkillsEntity)[] | null;
    awards?: (AwardsEntity)[] | null;
    work?: (WorkEntity)[] | null;
    interests?: (InterestsEntity)[] | null;
  }
  export interface Meta {
    theme: string;
  }
  export interface Basics {
    name: string;
    label: string;
    image: string;
    summary: string;
    headline:string;
    website: string;
    email: string;
    location: Location;
    profiles?: (ProfilesEntity)[] | null;
  }
  export interface Location {
    city: string;
    countryCode: string;
  }
  export interface ProfilesEntity {
    username: string;
    url: string;
    network: string;
  }
  export interface EducationEntity {
    endDate: string;
    startDate: string;
    area: string;
    studyType: string;
    institution: string;
  }
  export interface ReferencesEntity {
    reference: string;
    name: string;
  }
  export interface SkillsEntity {
    keywords?: (string)[] | null;
    level: string;
    name: string;
    yearsOfExperience: number;
    rating: number;
  }
  export interface AwardsEntity {
    title: string;
    awarder: string;
  }
  export interface WorkEntity {
    summary: string;
    website: string;
    company: string;
    location?: string | null;
    position: string;
    startDate: string;
    highlights?: (string)[] | null;
    endDate?: string | null;
    pinned?: boolean | null;
  }
  export interface InterestsEntity {
    name: string;
  }
  