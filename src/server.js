const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv');
const { specs, swaggerUi } = require('./docs/swagger');
const sequelize = require('./config/db');
const errorHandler = require('./middleware/errors');
const {adminRoutes, categoryRoutes, productRoutes, authRoutes, orderRoutes} = require('./routes');


//config
dotenv.config();
//express app
const app = express();

//middleware
app.use(express.json());
app.use(cors());

app.use(errorHandler); //error handler middleware
//swagger docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, {explorer: true}));

// routes 
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api', productRoutes); 
app.use('/api', categoryRoutes);
app.use('/api', orderRoutes);


// Connect to the database and start the server
const startServer = async () => {
    try {
      await sequelize.authenticate();
      console.log('Database connected successfully.');
  
      await sequelize.sync();
      console.log('Models synchronized with the database.');
  
      const PORT = process.env.PORT || 5000;
      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
    } catch (error) {
      console.error('Error connecting to the database:', error);
    }
};

startServer();
