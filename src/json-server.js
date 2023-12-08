const cors = require('cors');

module.exports = cors({
  origin: '*', // Allow any origin (you might want to restrict this in production)
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
});