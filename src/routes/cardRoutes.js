const express = require('express');
const router = express.Router();
const mockDataService = require('../services/mockDataService');

/**
 * GET /api/cards
 * Get all cards
 */
router.get('/', (req, res) => {
  try {
    const cards = mockDataService.getAllCards();
    
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

/**
 * GET /api/cards/:id
 * Get a specific card by ID
 */
router.get('/:id', (req, res) => {
  try {
    const card = mockDataService.getCardById(req.params.id);
    
    if (!card) {
      return res.status(404).json({
        success: false,
        error: 'Card not found'
      });
    }
    
    res.json({
      success: true,
      data: card
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
