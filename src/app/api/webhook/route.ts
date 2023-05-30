import { NextRequest, NextResponse } from 'next/server';
import setCORSHeaders from '@/app/components/cors';
import { comments } from '@/app/data/comments';

export async function GET(req: NextRequest) {
    const response = NextResponse.json(comments)
    setCORSHeaders(response, req)
    return response
}

export async function POST(req: NextRequest) {
    const body = await req.json()
    const newComment = {
        id: Date.now(),
        text: body.comment
    }
    comments.push(newComment)
    const response = NextResponse.json({message: "Comment submitted"})
    setCORSHeaders(response, req)
    return response
}

export async function OPTIONS(req: NextRequest) {
    const response = new Response('')
    setCORSHeaders(response, req)
    return response
}