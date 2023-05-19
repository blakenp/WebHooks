import { NextApiRequest, NextApiResponse } from 'next';
import cors from '@/app/components/cors'; // Provide the path to your cors.ts file

export async function GET() {
    return new Response("This is a new API route");
}