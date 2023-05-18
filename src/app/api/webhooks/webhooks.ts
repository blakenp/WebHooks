// /api/webhooks/webhooks.ts

import { NextApiRequest, NextApiResponse } from 'next';

export default function handleWebhooks(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Extract relevant data from the webhook payload
    const { event, data } = req.body as { event: string; data: any };

    // Process the webhook event based on its type
    switch (event) {
      case 'user.created':
        // Handle user created event
        const userId = data.userId as string;
        // Perform actions such as updating the database or sending notifications
        console.log(`User created with ID: ${userId}`);
        break;
      case 'order.completed':
        // Handle order completed event
        const orderId = data.orderId as string;
        // Perform actions such as updating the order status or sending email confirmation
        console.log(`Order completed with ID: ${orderId}`);
        break;
      default:
        // Unknown event type
        console.log(`Unknown event: ${event}`);
        break;
    }

    // Respond with a success message
    res.status(200).json({ message: 'Webhook received and processed successfully' });
  } else {
    // Return an error for unsupported HTTP methods
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
