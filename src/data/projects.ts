export interface Project {
  title: string;
  description: string;
  image: string;
  link?: string;
  ariaLabel?: string;
  tags: string[];
}

export const projectsData: Project[] = [
  {
    title: 'Cricbud – Live Cricket Scores & News',
    description:
      'Complete redesign and technical enhancement of a cricket platform delivering live scores, match updates, and news. Improved performance, implemented responsive design, and optimized for speed with caching and API enhancements.',
    image: 'images/cricbud-home-page.png',
    link: 'https://cricbud.com',
    ariaLabel: 'Visit Cricbud – Live Cricket Scores & News',
    tags: ['Figma', 'Node.js', 'React.js', 'REST API', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'IPL Live Matches',
    description:
      'IPL-focused web platform displaying match schedules, results, and cricket content with year-wise filtering. Delivers a clean, dedicated experience for IPL fans with team info, standings, and season-specific data.',
    image: 'images/ipl-live-matches.png',
    link: 'https://ipllivematches.com',
    ariaLabel: 'Visit IPL Live Matches',
    tags: ['HTML', 'CSS', 'JavaScript', 'REST API', 'Node.js'],
  },
  {
    title: 'The Stitching Partner App',
    description:
      'Business solution for tailors and fashion designers to create affiliate websites and sell products online. Features customer targeting, measurement management, earnings tracking, and secure OTP authentication. Handled complete Play Store publishing process.',
    image: 'images/ts_app.webp',
    link: 'https://play.google.com/store/apps/details?id=com.thestitching.partner',
    ariaLabel: 'View The Stitching Partner on Google Play',
    tags: ['Kotlin', 'MVVM', 'REST API', 'Firebase', 'Deep Links', 'OTP Auth', 'Play Store Publishing'],
  },
  {
    title: 'Wonder 11 Fantasy Cricket App',
    description:
      'Fantasy cricket mobile application with contest joining, dynamic countdowns, and live team tracking. Built with Kotlin and clean architecture patterns.',
    image: 'images/wonder11.jpeg',
    tags: ['Kotlin', 'MVVM', 'REST API', 'XML', 'Authentication'],
  },
  {
    title: 'MyDay Consulting - MyDay & MyGigs',
    description:
      'Currently working with MyDay Consulting since March 2025 on their existing mobile applications. Contributing to MyDay and MyGigs apps for both Android and iOS platforms, implementing new features, maintenance, bug fixes, and enhancements.',
    image: 'images/my_gigs_logo.png',
    tags: ['Kotlin', 'Java', 'Swift', 'Android', 'iOS', 'Active Development'],
  },
  {
    title: 'SnapMug - Cloud Music Streaming',
    description:
      'Cloud-based music streaming app with Firebase backend, featuring Google Sign-In, mini/full player, coin-based rewards system, and dedicated admin app for artists. Built with AndroidX Media3 and ExoPlayer for seamless playback.',
    image: 'images/SnapMugApp.webp',
    tags: ['Java', 'AndroidX Media3', 'ExoPlayer', 'Firebase', 'Google Sign-In', 'MVP Development'],
  },
  {
    title: 'Shopping List App',
    description:
      'Digital product showcase app built in 5-6 hours early in career. Features Material 3 design, Firebase Realtime Database & Storage, with complete CRUD operations for folders and items. Simple, modern interface for endless product listings.',
    image: 'images/shoppingCatlogapp_main.webp',
    tags: ['Kotlin', 'Material 3', 'Firebase', 'Realtime Database', 'CRUD Operations'],
  },
  {
    title: 'TheWalls - Wallpaper App',
    description:
      'Modern wallpaper application built for client with clean architecture. Features Material 3 design with dynamic theming, MVVM architecture, Firebase backend, and Google Play Billing for subscription management. Intuitive browsing experience for high-quality wallpapers.',
    image: 'images/the_walls.png',
    tags: ['Kotlin', 'MVVM', 'Material 3', 'Firebase', 'Google Play Billing', 'Dynamic Theme'],
  },
  {
    title: 'Status Saver App',
    description:
      'Personal learning project to master Android development fundamentals. Implements MVVM architecture, Material 3 design with dynamic theming, and file management capabilities. Available on Indus App Store, built to explore modern Android development practices.',
    image: 'images/status_saver.png',
    link: 'https://www.indusappstore.com/apps/productivity/status-saver/com.shekharsuthar234.statussaver',
    ariaLabel: 'Visit Status Saver App',
    tags: ['Kotlin', 'MVVM', 'Material 3', 'Dynamic Theme', 'File Management', 'Indus App Store'],
  },
];
