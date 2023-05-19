import { NextApiRequest, NextApiResponse } from 'next';
import cors from '@/app/components/cors'; // Provide the path to your cors.ts file

const handleWebhooks = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Make the API request to the webhook URL

    console.log('Webhook request sent');
    res.status(200).json({ message: 'Webhook request sent' });
  } catch (error) {
    console.error('Webhook request failed');
    console.error(error);
    res.status(500).json({ error: 'Webhook request failed' });
  }
};

export default cors(handleWebhooks);
