"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const route = useRouter();
  const handleCounter = () =>{
    setCount(count + 1);
    if(count > 9){
      window.alert('Unable service...');
      route.replace('/');
    }
  };
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={ handleCounter }>Increase</button>
    </>
  );
};