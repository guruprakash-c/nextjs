import { Card } from "@/components/card";
import Link from "next/link";

export default async function Notifications() {
    await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(0);
        }, 1000);
    });
    return (
        <Card>
            <h5>Notifications</h5>
            <Link href="/dashboard/archives">Archives</Link>
        </Card>
    );
}  