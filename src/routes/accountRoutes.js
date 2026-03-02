const express = require('express');
const router = express.Router();
const mockDataService = require('../services/mockDataService');

/**
 * GET /api/accounts
 * Get all accounts
 */
router.get('/', (req, res) => {
  try {
    const accounts = mockDataService.getAllAccounts();
    
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
 * GET /api/accounts/:id
 * Get a specific account by ID
 */
router.get('/:id', (req, res) => {
  try {
    const account = mockDataService.getAccountById(req.params.id);
    
    if (!account) {
      return res.status(404).json({
        success: false,
        error: 'Account not found'
      });
    }
    
    res.json({
      success: true,
      data: account
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
