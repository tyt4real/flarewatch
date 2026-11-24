import type { PageConfig } from '@flarewatch/shared';

export const pageConfig: PageConfig = {
  title: 'lain.rocks uptime monitor',
  links: [{ label: 'Home', link: 'https://lain.rocks/' }],
  group: {
    Websites: ['lainrocksmainsite', 'webmail', 'forgejo', 'boards'],
    APIs: ['oidcauthbackend', 's3', 'amika'],
  },
};
