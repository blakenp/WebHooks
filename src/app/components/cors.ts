import { NextResponse } from 'next/server'

const allowedOrigins = ['https://api-request-two.vercel.app', 'http://localhost:3000', 'https://example.com']

function setCORSHeaders(response: NextResponse | Response) {
  const origin = response.headers.get('Origin')

  if (origin && allowedOrigins.includes(origin)) {
    response.headers.set('Access-Control-Allow-Origin', origin);
  }

  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  response.headers.set('Access-Control-Max-Age', '86400');
}

export default setCORSHeaders



// import { NextResponse } from 'next/server'

// function setCORSHeaders(response: NextResponse | Response) {
//   response.headers.set('Access-Control-Allow-Origin', 'https://api-request-two.vercel.app');
//   response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//   response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   response.headers.set('Access-Control-Max-Age', '86400');
// }

// export default setCORSHeaders