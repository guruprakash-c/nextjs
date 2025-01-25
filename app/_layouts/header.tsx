import Link from "next/link"

export const Header = () =>{
return (<header style={{
    backgroundColor: 'ivory',
    color: 'black',
    padding: '1rem'
  }}>
    <h1><Link href="/">NextJs App</Link></h1>
    <nav>
        <Link href="/about">About</Link>&nbsp;|&nbsp;
        <Link href="/blog">Blog</Link>&nbsp;|&nbsp;
        <Link href="/articles">News</Link>&nbsp;
    </nav>
  </header>)
}