'use client';

import { usePathname } from "next/navigation"

export default function NotFound(){
    const pathName = usePathname();
    const postTitle = pathName.split('/')[2] 
    const reviewId = pathName.split('/')[4]
    return(
        <div>
            <h1>Review {reviewId} not Found for {postTitle}</h1>
            <h5>
                <a href="/blog">Back to Home</a>
            </h5>
        </div>
    )
}