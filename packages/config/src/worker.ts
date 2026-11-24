import type { WorkerConfig } from '@flarewatch/shared';

export const workerConfig: WorkerConfig = {
  /**
   * Safe-default demo monitors, so a fresh fork/template deploy shows a
   * working status page without any secrets. Replace with your own services
   * before relying on FlareWatch for real monitoring.
   */
  monitors: [
    {
      id: 'lainrocksmainsite',
      name: 'lain.rocks home page',
      method: 'GET',
      target: 'https://lain.rocks/',
      expectedCodes: [200, 301, 302],
      timeout: 10000,
      link: false,
    },
    {
      id: 'webmail',
      name: 'lain.rocks nagae webmail',
      method: 'GET',
      target: 'https://webmail.lain.rocks/',
      expectedCodes: [200, 301, 302],
      timeout: 10000,
      link: false,
    },
    {
      id: 'oidcauthbackend',
      name: 'Authelia authentication',
      method: 'GET',
      target: 'https://auth.lain.rocks/',
      expectedCodes: [200, 301, 302, 502],
      timeout: 10000,
      link: false,
    },
    {
      id: 'amika',
      name: 'Amika Bot',
      method: 'GET',
      target: 'https://amika.services.lain.rocks/',
      expectedCodes: [200, 301, 302],
      timeout: 10000,
      link: false,
    },
    {
      id: 'boards',
      name: 'Lainboard Imageboard',
      method: 'GET',
      target: 'https://boards.lain.rocks/',
      expectedCodes: [200, 301, 302],
      timeout: 10000,
      link: false,
    },
    {
      id: 'forgejo',
      name: 'Forgejo Git',
      method: 'GET',
      target: 'https://forgejo.lain.rocks/',
      expectedCodes: [200, 301, 302],
      responseKeyword: 'Forgejo',
      timeout: 10000,
      link: false,
    },
    {
      id: 's3',
      name: 'Meiling S3 IPFS Gateway',
      method: 'GET',
      target: 'https://s3.lain.rocks/',
      expectedCodes: [200, 301, 302],
      timeout: 10000,
      link: false,
    },
  ],
};
