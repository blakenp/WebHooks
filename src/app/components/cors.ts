import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

const cors = (handler: NextApiHandler): NextApiHandler => (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://api-request-two.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
  } else {
    return handler(req, res);
  }
};

export default cors;

