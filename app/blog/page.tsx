import { Metadata } from "next";
import styles from "../page.module.css";
import Link from "next/link";

export const metadata:Metadata ={
 title: {
    absolute: 'Blog'
 }
};
//const getRandom = (val:number) => Math.floor(Math.random() * val);
export default async function BlogPage() {
    await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(0);
        }, 2000);
    });
    // const rndm = getRandom(2);
    // if(rndm === 1) throw new Error('Error in Loading');
    return (
      <div className={styles.main}>
        <h1>Blog Listing</h1>
        <ol>
            {(()=>{
                const arr = [];
                for (let index = 0; index < 5; index++) {
                    let _link = `/blog/post${(index+1)}`;
                    let _title = `Post title ${(index+1)}`;
                    let setReplace:boolean = false;
                    if(index === 3) setReplace = true;
                    arr.push(
                        <li key={index.toString()}>
                            <Link 
                            href={_link} 
                            replace={setReplace}
                            >
                            {_title}
                            </Link>
                        </li>
                    )
                    
                }
                return arr;
            })()}
        </ol> 
      </div>
    );
  }