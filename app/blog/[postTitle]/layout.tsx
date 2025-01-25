export default function BlogLayout({children,}: {children: Readonly<React.ReactNode>;}){
    return (
        <>
        {children}
        <h3>Fetured Blog Posts</h3>
        </>
    )
}