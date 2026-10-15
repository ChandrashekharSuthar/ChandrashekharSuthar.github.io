export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  iconType: 'fab' | 'fas';
  ariaLabel: string;
}

export const socialsData: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/ChandrashekharSuthar',
    icon: 'fa-github',
    iconType: 'fab',
    ariaLabel: 'GitHub profile',
  },
  {
    name: 'X (Twitter)',
    url: 'https://x.com/sorrychandra',
    icon: 'fa-x-twitter',
    iconType: 'fab',
    ariaLabel: 'X (Twitter) profile',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/chandrashekharsuthar',
    icon: 'fa-linkedin',
    iconType: 'fab',
    ariaLabel: 'LinkedIn profile',
  },
  {
    name: 'Email',
    url: 'mailto:chandrashekharsuthar.work@gmail.com',
    icon: 'fa-envelope',
    iconType: 'fas',
    ariaLabel: 'Email contact',
  },
];
