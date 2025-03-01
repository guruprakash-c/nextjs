import { Card } from "@/components/card";
import Link from "next/link";

export default function LoginSlot() {
    return (
        <Card>
            Please <Link href={"/subscribe"}> login </Link> to continue...
        </Card>
    );
}  