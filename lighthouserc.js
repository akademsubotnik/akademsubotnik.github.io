//for lighthouseci github action
module.exports = {
  ci: {
    collect: {
      staticDistDir: './',
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
