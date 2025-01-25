'use client';
import Link from "next/link";
import { use } from "react";
import '../style.css';

export default function ArticlePage(
    {
        params,searchParams
    }: {
        params: Promise< { articleId:string } >,
        searchParams: Promise< { lang?:"en"|"ta"|"hi" } >
    }){
    const { articleId } = use(params);
    const { lang = "en" } = use(searchParams);
    let pgContent = `News Article ${articleId}`;
    switch (lang) {
        case 'en':
        default:
            pgContent = `News Article ${articleId}`;
            break;
        case 'ta':
            pgContent = `செய்திக் கட்டுரை ${articleId}`;
            break;
        case 'hi':
            pgContent = `समाचार आलेख ${articleId}`;
            break;
    }
    return (
        <>
        <nav>
            <Link href={`/articles/${articleId}?lang=en`}>English</Link>
            <Link href={`/articles/${articleId}?lang=ta`}>Tamil</Link>
            <Link href={`/articles/${articleId}?lang=hi`}>Hindi</Link>
        </nav>
        <h1>{pgContent}</h1>
        </>
    );
}