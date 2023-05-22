import { NextResponse } from 'next/server';

function setCORSHeaders(response: NextResponse | Response) {
  const allowedOrigins = ['https://api-request-two.vercel.app', 'http://localhost:3000'];

  if (!response.headers.get('Access-Control-Allow-Origin')) {
    const origin = response.headers.get('Origin') as string
    if (allowedOrigins.includes(origin)) {
      response.headers.set('Access-Control-Allow-Origin', origin);
      response.headers.set('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, HEAD, OPTIONS');
      response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      response.headers.set('Access-Control-Allow-Credentials', 'true');
    }
  }
}

export default setCORSHeaders;