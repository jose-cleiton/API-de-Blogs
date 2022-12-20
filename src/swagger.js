const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger.json';
const endpointsFiles = [
  'src/routes/categoryRoute.js',
  'src/routes/loginRoute.js',
  'src/routes/postRoute.js',
  'src/routes/userRoute.js',
];

swaggerAutogen(outputFile, endpointsFiles);
