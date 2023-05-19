import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';
import cors from '@/app/components/cors'; // Provide the path to your cors.ts file
import { comments } from '@/app/data/comments';

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//     res.status(200).json(comments)
// }

export async function GET(request: NextRequest) {
    return NextResponse.json(comments);
}