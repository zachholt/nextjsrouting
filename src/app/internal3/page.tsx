import Link from "next/link";

export default function InternalThree() {
    const randomNumber = Math.floor(Math.random() * 1000);

    return <Link href={`/dynamic/${randomNumber}`}>INTERNAL PAGE THREE! CLICK ME TO GO DYNAMIC {randomNumber}!</Link>;
}