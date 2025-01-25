import { notFound } from "next/navigation";

export default async function ReviewId(
    {params}: { params: Promise<{postTitle:string, reviewId:string}> }
){
    const {postTitle, reviewId} = await params;
    if(parseInt(reviewId) > 10) notFound()
    return <h2>Review {reviewId} of Post {postTitle}</h2>
}