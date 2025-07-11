module.exports = ({ env }) => ({
  app: {
    keys: env.array('APP_KEYS', ['abc123','def456','ghi789','jkl012']),
  },
});