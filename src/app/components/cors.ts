import { NextResponse } from 'next/server';

function setCORSHeaders(response: NextResponse | Response) {
  const allowedOrigins = ['http://localhost:3000', 'https://api-request-two.vercel.app'];

  const origin = response.headers.get('origin') || '';
  if (allowedOrigins.includes(origin)) {
    response.headers.set('access-control-allow-origin', origin);
    response.headers.set(
      'access-control-allow-methods',
      'GET, POST, PUT, DELETE, OPTIONS'
    );
    response.headers.set(
      'access-control-allow-headers',
      'Content-Type, Authorization'
    );
  }
}

export default setCORSHeaders;