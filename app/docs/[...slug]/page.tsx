export default async function DocsPages(
    {params} : { params: Promise<{ slug: string[] }> }
){
    const { slug } = await params 
    if(slug?.length === 3){
        return <h1>Viewing docs for feature {slug[0]} and Concept {slug[1]} and Example {slug[2]}</h1>
    }
    else if(slug?.length === 2){
        return <h1>Viewing docs for feature {slug[0]} and Concept {slug[1]}</h1>
    }else if(slug?.length === 1){
        return <h1>Viewing docs for feature {slug[0]} </h1>   
    }
    return <h1>Docs Home page</h1>
}