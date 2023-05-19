import { NextRequest, NextResponse } from 'next/server';
import { comments } from '@/app/data/comments';

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//     res.status(200).json(comments)
// }

export async function GET() {
    return NextResponse.json(comments);
}

export async function POST(request: Request) {
    const comment = request.body?.comment
    const newComment = {
        id: Date.now(),
        text: comment
    }
    comments.push(newComment)
    return NextResponse.json(newComment);
}