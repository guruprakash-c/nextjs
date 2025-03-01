import { comments } from "../data";

export async function GET(_request:Request, {params}: { params: Promise<{ id:string }> }){
    const { id } = await params;
    const comment:any = comments.find((comment:any) => comment.id === parseInt(id));
    let response:Response;
    const errResp:any = `${id} Not Found`;
    if(comment) response = Response.json(comment);
    else response = new Response(errResp,{
        headers: {
            'Content-Type': 'application/json'
        },
        status: 404,
        statusText: ``
    });
    return response;
}
export async function PATCH(request:Request, {params}: { params: Promise<{ id:string }> }){
    const { id } = await params;
    const body = await request.json();
    const { comment } = body;
    const index:number = comments.findIndex((comment:any) => comment.id === parseInt(id));
    comments[index].comment = comment;
    ;
    return Response.json(comments[index]);
}
export async function DELETE(request:Request, {params}: { params: Promise<{ id:string }> }){
    const { id } = await params;
    const index:number = comments.findIndex((comment:any) => comment.id === parseInt(id));
    const deletedComment = comments[index];
    comments.splice(index,1);
    return Response.json(comments);
}