import { Card } from "@/components/card";

export default async function Logs() {
    await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(0);
        }, 5000);
    });
    return <Card>Logs</Card>;
}  