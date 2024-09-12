const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv');
const { specs, swaggerUi } = require('./docs/swagger');
const sequelize = require('./config/db');

dotenv.config();
const app = express();


app.use(express.json());
app.use(cors());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

const authRoutes = require('./routes/auth');

// routes
app.use('/api/auth', authRoutes);

// Connect to the database and start the server
const startServer = async () => {
    try {
      // Connect to MySQL
      await sequelize.authenticate();
      console.log('Database connected successfully.');
  
      // Sync models (this will create the tables if they don't exist)
      await sequelize.sync();
      console.log('Models synchronized with the database.');
  
      // Start server
      const PORT = process.env.PORT || 5000;
      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
    } catch (error) {
      console.error('Error connecting to the database:', error);
    }
};

// Start the server
startServer();
