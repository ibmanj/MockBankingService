const express = require('express');
const router = express.Router();
const mockDataService = require('../services/mockDataService');

/**
 * GET /api/customers
 * Get all customers with their accounts and cards
 * Query params: firstName, lastName (optional filters)
 */
router.get('/', (req, res) => {
  try {
    const { firstName, lastName } = req.query;
    
    let customers;
    if (firstName || lastName) {
      customers = mockDataService.getCustomersByName(firstName, lastName);
    } else {
      customers = mockDataService.getAllCustomers();
    }
    
    res.json({
      success: true,
      count: customers.length,
      data: customers
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal server error',
      message: error.message
    });
  }
});

/**
 * GET /api/customers/:id
 * Get a specific customer by ID
 */
router.get('/:id', (req, res) => {
  try {
    const customer = mockDataService.getCustomerById(req.params.id);
    
    if (!customer) {
      return res.status(404).json({
        success: false,
        error: 'Customer not found'
      });
    }
    
    res.json({
      success: true,
      data: customer
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal server error',
      message: error.message
    });
  }
});

/**
 * GET /api/customers/:id/accounts
 * Get all accounts for a specific customer
 */
router.get('/:id/accounts', (req, res) => {
  try {
    const accounts = mockDataService.getAccountsByCustomerId(req.params.id);
    
    res.json({
      success: true,
      count: accounts.length,
      data: accounts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal server error',
      message: error.message
    });
  }
});

/**
 * GET /api/customers/:id/cards
 * Get all cards for a specific customer
 */
router.get('/:id/cards', (req, res) => {
  try {
    const cards = mockDataService.getCardsByCustomerId(req.params.id);
    
    res.json({
      success: true,
      count: cards.length,
      data: cards
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal server error',
      message: error.message
    });
  }
});

module.exports = router;

// Made with Bob
