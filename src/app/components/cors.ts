import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers';

const allowedOrigins = ['https://api-request-two.vercel.app', 'http://localhost:3000']

function allowSpecificDomain(domains: string, allowedDomains: string[]): boolean {
  const domainArray = domains.split(',').map(domain => domain.trim());
  return domainArray.some(domain => allowedDomains.includes(domain));
}

function setCORSHeaders(response: NextResponse | Response) {
  const requestHeaders = new Headers(response.headers)

  requestHeaders.append('Origin', 'https://api-request-two.vercel.app')
  requestHeaders.append('Origin', 'http://localhost:3000')

  allowedOrigins.forEach(origin => {
    requestHeaders.append('Access-Control-Allow-Origin', origin);
  });

  const origin = requestHeaders.get('Origin')
  //const original = origin?.split(',').map((v) => v.trimStart())

  if (origin && allowSpecificDomain(origin, allowedOrigins)) {
    response.headers.set('Access-Control-Allow-Origin', origin);
  } else {
    // If the requested origin is not allowed, remove the header
    response.headers.delete('Access-Control-Allow-Origin');
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