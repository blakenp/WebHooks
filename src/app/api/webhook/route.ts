import { NextRequest, NextResponse } from 'next/server';
import { middleware } from '@/app/middleware';
import { comments } from '@/app/data/comments';

export async function GET(request: NextRequest) {
    // const middlewareResponse = middleware(request, response)
    // if (middlewareResponse) {
    //     return middlewareResponse
    // }
    return NextResponse.json(comments);
}

export async function POST(req: NextRequest) {

    const body = await req.json()

    //const comment = request.body?.comment
    const newComment = {
        id: Date.now(),
        text: body.comment
    }
    comments.push(newComment)
    return new Response('OK')
}