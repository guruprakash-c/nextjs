import styles from "../../page.module.css";
import type { Metadata } from "next"

type Props = {
  params: Promise<{postTitle: string}>
};
export const generateMetadata = async({params,}: Props): Promise<Metadata> => {
  const post_title = (await params).postTitle;
  return {
    title: post_title
  }
};
export default async function PostPage({ params }: Props) { 
    const postTitle = (await params).postTitle;
    return (
      <div className={styles.main}>
        <a href="/blog">&laquo; Back</a>
        <h1>Blog Post title {postTitle}</h1>
        <article>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio sed dignissimos itaque reiciendis doloribus sapiente molestiae cupiditate cum tempore tempora eos commodi, voluptas, error culpa! Aperiam reprehenderit sed aspernatur quas!
        </article>
      </div>
    );
  }