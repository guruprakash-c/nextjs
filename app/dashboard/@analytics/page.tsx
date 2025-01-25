import { Card } from "@/components/card";

export default async function Analytics() {
    await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(0);
        }, 2000);
    });
    return <Card>Analytics</Card>;
}  