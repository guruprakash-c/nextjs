import { Card } from "@/components/card";

export default async function DefaultLogs() {
    await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(0);
        }, 5000);
    });
    return <Card>Default Logs</Card>;
}  