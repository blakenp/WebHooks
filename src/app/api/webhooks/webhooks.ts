import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const handleWebhooks = async (req: NextApiRequest, res: NextApiResponse) => {

  res.setHeader('Access-Control-Allow-Origin', 'https://api-request-two.vercel.app/');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  if (req.method === 'POST') {
    try {
      // Make the API request to the webhook URL

      console.log('Webhook request sent');
      res.status(200).json({ message: 'Webhook request sent' });
    } catch (error) {
      console.error('Webhook request failed');
      console.error(error);
      res.status(500).json({ error: 'Webhook request failed' });
    }
  } else {
    // Return an error for unsupported HTTP methods
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};

export default handleWebhooks;
