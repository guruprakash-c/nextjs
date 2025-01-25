import { Metadata } from "next";
import { Counter } from "./counter";

export const metadata: Metadata = {
 title: 'Counter App',
 description: 'Counter App',
 icons: { icon: '/file.svg' }
};
export default function CounterPage() {
  return <Counter/>;
}