export interface Service {
  title: string;
  description: string;
  icon: string;
}

export const servicesData: Service[] = [
  {
    title: 'Android Development',
    description:
      'Native Android applications built with Kotlin and Jetpack Compose, focusing on performance, clean architecture, and modern UI/UX.',
    icon: 'fa-mobile-alt',
  },
  {
    title: 'Flutter Development',
    description:
      'Cross-platform mobile applications for iOS and Android using Flutter and Dart, delivering high performance from a single codebase.',
    icon: 'fa-layer-group',
  },
  {
    title: 'Web Development',
    description:
      'Responsive, mobile-first websites and web applications built with modern web technologies, fast load times, and clean semantics.',
    icon: 'fa-laptop-code',
  },
  {
    title: 'Backend & APIs',
    description:
      'Robust backend integration, RESTful APIs, and cloud services (Firebase, Supabase) engineered to power secure, scalable applications.',
    icon: 'fa-server',
  },
  {
    title: 'Maintenance & Features',
    description:
      'Reliable bug fixing, seamless feature integration, legacy code refactoring, performance optimization, and regular maintenance.',
    icon: 'fa-wrench',
  },
  {
    title: 'UI/UX Design',
    description:
      'Beautiful, intuitive mobile and web interfaces following Material Design guidelines for a seamless, polished user experience.',
    icon: 'fa-palette',
  },
];
