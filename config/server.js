module.exports = ({ env }) => ({
  host: env('HOST', '192.168.43.169'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '0df2076b1312ddfe03d18478ff202cc1'),
    },
  },
});
