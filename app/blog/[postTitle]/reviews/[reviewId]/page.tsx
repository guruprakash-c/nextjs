import { notFound, redirect } from "next/navigation";

export default async function ReviewId(
    {params}: { params: Promise<{postTitle:string, reviewId:string}> }
){
    const {postTitle, reviewId} = await params;
    if(parseInt(reviewId) > 20) notFound() 
    else if(parseInt(reviewId) > 10 && parseInt(reviewId) < 19) redirect('/blog');
    return <h2>Review {reviewId} of Post {postTitle}</h2>
}