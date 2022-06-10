const magicAPILink = 'https://magic-api-production.up.railway.app/api/catabot';

export const environment = {
  production: true,
  root: '/CataBot',
  api: {
    stats: `${magicAPILink}/stats`,
    commands: `${magicAPILink}/commands`,
  },
};
