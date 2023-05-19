import { NextRequest, NextResponse } from 'next/server';
import { middleware } from '@/app/middleware';
import { comments } from '@/app/data/comments';

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//     res.status(200).json(comments)
// }

interface Comment {
    comment: string;
}

export async function GET(request: NextRequest, response: NextResponse) {
    middleware(request, response)
    return NextResponse.json(comments);
}

export async function POST(request: NextRequest, response: NextResponse) {
    middleware(request, response)

    const { comment } = await request.json()

    //const comment = request.body?.comment
    const newComment = {
        id: Date.now(),
        text: comment
    }
    comments.push(newComment)
    return NextResponse.json(newComment);
}
