import { comments } from "./data";

export async function GET(){
    return Response.json(comments);
}

export async function POST(request: Request){
    const comment = await request.json();
    let newId = comments.length + 1;
    const newComment = {
        id: newId,
        comment: String(comment.comment + ' #' + newId)
    };
    comments.push(newComment);
    return new Response(JSON.stringify(newComment), {
        headers: {
            'Content-Type': 'application/json'
        },
        status: 201
    });
}