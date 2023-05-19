import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

const cors = (handler: NextApiHandler): NextApiHandler => (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    // Respond to preflight requests immediately
    res.status(200).end();
  } else if (req.method === 'POST') {
    // Handle POST request logic here

    console.log('Webhook request received');
    res.status(200).json({ message: 'Webhook request received' });
  } else {
    // Return an error for unsupported HTTP methods
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};

export default cors;

