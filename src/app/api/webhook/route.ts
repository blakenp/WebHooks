import { NextRequest, NextResponse } from 'next/server';
import { middleware } from '@/app/middleware';
import { comments } from '@/app/data/comments';

interface Comment {
    comment: string;
}

export async function GET(request: NextRequest, response: NextResponse) {
    const middlewareResponse = middleware(request, response)
    if (middlewareResponse) {
        return middlewareResponse
    }
    return NextResponse.json(comments);
}

export async function POST(request: NextRequest, response: NextResponse) {
    const middlewareResponse = middleware(request, response)
    if (middlewareResponse) {
        return middlewareResponse
    }

    const { comment } = await request.json()

    //const comment = request.body?.comment
    const newComment = {
        id: Date.now(),
        text: comment
    }
    comments.push(newComment)
    return NextResponse.json(newComment);
}