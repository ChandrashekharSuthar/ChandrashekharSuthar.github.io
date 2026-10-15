export interface StackCategory {
  title: string;
  description: string;
  icon: string;
  iconType?: 'fab' | 'fas';
  tags: string[];
}

export const stackData: StackCategory[] = [
  {
    title: 'Native Android',
    description:
      'High-performance native mobile development with clean architecture and modern Android toolchains.',
    icon: 'fa-android',
    iconType: 'fab',
    tags: ['Kotlin', 'Jetpack Compose', 'Java', 'Coroutines', 'Flow', 'MVVM', 'Media3 / ExoPlayer', 'Room'],
  },
  {
    title: 'Cross-Platform',
    description:
      'Unified, pixel-perfect mobile applications engineered for both iOS and Android from a single codebase.',
    icon: 'fa-layer-group',
    iconType: 'fas',
    tags: ['Flutter', 'Dart', 'iOS', 'Android', 'State Management', 'Custom UI/UX'],
  },
  {
    title: 'Backend & APIs',
    description:
      'Robust cloud integrations, realtime databases, authentication, and secure scalable APIs.',
    icon: 'fa-server',
    iconType: 'fas',
    tags: ['Firebase', 'Supabase', 'REST APIs', 'Node.js', 'Cloud Storage', 'Cloud Firestore'],
  },
];
