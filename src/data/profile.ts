export interface QuickStat {
  value: string;
  label: string;
}

export interface Highlight {
  icon: string;
  label: string;
}

export interface ProfileData {
  name: string;
  role: string;
  location: string;
  fiverrUrl: string;
  email: string;
  stats: QuickStat[];
  bio: string;
  lead: string;
  story: string[];
  highlights: Highlight[];
}

export const profileData: ProfileData = {
  name: 'Chandra Shekhar Suthar',
  role: 'Mobile App Engineer',
  location: 'Udaipur, Rajasthan, India',
  fiverrUrl: 'https://www.fiverr.com/shekharsuthar07',
  email: 'chandrashekharsuthar.work@gmail.com',
  stats: [
    { value: '3+', label: 'Years Exp' },
    { value: '10+', label: 'Projects' },
    { value: '15+', label: 'Clients' },
  ],
  bio: 'Crafting elegant mobile experiences with clean architecture. Transforming ideas into scalable native and cross-platform mobile applications.',
  lead: "I'm a passionate Mobile App Engineer with 3+ years of experience building high-quality native and cross-platform mobile applications that users love.",
  story: [
    'My journey in mobile development started with a curiosity about how apps work, and it evolved into a career where I get to solve complex problems and create intuitive user experiences every day. I specialize in Kotlin, Java, and Dart, with a strong focus on clean architecture, MVVM patterns, and modern native and cross-platform development practices.',
    "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.",
  ],
  highlights: [
    { icon: 'fa-cubes', label: 'Clean Architecture Expert' },
    { icon: 'fa-google-play', label: 'Play Store Publishing' },
    { icon: 'fa-sync-alt', label: 'Agile Development' },
  ],
};
