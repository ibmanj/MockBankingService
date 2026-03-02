# Mock Core Banking Service

A REST API service that provides mock core banking data including customers, accounts, and cards. This service is designed to be deployed and accessible through the internet.

## Features

- RESTful API endpoints
- Mock data for customers, accounts, and cards
- CORS enabled
- JSON responses
- Error handling
- Ready for cloud deployment (Vercel, Render, Railway, Docker)

## Quick Start

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

The server will start on `http://localhost:3000`

## Deployment Options

### Option 1: Deploy to Vercel (Recommended - Free & Easy)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Your API will be live at: `https://your-project.vercel.app`

**Vercel Features:**
- Free tier available
- Automatic HTTPS
- Global CDN
- Zero configuration
- Instant deployments

### Option 2: Deploy to Render (Free Tier Available)

1. Push your code to GitHub
2. Go to [render.com](https://render.com)
3. Create a new Web Service
4. Connect your GitHub repository
5. Render will automatically detect the `render.yaml` configuration
6. Your API will be live at: `https://your-service.onrender.com`

**Render Features:**
- Free tier with 750 hours/month
- Automatic HTTPS
- Auto-deploy from Git
- Custom domains

### Option 3: Deploy to Railway

1. Push your code to GitHub
2. Go to [railway.app](https://railway.app)
3. Create a new project from GitHub repo
4. Railway will auto-detect Node.js and deploy
5. Your API will be live at: `https://your-service.railway.app`

**Railway Features:**
- $5 free credit monthly
- Automatic HTTPS
- Easy environment variables
- Database support

### Option 4: Deploy with Docker

Build and run locally:
```bash
docker build -t mock-banking-api .
docker run -p 3000:3000 mock-banking-api
```

Deploy to any cloud provider that supports Docker:
- AWS ECS/Fargate
- Google Cloud Run
- Azure Container Instances
- DigitalOcean App Platform

### Option 5: Deploy to Heroku

```bash
# Install Heroku CLI
npm install -g heroku

# Login to Heroku
heroku login

# Create app
heroku create your-app-name

# Deploy
git push heroku main

# Open app
heroku open
```

## API Endpoints

### Health Check
- **GET** `/health` - Check service health

### Customers

- **GET** `/api/customers` - Get all customers with their accounts and cards
  - Query params: `firstName`, `lastName` (optional filters)
  - Example: `/api/customers?firstName=John`

- **GET** `/api/customers/:id` - Get a specific customer by ID

- **GET** `/api/customers/:id/accounts` - Get all accounts for a customer

- **GET** `/api/customers/:id/cards` - Get all cards for a customer

### Accounts

- **GET** `/api/accounts` - Get all accounts

- **GET** `/api/accounts/:id` - Get a specific account by ID

### Cards

- **GET** `/api/cards` - Get all cards

- **GET** `/api/cards/:id` - Get a specific card by ID

## Response Format

All successful responses follow this format:
```json
{
  "success": true,
  "count": 3,
  "data": [...]
}
```

Error responses:
```json
{
  "success": false,
  "error": "Error message"
}
```

## Sample Data

The service includes 3 mock customers:
1. **John Doe** - 2 accounts (Savings, Checking), 2 cards (Debit, Credit)
2. **Jane Smith** - 1 account (Savings), 1 card (Debit)
3. **Ahmed Al-Mansoori** - 2 accounts (Checking, Fixed Deposit), 2 cards (Debit, Credit)

## Data Models

### Customer
```json
{
  "id": "uuid",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "phone": "string",
  "dateOfBirth": "string",
  "address": {
    "street": "string",
    "city": "string",
    "country": "string",
    "postalCode": "string"
  },
  "accounts": [],
  "cards": []
}
```

### Account
```json
{
  "id": "uuid",
  "customerId": "uuid",
  "accountNumber": "string",
  "accountType": "SAVINGS|CHECKING|FIXED_DEPOSIT",
  "balance": "number",
  "currency": "string",
  "status": "ACTIVE|INACTIVE|CLOSED",
  "openDate": "string"
}
```

### Card
```json
{
  "id": "uuid",
  "customerId": "uuid",
  "accountId": "uuid",
  "cardNumber": "string",
  "cardType": "DEBIT|CREDIT|PREPAID",
  "cardholderName": "string",
  "expiryDate": "string",
  "cvv": "string",
  "status": "ACTIVE|BLOCKED|EXPIRED",
  "issueDate": "string"
}
```

## Example Usage

Once deployed, replace `YOUR_API_URL` with your actual deployment URL:

### Get all customers
```bash
curl https://YOUR_API_URL/api/customers
```

### Get customer by ID
```bash
curl https://YOUR_API_URL/api/customers/{customer-id}
```

### Search customers by name
```bash
curl https://YOUR_API_URL/api/customers?firstName=John
```

### Get customer's accounts
```bash
curl https://YOUR_API_URL/api/customers/{customer-id}/accounts
```

### Get customer's cards
```bash
curl https://YOUR_API_URL/api/customers/{customer-id}/cards
```

### Get all accounts
```bash
curl https://YOUR_API_URL/api/accounts
```

### Get all cards
```bash
curl https://YOUR_API_URL/api/cards
```

## Testing the API

You can test the API using:
- **cURL** (command line)
- **Postman** (GUI tool)
- **Thunder Client** (VS Code extension)
- **Browser** (for GET requests)

## Environment Variables

Create a `.env` file based on `.env.example`:

```env
PORT=3000
NODE_ENV=production
CORS_ORIGIN=*
```

## Technology Stack

- Node.js
- Express.js
- UUID for unique identifiers
- CORS for cross-origin requests

## Project Structure

```
mock-core-banking-service/
├── src/
│   ├── models/
│   │   ├── Customer.js
│   │   ├── Account.js
│   │   └── Card.js
│   ├── routes/
│   │   ├── customerRoutes.js
│   │   ├── accountRoutes.js
│   │   └── cardRoutes.js
│   ├── services/
│   │   └── mockDataService.js
│   └── server.js
├── .dockerignore
├── .env.example
├── .gitignore
├── Dockerfile
├── package.json
├── render.yaml
├── vercel.json
└── README.md
```

## CORS Configuration

The API is configured to accept requests from any origin (`*`). For production use, you should configure specific allowed origins in the `.env` file:

```env
CORS_ORIGIN=https://yourdomain.com,https://anotherdomain.com
```

## Security Notes

This is a **mock service** for development and testing purposes. For production use:
- Implement authentication (JWT, OAuth)
- Add rate limiting
- Implement input validation
- Add request logging
- Use environment-specific configurations
- Implement proper error handling
- Add API versioning

## Support

For issues or questions, please create an issue in the repository.

## License

MIT