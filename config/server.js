module.exports = ({ env }) => ({
  app: {
    keys: env.array('abc123','def456','ghi789','jkl012'),
  },
});