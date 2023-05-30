import { NextRequest, NextResponse } from 'next/server';
import setCORSHeaders from '@/app/components/cors';
import { comments } from '@/app/data/comments';

type Params = {
  params: {
    commentId: string
  }
}

export async function GET(req: NextRequest, params: number) {
  const comment = comments.find(comment => comment.id === params)

  const response = NextResponse.json(comment)
  setCORSHeaders(response, req)
  return response
}

export async function DELETE(req: NextRequest, { params: { commentId } }: Params) {
  const commentIndex = comments.findIndex(comment => comment.id === parseInt(commentId))

  comments.splice(commentIndex, 1)

  const response = NextResponse.json({ message: 'Comment deleted'})
  setCORSHeaders(response, req)
  return response
}

export async function PUT(req: NextRequest, { params: { commentId } }: Params) {
    const body = await req.json();
    const commentIndex = comments.findIndex(comment => comment.id === parseInt(commentId))
    const updatedComment = {
        id: parseInt(commentId),
        text: body.comment
    }
    comments[commentIndex] = updatedComment

    const response = NextResponse.json({message: 'Comment updated'})
    setCORSHeaders(response, req)
    return response
}

export async function OPTIONS(req: NextRequest) {
  const response = new Response('')
  setCORSHeaders(response, req)
  return response
}
