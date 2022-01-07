module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0175963588216d9b214b95727ce40844'),
  },
});
