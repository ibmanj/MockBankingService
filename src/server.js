const express = require('express');
const cors = require('cors');
const customerRoutes = require('./routes/customerRoutes');
const accountRoutes = require('./routes/accountRoutes');
const cardRoutes = require('./routes/cardRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    service: 'Mock Core Banking Service'
  });
});

// API Routes
app.use('/api/customers', customerRoutes);
app.use('/api/accounts', accountRoutes);
app.use('/api/cards', cardRoutes);

// Root endpoint with API documentation
app.get('/', (req, res) => {
  res.json({
    service: 'Mock Core Banking Service',
    version: '1.0.0',
    endpoints: {
      health: 'GET /health',
      customers: {
        getAll: 'GET /api/customers',
        getById: 'GET /api/customers/:id',
        getAccounts: 'GET /api/customers/:id/accounts',
        getCards: 'GET /api/customers/:id/cards',
        search: 'GET /api/customers?firstName=John&lastName=Doe'
      },
      accounts: {
        getAll: 'GET /api/accounts',
        getById: 'GET /api/accounts/:id'
      },
      cards: {
        getAll: 'GET /api/cards',
        getById: 'GET /api/cards/:id'
      }
    },
    documentation: 'See README.md for detailed API documentation'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint not found',
    path: req.path
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    success: false,
    error: 'Internal server error',
    message: err.message
  });
});

// Start server
app.listen(PORT, () => {
  console.log('='.repeat(50));
  console.log('Mock Core Banking Service');
  console.log('='.repeat(50));
  console.log(`Server running on port ${PORT}`);
  console.log(`API Base URL: http://localhost:${PORT}`);
  console.log(`Health Check: http://localhost:${PORT}/health`);
  console.log(`API Documentation: http://localhost:${PORT}`);
  console.log('='.repeat(50));
});

module.exports = app;

// Made with Bob
