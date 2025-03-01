import Link from "next/link";

export default function Folder1() {
    return (
        <>
            <h1>Folder1 Page</h1>
            <Link href={"/f1/f2"}>Folder 2</Link>
        </>
    );
  }
  