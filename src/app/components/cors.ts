import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers';

const allowedOrigins = ['https://api-request-two.vercel.app', 'http://localhost:3000']

function allowSpecificDomain(domains: string, allowedDomains: string[]): boolean {
  const domainArray = domains.split(',').map(domain => domain.trim());
  return domainArray.some(domain => allowedDomains.includes(domain));
}

function setCORSHeaders(response: NextResponse | Response) {
  const requestHeaders = new Headers(response.headers)

  const origin = requestHeaders.get('Origin') || requestHeaders.get('Referer');

  // requestHeaders.append('Origin', 'https://api-request-two.vercel.app')
  // requestHeaders.append('Origin', 'http://localhost:3000')

  // const origin = requestHeaders.get('Origin')
  //const original = origin?.split(',').map((v) => v.trimStart())

  // if (origin && allowSpecificDomain(origin, allowedOrigins)) {
  //   response.headers.set('Access-Control-Allow-Origin', origin);
  //   response.headers.set('Vary', 'Origin');
  // }

  if (origin && allowedOrigins.includes(origin)) {
    response.headers.set('Access-Control-Allow-Origin', origin);
    response.headers.set('Vary', 'Origin');
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