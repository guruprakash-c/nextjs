import { Card } from "@/components/card";
import Link from "next/link";

export default function ArchivedNotifications() {
    return (
        <Card>
            <h5>Archived Notifications</h5>
            <Link href="/dashboard/">Default</Link>
        </Card>
    );
}  