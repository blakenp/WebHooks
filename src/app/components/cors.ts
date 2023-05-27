import { NextRequest, NextResponse } from 'next/server'

const allowedOrigins = ['https://api-request-two.vercel.app', 'http://localhost:3000']

function allowSpecificDomain(domains: string, allowedDomains: string[]): boolean {
  const domainArray = domains.split(',').map(domain => domain.trim());
  return domainArray.some(domain => allowedDomains.includes(domain));
}

function setCORSHeaders(response: NextResponse | Response, request: NextRequest) {
  const requestHeaders = new Headers(request.headers)
  const origin = requestHeaders.get('origin')

  if (origin && allowedOrigins.includes(origin)) {
    response.headers.set('Access-Control-Allow-Origin', origin);
  }

  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  response.headers.set('Access-Control-Max-Age', '86400');
}

export default setCORSHeaders
